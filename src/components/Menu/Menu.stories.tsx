import type { Meta, StoryObj } from '@storybook/react-vite';
import { PencilSimple, Trash } from '@phosphor-icons/react';
import { Menu } from './Menu';

const menuItems = [
  {
    kind: 'item' as const,
    id: 'edit',
    label: 'Edit',
    icon: <PencilSimple size={16} weight="regular" />,
  },
  { kind: 'item' as const, id: 'duplicate', label: 'Duplicate' },
  {
    kind: 'item' as const,
    id: 'share',
    label: 'Share...',
    shortcut: '⌘S',
  },
  { kind: 'separator' as const, id: 'sep' },
  {
    kind: 'item' as const,
    id: 'delete',
    label: 'Delete',
    icon: <Trash size={16} weight="regular" />,
    destructive: true,
  },
];

const meta = {
  title: 'Components/Menu',
  component: Menu,
  tags: ['autodocs'],
  args: {
    entries: menuItems,
    groupLabel: 'Actions',
    showGroupLabel: true,
    showDivider: true,
    showDelete: true,
  },
  argTypes: {
    groupLabel: { control: 'text' },
    showGroupLabel: { control: 'boolean' },
    showDivider: { control: 'boolean' },
    showDelete: { control: 'boolean' },
  },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ActionsMenu: Story = {};

export const WithoutGroupLabel: Story = {
  name: 'Without group label',
  args: {
    showGroupLabel: false,
  },
};

export const WithoutDivider: Story = {
  name: 'Without divider',
  args: {
    showDivider: false,
  },
};

export const WithoutDelete: Story = {
  name: 'Without delete',
  args: {
    showDelete: false,
  },
};
