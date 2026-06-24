import type { ReactNode } from 'react';
import styles from './Foundations.module.css';

export function FoundationSection({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      {description ? <p className={styles.description}>{description}</p> : null}
      {children}
    </section>
  );
}

export function Swatch({
  name,
  cssVar,
  showBorder,
}: {
  name: string;
  cssVar: string;
  showBorder?: boolean;
}) {
  return (
    <div className={styles.swatch}>
      <div
        className={styles.swatchColor}
        style={{
          background: `var(${cssVar})`,
          border: showBorder ? '1px solid var(--rc-border-subtle-01)' : undefined,
        }}
      />
      <div className={styles.swatchName}>{name}</div>
    </div>
  );
}

export function PrimitiveRamp({ family, steps }: { family: string; steps: string[] }) {
  return (
    <div className={styles.ramp}>
      <div className={styles.rampLabel}>{family}</div>
      <div className={styles.rampRow}>
        {steps.map((step) => {
          const cssVar = `--rc-${step.replace(/\//g, '-')}`;
          const isLight = step.includes('/50') || step.includes('/100') || step.includes('25');
          return (
            <div key={step} className={styles.rampStep}>
              <div
                className={styles.rampColor}
                style={{
                  background: `var(${cssVar})`,
                  border: isLight ? '1px solid var(--rc-border-subtle-01)' : undefined,
                }}
              />
              <div className={styles.rampStepName}>{step.split('/')[1]}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
