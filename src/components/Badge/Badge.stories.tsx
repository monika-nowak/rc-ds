import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge, type BadgeProps } from './Badge';

const BADGE_ICON_OPTIONS = [
  'sparkle',
  'info',
  'check',
  'warning',
  'x',
  'clock',
  'star',
] as const;

type BadgeStoryArgs = BadgeProps & {
  showIcon?: boolean;
};

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
    showIcon: { control: 'boolean', name: 'Icon' },
    icon: {
      control: 'select',
      options: [...BADGE_ICON_OPTIONS],
      if: { arg: 'showIcon', truthy: true },
    },
    loading: { control: 'boolean', name: 'Loading' },
    iconLeft: { control: false },
    iconTone: { control: false },
  },
} satisfies Meta<BadgeStoryArgs>;

export default meta;
type Story = StoryObj<BadgeStoryArgs>;

export const EmphasisNeutral: Story = {
  args: { children: 'Badge', appearance: 'emphasis', color: 'neutral', showIcon: false },
};

export const WithIcon: Story = {
  name: 'With icon',
  args: {
    children: 'AI generated',
    appearance: 'subtle',
    color: 'purple',
    showIcon: true,
    icon: 'sparkle',
    loading: false,
  },
  render: ({ showIcon, loading, icon, iconLeft: _iconLeft, ...args }) => (
    <Badge {...args} loading={loading} icon={showIcon && !loading ? icon : undefined} />
  ),
};

export const IconSwap: Story = {
  name: 'Icon swap',
  args: {
    children: 'Verified',
    appearance: 'subtle',
    color: 'success',
    showIcon: true,
    icon: 'check',
    loading: false,
  },
  render: ({ showIcon, loading, icon, ...args }) => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
      {BADGE_ICON_OPTIONS.map((iconName) => (
        <Badge
          key={iconName}
          {...args}
          icon={showIcon && !loading ? iconName : undefined}
        >
          {iconName}
        </Badge>
      ))}
    </div>
  ),
};

export const Loading: Story = {
  name: 'Loading · generating',
  args: {
    children: 'Generating…',
    appearance: 'subtle',
    color: 'purple',
    loading: true,
  },
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
  args: { children: 'Badge', showIcon: false },
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
