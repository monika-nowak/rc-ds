import type { BadgeAppearance, BadgeColor } from '../components/Badge';
import type { CuratedIconName, IconTone } from '../icons';

/**
 * Single source of truth for how signal **strength** and **role** map to Badge
 * styling, so every surface (cards, tables, detail pages) reads the same way.
 *
 * Design intent (Figma strength scale 2673:5117, table 2677:10207):
 * - Strength maps 1:1 to the canonical DS Badge colour variants: Strong =
 *   orange (orange-100/800), Moderate = purple (purple-100/800), Weak = blue
 *   (blue-100/800). The bar glyph also encodes the level, matching Figma:
 *   Strong = `cell-signal-full`, Moderate = `cell-signal-high`, Weak =
 *   `cell-signal-low`. Icon colour uses the explicit accent-800 icon tokens
 *   (`accentOrange`/`accentPurple`/`accentBlue`) so it equals the badge text
 *   colour (-800) without relying on `currentColor`.
 * - Role keeps the brand purple for Lead, with Supporting = info and
 *   Notable = neutral. Role and strength therefore never collide on colour
 *   (purple/blue/grey for role vs green/amber/grey for strength).
 */

export type SignalStrengthTone = 'strong' | 'moderate' | 'weak';

export interface StrengthBadgeConfig {
  label: string;
  appearance: BadgeAppearance;
  color: BadgeColor;
  icon: CuratedIconName;
  /** Explicit accent-800 icon tone matching the badge text colour. */
  iconTone: IconTone;
}

export const STRENGTH_BADGE: Record<SignalStrengthTone, StrengthBadgeConfig> = {
  strong: { label: 'Strong', appearance: 'subtle', color: 'orange', icon: 'cell-signal-full', iconTone: 'accentOrange' },
  moderate: { label: 'Moderate', appearance: 'subtle', color: 'purple', icon: 'cell-signal-high', iconTone: 'accentPurple' },
  weak: { label: 'Weak', appearance: 'subtle', color: 'blue', icon: 'cell-signal-low', iconTone: 'accentBlue' },
};

/** Best-effort tone from a qualitative label (e.g. Storybook passing "Strong"). */
export function strengthToneFromLabel(label: string): SignalStrengthTone {
  const l = label.toLowerCase();
  if (l.startsWith('strong')) return 'strong';
  if (l.startsWith('weak')) return 'weak';
  return 'moderate';
}

export type SignalRoleKey = 'lead' | 'supporting' | 'notable';

export interface RoleBadgeConfig {
  label: string;
  appearance: BadgeAppearance;
  color: BadgeColor;
  icon?: CuratedIconName;
}

export const ROLE_BADGE: Record<SignalRoleKey, RoleBadgeConfig> = {
  lead: { label: 'Lead', appearance: 'subtle', color: 'lightPurple', icon: 'flag' },
  supporting: { label: 'Supporting', appearance: 'subtle', color: 'info' },
  notable: { label: 'Notable', appearance: 'subtle', color: 'neutral' },
};

/** Normalise a role string (e.g. "Lead Signal") to its badge key. */
export function roleKeyFromLabel(role: string): SignalRoleKey {
  const r = role.toLowerCase();
  if (r.includes('lead')) return 'lead';
  if (r.includes('support')) return 'supporting';
  return 'notable';
}
