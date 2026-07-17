import { useEffect, useState } from 'react';
import styles from './demo.module.css';

/**
 * Snapshot of the user's reduced-motion preference (live-updating). Used to gate
 * the gradient's SMIL shimmer so `prefers-reduced-motion: reduce` gets a fully
 * static gradient.
 */
function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(
    () =>
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return;
    }
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setReduced(mq.matches);
    onChange();
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return reduced;
}

/**
 * Empty-state hero — the Figma "star/simple/smoothcorner" two-sparkle motif
 * (RC-Designs node 2286:4354) rebuilt as inline SVG so each sparkle can animate
 * independently. Paths + positions are exported 1:1 from Figma (96×96 viewBox).
 * The gradient approximates the Figma shader: a diagonal (top-left → bottom-right)
 * blend of indigo → purple → light-purple → orange. Motion lives in
 * demo.module.css: the big star breathes (zoom in/out) while the small star is
 * periodically ejected from its centre (`.heroSparkleBig` / `.heroSparkleSmall`).
 */
export function WelcomeHero() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <svg
      className={styles.welcomeHero}
      width={96}
      height={96}
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="rcWelcomeHeroGradient"
          x1="8"
          y1="4"
          x2="88"
          y2="92"
          gradientUnits="userSpaceOnUse"
        >
          {/* Subtle "living" fill: slowly rock the gradient axis ±9° around the
              icon centre so the SAME five colour stops gently drift across both
              sparkles. No new colours — only their placement shifts. Eased
              (ease-in-out) and looped seamlessly; the ~5.2s period is 2× the big
              star's 2.6s pulse so the shimmer stays coherent with it. Skipped
              entirely under prefers-reduced-motion (static gradient). */}
          {!prefersReducedMotion && (
            <animateTransform
              attributeName="gradientTransform"
              attributeType="XML"
              type="rotate"
              values="-9 48 48; 9 48 48; -9 48 48"
              keyTimes="0; 0.5; 1"
              calcMode="spline"
              keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
              dur="5.2s"
              repeatCount="indefinite"
            />
          )}
          <stop offset="0" stopColor="#4500F9" />
          <stop offset="0.32" stopColor="#8752FA" />
          <stop offset="0.58" stopColor="#BEAFFF" />
          <stop offset="0.78" stopColor="#DEB3FF" />
          <stop offset="1" stopColor="#FF5001" />
        </linearGradient>
      </defs>
      <path
        className={styles.heroSparkleBig}
        fill="url(#rcWelcomeHeroGradient)"
        d="M47.5145 21.7149C47.7054 20.6081 49.2946 20.6081 49.4855 21.7149L50.3979 27.0062C52.0953 36.8502 60.1724 44.5656 70.4779 46.1871L75.7216 47.0122C76.8477 47.1893 76.8477 48.8107 75.7216 48.9878L70.4779 49.8129C60.1724 51.4344 52.0953 59.1498 50.3979 68.9938L49.4855 74.2851C49.2946 75.3919 47.7054 75.3919 47.5145 74.2851L46.6021 68.9938C44.9047 59.1498 36.8276 51.4344 26.5221 49.8129L21.2784 48.9878C20.1523 48.8107 20.1523 47.1893 21.2784 47.0122L26.5221 46.1871C36.8276 44.5656 44.9047 36.8502 46.6021 27.0062L47.5145 21.7149Z"
      />
      {/* Wrapper carries the offset-path orbit (position); the inner path scales
          in sync so it shrinks 100% → 50% as it travels the circle without the
          two transforms conflicting. */}
      <g className={styles.heroSparkleSmallOrbit}>
        <path
          className={styles.heroSparkleSmall}
          fill="url(#rcWelcomeHeroGradient)"
          d="M79.3029 5.14886C79.3409 4.92729 79.6591 4.92729 79.6971 5.14886L80.2082 8.12733C80.8415 11.8188 83.8554 14.7121 87.7007 15.3202L90.7507 15.8025C90.9757 15.838 90.9757 16.162 90.7507 16.1975L87.7007 16.6798C83.8554 17.2879 80.8415 20.1812 80.2082 23.8727L79.6971 26.8511C79.6591 27.0727 79.3409 27.0727 79.3029 26.8511L78.7918 23.8727C78.1585 20.1812 75.1446 17.2879 71.2993 16.6798L68.2493 16.1975C68.0243 16.162 68.0243 15.838 68.2493 15.8025L71.2993 15.3202C75.1446 14.7121 78.1585 11.8188 78.7918 8.12733L79.3029 5.14886Z"
        />
      </g>
    </svg>
  );
}
