import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from './Badge';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    appearance: { control: 'select', options: ['emphasis', 'subtle'] },
    color: {
      control: 'select',
      options: ['neutral', 'success', 'warning', 'error', 'info', 'purple', 'lightPurple'],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EmphasisNeutral: Story = {
  args: { children: 'Badge', appearance: 'emphasis', color: 'neutral' },
};

const BADGE_COLORS = [
  'neutral',
  'success',
  'warning',
  'error',
  'info',
  'purple',
  'lightPurple',
] as const;

const COLOR_LABELS: Record<(typeof BADGE_COLORS)[number], string> = {
  neutral: 'Neutral',
  success: 'Success',
  warning: 'Warning',
  error: 'Error',
  info: 'Info',
  purple: 'Purple',
  lightPurple: 'Light Purple',
};

export const AllColors: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 16 }}>
      <div>
        <div style={{ fontSize: 12, color: '#757277', marginBottom: 8 }}>Emphasis</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {BADGE_COLORS.map((color) => (
            <Badge key={`emphasis-${color}`} appearance="emphasis" color={color}>
              Badge
            </Badge>
          ))}
        </div>
      </div>
      <div>
        <div style={{ fontSize: 12, color: '#757277', marginBottom: 8 }}>Subtle</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {BADGE_COLORS.map((color) => (
            <Badge key={`subtle-${color}`} appearance="subtle" color={color}>
              Badge
            </Badge>
          ))}
        </div>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, auto)',
          gap: 8,
          fontSize: 11,
          color: '#757277',
        }}
      >
        {BADGE_COLORS.map((color) => (
          <span key={color}>{COLOR_LABELS[color]}</span>
        ))}
      </div>
    </div>
  ),
};
