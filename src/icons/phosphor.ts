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
