import type { Meta, StoryObj } from '@storybook/react-vite';
import { FileUpload } from './FileUpload';

const meta = {
  title: 'Components/File Upload',
  component: FileUpload,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    fileName: 'pfizer_source_records.csv',
    fileSize: '87.2 KB',
    columnsFound: 140,
    rowsFound: 264,
    onReplace: () => undefined,
  },
} satisfies Meta<typeof FileUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Filled: Story = {};

export const WithoutMetadata: Story = {
  args: {
    columnsFound: undefined,
    rowsFound: undefined,
    showMetadata: false,
  },
};

export const WithoutReplace: Story = {
  args: {
    onReplace: undefined,
  },
};
