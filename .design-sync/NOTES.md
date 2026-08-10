# design-sync notes

## Fixes

- [GENERAL] Build produced 0 matched components (`[TITLE_UNMAPPED]` dropped Button/Badge/IconButton, `exported PascalCase symbols: 0`) → root cause: `package.json` only declared types via the `exports["."].types` map, with no top-level `types`/`typings` field. The converter's `.d.ts` entry resolution (`lib/dts.mjs`'s `findTypesRoot`/`projectFor`) checks `publishConfig.types`, then `pkgJson.types`/`typings`, before falling back to scanning `dist/` — with neither set it defaulted to a nonexistent `<pkgDir>/index.d.ts` and found zero exports → fix: added a top-level `"types": "./dist/index.d.ts"` field to `package.json` (harmless, standard dual-compat practice for packages that also use the `exports` map). Re-run after this fix: 3/3 components matched cleanly.

## Re-sync risks

- Story count is tiny (3 components, Button/IconButton/Badge under `src/components/atoms/`) — as the library grows, new `atoms/molecules/sections` dirs will need no config changes (component discovery is automatic from storybook `index.json`), but if `package.json`'s `types` field is ever removed again (e.g. during an exports-map refactor) the `[TITLE_UNMAPPED]` failure above will resurface — check this NOTES entry first if that happens.
- All 9 Button stories and all 7 IconButton stories were graded (raised `--max-stories` above the default cap of 6) — no story caps left un-graded for either component.
- `[CSS_ASSETS]` warned about 7 relative `url()` refs to Inter font files in the storybook-scraped fallback CSS not resolving post-upload — these are the same font files the build's own font extraction already copies to `fonts/` and rewrites in `_ds_bundle.css`, so the warning is a false alarm for this repo's font assets specifically; re-verify if a *new* font or image asset triggers `[CSS_ASSETS]` on a future sync, since that one might be real.
- No `docsDir`/docs matched (0/3) — this repo has no per-component markdown docs directory; `.prompt.md` files are generated straight from `.d.ts` + stories, which is expected for this repo's shape.
- Toolchain assumed: Node v24.9.0, Storybook 10.4.6, Tailwind v4 (`@theme` at-rules — lightningcss can't minify them during `vite build`, which is a harmless warning, not an error).
