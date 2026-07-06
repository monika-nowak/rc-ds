import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import { cn } from '../../lib/cn';
import styles from './RCLoader.module.css';

/**
 * RCLoader — brand loading animation.
 *
 * A fixed 3×3 grid (Figma PoC: stage 152px, cell 48px, step 46px, accent 16px).
 * The framed R and C tiles hop between every configuration where they stay adjacent
 * (orthogonally or diagonally), fading out and reappearing — never sliding. The accent
 * square moves to a free cell each time (cycling color), and the surrounding digits roll
 * at slightly random moments. Every element shares one motion: a soft zoom + fade.
 *
 * - No external dependencies; one shared zoom/fade motion (CSS keyframe + transition).
 * - Respects `prefers-reduced-motion` (renders a static frame, no animation).
 * - Exposes `role="status"` + `aria-live` so screen readers announce the loading state.
 * - `dark` flips foreground (digits / letters / borders) to white for dark surfaces.
 *   Tile backgrounds are always transparent so it sits on any surface.
 */
const BASE = 152;
const CELL = 48;
const STEP = 46;
const PAD = 6;
const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)';
const MOTION = 240;
const REST_SCALE = 0.82;

const ADJACENT_PAIRS: [number, number][] = (() => {
  const pairs: [number, number][] = [];
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const sameOrAdjacentRow = Math.abs(Math.floor(r / 3) - Math.floor(c / 3)) <= 1;
      const cIsOneColRight = (c % 3) - (r % 3) === 1;
      if (sameOrAdjacentRow && cIsOneColRight) pairs.push([r, c]);
    }
  }
  return pairs;
})();

const INITIAL_DIGITS = ['4', '', '6', '0', '5', '3', '2', '1', '9'];

const ACCENT_COLORS = [
  'var(--rc-support-info)',
  'var(--rc-support-error)',
  'var(--rc-purple-500)',
];

interface Config {
  r: number;
  c: number;
  a: number;
}

const INITIAL_CONFIG: Config = { r: 4, c: 8, a: 1 };

const rowOf = (i: number) => Math.floor(i / 3);
const colOf = (i: number) => i % 3;
const randInt = (n: number) => Math.floor(Math.random() * n);

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

export interface RCLoaderProps {
  /** Total width/height in px. The whole stage scales proportionally. Default: 152. */
  size?: number;
  /** Accessible label announced by screen readers. Default: "Loading". */
  label?: string;
  /** Render the label as visible text below the animation. Default: false. */
  showLabel?: boolean;
  /** Render foreground (digits / letters / borders) in white for dark surfaces. Default: false. */
  dark?: boolean;
  /** Whether the loader animates. Default: true. */
  animate?: boolean;
  /** Average delay between digit refreshes in ms. Default: 220. */
  interval?: number;
  /** How long R/C stay in a configuration before fading to the next, in ms. Default: 1000. */
  moveInterval?: number;
  /** Render centered inside a full-area overlay. Default: false. */
  fullscreen?: boolean;
  className?: string;
  style?: CSSProperties;
}

export function RCLoader({
  size = BASE,
  label = 'Loading',
  showLabel = false,
  dark = false,
  animate = true,
  interval = 220,
  moveInterval = 1000,
  fullscreen = false,
  className,
  style,
}: RCLoaderProps) {
  const scale = size / BASE;
  const reduce = prefersReducedMotion();
  const fg = dark ? 'var(--rc-text-on-color)' : 'var(--rc-text-primary)';

  const [config, setConfig] = useState<Config>(INITIAL_CONFIG);
  const [rcVisible, setRcVisible] = useState(true);
  const [accentColor, setAccentColor] = useState(0);
  const [digits, setDigits] = useState<string[]>(INITIAL_DIGITS);
  const [versions, setVersions] = useState<number[]>(() => Array(9).fill(0));

  const configRef = useRef(config);
  configRef.current = config;
  const digitsRef = useRef(digits);
  digitsRef.current = digits;
  const versionsRef = useRef(versions);
  versionsRef.current = versions;

  useEffect(() => {
    if (reduce || !animate) {
      setConfig(INITIAL_CONFIG);
      setRcVisible(true);
      setAccentColor(0);
      return;
    }
    const timers: number[] = [];
    let curPair = -1;
    const loop = () => {
      setRcVisible(false);
      timers.push(
        window.setTimeout(() => {
          let next = randInt(ADJACENT_PAIRS.length);
          if (ADJACENT_PAIRS.length > 1) {
            while (next === curPair) next = randInt(ADJACENT_PAIRS.length);
          }
          curPair = next;
          const [r, c] = ADJACENT_PAIRS[next];
          const free = [0, 1, 2, 3, 4, 5, 6, 7, 8].filter((x) => x !== r && x !== c);
          const a = free[randInt(free.length)];
          setConfig({ r, c, a });
          setAccentColor((prev) => (prev + 1) % ACCENT_COLORS.length);
          setRcVisible(true);
          timers.push(window.setTimeout(loop, moveInterval));
        }, MOTION),
      );
    };
    timers.push(window.setTimeout(loop, moveInterval));
    return () => timers.forEach(clearTimeout);
  }, [reduce, animate, moveInterval]);

  useEffect(() => {
    if (!animate || reduce) {
      setDigits(INITIAL_DIGITS);
      return;
    }
    let timer: number;
    const schedule = () => {
      const delay = interval * (0.65 + Math.random() * 0.7);
      timer = window.setTimeout(() => {
        const { r, c, a } = configRef.current;
        const cell = randInt(9);
        if (cell !== r && cell !== c && cell !== a) {
          const nextDigits = digitsRef.current.slice();
          nextDigits[cell] = String(randInt(10));
          const nextVersions = versionsRef.current.slice();
          nextVersions[cell] += 1;
          setDigits(nextDigits);
          setVersions(nextVersions);
        }
        schedule();
      }, delay);
    };
    schedule();
    return () => window.clearTimeout(timer);
  }, [animate, reduce, interval]);

  const { r, c, a } = config;

  const cellBox = (i: number): CSSProperties => ({
    left: PAD + colOf(i) * STEP,
    top: PAD + rowOf(i) * STEP,
    width: CELL,
    height: CELL,
  });

  const groupMotion: CSSProperties = reduce
    ? {}
    : {
        opacity: rcVisible ? 1 : 0,
        transform: rcVisible ? 'scale(1)' : `scale(${REST_SCALE})`,
        transition: `opacity ${MOTION}ms ${EASE}, transform ${MOTION}ms ${EASE}`,
        willChange: 'opacity, transform',
        backfaceVisibility: 'hidden',
      };

  const tileStyle = (i: number): CSSProperties => ({
    ...cellBox(i),
    borderColor: fg,
    color: fg,
    ...groupMotion,
  });

  const stage = (
    <div
      data-rc-loader
      role="status"
      aria-live="polite"
      aria-label={label}
      className={cn(styles.root, className)}
      style={style}
    >
      <div className={styles.stageSizer} style={{ width: size, height: size }}>
        <div className={styles.stage} style={{ transform: `scale(${scale})` }}>
          {INITIAL_DIGITS.map((_, i) => {
            if (i === r || i === c || i === a) return null;
            return (
              <div key={i} aria-hidden="true" className={styles.cell} style={cellBox(i)}>
                <span key={versions[i]} className={reduce ? undefined : styles.popIn}>
                  <span className="rc-heading-h6" style={{ color: fg }}>
                    {digits[i]}
                  </span>
                </span>
              </div>
            );
          })}

          <div aria-hidden="true" className={styles.cell} style={cellBox(a)}>
            <span
              className={styles.accent}
              style={{
                background: ACCENT_COLORS[accentColor],
                ...groupMotion,
              }}
            />
          </div>

          <div aria-hidden="true" className={cn('rc-heading-h6', styles.cell, styles.tile)} style={tileStyle(r)}>
            R
          </div>
          <div aria-hidden="true" className={cn('rc-heading-h6', styles.cell, styles.tile)} style={tileStyle(c)}>
            C
          </div>
        </div>
      </div>

      {showLabel ? (
        <p className={cn('rc-body-md', styles.label, dark && styles.labelDark)}>{label}</p>
      ) : null}
    </div>
  );

  if (!fullscreen) return stage;

  return (
    <div className={cn(styles.fullscreen, className)} style={style}>
      {stage}
    </div>
  );
}
