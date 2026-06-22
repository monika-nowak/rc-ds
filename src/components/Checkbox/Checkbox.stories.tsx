import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from './Checkbox';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unchecked: Story = {
  args: { label: 'Label', checkboxState: 'unchecked' },
};

export const Checked: Story = {
  args: { label: 'Label', checkboxState: 'checked' },
};

export const Indeterminate: Story = {
  args: { label: 'Label', checkboxState: 'indeterminate' },
};

export const WithoutLabel: Story = {
  args: { showLabel: false, checkboxState: 'checked', label: 'Select row' },
};
