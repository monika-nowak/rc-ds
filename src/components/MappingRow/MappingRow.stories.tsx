import type { Meta, StoryObj } from '@storybook/react-vite';
import { MappingRow } from './MappingRow';

const targetFieldOptions = [
  { kind: 'option' as const, id: 'sentiment', label: 'Sentiment' },
  { kind: 'option' as const, id: 'score', label: 'Score' },
  { kind: 'option' as const, id: 'topic', label: 'Topic' },
  { kind: 'option' as const, id: 'date', label: 'Date' },
];

const meta = {
  title: 'Components/Mapping Row',
  component: MappingRow,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Column mapping row for the upload pipeline. Unmapped rows use error borders; the arrow connector and placeholder chevron use `icon/tertiary` for subtle decorative emphasis.',
      },
    },
  },
  argTypes: {
    state: {
      control: 'select',
      options: ['mapped', 'unmapped'],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 640, width: '100%' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof MappingRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unmapped: Story = {
  name: 'Unmapped',
  args: {
    sourceField: 'sentiment_score',
    state: 'unmapped',
    placeholder: 'Select field',
    options: targetFieldOptions,
  },
};

export const Mapped: Story = {
  name: 'Mapped',
  args: {
    sourceField: 'sentiment_score',
    state: 'mapped',
    placeholder: 'Select field',
    options: targetFieldOptions,
    defaultValue: 'sentiment',
  },
};

export const AllStates: Story = {
  name: 'All states',
  args: {
    sourceField: 'sentiment_score',
    state: 'unmapped',
    options: targetFieldOptions,
  },
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--rc-spacing-4)', width: '100%' }}>
      <MappingRow
        sourceField="sentiment_score"
        state="unmapped"
        placeholder="Select field"
        options={targetFieldOptions}
      />
      <MappingRow
        sourceField="record_date"
        state="mapped"
        placeholder="Select field"
        options={targetFieldOptions}
        defaultValue="date"
      />
    </div>
  ),
};
