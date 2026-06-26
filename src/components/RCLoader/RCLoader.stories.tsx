import type { Meta, StoryObj } from '@storybook/react-vite';
import { RCLoader } from './RCLoader';

const meta = {
  title: 'Components/RCLoader',
  component: RCLoader,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Brand loading animation — 3×3 grid with R/C tiles, cycling accent square, and shuffling digits. Geometry matches Figma PoC (152px stage, 48px cells, 46px step, 16px accent).',
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'number', min: 32, max: 304, step: 8 },
      description: 'Total width/height in px (scales the 152px stage proportionally).',
    },
    interval: {
      control: { type: 'number', min: 80, max: 800, step: 20 },
      description: 'Average delay between digit refreshes in ms.',
    },
    moveInterval: {
      control: { type: 'number', min: 400, max: 3000, step: 100 },
      description: 'How long R/C stay in a configuration before fading to the next, in ms.',
    },
    label: { control: 'text' },
    showLabel: { control: 'boolean' },
    dark: { control: 'boolean' },
    animate: { control: 'boolean' },
    fullscreen: { control: 'boolean' },
  },
} satisfies Meta<typeof RCLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 152,
    label: 'Loading',
  },
};

export const InlineSmall: Story = {
  name: 'Inline (64px)',
  args: {
    size: 64,
    label: 'Loading',
  },
};

export const WithLabel: Story = {
  args: {
    size: 152,
    label: 'Generating your dashboard',
    showLabel: true,
  },
};

export const OnDarkSurface: Story = {
  name: 'Dark surface',
  args: {
    size: 152,
    dark: true,
    showLabel: true,
    label: 'Importing records',
  },
  decorators: [
    (Story) => (
      <div
        style={{
          background: 'var(--rc-background-inverse)',
          padding: 'var(--rc-spacing-8)',
          borderRadius: 'var(--rc-radius-md)',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const FastMotion: Story = {
  name: 'Fast motion',
  args: {
    size: 152,
    interval: 120,
    moveInterval: 600,
    showLabel: true,
    label: 'Fast interval / moveInterval',
  },
};

export const Static: Story = {
  name: 'Static (animate=false)',
  args: {
    size: 152,
    animate: false,
    showLabel: true,
    label: 'Not animating',
  },
};

export const Fullscreen: Story = {
  args: {
    size: 152,
    fullscreen: true,
    showLabel: true,
    label: 'Generating…',
  },
  decorators: [
    (Story) => (
      <div
        style={{
          position: 'relative',
          width: 480,
          height: 320,
          background: 'var(--rc-layer-01)',
          border: '1px solid var(--rc-border-subtle-02)',
          borderRadius: 'var(--rc-radius-md)',
        }}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'padded',
  },
};
