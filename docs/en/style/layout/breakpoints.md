---
order: 200
---

# Breakpoints

Responsive Style utilizes breakpoints to determine responsive layout behavior across varying device viewport sizes. These width thresholds are customizable.

## Core Concepts

- **Breakpoints**: Critical thresholds in responsive design that determine content display at specific screen sizes. Typically pixel values where styles apply below/above specified widths.
- **Media Queries**: CSS feature allowing conditional style application based on device parameters. We primarily use min-width queries.
- **Mobile-First**: Responsive Style employs mobile-first approach, applying minimal base styles for smallest breakpoints then layering enhancements for larger devices. Optimizes CSS efficiency and rendering performance.

## Default Breakpoints

Predefined breakpoints (customizable via SCSS variables):

| Name        | Class Prefix | Breakpoint |
| ----------- | ------------ | ---------- |
| Extra small | -            | `<576px`   |
| Small       | `.sm:`       | `≥576px`   |
| Medium      | `.md:`       | `≥768px`   |
| Large       | `.lg:`       | `≥992px`   |
| Extra large | `.xl:`       | `≥1200px`  |

Breakpoint widths are multiples of 12, providing consistent foundation across common devices. Customize in `_variables.scss`:

```scss
$grid-breakpoints: (
    xs: 0,
    sm: 576px,
    md: 768px,
    lg: 992px,
    xl: 1200px,
) !default;
```

## Usage

All utility classes support responsive prefixes. Follow **mobile-first** principle: non-prefixed styles apply to all breakpoints.

<Story title="Hide at breakpoints" defaultShowCode>
<div class="demo-bps text-center p-4">
  <div class="d-none my-2"><b>Hide</b> on all screens</div>
  <div class="sm:d-none my-2"><b>Hide</b> on sm and wider screens</div>
  <div class="md:d-none my-2"><b>Hide</b> on md and wider screens</div>
  <div class="lg:d-none my-2"><b>Hide</b> on lg and wider screens</div>
  <div class="xl:d-none my-2"><b>Hide</b> on xl and wider screens</div>
</div>
</Story>

<Story title="Show at breakpoints" defaultShowCode>
<div class="demo-bps text-center p-4">
  <div class="d-none sm:d-block my-2"><b>Show</b> on sm and wider screens</div>
  <div class="d-none md:d-block my-2"><b>Show</b> on md and wider screens</div>
  <div class="d-none lg:d-block my-2"><b>Show</b> on lg and wider screens</div>
  <div class="d-none xl:d-block my-2"><b>Show</b> on xl and wider screens</div>
</div>
</Story>
