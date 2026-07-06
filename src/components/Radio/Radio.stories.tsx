import type { Meta, StoryObj } from '@storybook/react-vite';
import { Radio } from './Radio';

const meta = {
  title: 'Components/Radio',
  component: Radio,
  tags: ['autodocs'],
  args: {
    label: 'Label',
    showLabel: true,
    name: 'example',
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unchecked: Story = {};

export const Checked: Story = {
  args: { defaultChecked: true },
};

export const DisabledUnchecked: Story = {
  name: 'Disabled — unchecked',
  args: { disabled: true },
};

export const DisabledChecked: Story = {
  name: 'Disabled — checked',
  args: { defaultChecked: true, disabled: true },
};

export const WithoutLabel: Story = {
  args: { showLabel: false, defaultChecked: true, label: 'Select option' },
};

export const Standalone: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <Radio showLabel={false} name="standalone" label="Unchecked" />
      <Radio showLabel={false} name="standalone" defaultChecked label="Checked" />
    </div>
  ),
};
