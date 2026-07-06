import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Button } from '../Button';
import { MappingRow } from '../MappingRow';
import { MappingTable } from './MappingTable';

const targetFieldOptions = [
  { kind: 'option' as const, id: 'treatment-sequencing', label: 'Treatment sequencing' },
  { kind: 'option' as const, id: 'patient-id', label: 'Patient ID' },
  { kind: 'option' as const, id: 'visit-date', label: 'Visit date' },
  { kind: 'option' as const, id: 'sentiment', label: 'Sentiment' },
  { kind: 'option' as const, id: 'score', label: 'Score' },
  { kind: 'option' as const, id: 'topic', label: 'Topic' },
];

const meta = {
  title: 'Components/Mapping Table',
  component: MappingTable,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Field mapping table for the upload pipeline. Pass any number of `MappingRow` children — one per source column. Column headers use `text/tertiary` and align with `MappingRow` source and select columns; the arrow column has no header.',
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
} satisfies Meta<typeof MappingTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FieldMapping: Story = {
  name: 'Field mapping',
  args: {
    children: null,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Typical upload mapping with three source columns. Unmapped rows show error borders until a target field is selected. Add more rows by rendering additional `MappingRow` children or mapping over your column list.',
      },
    },
  },
  render: () => (
    <MappingTable>
      <MappingRow
        sourceField="KIT Treatment Sequencing"
        state="unmapped"
        placeholder="Select field"
        options={targetFieldOptions}
      />
      <MappingRow
        sourceField="Patient Identifier"
        state="mapped"
        placeholder="Select field"
        options={targetFieldOptions}
        defaultValue="patient-id"
      />
      <MappingRow
        sourceField="Visit Date"
        state="unmapped"
        placeholder="Select field"
        options={targetFieldOptions}
      />
    </MappingTable>
  ),
};

type MappingEntry = {
  id: string;
  sourceField: string;
  targetValue?: string;
};

const initialDynamicRows: MappingEntry[] = [
  { id: 'kit-treatment', sourceField: 'KIT Treatment Sequencing' },
  { id: 'patient-id', sourceField: 'Patient Identifier', targetValue: 'patient-id' },
  { id: 'visit-date', sourceField: 'Visit Date' },
];

export const DynamicRows: Story = {
  name: 'Dynamic rows',
  args: {
    children: null,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Map over your column list to render rows. Use `state="mapped"` when `targetValue` is set; otherwise `state="unmapped"` shows error borders.',
      },
    },
  },
  render: function DynamicRowsStory() {
    const [rows, setRows] = useState(initialDynamicRows);

    const addRow = () => {
      const index = rows.length + 1;
      setRows((current) => [
        ...current,
        { id: `column-${index}`, sourceField: `New column ${index}` },
      ]);
    };

    return (
      <div style={{ display: 'grid', gap: 'var(--rc-spacing-4)' }}>
        <MappingTable>
          {rows.map((row) => (
            <MappingRow
              key={row.id}
              sourceField={row.sourceField}
              state={row.targetValue ? 'mapped' : 'unmapped'}
              placeholder="Select field"
              options={targetFieldOptions}
              value={row.targetValue}
              onValueChange={(targetValue) => {
                setRows((current) =>
                  current.map((entry) =>
                    entry.id === row.id ? { ...entry, targetValue } : entry,
                  ),
                );
              }}
            />
          ))}
        </MappingTable>
        <div>
          <Button type="button" variant="secondary" size="sm" onClick={addRow}>
            Add row
          </Button>
        </div>
      </div>
    );
  },
};

export const CustomLabels: Story = {
  name: 'Custom column labels',
  args: {
    children: null,
    sourceColumnLabel: 'Source column',
    targetColumnLabel: 'Destination field',
  },
  render: (args) => (
    <MappingTable {...args}>
      <MappingRow
        sourceField="sentiment_score"
        state="unmapped"
        placeholder="Select field"
        options={targetFieldOptions}
      />
    </MappingTable>
  ),
};

export const WithoutHeaders: Story = {
  name: 'Without headers',
  args: {
    children: null,
    showColumnHeaders: false,
  },
  render: (args) => (
    <MappingTable {...args}>
      <MappingRow
        sourceField="sentiment_score"
        state="unmapped"
        placeholder="Select field"
        options={targetFieldOptions}
      />
    </MappingTable>
  ),
};
