import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { BreadcrumbBar, Breadcrumbs, type BreadcrumbItemData } from './Breadcrumb';

const clients = [
  { id: 'client-a', label: 'Client A', prefix: 'A' },
  { id: 'client-b', label: 'Client B', prefix: 'B' },
  { id: 'client-c', label: 'Client C', prefix: 'C' },
];

const defaultTrail: BreadcrumbItemData[] = [
  { label: 'Client A', showDropdown: true, onClick: () => undefined },
  { label: 'Knowledge base', href: '#knowledge-base' },
  { label: 'Upload file', isCurrent: true },
];

const meta = {
  title: 'Components/Breadcrumb',
  component: Breadcrumbs,
  tags: ['autodocs'],
  args: {
    leading: { prefix: 'A' },
    showLeading: true,
    items: defaultTrail,
  },
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default (Client A › Knowledge base › Upload file)',
};

export const WithoutAvatar: Story = {
  name: 'Without avatar',
  args: {
    showLeading: false,
    items: [
      { label: 'Client A', showDropdown: true, onClick: () => undefined },
      { label: 'Knowledge base', href: '#knowledge-base' },
      { label: 'Upload file', isCurrent: true },
    ],
  },
};

export const WithoutDropdown: Story = {
  name: 'Without dropdown',
  args: {
    leading: { prefix: 'A' },
    items: [
      { label: 'Client A', href: '#client-a' },
      { label: 'Knowledge base', href: '#knowledge-base' },
      { label: 'Upload file', isCurrent: true },
    ],
  },
};

export const Playground: Story = {
  args: {
    items: [],
  },
  render: function PlaygroundRender() {
    const [clientId, setClientId] = useState('client-a');
    const [items, setItems] = useState<BreadcrumbItemData[]>([
      { label: 'Client A', showDropdown: true },
      { label: 'Knowledge base', href: '#knowledge-base' },
      { label: 'Upload file' },
    ]);

    const client = clients.find((item) => item.id === clientId) ?? clients[0];

    const updateLabel = (index: number, label: string) => {
      setItems((current) =>
        current.map((item, itemIndex) => (itemIndex === index ? { ...item, label } : item)),
      );
    };

    const addItem = () => {
      setItems((current) => {
        const next = current.map((item) => ({ ...item, isCurrent: false }));
        return [...next, { label: `Step ${next.length + 1}` }];
      });
    };

    const removeItem = () => {
      setItems((current) => (current.length > 1 ? current.slice(0, -1) : current));
    };

    const trailItems: BreadcrumbItemData[] = items.map((item, index) => {
      if (index === 0) {
        return {
          ...item,
          label: client.label,
          showDropdown: true,
          dropdownOptions: clients,
          dropdownValue: clientId,
          onDropdownValueChange: setClientId,
        };
      }
      return item;
    });

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--rc-spacing-4)' }}>
        <Breadcrumbs
          leading={{ prefix: client.prefix }}
          showLeading
          items={trailItems}
        />
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--rc-spacing-2)' }}>
          <button type="button" onClick={addItem}>
            Add item
          </button>
          <button type="button" onClick={removeItem}>
            Remove last
          </button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--rc-spacing-2)' }}>
          {items.map((item, index) => (
            <label key={`breadcrumb-edit-${index}`} style={{ display: 'flex', gap: 'var(--rc-spacing-2)' }}>
              <span style={{ width: 72 }}>Item {index + 1}</span>
              <input
                value={index === 0 ? client.label : item.label}
                disabled={index === 0}
                onChange={(event) => updateLabel(index, event.target.value)}
              />
            </label>
          ))}
        </div>
      </div>
    );
  },
};

/** @deprecated Legacy kind-based entries — still supported. */
export const LegacyTrail: Story = {
  name: 'Legacy (kind-based entries)',
  args: {
    leading: undefined,
    showLeading: undefined,
    items: [
      { kind: 'selector' as const, id: 'client', label: 'Client A', prefix: 'A' },
      { kind: 'link' as const, id: 'kb', label: 'Knowledge base' },
      { kind: 'current' as const, id: 'upload', label: 'Upload file' },
    ],
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
        leading={{ prefix: client.prefix }}
        items={[
          {
            label: client.label,
            showDropdown: true,
            dropdownOptions: clients,
            dropdownValue: clientId,
            onDropdownValueChange: setClientId,
          },
          { label: 'Projects' },
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
        leading={{ prefix: client.prefix }}
        items={[
          {
            label: client.label,
            showDropdown: true,
            dropdownOptions: clients,
            dropdownValue: clientId,
            onDropdownValueChange: setClientId,
          },
          {
            kind: 'back',
            id: 'back',
            label: 'Back to projects',
            onClick: () => window.alert('Navigate to /clients/client-a/projects'),
          },
          { label: 'MSL Insights – May 2026' },
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
    items: defaultTrail,
    leading: { prefix: 'A' },
  },
  render: (args) => <BreadcrumbBar {...args} />,
};
