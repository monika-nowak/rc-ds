import type { Meta, StoryObj } from '@storybook/react-vite';
import { DatePicker } from './DatePicker';

const meta = {
  title: 'Components/Date Picker',
  component: DatePicker,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      story: {
        inline: false,
        iframeHeight: 460,
      },
    },
  },
  args: {
    label: 'Date',
    placeholder: 'mm/dd/yyyy',
    helperText: 'Helper text',
    showLabel: true,
    showHelperText: false,
  },
  argTypes: {
    showLabel: { control: 'boolean' },
    showHelperText: { control: 'boolean' },
  },
} satisfies Meta<typeof DatePicker>;

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
    defaultValue: '06/10/2026',
    state: 'filled',
  },
};

export const Open: Story = {
  args: {
    defaultValue: '06/10/2026',
    state: 'open',
  },
  parameters: {
    docs: {
      description: {
        story: 'Click the trigger to open the calendar panel.',
      },
    },
  },
};

export const Error: Story = {
  args: {
    helperText: 'Error message',
    showHelperText: true,
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
    defaultValue: '06/10/2026',
  },
};

export const WithoutLabel: Story = {
  args: {
    showLabel: false,
    defaultValue: '06/10/2026',
  },
};

export const WithoutHelper: Story = {
  args: {
    showHelperText: false,
    defaultValue: '06/10/2026',
  },
};

export const ComposedExample: Story = {
  name: 'Open + Calendar',
  render: () => (
    <div style={{ padding: 24, maxWidth: 288 }}>
      <DatePicker
        label="Start date"
        defaultValue="06/10/2026"
        state="open"
      />
    </div>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 288px)',
        gap: 48,
        padding: 24,
        alignItems: 'start',
      }}
    >
      <div>
        <div style={{ fontSize: 12, color: '#5a575d', marginBottom: 16 }}>Default</div>
        <DatePicker label="Date" placeholder="mm/dd/yyyy" helperText="Helper text" />
      </div>
      <div>
        <div style={{ fontSize: 12, color: '#5a575d', marginBottom: 16 }}>Focus</div>
        <DatePicker label="Date" placeholder="mm/dd/yyyy" helperText="Helper text" state="focus" />
      </div>
      <div>
        <div style={{ fontSize: 12, color: '#5a575d', marginBottom: 16 }}>Filled</div>
        <DatePicker label="Date" defaultValue="06/10/2026" helperText="Helper text" />
      </div>
      <div>
        <div style={{ fontSize: 12, color: '#5a575d', marginBottom: 16 }}>Open</div>
        <DatePicker label="Date" defaultValue="06/10/2026" state="open" />
      </div>
      <div>
        <div style={{ fontSize: 12, color: '#5a575d', marginBottom: 16 }}>Error</div>
        <DatePicker
          label="Date"
          placeholder="mm/dd/yyyy"
          helperText="Error message"
          showHelperText
          state="error"
        />
      </div>
      <div>
        <div style={{ fontSize: 12, color: '#5a575d', marginBottom: 16 }}>Disabled</div>
        <DatePicker label="Date" placeholder="mm/dd/yyyy" helperText="Helper text" state="disabled" />
      </div>
      <div>
        <div style={{ fontSize: 12, color: '#5a575d', marginBottom: 16 }}>Small</div>
        <DatePicker label="Date" defaultValue="06/10/2026" size="sm" />
      </div>
    </div>
  ),
};
