import type { Meta, StoryObj } from '@storybook/react-vite';
import { StatusIndicator } from './StatusIndicator';

const meta = {
  title: 'Components/Status Indicator',
  component: StatusIndicator,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['success', 'warning', 'error', 'info', 'neutral'],
    },
    count: { control: 'number' },
    label: { control: 'text' },
  },
} satisfies Meta<typeof StatusIndicator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    variant: 'success',
    count: 7,
    label: 'Auto-mapped',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    count: 3,
    label: 'Needs review',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    count: 2,
    label: 'Failed',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    count: 5,
    label: 'In progress',
  },
};

export const Neutral: Story = {
  args: {
    variant: 'neutral',
    count: 1,
    label: 'Pending',
  },
};

export const AllVariants: Story = {
  name: 'All variants',
  args: {
    variant: 'success',
    count: 7,
    label: 'Auto-mapped',
  },
  render: () => (
    <div
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 'var(--rc-spacing-3)',
      }}
    >
      <StatusIndicator variant="success" count={7} label="Auto-mapped" />
      <StatusIndicator variant="warning" count={3} label="Needs review" />
      <StatusIndicator variant="error" count={2} label="Failed" />
      <StatusIndicator variant="info" count={5} label="In progress" />
      <StatusIndicator variant="neutral" count={1} label="Pending" />
    </div>
  ),
};

export const MappingSummary: Story = {
  name: 'Mapping summary',
  args: {
    variant: 'success',
    count: 7,
    label: 'Auto-mapped',
  },
  render: () => (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--rc-spacing-6)',
      }}
    >
      <StatusIndicator variant="success" count={7} label="Auto-mapped" />
      <StatusIndicator variant="warning" count={3} label="Needs review" />
    </div>
  ),
};
