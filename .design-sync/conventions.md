## Styling idiom: Tailwind utility classes over semantic tokens

Mahry DS ships **no CSS-in-JS and no component props for color/spacing/type** — every component is styled with Tailwind utility classes bound to semantic CSS custom properties (never raw palette values, never arbitrary hex/px). When composing layouts *around* these components (containers, spacing, page background), use the same semantic classes so custom markup matches the shipped components instead of drifting to generic Tailwind defaults (`bg-white`, `text-gray-900`, etc. do NOT exist in this system's palette).

**Color families** (each resolves to a themed CSS var, light/dark aware):
- `bg-surface-default` / `bg-surface-recessed` — page/section backgrounds
- `bg-container-high` / `bg-container-low` / `bg-container-brand` / `bg-container-{error,warning,success,info}[-strong]` — card/panel surfaces
- `text-fg-primary` / `text-fg-secondary` / `text-fg-tertiary` / `text-fg-disabled` / `text-fg-inverse` / `text-fg-on-brand` / `text-fg-{error,warning,success,info}` — text color
- `border-border-primary` / `border-border-secondary` / `border-border-tertiary` / `border-border-brand` / `border-border-focus`
- `bg-action-{primary,secondary,tertiary}[-hover|-press|-disabled]`, `text-action-on-{primary,secondary,tertiary,ghost}[-disabled]`, `bg-action-ghost-hover` — interactive-element colors (what `Button`/`IconButton` use internally)

**Typography families** — apply as a pair, `font-{role}` + `text-{scale}`:
- Roles: `font-heading`, `font-body`, `font-label` (all currently the Inter variable font)
- Scales: `text-display-{xl,lg,md}`, `text-heading-{lg,md,sm}`, `text-body-{lg,md,sm}`, `text-label-{lg,md,sm}`, `text-caption-default` — each scale carries its own line-height and font-weight, so don't add separate `font-bold`/`leading-*` utilities alongside them.

**Dark mode**: no ThemeProvider component exists. Set `data-theme="dark"` (or `"light"`) as an HTML attribute on any ancestor element (commonly `<html>` or the app's root div) — every semantic color var flips automatically. No attribute defaults to light.

## Wrapping and setup

No provider/root wrapper is required — components render correctly standalone. Nothing broke in preview verification without one. The one setup requirement is loading `styles.css` before rendering (it pulls in fonts + component styles via `@import`); components mount and function without it, but render unstyled.

## Where the truth lives

Read `_ds/styles.css` (and its `@import` chain: `fonts.css`, `_ds_bundle.css`) before styling anything — token names above are drawn from it verbatim. Per-component usage and variant examples live in `_ds/components/atoms/<Name>/<Name>.prompt.md`.

## Example: idiomatic composition

```jsx
const { Button, Badge } = window.MahryDS;

<div className="bg-surface-default p-6 flex items-center gap-3">
  <h2 className="font-heading text-heading-sm text-fg-primary">Plan</h2>
  <Badge variant="accent">New</Badge>
  <Button variant="primary" label="Upgrade" />
</div>
```
