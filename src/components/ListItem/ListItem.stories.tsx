import type { Meta, StoryObj } from '@storybook/react-vite';
import { ListItem } from './ListItem';

const meta = {
  title: 'Components/List Item',
  component: ListItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof ListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Selectable: Story = {
  args: {
    type: 'selectable',
    label: 'MSL Records',
    metaValue: '2,430',
    metaLabel: 'records',
  },
};

export const File: Story = {
  args: {
    type: 'file',
    fileName: 'data_export.csv',
    fileSize: '87.2 KB',
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
        maxWidth: 640,
        width: '100%',
      }}
    >
      <ListItem
        type="selectable"
        label="MSL Records"
        metaValue="2,430"
        metaLabel="records"
      />
      <ListItem type="file" fileName="data_export.csv" fileSize="87.2 KB" />
    </div>
  ),
};
