---
name: Minimal Dev Docs
description: A quiet, utilitarian design system for Fumadocs-based developer documentation.
colors:
  light:
    background: "hsl(0, 0%, 96%)"
    foreground: "hsl(0, 0%, 3.9%)"
    muted: "hsl(0, 0%, 96.1%)"
    muted-foreground: "hsl(0, 0%, 45.1%)"
    card: "hsl(0, 0%, 94.7%)"
    card-foreground: "hsl(0, 0%, 3.9%)"
    border: "hsla(0, 0%, 80%, 50%)"
    primary: "hsl(0, 0%, 9%)"
    primary-foreground: "hsl(0, 0%, 98%)"
    secondary: "hsl(0, 0%, 93.1%)"
    accent: "hsla(0, 0%, 82%, 50%)"
  dark:
    background: "hsl(0, 0%, 7.04%)"
    foreground: "hsl(0, 0%, 92%)"
    muted: "hsl(0, 0%, 12.9%)"
    muted-foreground: "hsla(0, 0%, 70%, 0.8)"
    card: "hsl(0, 0%, 9.8%)"
    card-foreground: "hsl(0, 0%, 98%)"
    border: "hsla(0, 0%, 40%, 20%)"
    primary: "hsl(0, 0%, 98%)"
    primary-foreground: "hsl(0, 0%, 9%)"
    secondary: "hsl(0, 0%, 12.9%)"
    accent: "hsla(0, 0%, 40.9%, 30%)"
  semantic:
    info: "oklch(62.3% 0.214 259.815)"
    warning: "oklch(76.9% 0.188 70.08)"
    error: "oklch(63.7% 0.237 25.331)"
    success: "oklch(72.3% 0.219 149.579)"
    idea: "oklch(70.5% 0.209 60.849)"
typography:
  body:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.55
  heading:
    fontFamily: Inter
    fontWeight: 600
    lineHeight: 1.25
  code:
    fontFamily: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace
    fontSize: 14px
spacing:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  "2xl": 32px
rounded:
  sm: 4px
  md: 6px
  lg: 8px
  xl: 12px
  "2xl": 16px
components:
  card:
    radius: 12px
    border: "1px solid var(--color-fd-border)"
    background: "var(--color-fd-card)"
    shadow: none
  callout:
    radius: 12px
    border: "1px solid var(--color-fd-border)"
    shadow: "subtle"
    semanticTypes: [info, warning, error, success, idea]
  tabs:
    radius: 12px
    triggerSize: 14px
    activeIndicator: "bottom border using var(--color-fd-primary)"
  typeTable:
    radius: 16px
    rowSize: 14px
    interaction: "collapsible rows"
---

# Design System

## Overview

This project is a minimal developer documentation template built on Fumadocs. The visual direction is quiet, utilitarian, and dense enough for repeated technical use. Screens should feel like documentation infrastructure, not a marketing site.

Use the installed Fumadocs components as the source of truth for UI patterns. New pages should look like they belong beside the existing docs pages, with neutral surfaces, restrained borders, compact typography, and semantic color only where it clarifies status or intent.

## Visual Principles

- Prefer practical structure over decoration.
- Use neutral backgrounds and borders to separate information.
- Keep page sections unframed unless the content is a repeated item, callout, tab panel, or reference table.
- Use shadows rarely. When present, they should be subtle and functional.
- Keep density moderate: readable prose, compact cards, compact tables, no oversized hero treatment inside docs pages.

## Colors

The project uses `fumadocs-ui/css/neutral.css` and `fumadocs-ui/css/preset.css`.

- **Background**: page and prose canvas.
- **Foreground**: primary text.
- **Muted foreground**: secondary prose, descriptions, and table metadata.
- **Card**: framed documentation surfaces such as cards, tabs, callouts, and type tables.
- **Border**: primary separator for structure; use borders before shadows.
- **Primary**: active tabs, important links, and selected states.
- **Semantic colors**: `info`, `warning`, `error`, `success`, and `idea` are reserved for callouts and status-specific UI.

Do not introduce broad brand gradients or new dominant color palettes. Accent color should stay semantic or interactive, not decorative.

## Typography

Use Inter from `next/font/google` as the project font. The tone should stay clear and technical.

- **Page titles**: concise, semi-bold, sized by Fumadocs layout defaults.
- **Section headings**: use normal docs hierarchy; avoid hero-scale type in documentation pages.
- **Body text**: 14-16px, comfortable line height, plain language.
- **Labels and metadata**: 12-14px, medium weight only when needed.
- **Code**: monospace, compact, always readable against the code block background.

Do not add decorative display fonts unless the whole product identity changes and this file is updated.

## Layout

Docs pages should use the existing Fumadocs layout and content width. Preserve the built-in sidebar, table of contents, markdown copy button, and view options.

- Use `Cards` for small groups of navigation choices.
- Use prose headings for page structure.
- Use `Steps` for ordered workflows.
- Use `Tabs` for package managers, frameworks, languages, or environment variants.
- Use `TypeTable` for props, configuration, request parameters, and response fields.

Avoid landing-page composition inside docs routes. No split hero layouts, decorative media blocks, nested cards, or oversized promotional panels.

## Components

### Cards

Use installed `Cards` and `Card` from `src/components/card.tsx`.

- Cards are for navigation choices and related resources.
- Keep titles short and descriptions one sentence.
- Do not nest cards inside cards.
- Prefer two to four cards per group.

### Callouts

Use installed `Callout` from `src/components/callout.tsx`.

- `info`: neutral implementation notes.
- `idea`: helpful guidance or recommended practice.
- `warning`: production risks, limits, migration concerns.
- `error`: invalid usage or destructive outcomes.
- `success`: completed setup or expected result.

Do not use callouts as decoration or for ordinary paragraphs.

### Steps

Use installed `Steps` and `Step` from `src/components/steps.tsx`.

- Each step should start with a short `###` heading.
- Keep each step focused on one action.
- Include code blocks inside steps only when they are necessary to complete the action.

### Tabs

Use installed `Tabs` and `Tab` from `src/components/tabs.tsx`.

- Use package manager tabs in the order `npm`, `pnpm`, `yarn`.
- Use tabs only for equivalent alternatives.
- Keep tab labels short and scannable.

### TypeTable

Use installed `TypeTable` from `src/components/type-table.tsx`.

- Use it for configuration, props, API parameters, and response shapes.
- Prefer clear field names and concise descriptions.
- Use `required`, `default`, and `typeDescription` when they materially help the reader.

## Do's And Don'ts

- Do reuse installed Fumadocs components before adding new UI.
- Do preserve neutral theme variables and Fumadocs layout defaults.
- Do use semantic callout colors for meaning, not variety.
- Do keep documentation examples direct and runnable.
- Don't hand-roll components when the Fumadocs CLI component exists.
- Don't add purple or blue gradient hero sections.
- Don't create floating page sections styled as decorative cards.
- Don't mix sharp and heavily rounded corners in the same view.
- Don't let text, buttons, badges, or code overflow their containers on mobile.

## Maintenance

Update this file whenever the visual system changes. If a future agent adds a component, changes a palette, swaps fonts, or modifies layout density, it must update both the YAML tokens and the markdown rationale.
