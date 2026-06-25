import type { Meta, StoryObj } from '@storybook/react-vite';
import { PencilSimple, Trash } from '@phosphor-icons/react';
import { SplitButton } from './SplitButton';

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
  title: 'Components/Split Button',
  component: SplitButton,
  tags: ['autodocs'],
  args: {
    children: 'Create & Send',
    menuItems,
    menuGroupLabel: 'Actions',
    showMenuGroupLabel: true,
    showMenuDivider: true,
    showMenuDelete: true,
    onMainClick: () => undefined,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md'],
    },
    menuGroupLabel: { control: 'text' },
    showMenuGroupLabel: { control: 'boolean' },
    showMenuDivider: { control: 'boolean' },
    showMenuDelete: { control: 'boolean' },
  },
} satisfies Meta<typeof SplitButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { variant: 'primary' },
};

export const Secondary: Story = {
  args: { variant: 'secondary' },
};

export const ExtraSmall: Story = {
  name: 'Extra small',
  args: { variant: 'primary', size: 'xs' },
};

export const Small: Story = {
  args: { variant: 'primary', size: 'sm' },
};

export const WithMenu: Story = {
  render: (args) => (
    <div style={{ padding: 24, minHeight: 280 }}>
      <SplitButton
        {...args}
        onMainClick={() => alert('Create & Send')}
        menuItems={menuItems.map((item) =>
          item.kind === 'item'
            ? {
                ...item,
                onSelect: () => alert(item.label),
              }
            : item,
        )}
      />
    </div>
  ),
};

export const WithoutGroupLabel: Story = {
  name: 'Without group label',
  args: {
    showMenuGroupLabel: false,
  },
  render: (args) => (
    <div style={{ padding: 24, minHeight: 280 }}>
      <SplitButton {...args} />
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 16, padding: 24, minHeight: 280 }}>
      <SplitButton variant="primary" menuItems={menuItems} menuGroupLabel="Actions">
        Create & Send
      </SplitButton>
      <SplitButton variant="secondary" menuItems={menuItems} menuGroupLabel="Actions">
        Create & Send
      </SplitButton>
      <SplitButton variant="primary" size="xs" menuItems={menuItems} menuGroupLabel="Actions">
        Create & Send
      </SplitButton>
      <SplitButton variant="secondary" size="xs" menuItems={menuItems} menuGroupLabel="Actions">
        Create & Send
      </SplitButton>
      <SplitButton variant="primary" size="sm" menuItems={menuItems} menuGroupLabel="Actions">
        Create & Send
      </SplitButton>
      <SplitButton variant="secondary" size="sm" menuItems={menuItems} menuGroupLabel="Actions">
        Create & Send
      </SplitButton>
      <SplitButton variant="primary" menuItems={menuItems} menuGroupLabel="Actions" disabled>
        Create & Send
      </SplitButton>
    </div>
  ),
};
