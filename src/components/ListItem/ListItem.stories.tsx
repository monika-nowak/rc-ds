import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { DatePicker } from '../DatePicker';
import { Select } from '../Select';
import { ListItem } from './ListItem';
import styles from './ListItem.module.css';

const specialtyOptions = [
  { kind: 'option' as const, id: 'all', label: 'All' },
  { kind: 'option' as const, id: 'oncology', label: 'Oncology' },
  { kind: 'option' as const, id: 'cardiology', label: 'Cardiology' },
];

function FilterPanel() {
  return (
    <div className={styles.filters}>
      <DatePicker label="Date range" placeholder="All time" showHelperText={false} />
      <Select
        label="Specialty"
        placeholder="All"
        options={specialtyOptions}
        defaultValue="all"
        showHelperText={false}
      />
    </div>
  );
}

const meta = {
  title: 'Components/List Item',
  component: ListItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'List row variants: selectable (checkbox + optional expand panel), radio (single-select group), and file. Pass `children` on selectable rows to reveal a filter panel when checked.',
      },
    },
  },
} satisfies Meta<typeof ListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default docs preview — toggle the checkbox to expand/collapse filters. */
export const Selectable: Story = {
  args: {
    type: 'selectable',
    label: 'MSL Records',
    metaValue: '2,430',
    metaLabel: 'records',
  },
  parameters: {
    docs: {
      description: {
        story: 'Toggle the checkbox to expand or collapse the filter panel.',
      },
    },
  },
  render: function SelectableStory() {
    const [checked, setChecked] = useState(true);

    return (
      <div style={{ maxWidth: 720, width: '100%' }}>
        <ListItem
          type="selectable"
          label="MSL Records"
          metaValue="2,430"
          metaLabel="records"
          checked={checked}
          onCheckedChange={setChecked}
        >
          <FilterPanel />
        </ListItem>
      </div>
    );
  },
};

export const WithoutFilters: Story = {
  args: {
    type: 'selectable',
    label: 'MSL Records',
    metaValue: '2,430',
    metaLabel: 'records',
  },
};

export const ExpandableList: Story = {
  args: {
    type: 'selectable',
    label: 'MSL Records',
  },
  render: function ExpandableListStory() {
    const [mslChecked, setMslChecked] = useState(true);
    const [socialChecked, setSocialChecked] = useState(false);

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          maxWidth: 720,
          width: '100%',
        }}
      >
        <ListItem
          type="selectable"
          label="MSL Records"
          metaValue="2,430"
          metaLabel="records"
          checked={mslChecked}
          onCheckedChange={setMslChecked}
        >
          <FilterPanel />
        </ListItem>
        <ListItem
          type="selectable"
          label="Social Media Listening"
          metaValue="2,430"
          metaLabel="records"
          checked={socialChecked}
          onCheckedChange={setSocialChecked}
        >
          <FilterPanel />
        </ListItem>
      </div>
    );
  },
};

/** Full file row — icon tile, name + size, row count, and date columns. */
export const File: Story = {
  args: {
    type: 'file',
    fileName: 'File-name.csv',
    fileSize: '87.2 KB',
    rows: '248 rows',
    date: 'May 5, 2026',
  },
  parameters: {
    docs: {
      description: {
        story:
          'File row with a leading icon tile. The `fileSize`, `rows`, and `date` columns are each optional and render only when provided.',
      },
    },
  },
};

/** Every metadata column is independently toggleable. */
export const FileColumnVariants: Story = {
  args: {
    type: 'file',
    fileName: 'File-name.csv',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Each column (`fileSize`, `rows`, `date`) renders only when its prop is provided, so rows can show any combination.',
      },
    },
  },
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        maxWidth: 720,
        width: '100%',
      }}
    >
      <ListItem type="file" fileName="File-name.csv" fileSize="87.2 KB" rows="248 rows" date="May 5, 2026" />
      <ListItem type="file" fileName="File-name.csv" fileSize="87.2 KB" />
      <ListItem type="file" fileName="File-name.csv" rows="248 rows" />
      <ListItem type="file" fileName="File-name.csv" date="May 5, 2026" />
      <ListItem type="file" fileName="File-name.csv" />
    </div>
  ),
};

/** Single radio row — selected. In production, multiple rows share the same `name` for grouping. */
export const RadioSelected: Story = {
  args: {
    type: 'radio',
    label: 'MSL Records',
    metaValue: '2,430',
    metaLabel: 'records',
    name: 'example',
    value: 'a',
    checked: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Single radio row (selected). In production, multiple rows share the same `name` so only one can be selected — see **RadioGroup**.',
      },
    },
  },
};

/** Single radio row — unselected. */
export const RadioUnchecked: Story = {
  args: {
    type: 'radio',
    label: 'MSL Records',
    metaValue: '2,430',
    metaLabel: 'records',
    name: 'example',
    value: 'a',
    checked: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Single radio row (unselected). In production, multiple rows share the same `name` for single-select grouping.',
      },
    },
  },
};

/** Add-new radio row — opens a create flow instead of selecting. */
export const RadioAddNew: Story = {
  args: {
    type: 'radio',
    variant: 'add-new',
    label: 'New data source',
    name: 'example',
    value: 'new',
    onAddNewClick: () => {
      /* open add-new flow */
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Add-new row in a radio list. Shares `name` with sibling rows in production; activation calls `onAddNewClick` rather than selecting.',
      },
    },
  },
};

export const AllVariants: Story = {
  args: {
    type: 'selectable',
    label: 'MSL Records',
  },
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        maxWidth: 720,
        width: '100%',
      }}
    >
      <ListItem
        type="selectable"
        label="MSL Records"
        metaValue="2,430"
        metaLabel="records"
        defaultChecked
      >
        <FilterPanel />
      </ListItem>
      <ListItem type="file" fileName="File-name.csv" fileSize="87.2 KB" rows="248 rows" date="May 5, 2026" />
    </div>
  ),
};

export const RadioGroup: Story = {
  args: {
    type: 'radio',
    label: 'MSL Records',
    name: 'list-selection',
    value: 'msl',
  },
  parameters: {
    docs: {
      description: {
        story: 'Radio single-select rows. Entire row is clickable.',
      },
    },
  },
  render: function RadioGroupStory() {
    const [selected, setSelected] = useState('msl');

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          maxWidth: 720,
          width: '100%',
        }}
      >
        <ListItem
          type="radio"
          label="MSL Records"
          metaValue="2,430"
          metaLabel="records"
          name="list-selection"
          value="msl"
          checked={selected === 'msl'}
          onChange={setSelected}
        />
        <ListItem
          type="radio"
          label="Social Media Listening"
          metaValue="2,430"
          metaLabel="records"
          name="list-selection"
          value="social"
          checked={selected === 'social'}
          onChange={setSelected}
        />
        <ListItem
          type="radio"
          variant="add-new"
          label="New data source"
          name="list-selection"
          value="new"
          onAddNewClick={() => {
            /* open add-new flow */
          }}
        />
      </div>
    );
  },
};
