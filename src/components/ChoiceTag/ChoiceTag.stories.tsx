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

export const MediumSize: Story = {
  args: { children: null, 'aria-label': 'Suggested prompts' },
  render: () => {
    const [value, setValue] = useState('Break down by specialty');

    return (
      <ChoiceTagGroup
        value={value}
        onValueChange={setValue}
        size="md"
        aria-label="Suggested prompts"
      >
        <ChoiceTag value="Break down by specialty">Break down by specialty</ChoiceTag>
        <ChoiceTag value="Academic vs community">Academic vs community</ChoiceTag>
        <ChoiceTag value="Why are HCPs deviating?">Why are HCPs deviating?</ChoiceTag>
        <ChoiceTag value="Is this growing MoM?">Is this growing MoM?</ChoiceTag>
      </ChoiceTagGroup>
    );
  },
};
