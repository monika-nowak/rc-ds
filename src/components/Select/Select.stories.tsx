import type { Meta, StoryObj } from '@storybook/react-vite';
import { Select, type SelectEntry } from './Select';

const countryOptions: SelectEntry[] = [
  { kind: 'option', id: 'us', label: 'United States' },
  { kind: 'option', id: 'ca', label: 'Canada' },
  { kind: 'option', id: 'mx', label: 'Mexico' },
  { kind: 'option', id: 'uk', label: 'United Kingdom' },
  { kind: 'option', id: 'de', label: 'Germany' },
];

const groupedOptions: SelectEntry[] = [
  { kind: 'group', id: 'fruits', label: 'Fruits' },
  { kind: 'option', id: 'apple', label: 'Apple' },
  { kind: 'option', id: 'banana', label: 'Banana' },
  { kind: 'option', id: 'cherry', label: 'Cherry' },
  { kind: 'separator', id: 'sep-1' },
  { kind: 'group', id: 'vegetables', label: 'Vegetables' },
  { kind: 'option', id: 'carrot', label: 'Carrot' },
  { kind: 'option', id: 'pea', label: 'Pea', disabled: true },
];

const meta = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  args: {
    label: 'Label',
    placeholder: 'Select an option...',
    helperText: 'Helper text',
    showLabel: true,
    showHelperText: false,
    options: countryOptions,
  },
  argTypes: {
    showLabel: { control: 'boolean' },
    showHelperText: { control: 'boolean' },
  },
} satisfies Meta<typeof Select>;

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
    defaultValue: 'us',
  },
};

export const Open: Story = {
  args: {
    defaultValue: 'us',
  },
  parameters: {
    docs: {
      description: {
        story: 'Click the trigger to open the dropdown list.',
      },
    },
  },
};

export const Error: Story = {
  args: {
    defaultValue: 'us',
    helperText: 'Error message',
    state: 'error',
  },
};

export const Disabled: Story = {
  args: {
    state: 'disabled',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    defaultValue: 'us',
  },
};

export const WithGroups: Story = {
  args: {
    label: 'Food',
    options: groupedOptions,
    defaultValue: 'apple',
    showHelperText: false,
  },
};

export const WithoutLabel: Story = {
  args: {
    showLabel: false,
    defaultValue: 'us',
  },
};

export const WithoutHelper: Story = {
  args: {
    showHelperText: false,
    defaultValue: 'us',
  },
};

export const TriggerOnly: Story = {
  args: {
    showLabel: false,
    showHelperText: false,
    defaultValue: 'us',
  },
};

export const AllStates: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 280px)',
        gap: 48,
        padding: 24,
        alignItems: 'start',
      }}
    >
      <div>
        <div style={{ fontSize: 12, color: '#5a575d', marginBottom: 16 }}>Default</div>
        <Select label="Label" placeholder="Select an option..." helperText="Helper text" options={countryOptions} />
      </div>
      <div>
        <div style={{ fontSize: 12, color: '#5a575d', marginBottom: 16 }}>Focus</div>
        <Select
          label="Label"
          placeholder="Select an option..."
          helperText="Helper text"
          options={countryOptions}
          state="focus"
        />
      </div>
      <div>
        <div style={{ fontSize: 12, color: '#5a575d', marginBottom: 16 }}>Filled</div>
        <Select
          label="Label"
          helperText="Helper text"
          options={countryOptions}
          defaultValue="us"
        />
      </div>
      <div>
        <div style={{ fontSize: 12, color: '#5a575d', marginBottom: 16 }}>Error</div>
        <Select
          label="Label"
          helperText="Error message"
          options={countryOptions}
          defaultValue="us"
          state="error"
        />
      </div>
      <div>
        <div style={{ fontSize: 12, color: '#5a575d', marginBottom: 16 }}>Disabled</div>
        <Select
          label="Label"
          placeholder="Select an option..."
          helperText="Helper text"
          options={countryOptions}
          state="disabled"
        />
      </div>
      <div>
        <div style={{ fontSize: 12, color: '#5a575d', marginBottom: 16 }}>Small</div>
        <Select
          label="Label"
          helperText="Helper text"
          options={countryOptions}
          defaultValue="us"
          size="sm"
        />
      </div>
    </div>
  ),
};

export const ComposedExample: Story = {
  name: 'Select + Dropdown List',
  render: () => (
    <div style={{ padding: 24, maxWidth: 280 }}>
      <Select
        label="Country"
        placeholder="Select an option..."
        options={countryOptions}
        defaultValue="us"
      />
    </div>
  ),
};
