import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ChoiceTag, ChoiceTagGroup } from './ChoiceTag';

const meta = {
  title: 'Components/Choice Tag',
  component: ChoiceTagGroup,
  tags: ['autodocs'],
  subcomponents: { ChoiceTag },
} satisfies Meta<typeof ChoiceTagGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SingleSelect: Story = {
  args: { children: null, 'aria-label': 'Refinement style' },
  render: () => {
    const [value, setValue] = useState('direct');

    return (
      <div
        style={{
          padding: 16,
          borderRadius: 8,
          background: 'var(--rc-button-ai-ghost)',
        }}
      >
        <ChoiceTagGroup
          value={value}
          onValueChange={setValue}
          aria-label="Refinement style"
        >
          <ChoiceTag value="direct">More direct</ChoiceTag>
          <ChoiceTag value="reframe">Reframe</ChoiceTag>
          <ChoiceTag value="tighten">Tighten tone</ChoiceTag>
        </ChoiceTagGroup>
      </div>
    );
  },
};

export const Disabled: Story = {
  args: { children: null, 'aria-label': 'Refinement style' },
  render: () => (
    <ChoiceTagGroup value="direct" disabled aria-label="Refinement style">
      <ChoiceTag value="direct">More direct</ChoiceTag>
      <ChoiceTag value="reframe">Reframe</ChoiceTag>
      <ChoiceTag value="tighten">Tighten tone</ChoiceTag>
    </ChoiceTagGroup>
  ),
};
