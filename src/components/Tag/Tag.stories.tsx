import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon } from '../../icons';
import { Tag, type TagProps } from './Tag';

type TagStoryArgs = TagProps & {
  showIcon?: boolean;
  clickable?: boolean;
  dismissible?: boolean;
};

const leadingIcon = <Icon name="cell-signal-full" size={16} />;

function renderTag({ showIcon, clickable, dismissible, ...args }: TagStoryArgs) {
  return (
    <Tag
      {...args}
      icon={showIcon ? leadingIcon : undefined}
      onClick={clickable ? () => {} : undefined}
      onRemove={dismissible ? () => {} : undefined}
    />
  );
}

const meta = {
  title: 'Components/Tag',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'inline-radio', options: ['purple', 'blue'] },
    showIcon: { control: 'boolean', name: 'Leading icon' },
    clickable: { control: 'boolean', name: 'Clickable' },
    dismissible: { control: 'boolean', name: 'Dismiss ×' },
    icon: { control: false },
    onClick: { control: false },
    onRemove: { control: false },
  },
  render: renderTag,
} satisfies Meta<TagStoryArgs>;

export default meta;
type Story = StoryObj<TagStoryArgs>;

export const Purple: Story = {
  args: { children: 'T1', color: 'purple', showIcon: false, clickable: true, dismissible: false },
};

export const Blue: Story = {
  args: { children: 'R–12', color: 'blue', showIcon: false, clickable: true, dismissible: false },
};

export const WithIcon: Story = {
  name: 'With leading icon',
  args: { children: 'Trend 1', color: 'purple', showIcon: true, clickable: true, dismissible: false },
};

export const Dismissible: Story = {
  name: 'Icon + dismiss ×',
  args: { children: 'Whole report', color: 'purple', showIcon: true, clickable: true, dismissible: true },
};

export const Static: Story = {
  name: 'Static (non-clickable)',
  args: { children: 'S3', color: 'purple', showIcon: false, clickable: false, dismissible: false },
};

const COLORS = ['purple', 'blue'] as const;

/** Full matrix: color × leading icon (on/off) × dismiss × (on/off) × clickable/static. */
export const Matrix: Story = {
  render: () => {
    const cellLabel = (color: string) => (color === 'blue' ? 'R–12' : 'T1');
    const rows: { title: string; icon: boolean; remove: boolean }[] = [
      { title: 'Label only', icon: false, remove: false },
      { title: 'Leading icon', icon: true, remove: false },
      { title: 'Dismiss ×', icon: false, remove: true },
      { title: 'Icon + dismiss ×', icon: true, remove: true },
    ];
    return (
      <div style={{ display: 'grid', gap: 20 }}>
        {(['Clickable', 'Static'] as const).map((mode) => (
          <div key={mode} style={{ display: 'grid', gap: 12 }}>
            <div style={{ fontSize: 12, color: '#757277' }}>{mode}</div>
            {rows.map((row) => (
              <div key={row.title} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <span style={{ width: 130, fontSize: 11, color: '#757277' }}>{row.title}</span>
                {COLORS.map((color) => (
                  <Tag
                    key={color}
                    color={color}
                    icon={row.icon ? <Icon name="cell-signal-full" size={16} /> : undefined}
                    onClick={mode === 'Clickable' ? () => {} : undefined}
                    onRemove={row.remove ? () => {} : undefined}
                  >
                    {cellLabel(color)}
                  </Tag>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  },
};
