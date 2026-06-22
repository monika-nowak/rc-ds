# Real Chemistry Design System (`rc-ds`)

React component library and design tokens for Real Chemistry products. Built to match the [Figma Design System](https://www.figma.com/design/bAfW17PaIBzJodq0a6DXXQ/Design-System) (Midday-inspired, neutral-first, sharp corners).

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
| Badge | ✅ |
| Input | ✅ |
| Checkbox | ✅ |
| Select | 🔜 |
| Dialog | 🔜 |

## Design principles

- **Neutral-first** — primary actions use neutral-900, brand purple as accent
- **Sharp corners** — 4px radius on interactive elements
- **Flat surfaces** — borders over shadows
- **Typography** — Helvetica Now Display (UI), DM Mono (data/numbers)
- **Tokens** — synced with Figma variables (`Color`, `Spacing`, `Radius`)

## Repo structure

```
src/
  components/     # React components + stories
  styles/         # CSS design tokens
  lib/            # Utilities
.storybook/       # Storybook config
```

## Figma ↔ Code

| Figma | Code |
|-------|------|
| `Heading/H1–H9` | Typography tokens / CSS |
| `Label/*` | Component label styles |
| `button/*` tokens | `--rc-button-*` CSS vars |
| Components on DS pages | `src/components/*` |

## License

Private — Real Chemistry internal use.
