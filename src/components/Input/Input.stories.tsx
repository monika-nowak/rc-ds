import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './Input';

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    helperText: 'Helper text',
    showLabel: true,
    showHelperText: true,
  },
  argTypes: {
    showLabel: { control: 'boolean' },
    showHelperText: { control: 'boolean' },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Focus: Story = {
  args: {
    state: 'focus',
  },
};

export const Filled: Story = {
  args: {
    defaultValue: 'Value text',
  },
};

export const Error: Story = {
  args: {
    defaultValue: 'Value text',
    helperText: 'Error message',
    state: 'error',
  },
};

export const Disabled: Story = {
  args: {
    state: 'disabled',
  },
};

export const WithoutLabel: Story = {
  args: {
    showLabel: false,
    defaultValue: 'Value text',
  },
};

export const WithoutHelper: Story = {
  args: {
    showHelperText: false,
    defaultValue: 'Value text',
  },
};

export const FieldOnly: Story = {
  args: {
    showLabel: false,
    showHelperText: false,
    placeholder: 'Placeholder',
  },
};

export const AllStates: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 280px)',
        gap: 48,
        padding: 24,
        alignItems: 'start',
      }}
    >
      <div>
        <div style={{ fontSize: 12, color: '#5a575d', marginBottom: 16 }}>Default</div>
        <Input label="Label" placeholder="Placeholder" helperText="Helper text" />
      </div>
      <div>
        <div style={{ fontSize: 12, color: '#5a575d', marginBottom: 16 }}>Focus</div>
        <Input label="Label" placeholder="Placeholder" helperText="Helper text" state="focus" />
      </div>
      <div>
        <div style={{ fontSize: 12, color: '#5a575d', marginBottom: 16 }}>Filled</div>
        <Input label="Label" defaultValue="Value text" helperText="Helper text" />
      </div>
      <div>
        <div style={{ fontSize: 12, color: '#5a575d', marginBottom: 16 }}>Error</div>
        <Input
          label="Label"
          defaultValue="Value text"
          helperText="Error message"
          state="error"
        />
      </div>
      <div>
        <div style={{ fontSize: 12, color: '#5a575d', marginBottom: 16 }}>Disabled</div>
        <Input label="Label" placeholder="Placeholder" helperText="Helper text" state="disabled" />
      </div>
    </div>
  ),
};
