import type { Meta, StoryObj } from '@storybook/react-vite';
import { Flag, Info as InfoIcon, Warning as WarningIcon, CheckCircle } from '@phosphor-icons/react';
import { Alert } from './Alert';

const meta = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Error: Story = {
  args: {
    type: 'error',
    icon: <Flag size={20} weight="fill" />,
    children: (
      <>
        <strong>This teaches the model – it doesn’t change the report.</strong>
        <br />
        Use Flag when the AI got something wrong. To just reword the text, use Edit instead.
      </>
    ),
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
    icon: <WarningIcon size={20} weight="fill" />,
    children: 'Review this section before publishing.',
  },
};

export const Success: Story = {
  args: {
    type: 'success',
    icon: <CheckCircle size={20} weight="fill" />,
    children: 'Changes saved successfully.',
  },
};

export const Info: Story = {
  args: {
    type: 'info',
    icon: <InfoIcon size={20} weight="fill" />,
    children: 'This action can be undone from version history.',
  },
};

export const AllTypes: Story = {
  args: { children: 'Alert' },
  render: () => (
    <div style={{ display: 'grid', gap: 16, maxWidth: 480 }}>
      <Alert type="error" icon={<Flag size={20} weight="fill" />}>
        <strong>Flag an issue</strong> when the AI got something wrong.
      </Alert>
      <Alert type="warning" icon={<WarningIcon size={20} weight="fill" />}>
        Review before publishing.
      </Alert>
      <Alert type="success" icon={<CheckCircle size={20} weight="fill" />}>
        Saved successfully.
      </Alert>
      <Alert type="info" icon={<InfoIcon size={20} weight="fill" />}>
        You can undo this from version history.
      </Alert>
    </div>
  ),
};
