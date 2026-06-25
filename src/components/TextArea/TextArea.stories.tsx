import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextArea } from './TextArea';

const meta = {
  title: 'Components/Text Area',
  component: TextArea,
  tags: ['autodocs'],
  args: {
    label: 'Label',
    placeholder: 'Add a note…',
    helperText: 'Helper text',
    showLabel: true,
    showHelperText: true,
  },
  argTypes: {
    showLabel: { control: 'boolean' },
    showHelperText: { control: 'boolean' },
  },
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Focus: Story = {
  args: { state: 'focus' },
};

export const Filled: Story = {
  args: {
    defaultValue:
      'This is a longer note that wraps across multiple lines in the text area field.',
  },
};

export const Error: Story = {
  args: {
    defaultValue: 'This note is too long for the allowed limit.',
    helperText: 'Error message',
    state: 'error',
  },
};

export const Disabled: Story = {
  args: { state: 'disabled' },
};

export const WithoutLabel: Story = {
  args: {
    showLabel: false,
    defaultValue: 'This is a longer note that wraps across multiple lines.',
  },
};

export const WithoutHelper: Story = {
  args: {
    showHelperText: false,
    defaultValue: 'This is a longer note that wraps across multiple lines.',
  },
};

export const FieldOnly: Story = {
  args: {
    showLabel: false,
    showHelperText: false,
    placeholder: 'Add a note…',
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
        <TextArea label="Label" placeholder="Add a note…" helperText="Helper text" />
      </div>
      <div>
        <div style={{ fontSize: 12, color: '#5a575d', marginBottom: 16 }}>Focus</div>
        <TextArea label="Label" placeholder="Add a note…" helperText="Helper text" state="focus" />
      </div>
      <div>
        <div style={{ fontSize: 12, color: '#5a575d', marginBottom: 16 }}>Filled</div>
        <TextArea
          label="Label"
          defaultValue="This is a longer note that wraps across multiple lines."
          helperText="Helper text"
        />
      </div>
      <div>
        <div style={{ fontSize: 12, color: '#5a575d', marginBottom: 16 }}>Error</div>
        <TextArea
          label="Label"
          defaultValue="This note exceeds the limit."
          helperText="Error message"
          state="error"
        />
      </div>
      <div>
        <div style={{ fontSize: 12, color: '#5a575d', marginBottom: 16 }}>Disabled</div>
        <TextArea label="Label" placeholder="Add a note…" helperText="Helper text" state="disabled" />
      </div>
    </div>
  ),
};
