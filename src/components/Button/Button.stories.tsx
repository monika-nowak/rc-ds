import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon } from '../../icons';
import { IconButton } from '../IconButton';
import { Input } from '../Input';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
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
      options: ['xs', 'sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: 'Button', variant: 'primary' },
};

export const Secondary: Story = {
  args: { children: 'Button', variant: 'secondary' },
};

export const Tertiary: Story = {
  args: { children: 'Button', variant: 'tertiary' },
};

export const Ghost: Story = {
  args: { children: 'Button', variant: 'ghost' },
};

export const Danger: Story = {
  args: { children: 'Delete', variant: 'danger' },
};

export const AI: Story = {
  name: 'AI',
  args: { children: 'Generate with AI', variant: 'ai' },
};

export const Disabled: Story = {
  args: { children: 'Button', disabled: true },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
    </div>
  ),
};

export const AllAIVariants: Story = {
  name: 'All AI variants',
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
      <Button variant="ai">Generate with AI</Button>
      <Button variant="aiSecondary">AI secondary</Button>
      <Button variant="aiTertiary">AI tertiary</Button>
      <Button variant="aiGhost" size="sm" iconLeft={<Icon name="sparkle" size={16} tone="ai" />}>
        Ask AI
      </Button>
      <IconButton variant="aiGhost" size="badge" label="Ask AI to redraft">
        <Icon name="sparkle" size={12} tone="ai" />
      </IconButton>
    </div>
  ),
};

export const InputHeight: Story = {
  name: 'With input trailing action',
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', maxWidth: 480 }}>
      <div style={{ flex: 1 }}>
        <Input
          label="Label"
          defaultValue="Value text"
          showHelperText={false}
          trailingAction={
            <IconButton size="md" variant="tertiary" label="More options">
              <Icon name="plus" size={18} />
            </IconButton>
          }
        />
      </div>
      <Button size="md" variant="secondary">
        Action
      </Button>
      <IconButton size="md" variant="tertiary" label="More options">
        <Icon name="plus" size={18} />
      </IconButton>
    </div>
  ),
};
