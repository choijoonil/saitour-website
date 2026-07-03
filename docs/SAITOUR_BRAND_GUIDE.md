# SAITOUR Brand Guide

Source: `ai.ai` original Illustrator vector logo.

The official SAITOUR letter colors are extracted from the vector fill colors of the outlined `SAITOUR` wordmark. Do not create alternate logo colors, gradients, opacity variants, or saturation-adjusted versions for the wordmark.

## Logo Colors

| Letter | Vector Fill CMYK | HEX | RGB | HSL |
| --- | --- | --- | --- | --- |
| S | `0.607843 0.419608 0 0` | `#6494FF` | `rgb(100, 148, 255)` | `hsl(221 100% 70%)` |
| A | `0.376471 0.035294 1 0` | `#9FF600` | `rgb(159, 246, 0)` | `hsl(81 100% 48%)` |
| I | `0.607843 0.419608 0 0` | `#6494FF` | `rgb(100, 148, 255)` | `hsl(221 100% 70%)` |
| T | `0 0.741176 0.603922 0` | `#FF4265` | `rgb(255, 66, 101)` | `hsl(349 100% 63%)` |
| O | `0.003922 0.27451 1 0` | `#FEB900` | `rgb(254, 185, 0)` | `hsl(44 100% 50%)` |
| U | `0 0.741176 0.603922 0` | `#FF4265` | `rgb(255, 66, 101)` | `hsl(349 100% 63%)` |
| R | `0 0.741176 0.603922 0` | `#FF4265` | `rgb(255, 66, 101)` | `hsl(349 100% 63%)` |

## CSS Design Tokens

```css
:root {
  --brand-s: #6494FF;
  --brand-a: #9FF600;
  --brand-i: #6494FF;
  --brand-t: #FF4265;
  --brand-o: #FEB900;
  --brand-u: #FF4265;
  --brand-r: #FF4265;
}
```

## Brand System

### Primary Brand Color

`--brand-primary: var(--brand-s)`  
Use for navigation active states, core links, primary icon color, focus rings, and key accents.

### Secondary Brand Color

`--brand-secondary: var(--brand-a)`  
Use sparingly for positive highlights, success states, and secondary brand accents.

### Accent Colors

`--brand-accent-pink: var(--brand-t)`  
Use for energetic emphasis, selected highlights, and error states.

`--brand-accent-orange: var(--brand-o)`  
Use for warm emphasis, warning states, and small badges.

### Neutral Colors

These are the existing website neutrals used to support the official logo colors:

| Role | Token | Value |
| --- | --- | --- |
| Background | `--brand-background` | `#ffffff` |
| Surface | `--brand-surface` | `#F5F7FA` |
| Border | `--brand-border` | `#E2E8F0` |
| Text | `--brand-text` | `#0F172A` |
| Body Text | `--brand-body` | `#333333` |

### Status Colors

| Role | Token | Value |
| --- | --- | --- |
| Success | `--brand-success` | `var(--brand-a)` / `#9FF600` |
| Warning | `--brand-warning` | `var(--brand-o)` / `#FEB900` |
| Error | `--brand-error` | `var(--brand-t)` / `#FF4265` |

## Usage Rules

Use the exact logo tokens for the `SAITOUR` wordmark in Header, Footer, and any future brand lockup.

Use `brand-primary`, `brand-secondary`, `brand-accent-pink`, and `brand-accent-orange` for Hero accents, buttons, links, hover states, icons, badges, and other UI highlights.

Do not use gradients, opacity changes, saturation changes, or handmade alternate HEX values for the `SAITOUR` wordmark.
