# Agent Notes

## Fumadocs CLI

Use `npx @fumadocs/cli` for Fumadocs project helpers.

- Check help/version:
  - `npx @fumadocs/cli --help`
  - `npx @fumadocs/cli --version`
- Add docs components:
  - Interactive: `npx @fumadocs/cli add`
  - Direct: `npx @fumadocs/cli add feedback tabs card callout`
- Common component groups:
  - `common`: `graph-view`, `feedback`, `ai/openrouter`, `ai/inkeep`, `og/mono`
  - `sanity`: `base`, `accordion`, `files`, `steps`, `tabs`, `all`
  - `ui`: `accordion`, `github-info`, `banner`, `callout`, `card`, `codeblock`, `files`, `heading`, `image-zoom`, `inline-toc`, `steps`, `tabs`, `type-table`, `ai/page-actions`
- Customize Fumadocs UI layouts:
  - `npx @fumadocs/cli customise`
  - Alias: `npx @fumadocs/cli customize`
- Export docs to EPUB after production build:
  - `npx @fumadocs/cli export epub --framework next --output docs.epub`
- Convert `tree` output into Fumadocs file-tree markup:
  - `npx @fumadocs/cli tree --js`
