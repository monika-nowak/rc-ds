import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar } from '../Avatar';
import { Breadcrumbs } from '../Breadcrumb';
import { Logo } from '../Logo';
import { AppHeader } from '../AppHeader';
import { SideNav, SideNavItem } from '../SideNav';
import { Icon } from '../../icons';
import { AppShell } from './AppShell';

const clients = [
  { id: 'client-a', label: 'Client A', prefix: 'A' },
  { id: 'client-b', label: 'Client B', prefix: 'B' },
  { id: 'client-c', label: 'Client C', prefix: 'C' },
];

const meta = {
  title: 'Patterns/App Shell',
  component: AppShell,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof AppShell>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProjectsPage: Story = {
  name: 'Projects (PoC)',
  args: {
    sidebar: null,
    header: null,
    children: null,
  },
  render: () => {
    const [clientId, setClientId] = useState('client-a');
    const client = clients.find((item) => item.id === clientId) ?? clients[0];

    return (
    <AppShell
      sidebar={
        <SideNav logo={<Logo compact />}>
          <SideNavItem active label="Projects" icon={<Icon name="cards-three" size={16} />} />
          <SideNavItem label="Data sources" icon={<Icon name="database" size={16} />} />
        </SideNav>
      }
      header={
        <AppHeader
          start={
            <Breadcrumbs
              items={[
                {
                  kind: 'selector',
                  id: 'client',
                  label: client.label,
                  prefix: client.prefix,
                  options: clients,
                  value: clientId,
                  onValueChange: setClientId,
                },
                { kind: 'current', id: 'projects', label: 'Projects' },
              ]}
            />
          }
          end={<Avatar name="Monika Nowak" size="md" />}
        />
      }
    >
      <div style={{ padding: 'var(--rc-spacing-6)' }}>
        <h1 className="rc-heading-lg" style={{ margin: 0 }}>
          Projects
        </h1>
      </div>
    </AppShell>
    );
  },
};

export const ProjectDetailPage: Story = {
  name: 'Project detail (PoC)',
  args: {
    sidebar: null,
    header: null,
    children: null,
  },
  render: () => {
    const [clientId, setClientId] = useState('client-a');
    const client = clients.find((item) => item.id === clientId) ?? clients[0];

    return (
      <AppShell
        sidebar={
          <SideNav logo={<Logo compact />}>
            <SideNavItem active label="Projects" icon={<Icon name="cards-three" size={16} />} />
            <SideNavItem label="Data sources" icon={<Icon name="database" size={16} />} />
          </SideNav>
        }
        header={
          <AppHeader
            start={
              <Breadcrumbs
                items={[
                  {
                    kind: 'selector',
                    id: 'client',
                    label: client.label,
                    prefix: client.prefix,
                    options: clients,
                    value: clientId,
                    onValueChange: setClientId,
                  },
                  {
                    kind: 'back',
                    id: 'back',
                    label: 'Back to projects',
                    href: `/clients/${clientId}/projects`,
                  },
                  { kind: 'current', id: 'project', label: 'MSL Insights – May 2026' },
                ]}
              />
            }
            end={<Avatar name="Monika Nowak" size="md" />}
          />
        }
      >
        <div style={{ padding: 'var(--rc-spacing-6)' }}>
          <h1 className="rc-heading-lg" style={{ margin: 0 }}>
            MSL Insights – May 2026
          </h1>
        </div>
      </AppShell>
    );
  },
};
