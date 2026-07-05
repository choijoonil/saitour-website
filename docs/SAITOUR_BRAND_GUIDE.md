# SAITOUR Brand Guide

Source: `png.png` SAITOUR original logo image.

The official SAITOUR logo colors are extracted from the provided logo image and managed through shared brand tokens. Do not create alternate logo colors, gradients, opacity variants, or saturation-adjusted versions for the wordmark.

## Core Brand Colors

| Role | Token | HEX | RGB |
| --- | --- | --- | --- |
| Blue | `brand.blue` / `--brand-blue` | `#6B89C5` | `rgb(107, 137, 197)` |
| Green | `brand.green` / `--brand-green` | `#A6CE39` | `rgb(166, 206, 57)` |
| Yellow | `brand.yellow` / `--brand-yellow` | `#FDB813` | `rgb(253, 184, 19)` |
| Red | `brand.red` / `--brand-red` | `#F2685E` | `rgb(242, 104, 94)` |
| Orange | `brand.orange` / `--brand-orange` | `#F2685E` | `rgb(242, 104, 94)` |
| Mint | `brand.mint` / `--brand-mint` | `#12B7AC` | `rgb(18, 183, 172)` |

## Logo Rules

| Logo Part | Token | HEX |
| --- | --- | --- |
| Circle border | `brand.blue` | `#6B89C5` |
| Inner ㅅ shape | `brand.green` | `#A6CE39` |
| Inner ㅇ shape | `brand.yellow` | `#FDB813` |
| S | `brand.blue` | `#6B89C5` |
| A | `brand.green` | `#A6CE39` |
| I | `brand.blue` | `#6B89C5` |
| T | `brand.red` | `#F2685E` |
| O | `brand.yellow` | `#FDB813` |
| U | `brand.orange` | `#F2685E` |
| R | `brand.red` | `#F2685E` |

Note: In the supplied PNG, the U fill is extracted as the same coral-orange color used by T/R. The `brand.orange` token remains separate so the logo rule is explicit and maintainable.

## CSS Design Tokens

```css
:root {
  --brand-blue: #6B89C5;
  --brand-green: #A6CE39;
  --brand-yellow: #FDB813;
  --brand-red: #F2685E;
  --brand-orange: #F2685E;
  --brand-mint: #12B7AC;

  --brand-s: var(--brand-blue);
  --brand-a: var(--brand-green);
  --brand-i: var(--brand-blue);
  --brand-t: var(--brand-red);
  --brand-o: var(--brand-yellow);
  --brand-u: var(--brand-orange);
  --brand-r: var(--brand-red);
}
```

## Usage Rules

Use `constants/brandColors.ts` as the source of truth in TypeScript components.

Use the exact logo tokens for the `SAITOUR` wordmark in Header, Footer, Mobile Menu, Hero, Contact, and any future brand lockup.

Use `brand-mint` as the official solid SAITOUR identity color for broad brand surfaces, strong CTAs, and single-color brand applications.

Use `brand-blue`, `brand-green`, `brand-yellow`, `brand-red`, `brand-orange`, and `brand-mint` for accents, buttons, links, hover states, icons, badges, and focus rings.

Do not use legacy non-logo accent colors for SAITOUR brand accents.
