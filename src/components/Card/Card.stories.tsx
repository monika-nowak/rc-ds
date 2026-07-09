import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from '../Badge';
import { Card } from './Card';

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Flexible surface container aligned with Figma Card (node 1297:237). Toggle optional regions with `show*` props — title, description, header badge, actions, metadata, divider, stats, signal badges, category, and considerations. Use `variant` presets (`project`, `dataSource`, `signal`, `trend`) or compose with `layout` and `density`.',
      },
    },
  },
  argTypes: {
    showTitle: { control: 'boolean' },
    showDescription: { control: 'boolean' },
    showHeader: { control: 'boolean' },
    showActions: { control: 'boolean' },
    showCreatedDate: { control: 'boolean' },
    showAuthor: { control: 'boolean' },
    showDivider: { control: 'boolean' },
    showStats: { control: 'boolean' },
    showStrengthBadge: { control: 'boolean' },
    showLeadBadge: { control: 'boolean' },
    showCategory: { control: 'boolean' },
    showConsiderations: { control: 'boolean' },
    elevated: { control: 'boolean' },
    hoverable: { control: 'boolean' },
    layout: { control: 'select', options: ['project', 'stacked'] },
    density: { control: 'select', options: ['compact', 'default', 'roomy'] },
    titleSize: { control: 'select', options: ['h5', 'h6', 'h7'] },
    descriptionSize: { control: 'select', options: ['sm', 'base', 'md', 'lg'] },
    statsSpacing: { control: 'select', options: ['default', 'compact'] },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 418, width: '100%' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultDescription =
  'Field medical insights captured by MSLs during HCP interactions.';

/** Project preset — Figma Preset=Project (1297:108). */
export const ProjectCard: Story = {
  args: {
    variant: 'project',
    title: 'Card title',
    createdDate: '1 May 2026',
    authorName: 'Monika Nowak',
    onMenuClick: () => undefined,
  },
};

/** Interactive card — larger shadow on hover/focus. Hover the card to see the lift. */
export const Hoverable: Story = {
  args: {
    variant: 'project',
    hoverable: true,
    title: 'Card title',
    createdDate: '1 May 2026',
    authorName: 'Monika Nowak',
    onMenuClick: () => undefined,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Set `hoverable` to raise the card with a larger shadow (`--rc-shadow-md`) on hover and keyboard focus. Works with any layout/variant.',
      },
    },
  },
};

/** Data source preset — Figma Preset=DataSource (1297:126). */
export const DataSourceCard: Story = {
  args: {
    variant: 'dataSource',
    title: 'Card title',
    description: defaultDescription,
    stats: [
      { value: '2,130', label: 'Records' },
      { value: '4', label: 'Files' },
    ],
  },
};

/** Signal preset — Figma Preset=Signal (1297:139). */
export const SignalCard: Story = {
  args: {
    variant: 'signal',
    strengthLabel: 'Strong',
    leadLabel: 'Lead',
    title: 'Card title',
    description: defaultDescription,
    stats: [
      { value: '43', label: 'Records' },
      { value: '18', label: 'HCPs' },
    ],
    category: 'Infrastructure',
  },
};

/** Trend preset — Figma Preset=Trend (1297:217). */
export const TrendCard: Story = {
  args: {
    variant: 'trend',
    title: 'Card title',
    description: defaultDescription,
    considerations: [
      'Only 3 of 12 records note formal AE reporting – modifications happen but rarely surface in formal channels.',
      'Only 3 of 12 records note formal AE reporting – modifications happen but rarely surface in formal channels.',
    ],
  },
};

/** Empty-state CTA — composed stacked card (not a Figma preset variant). */
export const ExploreDataCta: Story = {
  args: {
    layout: 'stacked',
    density: 'default',
    title: 'Ready to explore your data?',
    description: 'Create a project to turn this source into a dashboard.',
    titleSize: 'h7',
    descriptionSize: 'md',
    showTitle: true,
    showDescription: true,
    elevated: false,
  },
};

/** Playground with toggles for every optional region. */
export const Playground: Story = {
  args: {
    layout: 'project',
    density: 'compact',
    title: 'Card title',
    createdDate: '1 May 2026',
    authorName: 'Monika Nowak',
    onMenuClick: () => undefined,
    badgeLabel: 'Draft',
    showTitle: true,
    showCreatedDate: true,
    showAuthor: true,
    showActions: true,
    showHeader: true,
    elevated: true,
  },
};

/** @deprecated Alias for `ProjectCard`. */
export const Default = ProjectCard;

/** @deprecated Alias for `DataSourceCard`. */
export const DataSource = DataSourceCard;

const projectCardArgs = {
  variant: 'project' as const,
  title: 'Card title',
  createdDate: '1 May 2026',
  authorName: 'Monika Nowak',
  onMenuClick: () => undefined,
};

export const AllVisible: Story = {
  args: {
    ...projectCardArgs,
    showCreatedDate: true,
    showAuthor: true,
    showActions: true,
    showHeader: true,
  },
};

export const WithoutAuthor: Story = {
  args: { ...projectCardArgs, showAuthor: false },
};

export const WithoutCreated: Story = {
  args: { ...projectCardArgs, showCreatedDate: false },
};

export const WithoutMenu: Story = {
  args: { ...projectCardArgs, showActions: false },
};

export const WithoutBadge: Story = {
  args: { ...projectCardArgs, showHeader: false },
};

export const Minimal: Story = {
  args: {
    variant: 'project',
    title: 'Card title',
    showTitle: true,
    showCreatedDate: false,
    showAuthor: false,
    showActions: false,
    showHeader: false,
  },
};

export const Generating: Story = {
  args: {
    variant: 'project',
    title: 'Project 5',
    createdDate: '1 May 2026',
    authorName: 'Monika Nowak',
    elevated: false,
    header: (
      <Badge appearance="subtle" color="neutral" loading>
        Generating...
      </Badge>
    ),
    onMenuClick: () => undefined,
  },
};

export const Grid: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
        gap: 24,
        maxWidth: 1344,
        width: '100%',
      }}
    >
      <Card
        variant="project"
        title="Card title"
        createdDate="1 May 2026"
        authorName="Monika Nowak"
        onMenuClick={() => undefined}
      />
      <Card
        variant="project"
        title="Card title"
        createdDate="1 May 2026"
        authorName="Monika Nowak"
        onMenuClick={() => undefined}
      />
      <Card
        variant="project"
        title="Card title"
        createdDate="1 May 2026"
        authorName="Monika Nowak"
        onMenuClick={() => undefined}
      />
    </div>
  ),
};
