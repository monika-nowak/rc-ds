import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon } from '../../icons';
import { IconButton } from './IconButton';

const meta = {
  title: 'Components/Icon Button',
  component: IconButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'tertiary',
        'ghost',
        'danger',
        'ai',
        'aiSecondary',
        'aiTertiary',
        'aiGhost',
      ],
    },
    size: {
      control: 'select',
      options: ['badge', 'xs', 'sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Add',
    variant: 'primary',
    children: <Icon name="plus" size={18} tone="on-color" />,
  },
};

export const Ghost: Story = {
  args: {
    label: 'More',
    variant: 'ghost',
    children: <Icon name="dots-three" size={18} />,
  },
};

export const AI: Story = {
  name: 'AI',
  args: {
    label: 'Ask AI',
    variant: 'ai',
    children: <Icon name="sparkle" size={18} tone="on-color" />,
  },
};

export const AIGhostCompact: Story = {
  name: 'AI ghost compact',
  args: {
    label: 'Ask AI to redraft',
    variant: 'aiGhost',
    size: 'badge',
    children: <Icon name="sparkle" size={12} tone="ai" />,
  },
};

export const AllAIVariants: Story = {
  name: 'All AI variants',
  args: { label: 'AI', children: <Icon name="sparkle" size={18} tone="on-color" /> },
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
      <IconButton variant="ai" size="sm" label="Generate with AI">
        <Icon name="sparkle" size={16} tone="on-color" />
      </IconButton>
      <IconButton variant="aiSecondary" size="sm" label="AI secondary">
        <Icon name="sparkle" size={16} tone="ai" />
      </IconButton>
      <IconButton variant="aiTertiary" size="sm" label="AI tertiary">
        <Icon name="sparkle" size={16} tone="ai" />
      </IconButton>
      <IconButton variant="aiGhost" size="sm" label="AI ghost">
        <Icon name="sparkle" size={16} tone="ai" />
      </IconButton>
      <IconButton variant="aiGhost" size="badge" label="Ask AI to redraft">
        <Icon name="sparkle" size={12} tone="ai" />
      </IconButton>
    </div>
  ),
};
