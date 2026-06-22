import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from './Badge';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryNeutral: Story = {
  args: { children: 'Badge', variant: 'primary', type: 'neutral' },
};

const BADGE_TYPES = ['neutral', 'success', 'warning', 'error', 'info', 'purple', 'blue'] as const;

export const AllTypes: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 12 }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {BADGE_TYPES.map((type) => (
          <Badge key={`p-${type}`} variant="primary" type={type}>Badge</Badge>
        ))}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {BADGE_TYPES.map((type) => (
          <Badge key={`s-${type}`} variant="subtle" type={type}>Badge</Badge>
        ))}
      </div>
    </div>
  ),
};
