import { useMemo, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon, CURATED_ICON_NAMES, ALL_ICON_NAMES, getPhosphorIcon } from '../icons';
import styles from '../icons/Icons.module.css';

function IconGrid({ names }: { names: readonly string[] }) {
  const resolved = names.filter((name) => getPhosphorIcon(name));
  return (
    <div className={styles.grid}>
      {resolved.map((name) => (
        <div key={name} className={styles.cell}>
          <Icon name={name} size={24} weight="regular" />
          <span className={styles.label}>{name}</span>
        </div>
      ))}
    </div>
  );
}

function CuratedIconsPage() {
  return (
    <div className={styles.section}>
      <h1 className={styles.title}>Phosphor Icons — Curated</h1>
      <p className={styles.description}>
        Preferred icons for navigation, files, actions, and status. Regular weight, 24×24,
        recolorable via <code>--rc-icon-primary</code>. Matches the Figma curated set.
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
    return ALL_ICON_NAMES.filter((name) => name.includes(q) && getPhosphorIcon(name)).slice(
      0,
      120,
    );
  }, [query]);

  return (
    <div className={styles.section}>
      <h1 className={styles.title}>Phosphor Icons — Full set</h1>
      <p className={styles.description}>
        Complete Phosphor Regular library ({ALL_ICON_NAMES.length} icons). Search shows
        matches from the curated code map ({CURATED_ICON_NAMES.length} icons wired in DS).
      </p>
      <input
        className={styles.search}
        type="search"
        placeholder="Search icons (min. 2 characters)…"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <p className={styles.count}>
        {query.trim().length < 2
          ? 'Enter at least 2 characters to search'
          : `Showing ${filtered.length} match${filtered.length === 1 ? '' : 'es'}`}
      </p>
      {filtered.length > 0 ? <IconGrid names={filtered} /> : null}
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
      <h2 className={styles.title} style={{ fontSize: 18, lineHeight: '24px' }}>
        Standalone (no label)
      </h2>
      <div className={styles.standaloneRow}>
        <Icon name="bell" aria-label="Notifications" />
        <Icon name="gear" aria-label="Settings" />
        <Icon name="user-circle" aria-label="Account" />
      </div>
    </div>
  ),
};
