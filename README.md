# RC / Aquinas Design System (`rc-ds`)

React component library and design tokens for Real Chemistry (Aquinas) products. Built to mirror the [Figma Design System](https://www.figma.com/design/bAfW17PaIBzJodq0a6DXXQ/Design-System) — components, foundations, and tokens are kept in sync with the Figma source of truth.

## Tech stack

- **React 19** + **TypeScript**
- **Vite 6** build tooling
- **Storybook 9** for documentation and visual testing
- **CSS Modules** + CSS custom properties for design tokens (`src/styles/tokens.css`)
- **Phosphor Icons** (`@phosphor-icons/react`)
- **ESLint** (flat config with `typescript-eslint` and Storybook plugin)

## Getting started

```bash
npm install
npm run dev              # Storybook at http://localhost:6006
npm run build            # type-check (tsc -b) + Vite library build
npm run build-storybook  # static Storybook (regenerates icon lists first)
npm run lint             # ESLint
```

Everything is consumed through the public entry point `src/index.ts`, which loads the token and typography stylesheets and re-exports every component and the icon utilities.

## Components

All components live under `src/components/*` (one directory per component) and are exported from `src/index.ts`.

### Actions & buttons

- `Button`
- `IconButton`
- `SplitButton`
- `Menu`
- `Link`

### Inputs & forms

- `Input`
- `TextArea`
- `Select`
- `DatePicker`
- `Checkbox`
- `Radio`
- `ChoiceTag`
- `FileUpload`

### Data display

- `Avatar`
- `Badge`
- `Card`
- `ListItem`
- `MappingRow`
- `MappingTable`
- `StatusIndicator`

### Feedback & overlays

- `Alert`
- `Tooltip`
- `Popover`
- `Spinner`
- `RCLoader` (brand loading animation)

### Navigation

- `Breadcrumb`
- `SideNav`
- `Steps`

### Layout & app shell

- `AppShell`
- `AppHeader`
- `Divider`
- `Logo`

### AI

- `ChatWithAI`

### Icons

- `Icon` — a curated wrapper over Phosphor Icons. Curated names (`CURATED_ICON_NAMES`) match the Figma `Icon/*` set; the full library (`ALL_ICON_NAMES`) is also available.

```tsx
// Curated icon via the DS component
import { Icon } from '@real-chemistry/ds';
<Icon name="pencil-simple" size={16} />;

// Any Phosphor icon — direct import
import { Horse } from '@phosphor-icons/react';
<Horse size={24} weight="regular" />;
```

## Design foundations

Tokens are exported from the Figma Foundations page (Light mode) and defined as CSS custom properties in `src/styles/tokens.css`. A Figma token export and TypeScript helpers live in `src/tokens/` (`figma-tokens.json`, `css-vars.ts`).

### Color

- **Primitives** — full ramps for `purple`, `light-purple`, `orange`, `blue`, `neutral`, `green`, `amber`, plus `white`/`black`.
- **Semantic roles** — `background/*`, `layer/*`, `field/*`, `border/*` (subtle, strong, interactive, disabled), `text/*`, `link/*`, `icon/*`.
- **Support** — status colors for error, warning, success, and info (`support/*`, `background-support-*`, `border-support-*`), plus AI accents (`icon-ai`, `text-ai`, `border-ai`).
- **Button** — dedicated `button/*` tokens for primary, secondary, tertiary, ghost, danger, AI (primary/secondary/tertiary/ghost), and disabled states.
- **Focus** — `focus/default` and `focus/inverse`.

### Typography

Helvetica Now Display, exposed as `.rc-*` utility classes in `src/styles/typography.css`:

- Headings: `.rc-heading-h1` … `.rc-heading-h9`
- Body: `.rc-body-lg`, `.rc-body-rg`, `.rc-body-md`, `.rc-body-sm`, `.rc-body-xs`
- Labels: `.rc-label-lg`, `.rc-label-md`, `.rc-label-sm`
- Helper: `.rc-helper-sm`

### Spacing, radius & elevation

- **Spacing** — 4px base scale (`--rc-spacing-0` through `--rc-spacing-16`).
- **Radius** — `none`, `sm` (4px), `md` (8px), `lg` (12px), `full` (pill).
- **Elevation** — layered shadows `--rc-shadow-sm` → `--rc-shadow-xl` for overlays.
- **Component sizing** — shared control heights (`sm`/`md`/`lg`, badge) and step-indicator tokens.

## Repo structure

```
src/
  components/     # React components + CSS Modules + stories
  stories/        # Storybook stories & foundation docs
  styles/         # tokens.css + typography.css
  tokens/         # Figma token export (figma-tokens.json) + css-vars.ts
  icons/          # Icon component + curated/full Phosphor maps
  index.ts        # public entry point
.storybook/       # Storybook config
scripts/          # icon-list generation
```

## Figma ↔ code

| Figma | Code |
|-------|------|
| Color / Spacing / Radius / Elevation foundations | `src/styles/tokens.css`, `src/tokens/*` |
| `Heading/*`, `Body/*`, `Label/*`, `Helper/*` | `src/styles/typography.css` |
| `button/*` tokens | `--rc-button-*` CSS variables |
| `Icon/*` components | `src/icons` curated set |
| DS components | `src/components/*` |

## License

Private — Real Chemistry internal use.
