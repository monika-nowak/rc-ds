import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from './Checkbox';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  args: {
    label: 'Label',
    showLabel: true,
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unchecked: Story = {};

export const Checked: Story = {
  args: { defaultChecked: true },
};

export const Indeterminate: Story = {
  args: { indeterminate: true },
};

export const DisabledUnchecked: Story = {
  name: 'Disabled — unchecked',
  args: { disabled: true },
};

export const DisabledChecked: Story = {
  name: 'Disabled — checked',
  args: { defaultChecked: true, disabled: true },
};

export const DisabledIndeterminate: Story = {
  name: 'Disabled — indeterminate',
  args: { indeterminate: true, disabled: true },
};

export const WithoutLabel: Story = {
  args: { showLabel: false, defaultChecked: true, label: 'Select row' },
};

export const Interactive: Story = {
  render: () => <Checkbox label="Click me" />,
};

export const Standalone: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <Checkbox showLabel={false} label="Unchecked" />
      <Checkbox showLabel={false} defaultChecked label="Checked" />
      <Checkbox showLabel={false} indeterminate label="Indeterminate" />
    </div>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 80, padding: 24, alignItems: 'start' }}>
      <div>
        <div style={{ fontSize: 12, color: '#5a575d', marginBottom: 24 }}>Default</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <Checkbox label="Unchecked" />
          <Checkbox label="Checked" defaultChecked />
          <Checkbox label="Indeterminate" indeterminate />
        </div>
      </div>
      <div>
        <div style={{ fontSize: 12, color: '#5a575d', marginBottom: 24 }}>Disabled</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <Checkbox label="Unchecked" disabled />
          <Checkbox label="Checked" defaultChecked disabled />
          <Checkbox label="Indeterminate" indeterminate disabled />
        </div>
      </div>
    </div>
  ),
};
