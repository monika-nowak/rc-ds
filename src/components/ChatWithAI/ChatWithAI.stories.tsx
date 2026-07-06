import { useState } from 'react';
import type { Decorator, Meta, StoryObj } from '@storybook/react-vite';
import { ChatWithAI, type Reference, type ReferenceOption } from './ChatWithAI';

const SCREENSHOT_SUGGESTIONS = [
  'Break down by specialty',
  'Academic vs community',
  'Why are HCPs deviating?',
  'Is this growing MoM?',
];

const SCREENSHOT_REFERENCE_OPTIONS: ReferenceOption[] = [
  {
    id: 'signal-4',
    kind: 'signal',
    shorthand: 'S4',
    label: 'Signal 4',
    meta: 'this signal',
  },
  {
    id: 'signal-2',
    kind: 'signal',
    shorthand: 'S2',
    label: 'Signal 2',
    meta: 'this signal',
  },
  {
    id: 'trend-1',
    kind: 'trend',
    shorthand: 'T1',
    label: 'Trend 1',
    meta: 'Brain metastases 1L',
  },
  {
    id: 'trend-2',
    kind: 'trend',
    shorthand: 'T2',
    label: 'Trend 2',
    meta: 'Dose modifications',
  },
];

const meta = {
  title: 'Components/Chat with AI',
  component: ChatWithAI,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    value: '',
    onChange: () => undefined,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 640, width: '100%' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ChatWithAI>;

export default meta;
type Story = StoryObj<typeof meta>;

const referenceStoryDecorator: Decorator = (Story) => (
  <div style={{ maxWidth: 640, width: '100%', paddingTop: 240 }}>
    <Story />
  </div>
);

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Click a suggestion chip to select it and fill the input. Click the selected chip again to deselect it.',
      },
    },
  },
  render: () => {
    const [value, setValue] = useState('');
    const [activeSuggestion, setActiveSuggestion] = useState<string | undefined>();
    const [references, setReferences] = useState<Reference[]>([]);

    return (
      <ChatWithAI
        value={value}
        onChange={setValue}
        suggestions={SCREENSHOT_SUGGESTIONS}
        activeSuggestion={activeSuggestion}
        onSuggestionClick={setActiveSuggestion}
        references={references}
        onReferencesChange={setReferences}
        referenceOptions={SCREENSHOT_REFERENCE_OPTIONS}
        onSubmit={(message) => {
          // eslint-disable-next-line no-console
          console.log('Submitted:', message, 'references:', references);
        }}
      />
    );
  },
};

export const ReferenceMenuOpen: Story = {
  name: 'Reference menu · type @',
  decorators: [referenceStoryDecorator],
  parameters: {
    docs: {
      description: {
        story:
          'Type @ in the input to open the reference picker above the bar. Placeholder copy includes @ guidance; no separate helper line.',
      },
    },
  },
  render: () => {
    const [value, setValue] = useState('@');
    const [references, setReferences] = useState<Reference[]>([]);

    return (
      <ChatWithAI
        value={value}
        onChange={setValue}
        references={references}
        onReferencesChange={setReferences}
        referenceOptions={SCREENSHOT_REFERENCE_OPTIONS}
        suggestions={SCREENSHOT_SUGGESTIONS}
        activeSuggestion={SCREENSHOT_SUGGESTIONS[0]}
        onSubmit={(message) => {
          // eslint-disable-next-line no-console
          console.log('Submitted:', message, 'references:', references);
        }}
      />
    );
  },
};

export const WithReferences: Story = {
  decorators: [referenceStoryDecorator],
  parameters: {
    docs: {
      description: {
        story:
          'Pre-attached reference tag with remove control. Click the X on "Signal 4" to remove it from the input.',
      },
    },
  },
  render: () => {
    const [value, setValue] = useState(SCREENSHOT_SUGGESTIONS[2]);
    const [activeSuggestion, setActiveSuggestion] = useState<string | undefined>(
      SCREENSHOT_SUGGESTIONS[2],
    );
    const [references, setReferences] = useState<Reference[]>([
      SCREENSHOT_REFERENCE_OPTIONS[0],
    ]);

    return (
      <div style={{ display: 'grid', gap: 8 }}>
        <ChatWithAI
          value={value}
          onChange={setValue}
          references={references}
          onReferencesChange={setReferences}
          referenceOptions={SCREENSHOT_REFERENCE_OPTIONS}
          suggestions={SCREENSHOT_SUGGESTIONS}
          activeSuggestion={activeSuggestion}
          onSuggestionClick={setActiveSuggestion}
          onSubmit={(message) => {
            // eslint-disable-next-line no-console
            console.log('Submitted:', message, 'references:', references);
          }}
        />
        <p
          style={{
            margin: 0,
            color: 'var(--rc-text-tertiary)',
            font: '400 12px/16px var(--rc-font-sans)',
          }}
        >
          {references.length === 0
            ? 'No references attached.'
            : `Attached: ${references.map((reference) => reference.label).join(', ')}`}
        </p>
      </div>
    );
  },
};

export const WithoutSuggestions: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <ChatWithAI
        value={value}
        onChange={setValue}
        onSubmit={(message) => {
          // eslint-disable-next-line no-console
          console.log('Submitted:', message);
        }}
      />
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <ChatWithAI
      value={SCREENSHOT_SUGGESTIONS[0]}
      onChange={() => undefined}
      disabled
      suggestions={SCREENSHOT_SUGGESTIONS}
      activeSuggestion={SCREENSHOT_SUGGESTIONS[0]}
      references={[SCREENSHOT_REFERENCE_OPTIONS[0]]}
      referenceOptions={SCREENSHOT_REFERENCE_OPTIONS}
    />
  ),
};

export const Loading: Story = {
  render: () => {
    const [value, setValue] = useState(SCREENSHOT_SUGGESTIONS[2]);
    const [activeSuggestion, setActiveSuggestion] = useState<string | undefined>(
      SCREENSHOT_SUGGESTIONS[2],
    );

    return (
      <ChatWithAI
        value={value}
        onChange={setValue}
        loading
        suggestions={SCREENSHOT_SUGGESTIONS}
        activeSuggestion={activeSuggestion}
        onSuggestionClick={setActiveSuggestion}
      />
    );
  },
};
