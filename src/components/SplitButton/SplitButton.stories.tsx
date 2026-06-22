import type { Meta, StoryObj } from '@storybook/react-vite';
import { SplitButton } from './SplitButton';

const menuItems = [
  { id: 'draft', label: 'Save as draft' },
  { id: 'schedule', label: 'Schedule for later' },
  { id: 'duplicate', label: 'Duplicate' },
];

const meta = {
  title: 'Components/Split Button',
  component: SplitButton,
  tags: ['autodocs'],
  args: {
    children: 'Create & Send',
    menuItems,
    onMainClick: () => undefined,
  },
} satisfies Meta<typeof SplitButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { variant: 'primary' },
};

export const Secondary: Story = {
  args: { variant: 'secondary' },
};

export const Small: Story = {
  args: { variant: 'primary', size: 'sm' },
};

export const WithMenu: Story = {
  render: (args) => (
    <div style={{ padding: 24, minHeight: 200 }}>
      <SplitButton
        {...args}
        onMainClick={() => alert('Create & Send')}
        menuItems={[
          { id: 'draft', label: 'Save as draft', onSelect: () => alert('Save as draft') },
          { id: 'schedule', label: 'Schedule for later', onSelect: () => alert('Scheduled') },
          { id: 'duplicate', label: 'Duplicate', onSelect: () => alert('Duplicated') },
        ]}
      />
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 16, padding: 24, minHeight: 280 }}>
      <SplitButton variant="primary" menuItems={menuItems}>
        Create & Send
      </SplitButton>
      <SplitButton variant="secondary" menuItems={menuItems}>
        Create & Send
      </SplitButton>
      <SplitButton variant="primary" size="sm" menuItems={menuItems}>
        Create & Send
      </SplitButton>
      <SplitButton variant="secondary" size="sm" menuItems={menuItems}>
        Create & Send
      </SplitButton>
      <SplitButton variant="primary" menuItems={menuItems} disabled>
        Create & Send
      </SplitButton>
    </div>
  ),
};
