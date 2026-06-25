import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ChoiceTag, ChoiceTagGroup } from '../ChoiceTag';
import { IconButton } from '../IconButton';
import { Icon } from '../../icons';
import { Input } from './Input';

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    helperText: 'Helper text',
    showLabel: true,
    showHelperText: true,
  },
  argTypes: {
    variant: { control: 'select', options: ['default', 'ai'] },
    showLabel: { control: 'boolean' },
    showHelperText: { control: 'boolean' },
    showAiBadge: { control: 'boolean' },
    showAiAction: { control: 'boolean' },
    aiBadgeText: { control: 'text' },
    aiActionLabel: { control: 'text' },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Focus: Story = {
  args: {
    state: 'focus',
  },
};

export const Filled: Story = {
  args: {
    defaultValue: 'Value text',
  },
};

export const Error: Story = {
  args: {
    defaultValue: 'Value text',
    helperText: 'Error message',
    state: 'error',
  },
};

export const Disabled: Story = {
  args: {
    state: 'disabled',
  },
};

export const WithoutLabel: Story = {
  args: {
    showLabel: false,
    defaultValue: 'Value text',
  },
};

export const WithoutHelper: Story = {
  args: {
    showHelperText: false,
    defaultValue: 'Value text',
  },
};

export const FieldOnly: Story = {
  args: {
    showLabel: false,
    showHelperText: false,
    placeholder: 'Placeholder',
  },
};

export const AIGenerated: Story = {
  name: 'AI generated',
  args: {
    variant: 'ai',
    label: 'Narrative title',
    defaultValue: 'Brain metastases response as 1L confidence anchor',
    showHelperText: false,
    showAiBadge: true,
    showAiAction: true,
    aiActionLabel: 'Ask AI to redraft',
  },
};

export const AIWithRefinementTags: Story = {
  name: 'AI with refinement tags',
  args: { label: 'Label', placeholder: 'Placeholder', helperText: 'Helper text' },
  render: () => {
    const [refinement, setRefinement] = useState('direct');

    return (
      <div style={{ display: 'grid', gap: 12, maxWidth: 280 }}>
        <Input
          variant="ai"
          label="Narrative title"
          defaultValue="Brain metastases response as 1L confidence anchor"
          showHelperText={false}
          showAiBadge
          showAiAction
          aiActionLabel="Ask AI to redraft"
        />
        <ChoiceTagGroup
          value={refinement}
          onValueChange={setRefinement}
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

export const WithTrailingAction: Story = {
  name: 'With trailing action',
  args: {
    label: 'Search',
    placeholder: 'Search records…',
    showHelperText: false,
    trailingAction: (
      <IconButton variant="primary" size="md" label="Search">
        <Icon name="magnifying-glass" size={18} tone="on-color" />
      </IconButton>
    ),
  },
};

export const WithTrailingActionAI: Story = {
  name: 'With trailing action · AI',
  args: {
    variant: 'ai',
    label: 'Prompt',
    placeholder: 'Describe what to generate…',
    showHelperText: false,
    trailingAction: (
      <IconButton variant="ai" size="md" label="Generate with AI">
        <Icon name="sparkle" size={18} tone="on-color" />
      </IconButton>
    ),
  },
};

export const TrailingActionVariants: Story = {
  name: 'Trailing action variants',
  args: { label: 'Label', placeholder: 'Placeholder', helperText: 'Helper text' },
  render: () => (
    <div style={{ display: 'grid', gap: 16, maxWidth: 280 }}>
      <Input
        label="Primary"
        placeholder="Placeholder"
        showHelperText={false}
        trailingAction={
          <IconButton variant="primary" size="md" label="Search">
            <Icon name="magnifying-glass" size={18} tone="on-color" />
          </IconButton>
        }
      />
      <Input
        label="AI"
        placeholder="Placeholder"
        showHelperText={false}
        variant="ai"
        trailingAction={
          <IconButton variant="ai" size="md" label="Generate">
            <Icon name="sparkle" size={18} tone="on-color" />
          </IconButton>
        }
      />
      <Input
        label="AI secondary"
        placeholder="Placeholder"
        showHelperText={false}
        trailingAction={
          <IconButton variant="aiSecondary" size="md" label="Generate">
            <Icon name="sparkle" size={18} tone="ai" />
          </IconButton>
        }
      />
    </div>
  ),
};

export const AllStates: Story = {
  args: { label: 'Label', placeholder: 'Placeholder', helperText: 'Helper text' },
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 280px)',
        gap: 48,
        padding: 24,
        alignItems: 'start',
      }}
    >
      <div>
        <div style={{ fontSize: 12, color: '#5a575d', marginBottom: 16 }}>Default</div>
        <Input label="Label" placeholder="Placeholder" helperText="Helper text" />
      </div>
      <div>
        <div style={{ fontSize: 12, color: '#5a575d', marginBottom: 16 }}>Focus</div>
        <Input label="Label" placeholder="Placeholder" helperText="Helper text" state="focus" />
      </div>
      <div>
        <div style={{ fontSize: 12, color: '#5a575d', marginBottom: 16 }}>Filled</div>
        <Input label="Label" defaultValue="Value text" helperText="Helper text" />
      </div>
      <div>
        <div style={{ fontSize: 12, color: '#5a575d', marginBottom: 16 }}>Error</div>
        <Input
          label="Label"
          defaultValue="Value text"
          helperText="Error message"
          state="error"
        />
      </div>
      <div>
        <div style={{ fontSize: 12, color: '#5a575d', marginBottom: 16 }}>Disabled</div>
        <Input label="Label" placeholder="Placeholder" helperText="Helper text" state="disabled" />
      </div>
    </div>
  ),
};
