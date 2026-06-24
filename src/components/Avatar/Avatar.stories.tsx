import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar } from './Avatar';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    name: 'Monika Nowak',
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
      <Avatar size="sm" name="Monika Nowak" />
      <Avatar size="md" name="Monika Nowak" />
      <Avatar size="lg" name="Monika Nowak" />
    </div>
  ),
};

export const CustomInitials: Story = {
  args: {
    size: 'lg',
    initials: 'RC',
  },
};
