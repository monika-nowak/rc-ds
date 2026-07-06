import type { Meta, StoryObj } from '@storybook/react-vite';
import { Steps } from './Steps';

const uploadPipelineSteps = [
  { label: 'Upload' },
  { label: 'Map columns' },
  { label: 'Review values' },
  { label: 'Import' },
];

const meta = {
  title: 'Components/Steps',
  component: Steps,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Horizontal step indicator for multi-step flows (e.g. upload pipeline). Active step uses inverse badge + primary label; upcoming and completed steps use neutral-100 badge + tertiary label. Separators use Icon/arrow-right with icon/secondary on the completed path and icon/tertiary elsewhere.',
      },
    },
  },
  argTypes: {
    currentStep: { control: { type: 'number', min: 0, max: 3 } },
  },
} satisfies Meta<typeof Steps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UploadPipeline: Story = {
  name: 'Upload pipeline · step 1',
  args: {
    steps: uploadPipelineSteps,
    currentStep: 0,
  },
};

export const Step2: Story = {
  name: 'Upload pipeline · step 2',
  args: {
    steps: uploadPipelineSteps,
    currentStep: 1,
  },
};

export const Step3: Story = {
  name: 'Upload pipeline · step 3',
  args: {
    steps: uploadPipelineSteps,
    currentStep: 2,
  },
};

export const Step4: Story = {
  name: 'Upload pipeline · step 4',
  args: {
    steps: uploadPipelineSteps,
    currentStep: 3,
  },
};

export const AllStates: Story = {
  args: {
    steps: uploadPipelineSteps,
    currentStep: 0,
  },
  render: () => (
    <div style={{ display: 'grid', gap: 24 }}>
      {uploadPipelineSteps.map((_, index) => (
        <Steps key={index} steps={uploadPipelineSteps} currentStep={index} />
      ))}
    </div>
  ),
};
