import type { Meta, StoryObj } from '@storybook/react-vite';
import { Banner } from './Banner';
import { Button } from '../Button';
import { Link } from '../Link';
import { Icon } from '../../icons';

const meta = {
  title: 'Components/Banner',
  component: Banner,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Promotional / feature-highlight surface for new-feature announcements, discovery tips, upsell/upgrade prompts, and onboarding CTAs — not a status/alert component (`role="region"`). Base design reproduces Figma node 1974:2079: a horizontal, `subtle` banner with a swappable brand illustration tile, a title + optional description, and a trailing `actions` slot. Compose with `eyebrow`, `layout` (`horizontal`/`stacked`), `emphasis` (`subtle`/`branded`/`elevated`), an optional leading `accent` bar, `density`, and `dismissible`.',
      },
    },
  },
  argTypes: {
    layout: { control: 'select', options: ['horizontal', 'stacked'] },
    emphasis: { control: 'select', options: ['subtle', 'branded', 'elevated'] },
    density: { control: 'select', options: ['default', 'compact'] },
    showIllustration: { control: 'boolean' },
    accent: { control: 'boolean' },
    dismissible: { control: 'boolean' },
    eyebrow: { control: 'text' },
    title: { control: 'text' },
    description: { control: 'text' },
  },
  args: {
    title: 'Ready to explore your data?',
    description: 'Create a project to turn this source into a dashboard.',
    layout: 'horizontal',
    emphasis: 'subtle',
    density: 'default',
    showIllustration: true,
  },
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

const CreateProjectAction = (
  <Button variant="secondary" iconLeft={<Icon name="plus" size={16} tone="primary" aria-hidden />}>
    Create project
  </Button>
);

/** Base design — Figma node 1974:2079. Horizontal, `subtle`, brand illustration, secondary action. */
export const Default: Story = {
  args: {
    actions: CreateProjectAction,
  },
};

/** Playground with controls for every prop. */
export const Playground: Story = {
  args: {
    eyebrow: 'New',
    actions: CreateProjectAction,
    accent: false,
    dismissible: false,
  },
};

/* ---------- Promotional use-cases ---------- */

/** New feature announcement — "New" eyebrow badge draws the eye to a just-shipped capability. */
export const NewFeatureAnnouncement: Story = {
  args: {
    eyebrow: 'New',
    emphasis: 'branded',
    title: 'Introducing AI dashboards',
    description: 'Turn any source into a narrated dashboard in one click.',
    actions: <Button variant="ai">Try it now</Button>,
    dismissible: true,
  },
};

/** Feature discovery / "Did you know" — lightweight tip that surfaces an existing option. */
export const FeatureDiscoveryTip: Story = {
  args: {
    eyebrow: 'Tip',
    title: 'Did you know you can schedule syncs?',
    description: 'Keep dashboards fresh automatically — set a daily or weekly refresh.',
    actions: <Link href="#">Set up a schedule</Link>,
    dismissible: true,
  },
};

/** Upgrade / upsell — branded emphasis + primary CTA to nudge a plan change. */
export const UpgradePrompt: Story = {
  args: {
    eyebrow: 'Pro',
    emphasis: 'branded',
    title: 'Unlock unlimited projects',
    description: 'Upgrade to Pro for unlimited projects, scheduled syncs, and priority support.',
    actions: (
      <>
        <Button variant="ai">Upgrade</Button>
        <Link href="#">Maybe later</Link>
      </>
    ),
    dismissible: true,
  },
};

/** Getting started / onboarding CTA — the empty-state prompt from the Figma base design. */
export const GettingStartedCta: Story = {
  args: {
    title: 'Ready to explore your data?',
    description: 'Create a project to turn this source into a dashboard.',
    actions: CreateProjectAction,
  },
};

/** Cross-sell "explore more options" — surface adjacent capabilities the user hasn't tried. */
export const ExploreMoreOptions: Story = {
  args: {
    eyebrow: 'Explore',
    title: 'Connect more sources',
    description: 'Blend CSVs, spreadsheets, and databases into a single dashboard.',
    illustration: (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 48,
          height: 48,
          borderRadius: 'var(--rc-radius-md)',
          background: 'var(--rc-layer-03)',
        }}
      >
        <Icon name="database" size={24} tone="primary" />
      </div>
    ),
    actions: <Button variant="secondary">Browse integrations</Button>,
  },
};

/* ---------- Layout & emphasis showcase ---------- */

/** `layout="stacked"` — illustration and content flow vertically for narrow columns or hero promos. */
export const Stacked: Story = {
  args: {
    layout: 'stacked',
    emphasis: 'branded',
    eyebrow: 'New',
    title: 'Introducing AI dashboards',
    description: 'Turn any source into a narrated dashboard in one click. Ask questions in plain language and get charts back instantly.',
    actions: <Button variant="ai">Try it now</Button>,
    dismissible: true,
  },
};

/** `emphasis="subtle"` — the neutral white Figma surface (default). */
export const EmphasisSubtle: Story = {
  args: { emphasis: 'subtle', eyebrow: 'New', title: 'Introducing AI dashboards', description: 'Turn any source into a narrated dashboard in one click.', actions: <Button variant="secondary">Try it now</Button> },
};

/** `emphasis="branded"` — brand/purple gradient tint for a more promotional look. */
export const EmphasisBranded: Story = {
  args: { emphasis: 'branded', eyebrow: 'New', title: 'Introducing AI dashboards', description: 'Turn any source into a narrated dashboard in one click.', actions: <Button variant="ai">Try it now</Button> },
};

/** `emphasis="elevated"` — raised with `--rc-shadow-md` to stand out over busy content. */
export const EmphasisElevated: Story = {
  args: { emphasis: 'elevated', eyebrow: 'New', title: 'Introducing AI dashboards', description: 'Turn any source into a narrated dashboard in one click.', actions: <Button variant="secondary">Try it now</Button> },
};

/** Leading accent bar — a brand-colored stripe for a lightweight promotional cue. */
export const WithAccentBar: Story = {
  args: { accent: true, eyebrow: 'What\u2019s new', title: 'Faster syncs this week', description: 'Sources now refresh up to 3x faster.', actions: <Link href="#">See changelog</Link> },
};

/* ---------- Structural variants ---------- */

/** Swapped illustration — pass any `ReactNode` into the `illustration` slot. */
export const SwappedIllustration: Story = {
  args: {
    title: 'Connect a new source',
    description: 'Import a CSV, spreadsheet, or database to get started.',
    illustration: (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 48,
          height: 48,
          borderRadius: 'var(--rc-radius-md)',
          background: 'var(--rc-layer-03)',
        }}
      >
        <Icon name="database" size={24} tone="primary" />
      </div>
    ),
    actions: <Button variant="secondary">Add source</Button>,
  },
};

/** No illustration — the layout reflows with no empty gap when `showIllustration` is false. */
export const WithoutIllustration: Story = {
  args: {
    showIllustration: false,
    eyebrow: 'Tip',
    title: 'Ready to explore your data?',
    description: 'Create a project to turn this source into a dashboard.',
    actions: CreateProjectAction,
  },
};

/** Dismissible — adds an accessible close (X) button. Visibility is controlled by the consumer. */
export const Dismissible: Story = {
  args: {
    emphasis: 'branded',
    eyebrow: 'Pro',
    title: 'Your trial ends in 3 days',
    description: 'Upgrade to keep your dashboards and scheduled syncs.',
    actions: <Button variant="ai">Upgrade</Button>,
    dismissible: true,
  },
};

/** Compact / inline density — tighter padding and a 16px title for dense layouts and toolbars. */
export const Compact: Story = {
  args: {
    density: 'compact',
    eyebrow: 'Tip',
    title: 'You can pin dashboards',
    description: 'Pin your most-used dashboards to the top of the sidebar.',
    actions: <Link href="#">Learn how</Link>,
  },
};
