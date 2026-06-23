import { useEffect, useMemo, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Icon,
  CURATED_ICON_NAMES,
  ALL_ICON_NAMES,
  getPhosphorIcon,
  isCuratedIcon,
  getPhosphorImportSnippet,
  getDsIconSnippet,
  toPascalCase,
} from '../icons';
import styles from '../icons/Icons.module.css';

const phosphorSvgLoaders = import.meta.glob(
  '../../node_modules/@phosphor-icons/core/assets/regular/*.svg',
  { query: '?url', import: 'default' },
) as Record<string, () => Promise<string>>;

function phosphorSvgLoader(name: string) {
  return phosphorSvgLoaders[
    `../../node_modules/@phosphor-icons/core/assets/regular/${name}.svg`
  ];
}

function PhosphorSvgPreview({ name, size = 24 }: { name: string; size?: number }) {
  const [src, setSrc] = useState<string | null>(null);
  const curated = getPhosphorIcon(name);

  useEffect(() => {
    if (curated) return;
    const load = phosphorSvgLoader(name);
    if (!load) {
      setSrc(null);
      return;
    }
    let cancelled = false;
    load()
      .then((url) => {
        if (!cancelled) setSrc(url);
      })
      .catch(() => {
        if (!cancelled) setSrc(null);
      });
    return () => {
      cancelled = true;
    };
  }, [name, curated]);

  if (curated) {
    return <Icon name={name} size={size} />;
  }

  if (!src) {
    return <span className={styles.previewFallback} aria-hidden />;
  }

  return <img src={src} width={size} height={size} alt="" className={styles.previewImg} />;
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      type="button"
      className={styles.copyButton}
      onClick={async () => {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1500);
      }}
    >
      {copied ? 'Copied' : 'Copy'}
    </button>
  );
}

function IconCallout() {
  return (
    <aside className={styles.callout}>
      <p className={styles.calloutTitle}>Full Phosphor library — {ALL_ICON_NAMES.length} icons</p>
      <p className={styles.calloutText}>
        Every icon in{' '}
        <a href="https://phosphoricons.com" target="_blank" rel="noreferrer">
          Phosphor Icons
        </a>{' '}
        (Regular weight) is available in this project via{' '}
        <code>@phosphor-icons/react</code>. You are not limited to the curated set.
      </p>
      <ul className={styles.calloutList}>
        <li>
          <strong>Curated ({CURATED_ICON_NAMES.length})</strong> — preferred for UI; use{' '}
          <code>{'<Icon name="…" />'}</code> from <code>@real-chemistry/ds</code>
        </li>
        <li>
          <strong>Any other icon</strong> — import by component name from{' '}
          <code>@phosphor-icons/react</code> (search below shows ready-to-copy snippets)
        </li>
      </ul>
    </aside>
  );
}

function IconGrid({ names, showUsage = false }: { names: readonly string[]; showUsage?: boolean }) {
  return (
    <div className={styles.grid}>
      {names.map((name) => {
        const dsSnippet = getDsIconSnippet(name);
        const importSnippet = getPhosphorImportSnippet(name);

        return (
          <div key={name} className={styles.cell}>
            <PhosphorSvgPreview name={name} size={24} />
            <span className={styles.label}>{name}</span>
            {isCuratedIcon(name) ? <span className={styles.badge}>DS curated</span> : null}
            {showUsage ? (
              <div className={styles.usage}>
                {dsSnippet ? (
                  <>
                    <code className={styles.snippet}>{`<Icon name="${name}" />`}</code>
                    <CopyButton text={dsSnippet} />
                  </>
                ) : (
                  <>
                    <code className={styles.snippet}>{`import { ${toPascalCase(name)} }`}</code>
                    <CopyButton text={importSnippet} />
                  </>
                )}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

function CuratedIconsPage() {
  return (
    <div className={styles.section}>
      <IconCallout />
      <h1 className={styles.title}>Phosphor Icons — Curated</h1>
      <p className={styles.description}>
        {CURATED_ICON_NAMES.length} icons selected for navigation, files, actions, and status.
        Regular weight, 24×24, recolorable via <code>--rc-icon-primary</code>. Matches Figma{' '}
        <code>Icon/*</code> components. All other Phosphor icons remain available — see{' '}
        <strong>All icons</strong>.
      </p>
      <p className={styles.count}>{CURATED_ICON_NAMES.length} icons</p>
      <IconGrid names={CURATED_ICON_NAMES} />
    </div>
  );
}

function AllIconsPage() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];
    return ALL_ICON_NAMES.filter((name) => name.includes(q)).slice(0, 120);
  }, [query]);

  const curatedMatches = filtered.filter(isCuratedIcon).length;

  return (
    <div className={styles.section}>
      <IconCallout />
      <h1 className={styles.title}>Phosphor Icons — Full library</h1>
      <p className={styles.description}>
        Browse and search all {ALL_ICON_NAMES.length} Phosphor Regular icons. Each result includes a
        preview and a copy-ready import snippet. Icons marked <strong>DS curated</strong> can also
        use <code>{'<Icon name="…" />'}</code>.
      </p>
      <input
        className={styles.search}
        type="search"
        placeholder="Search all Phosphor icons (min. 2 characters)…"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <p className={styles.count}>
        {query.trim().length < 2
          ? `Type to search ${ALL_ICON_NAMES.length} icons`
          : `${filtered.length} match${filtered.length === 1 ? '' : 'es'} · ${curatedMatches} in DS curated set`}
      </p>
      {filtered.length > 0 ? <IconGrid names={filtered} showUsage /> : null}
    </div>
  );
}

const meta = {
  title: 'Icons',
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Curated: Story = {
  name: 'Curated',
  render: () => <CuratedIconsPage />,
};

export const All: Story = {
  name: 'All icons',
  render: () => <AllIconsPage />,
};

export const Standalone: Story = {
  render: () => (
    <div className={styles.section}>
      <IconCallout />
      <h2 className={styles.title} style={{ fontSize: 18, lineHeight: '24px' }}>
        Standalone (no label)
      </h2>
      <p className={styles.description} style={{ marginBottom: 16 }}>
        Curated icons via <code>{'<Icon />'}</code>. Any other Phosphor icon works the same way
        with a direct import — search <strong>All icons</strong> for snippets.
      </p>
      <div className={styles.standaloneRow}>
        <Icon name="bell" aria-label="Notifications" />
        <Icon name="gear" aria-label="Settings" />
        <Icon name="user-circle" aria-label="Account" />
      </div>
    </div>
  ),
};
