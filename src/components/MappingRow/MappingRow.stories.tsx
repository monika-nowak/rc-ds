import type { Meta, StoryObj } from '@storybook/react-vite';
import { MappingRow } from './MappingRow';
import { MappingRowGroup } from './MappingRowGroup';

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
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 640, width: '100%' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof MappingRow>;

export default meta;
type Story = StoryObj<typeof MappingRow>;

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

export const ValidationRow: Story = {
  name: 'Validation Row',
  parameters: {
    docs: {
      description: {
        story:
          'Single validation row — change `sourceField`, `status.label`, and `message` for each issue. Layout and error styling stay the same.',
      },
    },
  },
  args: {
    variant: 'validation',
    sourceField: 'HCP Name',
    status: { label: 'Missing', tone: 'error' },
    message: 'No value found in this column for the uploaded file.',
  },
};

export const ValidationContext: Story = {
  name: 'Validation Context',
  parameters: {
    docs: {
      description: {
        story:
          'Related validation rows wrapped in `MappingRowGroup` with `context`, rendering the error-tinted "Validation Context" panel from Figma. Each row is the same component with different text props.',
      },
    },
  },
  args: {
    variant: 'validation',
    sourceField: 'HCP Name',
    status: { label: 'Missing', tone: 'error' },
    message: 'No value found in this column for the uploaded file.',
  },
  render: () => (
    <MappingRowGroup context>
      <MappingRow
        variant="validation"
        sourceField="HCP Name"
        status={{ label: 'Missing', tone: 'error' }}
        message="No value found in this column for the uploaded file."
      />
      <MappingRow
        variant="validation"
        sourceField="HCP Name"
        status={{ label: 'Wrong name', tone: 'error' }}
        message="Expected HCP Name but found Question in your file."
      />
    </MappingRowGroup>
  ),
};

export const AllValidationStates: Story = {
  name: 'All validation states',
  parameters: {
    docs: {
      description: {
        story:
          'Validation rows wrapped in `MappingRowGroup`, which aligns them into clean columns: chips share the widest chip width, status pills line up, and messages start at the same x. Shows the available pill tones: warning, error, success, and neutral.',
      },
    },
  },
  args: {
    variant: 'validation',
    sourceField: 'HCP Name',
    status: { label: 'Missing', tone: 'error' },
    message: 'Add a column named HCP Name to your file.',
  },
  render: () => (
    <MappingRowGroup>
      <MappingRow
        variant="validation"
        sourceField="HCP Name"
        status={{ label: 'Missing', tone: 'error' }}
        message="Add a column named HCP Name to your file."
      />
      <MappingRow
        variant="validation"
        sourceField="MSL Name"
        status={{ label: 'Wrong name', tone: 'error' }}
        message="Found CSL instead. Rename the column to MSL Name."
      />
      <MappingRow
        variant="validation"
        sourceField="Territory"
        status={{ label: 'Matched', tone: 'success' }}
        message="Mapped to Territory."
      />
      <MappingRow
        variant="validation"
        sourceField="Notes"
        status={{ label: 'Ignored', tone: 'neutral' }}
        message="Column Notes will not be imported."
      />
    </MappingRowGroup>
  ),
};
