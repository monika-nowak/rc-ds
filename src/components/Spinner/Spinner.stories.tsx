import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from '../Badge';
import { Spinner } from './Spinner';

const meta = {
  title: 'Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '3×3 dot grid loader with a center-out opacity wave. Matches Figma Spinner (Sm 18px, Lg 46px). Use `xs` (12px) inside Badge.',
      },
    },
  },
  argTypes: {
    size: { control: 'radio', options: ['xs', 'sm', 'lg'] },
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: { size: 'sm' },
};

export const ExtraSmall: Story = {
  name: 'Extra small (badge)',
  args: { size: 'xs' },
};

export const Large: Story = {
  args: { size: 'lg' },
};

export const InBadge: Story = {
  name: 'In badge · generating',
  render: () => (
    <Badge appearance="subtle" color="purple" loading>
      Generating…
    </Badge>
  ),
};

export const AllSizes: Story = {
  args: { size: 'sm' },
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
      <Spinner size="xs" />
      <Spinner size="sm" />
      <Spinner size="lg" />
    </div>
  ),
};
