import type { IconProps } from '@phosphor-icons/react';
import type { ComponentType } from 'react';
import { CURATED_ICON_MAP } from './curated-map';

export type PhosphorIconComponent = ComponentType<IconProps>;

export function toPascalCase(kebab: string): string {
  return kebab
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

export function getPhosphorIcon(name: string): PhosphorIconComponent | null {
  return CURATED_ICON_MAP[name] ?? null;
}

export function isCuratedIcon(name: string): boolean {
  return name in CURATED_ICON_MAP;
}

/** Copy-paste snippet for any Phosphor icon (direct import). */
export function getPhosphorImportSnippet(name: string): string {
  const component = toPascalCase(name);
  return `import { ${component} } from '@phosphor-icons/react';\n\n<${component} size={24} weight="regular" />`;
}

/** Copy-paste snippet for DS `<Icon />` when the name is in the curated set. */
export function getDsIconSnippet(name: string): string | null {
  if (!isCuratedIcon(name)) return null;
  return `import { Icon } from '@real-chemistry/ds';\n\n<Icon name="${name}" size={24} />`;
}
