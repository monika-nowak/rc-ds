import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon } from '../../icons';
import { SideNavItem } from './SideNav';

const meta = {
  title: 'Components/Side Nav Item',
  component: SideNavItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    label: 'Projects',
    icon: <Icon name="cards-three" size={16} />,
  },
} satisfies Meta<typeof SideNavItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Active: Story = {
  args: {
    active: true,
  },
};

export const AllStates: Story = {
  name: 'All states',
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      <SideNavItem label="Projects" icon={<Icon name="cards-three" size={16} />} />
      <SideNavItem
        label="Projects (hover)"
        icon={<Icon name="cards-three" size={16} />}
        style={{ background: 'var(--rc-layer-hover-01)' }}
      />
      <SideNavItem active label="Projects" icon={<Icon name="cards-three" size={16} />} />
    </div>
  ),
};
