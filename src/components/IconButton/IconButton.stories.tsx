import type { Meta, StoryObj } from '@storybook/react-vite';
import { DotsThree, Plus } from '@phosphor-icons/react';
import { IconButton } from './IconButton';

const meta = {
  title: 'Components/Icon Button',
  component: IconButton,
  tags: ['autodocs'],
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { label: 'Add', variant: 'primary', children: <Plus weight="bold" /> },
};

export const Ghost: Story = {
  args: { label: 'More', variant: 'ghost', children: <DotsThree weight="bold" /> },
};
