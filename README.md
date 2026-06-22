# Real Chemistry Design System (`rc-ds`)

React component library and design tokens for Real Chemistry products. Built to match the [Figma Design System](https://www.figma.com/design/bAfW17PaIBzJodq0a6DXXQ/Design-System).

## Stack

- **React 19** + **TypeScript**
- **CSS Modules** + design tokens (`src/styles/tokens.css`)
- **Storybook 9** for documentation and visual testing
- **Phosphor Icons** (`@phosphor-icons/react`)

## Getting started

```bash
npm install
npm run dev        # Storybook at http://localhost:6006
npm run build-storybook
```

## Components (v0.1)

| Component | Status |
|-----------|--------|
| Button | ✅ |
| Icon Button | ✅ |
| Split Button | ✅ |
| Menu | ✅ |
| Badge | ✅ |
| Input | ✅ |
| Checkbox | ✅ |
| Select | 🔜 |
| Dialog | 🔜 |

## Design principles

- **Semantic color** — primitives map to roles (background, layer, field, border, text, support). Canvas ≠ surface: layouts use `background/canvas` or `background/blank`, UI chrome uses `layer/01`.
- **Neutral-first** — primary actions use `button/primary` (neutral-900). Brand purple (`background/brand`) for brand accents. Error/destructive uses orange (`support/error`).
- **Radius scale** — `radius/sm` (4px) for controls · `radius/md` (8px) for menus · `radius/full` for pills.
- **Borders + elevation** — flat UI with borders day-to-day; shadows (`elevation/sm`–`xl`) for overlays (dropdowns, modals).
- **Typography** — Helvetica Now Display (Heading H1–H9, Body, Label, Helper). 24px is always H6.
- **Tokens** — synced with Figma Foundations (Light): `Color`, `Typography`, `Spacing`, `Radius`, `Elevation`

## Repo structure

```
src/
  components/     # React components + stories
  styles/         # CSS design tokens
  tokens/         # Figma token export + helpers
  foundations/    # Storybook foundation UI
  lib/            # Utilities
.storybook/       # Storybook config
```

## Figma ↔ Code

| Figma | Code |
|-------|------|
| `Heading/H1–H9` | `src/styles/typography.css` |
| `Label/*`, `Body/*`, `Helper/*` | Component + foundation styles |
| `button/*` tokens | `--rc-button-*` CSS vars |
| Components on DS pages | `src/components/*` |

## License

Private — Real Chemistry internal use.
