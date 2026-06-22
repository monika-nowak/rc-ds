import tokens from './figma-tokens.json';

function toVarName(token: string) {
  return `--rc-${token.replace(/\//g, '-')}`;
}

export function semanticCssBlock(mode: 'semanticLight' | 'semanticDark' = 'semanticLight') {
  return Object.entries(tokens[mode])
    .map(([name, value]) => `  ${toVarName(name)}: ${value};`)
    .join('\n');
}

export function primitiveCssBlock() {
  return Object.entries(tokens.primitives)
    .map(([name, value]) => `  ${toVarName(name)}: ${value};`)
    .join('\n');
}

export const spacingVars = Object.fromEntries(
  Object.entries(tokens.spacing).map(([k, v]) => [`--rc-spacing-${k}`, `${v}px`]),
);

export const radiusVars = Object.fromEntries(
  Object.entries(tokens.radius).map(([k, v]) => [`--rc-radius-${k}`, `${v}px`]),
);

export const semanticGroups: Record<string, string[]> = {
  Background: [
    'background/default', 'background/canvas', 'background/blank', 'background/hover',
    'background/active', 'background/selected', 'background/selected-hover', 'background/inverse', 'background/brand',
  ],
  Layer: ['layer/01', 'layer/02', 'layer/03', 'layer/hover-01', 'layer/active-01', 'layer/selected-01', 'layer/selected'],
  Field: ['field/01', 'field/02', 'field/03', 'field/hover-01', 'field/hover-02', 'field/hover-03'],
  Border: [
    'border/subtle-00', 'border/subtle-01', 'border/subtle-02', 'border/subtle-03',
    'border/subtle-selected-01', 'border/subtle-selected-02', 'border/subtle-selected-03',
    'border/strong-01', 'border/interactive', 'border/inverse', 'border/disabled',
  ],
  Text: [
    'text/primary', 'text/secondary', 'text/placeholder', 'text/helper', 'text/error',
    'text/on-color', 'text/on-color-disabled', 'text/inverse', 'text/disabled',
  ],
  Link: ['link/primary', 'link/primary-hover', 'link/inverse', 'link/visited'],
  Icon: ['icon/primary', 'icon/secondary', 'icon/on-color', 'icon/disabled', 'icon/inverse'],
  Support: ['support/error', 'support/success', 'support/warning', 'support/info'],
  Focus: ['focus/default', 'focus/inverse'],
  Button: [
    'button/primary', 'button/primary-hover', 'button/primary-active', 'button/secondary', 'button/secondary-hover',
    'button/tertiary', 'button/tertiary-hover', 'button/ghost-hover', 'button/danger', 'button/danger-hover',
    'button/disabled', 'button/disabled-text',
  ],
};

export const primitiveFamilies = [
  'purple', 'light-purple', 'orange', 'blue', 'neutral', 'green', 'amber',
] as const;

export function primitiveSteps(family: string) {
  return Object.keys(tokens.primitives).filter((k) => k.startsWith(`${family}/`));
}

export function tokenVar(name: string) {
  return `var(${toVarName(name)})`;
}
