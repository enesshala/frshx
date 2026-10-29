# FRSHX design system

Adapted from the UI UX Pro Max finance-advisory recommendation. The brand brief overrides generated sky-blue CTAs, proof sections, pricing, and playful or purple AI styling.

## Product

FRSHX is a founder-led finance partner based in Kosovo, serving businesses worldwide. The site has two equal paths: outsourced finance services, and dedicated talent or recruitment. Candidates apply on a separate route.

## Pattern

Trust and authority, without logos, statistics, testimonials, prices, or invented credentials.

- Editorial hero with two equal actions
- Numbered sequences for services and process
- Two-column comparison for the two ways of working
- Navy used for the closing invitation only

## Color

Light theme only. Do not follow the system dark-mode preference.

| Role | Hex | Use |
| --- | --- | --- |
| Canvas | `#F6F4EF` | Page background |
| Ink | `#0E1A2B` | Body text |
| Navy | `#0E2744` | Headlines, primary buttons, closing band |
| Navy deep | `#09182C` | Primary button hover |
| Teal | `#0C5C58` | Second primary button, links, eyebrows, focus |
| Teal deep | `#094844` | Teal button hover |
| Paper | `#FFFFFF` | Fields and alternating panels |
| Muted | `#5C6B7A` | Secondary text |
| Line | `#D9D3C7` | Hairline rules |
| Amber | `#8A5A2B` | Small emphasis only, never a second brand |
| Danger | `#9F2D2D` | Errors |

Body text, buttons, and links must stay at or above 4.5:1. Teal on canvas and white on navy and teal meet that bar.

## Type

- Headlines: IBM Plex Serif, via `next/font`
- UI and body: IBM Plex Sans, via `next/font`
- Eyebrows: sans, small, uppercase, wide tracking, teal
- No external font stylesheets

## Motion

Hover color changes of 200ms. No entrance animation that starts from opacity 0. Honor `prefers-reduced-motion`. Content stays visible without JavaScript.

## Components

- Rectangular buttons, minimum height 48px, `cursor-pointer`
- Phosphor icons, regular weight, `aria-hidden` when the label is visible
- Text wordmark “FRSHX”. Do not invent a symbol
- Focus ring: 3px teal, 3px offset
- Forms: visible labels, inline errors, focusable error summary with links to fields

## Avoid

- Prices, rates, salaries, or package fees
- Client logos, testimonials, team biographies, credentials, or performance statistics
- Generic card grids, stock-photo layouts, glassmorphism, and purple AI gradients
- Emoji as icons
- Public links to uploaded CVs or personal candidate information
- A success message unless the submission was actually stored
