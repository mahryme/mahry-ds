# Mahry DS

A lean, generic, AI-readable design system foundation — built as the shared
base for [mahry.fyi](https://mahry.fyi) and future prototypes. Native Figma
variables in, Tailwind CSS v4 out.

**Status:** early — foundational colour and typography tokens are in place;
components are just getting started.

## Install

​`
npm install @mahry/ds
​`

Bring your own React (^19) and Tailwind CSS v4 — both are peer/consumer
concerns, not bundled.

## Usage

​`ts
import { Button } from "@mahry/ds";
import "@mahry/ds/styles";
​`

Set a theme on your root element:

​```html

<html data-theme="light">
  <!-- or data-theme="dark" -->
</html>
​```

If no `data-theme` is set, the system defaults to light.

## Fonts

Mahry DS defines a `--typo-font-sans` token but does **not** bundle font
files — that keeps the published CSS small and lets you choose how fonts are
loaded. The system is designed around **Inter**:

​`
npm install @fontsource-variable/inter
​`

​`ts
import "@fontsource-variable/inter";
​`

## Architecture

Tokens follow a three-tier model:

​`
primitive → semantic → component
​`

- **Primitive** — raw values (palette colours, font families), namespaced
  outside Tailwind's reserved prefixes (`--palette-*`, `--typo-*`) so they're
  never consumable directly as utility classes.
- **Semantic** — role-based tokens (`fg`, `surface`, `line`, `heading`,
  `body`...) that alias primitives and are the only layer components should
  consume.
- **Component** — opt-in, component-scoped tokens for the rare cases the
  semantic layer doesn't cover.

Theming (light/dark today, brand theming planned) is driven by the
`[data-theme]` attribute, kept as an independent axis from future
`[data-brand]` support to avoid combinatorial CSS.

## Development

​`
npm run dev            # local playground
npm run storybook      # component docs
npm run build          # typecheck + build the demo app
npm run build:lib      # build the publishable package
​`

## License

MIT
