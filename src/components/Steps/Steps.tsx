import { Fragment } from 'react';
import { Icon, type IconTone } from '../../icons';
import { cn } from '../../lib/cn';
import styles from './Steps.module.css';

export type StepStatus = 'complete' | 'current' | 'upcoming';

export interface StepItem {
  label: string;
}

export interface StepsProps {
  steps: StepItem[];
  /** Zero-based index of the active step. */
  currentStep: number;
  className?: string;
  /** Accessible name for the step list. */
  ariaLabel?: string;
}

function resolveStepStatus(index: number, currentStep: number): StepStatus {
  if (index < currentStep) return 'complete';
  if (index === currentStep) return 'current';
  return 'upcoming';
}

/** Matches Figma Steps separator tokens: icon/secondary vs icon/tertiary. */
function resolveSeparatorTone(
  separatorIndex: number,
  currentStep: number,
  totalSteps: number,
): IconTone {
  if (
    currentStep > 0 &&
    currentStep < totalSteps - 1 &&
    separatorIndex < currentStep &&
    separatorIndex + 1 <= currentStep
  ) {
    return 'secondary';
  }
  return 'tertiary';
}

const indicatorClass: Record<StepStatus, string> = {
  current: styles.indicatorCurrent,
  upcoming: styles.indicatorUpcoming,
  complete: styles.indicatorComplete,
};

const indicatorTypeClass: Record<StepStatus, string> = {
  current: 'rc-label-md',
  upcoming: 'rc-label-sm',
  complete: 'rc-label-sm',
};

const labelClass: Record<StepStatus, string> = {
  current: styles.labelCurrent,
  upcoming: styles.labelUpcoming,
  complete: styles.labelComplete,
};

export function Steps({
  steps,
  currentStep,
  className,
  ariaLabel = 'Progress',
}: StepsProps) {
  return (
    <nav className={cn(styles.root, className)} aria-label={ariaLabel}>
      {steps.map((step, index) => {
        const status = resolveStepStatus(index, currentStep);

        return (
          <Fragment key={`${step.label}-${index}`}>
            <span className={styles.step} aria-current={status === 'current' ? 'step' : undefined}>
              <span
                className={cn(styles.indicator, indicatorClass[status], indicatorTypeClass[status])}
                aria-hidden={status !== 'current'}
              >
                {index + 1}
              </span>
              <span className={cn('rc-label-md', styles.label, labelClass[status])}>{step.label}</span>
            </span>
            {index < steps.length - 1 ? (
              <span className={styles.separator} aria-hidden>
                <Icon
                  name="arrow-right"
                  size={16}
                  tone={resolveSeparatorTone(index, currentStep, steps.length)}
                />
              </span>
            ) : null}
          </Fragment>
        );
      })}
    </nav>
  );
}
