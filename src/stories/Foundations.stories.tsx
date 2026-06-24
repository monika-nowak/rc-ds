import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  FoundationSection,
  PrimitiveRamp,
  Swatch,
} from '../foundations/Foundations';
import {
  primitiveFamilies,
  primitiveSteps,
  semanticGroups,
} from '../tokens/css-vars';
import tokens from '../tokens/figma-tokens.json';
import styles from '../foundations/Foundations.module.css';

const meta = {
  title: 'Foundations',
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

function toVar(token: string) {
  return `--rc-${token.replace(/\//g, '-')}`;
}

export const Colors: Story = {
  name: 'Colors',
  render: () => (
  <>
    <FoundationSection
      title="Colors"
      description="Primitive palette and semantic tokens (Light). Canvas: background/canvas or background/blank. Surfaces: layer/01–03 with hover, active, and selected-01 states."
    >
      <h3 className={styles.groupTitle}>Primitives</h3>
      {primitiveFamilies.map((family) => (
        <PrimitiveRamp key={family} family={family} steps={primitiveSteps(family)} />
      ))}
      <div className={styles.ramp}>
        <div className={styles.rampLabel}>white / black</div>
        <div className={styles.rampRow}>
          {['white/1000', 'black/1000'].map((step) => (
            <div key={step} className={styles.rampStep}>
              <div
                className={styles.rampColor}
                style={{
                  background: `var(${toVar(step)})`,
                  border: step.startsWith('white') ? '1px solid var(--rc-border-subtle-01)' : undefined,
                }}
              />
              <div className={styles.rampStepName}>{step.split('/')[1]}</div>
            </div>
          ))}
        </div>
      </div>

      <h3 className={styles.groupTitle}>Semantic</h3>
      {Object.entries(semanticGroups).map(([group, tokenList]) => (
        <div key={group}>
          <h3 className={styles.groupTitle}>{group}</h3>
          <div className={styles.swatchGrid}>
            {tokenList.map((name) => {
              const isLight =
                name.includes('blank') ||
                name.includes('layer/01') ||
                name.includes('field/02') ||
                name.includes('on-color') ||
                name.includes('inverse') && name.startsWith('text/');
              return (
                <Swatch
                  key={name}
                  name={name}
                  cssVar={toVar(name)}
                  showBorder={isLight}
                />
              );
            })}
          </div>
        </div>
      ))}
    </FoundationSection>
  </>
  ),
};

export const Templates: Story = {
  name: 'Templates',
  render: () => (
    <FoundationSection
      title="Page templates"
      description="Layouts set the canvas. Components use layer/01 for nav, cards, modals. Do not bind UI chrome to background/canvas."
    >
      <div className={styles.templateRow}>
        <div className={styles.templateWrap}>
          <div
            className={styles.templateFrame}
            style={{ background: 'var(--rc-background-canvas)' }}
          >
            <div className={styles.templateNav} style={{ background: 'var(--rc-layer-01)' }}>
              Nav / Breadcrumbs
            </div>
            <div className={styles.templateContent}>
              <div className={styles.templateCard} style={{ background: 'var(--rc-layer-01)' }}>
                Card
              </div>
            </div>
          </div>
          <div className={styles.templateCaption}>Productive · background/canvas</div>
        </div>
        <div className={styles.templateWrap}>
          <div
            className={styles.templateFrame}
            style={{ background: 'var(--rc-background-blank)' }}
          >
            <div className={styles.templateNav} style={{ background: 'var(--rc-layer-01)' }}>
              Nav / Breadcrumbs
            </div>
            <div className={styles.templateContent}>
              <div className={styles.templateCard} style={{ background: 'var(--rc-layer-01)' }}>
                Card
              </div>
            </div>
          </div>
          <div className={styles.templateCaption}>Blank · background/blank</div>
        </div>
      </div>
    </FoundationSection>
  ),
};

const typeScale = [
  { cls: 'rc-heading-h1', name: 'Heading/H1', spec: '64 / 70 · Bold' },
  { cls: 'rc-heading-h2', name: 'Heading/H2', spec: '56 / 64 · Bold' },
  { cls: 'rc-heading-h3', name: 'Heading/H3', spec: '48 / 58 · Bold' },
  { cls: 'rc-heading-h4', name: 'Heading/H4', spec: '40 / 50 · Bold' },
  { cls: 'rc-heading-h5', name: 'Heading/H5', spec: '32 / 42 · Bold' },
  { cls: 'rc-heading-h6', name: 'Heading/H6', spec: '24 / 32 · Bold' },
  { cls: 'rc-heading-h7', name: 'Heading/H7', spec: '18 / 24 · Bold' },
  { cls: 'rc-heading-h8', name: 'Heading/H8', spec: '16 / 22 · Bold' },
  { cls: 'rc-heading-h9', name: 'Heading/H9', spec: '14 / 18 · Bold' },
  { cls: 'rc-body-lg', name: 'Body/LG', spec: '20 / 32 · Regular' },
  { cls: 'rc-body-md', name: 'Body/MD', spec: '16 / 24 · Regular' },
  { cls: 'rc-body-sm', name: 'Body/SM', spec: '14 / 20 · Regular' },
  { cls: 'rc-body-xs', name: 'Body/XS', spec: '12 / 18 · Regular' },
  { cls: 'rc-label-lg', name: 'Label/LG', spec: '16 / 24 · Bold' },
  { cls: 'rc-label-md', name: 'Label/MD', spec: '14 / 18 · Bold' },
  { cls: 'rc-label-sm', name: 'Label/SM', spec: '12 / 16 · Bold' },
  { cls: 'rc-helper-sm', name: 'Helper/SM', spec: '12 / 16 · Regular' },
];

export const Typography: Story = {
  name: 'Typography',
  render: () => (
    <FoundationSection
      title="Typography"
      description="Helvetica Now Display — Heading (Bold, H1–H9) for titles · Body (Regular, up to 20px) for content · Label for UI controls · Helper for captions. Rule: 24px is always a heading (H6), never body."
    >
      {typeScale.map((t) => (
        <div key={t.name} className={styles.typeRow}>
          <div className={styles.typeMeta}>
            {t.name} — {t.spec}
          </div>
          <div className={t.cls}>
            {t.name.startsWith('Helper')
              ? 'Helper text for form fields and hints'
              : 'The quick brown fox jumps over the lazy dog'}
          </div>
        </div>
      ))}
    </FoundationSection>
  ),
};

export const Spacing: Story = {
  name: 'Spacing',
  render: () => (
    <FoundationSection
      title="Spacing"
      description="4px base scale."
    >
      {Object.entries(tokens.spacing).map(([key, px]) => (
        <div key={key} className={styles.spacingRow}>
          <div className={styles.spacingLabel}>spacing/{key}</div>
          <div
            className={styles.spacingBar}
            style={{ width: `var(--rc-spacing-${key})` }}
          />
          <div className={styles.spacingLabel}>{px}px</div>
        </div>
      ))}
    </FoundationSection>
  ),
};

const radiusKeys = ['none', 'sm', 'md', 'lg', 'full'] as const;

export const Radius: Story = {
  name: 'Radius',
  render: () => (
    <FoundationSection
      title="Radius"
      description="Corner radius tokens. RC uses sharp corners (none/sm = 0–4px) with full for pills and avatars."
    >
      <div className={styles.radiusRow}>
        {radiusKeys.map((key) => (
          <div
            key={key}
            className={styles.radiusCard}
            style={{ borderRadius: `var(--rc-radius-${key})` }}
          >
            radius/{key}
          </div>
        ))}
      </div>
    </FoundationSection>
  ),
};

const elevations = [
  { name: 'sm', shadow: 'var(--rc-shadow-sm)' },
  { name: 'md', shadow: 'var(--rc-shadow-md)' },
  { name: 'lg', shadow: 'var(--rc-shadow-lg)' },
  { name: 'xl', shadow: 'var(--rc-shadow-xl)' },
];

export const Elevation: Story = {
  name: 'Elevation',
  render: () => (
    <FoundationSection
      title="Elevation"
      description="Subtle shadows for overlays and elevated surfaces. Flat UI uses borders; elevation is reserved for dropdowns, modals, and popovers."
    >
      <div className={styles.elevationRow}>
        {elevations.map((e) => (
          <div
            key={e.name}
            className={styles.elevationCard}
            style={{ boxShadow: e.shadow }}
          >
            elevation/{e.name}
          </div>
        ))}
      </div>
    </FoundationSection>
  ),
};
