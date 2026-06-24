import type { Meta, StoryObj } from '@storybook/react-vite';
import styles from '../foundations/Foundations.module.css';
import introStyles from './Introduction.module.css';

const tokenCategories = [
  'Color',
  'Typography',
  'Spacing',
  'Radius',
  'Elevation',
] as const;

const principles = [
  {
    title: 'Semantic color',
    body: 'Primitives map to semantic roles — background, layer, field, border, text, icon, link, support, button. Canvas (`background/canvas` or `background/blank`) is not a surface; UI chrome uses `layer/01`.',
  },
  {
    title: 'Neutral-first',
    body: 'Primary actions use `button/primary` (neutral-900). Brand purple (`background/brand`) is reserved for brand moments. Destructive and error states use orange (`support/error`).',
  },
  {
    title: 'Radius scale',
    body: '`radius/sm` (4px) for buttons, inputs, and cards · `radius/md` (8px) for menus and elevated panels · `radius/full` for pills and avatars.',
  },
  {
    title: 'Borders + elevation',
    body: 'Everyday UI stays flat with borders (`border/subtle-02`). Shadows (`elevation/sm`–`xl`) are reserved for overlays — dropdowns, popovers, modals.',
  },
  {
    title: 'Typography',
    body: 'Helvetica Now Display — Heading H1–H9 (Bold) for titles, Body for content, Label for controls, Helper for captions. Rule: 24px is always H6, never body.',
  },
  {
    title: 'Figma-synced tokens',
    body: 'Tokens are exported from the Foundations page (Light mode) and mirrored in `src/styles/tokens.css` and `src/tokens/figma-tokens.json`.',
  },
];

function IntroductionPage() {
  return (
    <div className={styles.section}>
      <h1 className={styles.title}>Real Chemistry Design System</h1>
      <p className={styles.description}>
        React components and design tokens for Real Chemistry products. Source of truth:{' '}
        <a
          href="https://www.figma.com/design/bAfW17PaIBzJodq0a6DXXQ/Design-System"
          target="_blank"
          rel="noreferrer"
        >
          Figma Design System
        </a>
        .
      </p>

      <h2 className={introStyles.subtitle}>Design principles</h2>
      <ul className={introStyles.list}>
        {principles.map((item) => (
          <li key={item.title}>
            <strong>{item.title}</strong> — {item.body}
          </li>
        ))}
      </ul>

      <div className={introStyles.tokenRow}>
        {tokenCategories.map((name) => (
          <span key={name} className={introStyles.token}>
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

const meta = {
  title: 'Introduction',
  component: IntroductionPage,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof IntroductionPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  name: 'Overview',
};
