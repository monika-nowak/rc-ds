import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { BreadcrumbBar, Breadcrumbs } from './Breadcrumb';

const clients = [
  { id: 'client-a', label: 'Client A', prefix: 'A' },
  { id: 'client-b', label: 'Client B', prefix: 'B' },
  { id: 'client-c', label: 'Client C', prefix: 'C' },
];

const meta = {
  title: 'Components/Breadcrumb',
  component: Breadcrumbs,
  tags: ['autodocs'],
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

const trail = [
  { kind: 'selector' as const, id: 'client', label: 'Client A', prefix: 'A' },
  { kind: 'link' as const, id: 'kb', label: 'Knowledge base' },
  { kind: 'current' as const, id: 'upload', label: 'Upload file' },
];

export const Trail: Story = {
  args: {
    items: trail,
  },
};

export const ProjectsTrail: Story = {
  name: 'Projects list (PoC)',
  args: {
    items: [],
  },
  render: () => {
    const [clientId, setClientId] = useState('client-a');
    const client = clients.find((item) => item.id === clientId) ?? clients[0];

    return (
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
    );
  },
};

export const ProjectDetailTrail: Story = {
  name: 'Project detail (PoC)',
  args: {
    items: [],
  },
  render: () => {
    const [clientId, setClientId] = useState('client-a');
    const client = clients.find((item) => item.id === clientId) ?? clients[0];

    return (
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
            onClick: () => window.alert('Navigate to /clients/client-a/projects'),
          },
          { kind: 'current', id: 'project', label: 'MSL Insights – May 2026' },
        ]}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'On a project screen the trail shows the project title. The back arrow returns to all projects for the selected client — not a "Projects" text link.',
      },
    },
  },
};

export const Bar: Story = {
  args: {
    items: trail,
  },
  render: (args) => <BreadcrumbBar {...args} />,
};
