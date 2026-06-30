import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon } from '../../icons';
import { Button } from '../Button';
import { IconButton } from '../IconButton';
import { Popover, PopoverBubble } from './Popover';
import styles from './Popover.stories.module.css';

const combinedScoreDescription = (
  <>
    <p>
      Reflects record volume, HCP tier and institution breadth, and AI assessment.
    </p>
    <p>
      Detailed logic of combined score is evolving over time based on model training. Once a
      report is generated, combined scores do not change.
    </p>
  </>
);

const meta = {
  title: 'Components/Popover',
  component: PopoverBubble,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Light-surface popover (default appearance) for richer helper content — optional title and description with independent show/hide toggles. Tooltip stays compact and inverse (dark).',
      },
    },
  },
  argTypes: {
    showTitle: { control: 'boolean' },
    showDescription: { control: 'boolean' },
    appearance: {
      control: 'radio',
      options: ['default', 'inverse'],
    },
  },
} satisfies Meta<typeof PopoverBubble>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultShell: Story = {
  args: {
    children: 'Short helper copy that can wrap when needed.',
    appearance: 'default',
    caret: true,
    placement: 'top',
  },
};

export const TitleAndDescription: Story = {
  name: 'Default · title + description',
  args: {
    appearance: 'default',
    caret: true,
    placement: 'top',
    title: 'Combined score',
    description: combinedScoreDescription,
    showTitle: true,
    showDescription: true,
  },
};

export const TitleOnly: Story = {
  name: 'Default · title only',
  args: {
    appearance: 'default',
    caret: true,
    placement: 'top',
    title: 'Combined score',
    description: combinedScoreDescription,
    showTitle: true,
    showDescription: false,
  },
};

export const DescriptionOnly: Story = {
  name: 'Default · description only',
  args: {
    appearance: 'default',
    caret: true,
    placement: 'top',
    title: 'Combined score',
    description: combinedScoreDescription,
    showTitle: false,
    showDescription: true,
  },
};

export const InverseMetricBreakdown: Story = {
  name: 'Inverse · metric rows',
  args: {
    children: null,
    appearance: 'inverse',
    caret: true,
    placement: 'top',
  },
  render: () => (
    <PopoverBubble appearance="inverse" placement="top" caret>
      <div className={styles.metricList}>
        <div className={styles.metricRow}>
          <span>Deterministic score (DET)</span>
          <strong>0.47/1</strong>
        </div>
        <div className={styles.metricRow}>
          <span>AI Read (AI)</span>
          <strong>0.86/1</strong>
        </div>
        <div className={styles.metricRow}>
          <span>Strategic Relevance (SR)</span>
          <strong>5/5</strong>
        </div>
      </div>
    </PopoverBubble>
  ),
};

export const RichContent: Story = {
  name: 'Default · mixed content',
  args: {
    children: null,
    appearance: 'default',
    caret: true,
    placement: 'bottom',
  },
  render: () => (
    <PopoverBubble appearance="default" placement="bottom" caret>
      <div className={styles.richContent}>
        <p className={styles.title}>Export options</p>
        <p className={styles.body}>Choose a format for this view. You can change defaults in settings.</p>
        <div className={styles.actions}>
          <Button size="sm" variant="secondary">
            CSV
          </Button>
          <Button size="sm" variant="primary">
            PDF
          </Button>
        </div>
      </div>
    </PopoverBubble>
  ),
};

export const NoCaret: Story = {
  args: {
    children: 'Popover without a caret tip — flush to the trigger edge.',
    appearance: 'default',
    caret: false,
    placement: 'bottom',
  },
};

export const AllPlacements: Story = {
  args: {
    children: 'Popover content',
    appearance: 'inverse',
    caret: true,
    placement: 'top',
  },
  render: () => (
    <div className={styles.placementGrid}>
      {(['top', 'bottom', 'left', 'right'] as const).map((placement) => (
        <PopoverBubble key={placement} appearance="inverse" placement={placement} caret>
          <span className={styles.placementLabel}>{placement}</span>
        </PopoverBubble>
      ))}
    </div>
  ),
};

export const ClickTrigger: Story = {
  name: 'Popover · click',
  args: {
    children: null,
    appearance: 'default',
    caret: true,
    placement: 'top',
    title: 'Combined score',
    description: combinedScoreDescription,
    showTitle: true,
    showDescription: true,
  },
  render: (args) => (
    <Popover
      openOn="click"
      appearance={args.appearance}
      placement={args.placement}
      title={args.title}
      description={args.description}
      showTitle={args.showTitle}
      showDescription={args.showDescription}
    >
      <IconButton label="Combined score details" variant="ghost" size="sm">
        <Icon name="info" size={16} />
      </IconButton>
    </Popover>
  ),
};

export const HoverTrigger: Story = {
  name: 'Popover · hover',
  args: {
    children: null,
    appearance: 'default',
    caret: true,
    placement: 'bottom',
  },
  render: () => (
    <Popover
      openOn="hover"
      appearance="default"
      placement="bottom"
      content={<p className={styles.body}>Hover to open. Content can include links and buttons.</p>}
    >
      <Button variant="tertiary" size="sm">
        Hover me
      </Button>
    </Popover>
  ),
};
