import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon } from '../../icons';
import { PopoverBubble } from '../Popover';
import { Link } from './Link';
import styles from './Link.stories.module.css';

const meta = {
  title: 'Components/Link',
  component: Link,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Inline action link with zero padding — aligns flush with surrounding text (e.g. popover body). Use for in-context actions like “See full breakdown”. Use Button for standalone controls with touch targets.',
      },
    },
  },
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md'] },
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'See full breakdown',
    size: 'sm',
    iconRight: <Icon name="caret-down" size={12} />,
  },
};

export const AsAnchor: Story = {
  name: 'As anchor',
  args: {
    children: 'View documentation',
    href: '#',
    size: 'md',
    iconRight: <Icon name="arrow-square-out" size={14} />,
  },
};

export const InPopover: Story = {
  name: 'In popover · flush alignment',
  args: {
    children: 'See full breakdown',
    size: 'sm',
  },
  render: () => (
    <PopoverBubble appearance="default" placement="top" caret>
      <div className={styles.popoverContent}>
        <p className={styles.body}>
          The <strong>combined score</strong> is a weighted average of the{' '}
          <strong>deterministic score</strong>, <strong>AI read</strong>, and{' '}
          <strong>strategic relevance</strong> scores.
        </p>
        <Link size="sm" iconRight={<Icon name="caret-down" size={12} />}>
          See full breakdown
        </Link>
      </div>
    </PopoverBubble>
  ),
};

export const Sizes: Story = {
  args: {
    children: 'Link',
    size: 'sm',
  },
  render: () => (
    <div className={styles.sizeStack}>
      <Link size="sm" iconRight={<Icon name="caret-down" size={12} />}>
        Small (12px) — popover context
      </Link>
      <Link size="md" iconRight={<Icon name="caret-down" size={14} />}>
        Medium (14px) — default page context
      </Link>
    </div>
  ),
};
