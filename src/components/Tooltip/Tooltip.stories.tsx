import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon } from '../../icons';
import { SideNavItem } from '../SideNav';
import { Tooltip, TooltipBubble } from './Tooltip';

const meta = {
  title: 'Components/Tooltip',
  component: TooltipBubble,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Carbon-style tooltip: inverse surface, 12px text, compact single-line padding (12×2px), multiline padding 12px, 6px caret, 4px offset from trigger.',
      },
    },
  },
} satisfies Meta<typeof TooltipBubble>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SingleLine: Story = {
  args: {
    content: 'Projects',
    placement: 'top',
  },
};

export const MultiLine: Story = {
  args: {
    content: 'Brief helpful context that may wrap to multiple lines.',
    placement: 'top',
    multiline: true,
  },
};

export const AllPlacements: Story = {
  args: {
    content: 'Projects',
    placement: 'top',
  },
  render: () => (
    <div style={{ display: 'flex', gap: 32, alignItems: 'center', flexWrap: 'wrap' }}>
      <TooltipBubble content="Projects" placement="top" />
      <TooltipBubble content="Projects" placement="bottom" />
      <TooltipBubble content="Projects" placement="left" />
      <TooltipBubble content="Projects" placement="right" />
    </div>
  ),
};

export const WithSideNavItem: Story = {
  name: 'Side Nav (PoC)',
  args: {
    content: 'Projects',
    placement: 'top',
  },
  render: () => (
    <Tooltip content="Projects" placement="right">
      <SideNavItem active label="Projects" icon={<Icon name="cards-three" size={16} />} />
    </Tooltip>
  ),
};
