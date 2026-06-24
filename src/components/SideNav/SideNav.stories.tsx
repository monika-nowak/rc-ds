import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Logo } from '../Logo';
import { Icon, type CuratedIconName } from '../../icons';
import { SideNav, SideNavItem } from './SideNav';

const meta = {
  title: 'Components/Side Nav',
  component: SideNav,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Side nav is composed of `SideNavItem` children. Add or remove items by adding more `SideNavItem` components; swap icons via the `icon` prop with any curated `Icon` name.',
      },
    },
  },
} satisfies Meta<typeof SideNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Rail: Story = {
  name: 'Rail (PoC)',
  args: {
    children: null,
  },
  render: () => (
    <div style={{ height: 320, display: 'flex' }}>
      <SideNav logo={<Logo compact />}>
        <SideNavItem active label="Projects" icon={<Icon name="cards-three" size={16} />} />
        <SideNavItem label="Data sources" icon={<Icon name="database" size={16} />} />
      </SideNav>
    </div>
  ),
};

type NavEntry = {
  id: string;
  label: string;
  icon: CuratedIconName;
};

const defaultMenu: NavEntry[] = [
  { id: 'projects', label: 'Projects', icon: 'cards-three' },
  { id: 'data-sources', label: 'Data sources', icon: 'database' },
  { id: 'settings', label: 'Settings', icon: 'gear' },
];

export const CustomMenu: Story = {
  name: 'Custom menu',
  args: {
    children: null,
  },
  render: () => {
    const [activeId, setActiveId] = useState('projects');

    return (
      <div style={{ height: 360, display: 'flex' }}>
        <SideNav logo={<Logo compact />}>
          {defaultMenu.map((entry) => (
            <SideNavItem
              key={entry.id}
              active={activeId === entry.id}
              label={entry.label}
              icon={<Icon name={entry.icon} size={16} />}
              onClick={() => setActiveId(entry.id)}
            />
          ))}
        </SideNav>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Define menu entries in an array, map them to `SideNavItem`, and control the active item in state. To add a position, push a new object; to change an icon, update the `icon` field.',
      },
    },
  },
};
