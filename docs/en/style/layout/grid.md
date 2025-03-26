---
order: 230
---

# Grid

Modern browsers fully support CSS Grid layout. Compared to traditional grid systems, CSS Grid enables more complex layouts. Default 12-column system with dynamic adjustments via CSS Variables:

| Variable       | Default  | Description              |
| -------------- | -------- | ------------------------ |
| `--ms-rows`    | `1`      | Number of grid rows      |
| `--ms-columns` | `12`     | Number of grid columns   |
| `--ms-gap`     | `1.5rem` | Gap size between columns |

## Basic Usage

Create grid layout with `.grid` class. Child elements use `.g-col-*` for column spans. Items wrap automatically:

<Story title="Basic Usage">
<div class="demo-grid grid text-center my-5">
  <div class="g-col-4">.g-col-4</div>
  <div class="g-col-4">.g-col-4</div>
  <div class="g-col-4">.g-col-4</div>
  <div class="g-col-4">.g-col-4</div>
  <div class="g-col-4">.g-col-4</div>
  <div class="g-col-4">.g-col-4</div>
</div>
</Story>

## Responsive Grid

Adapt layouts across breakpoints:

<Story title="Responsive Grid">
<div class="demo-grid grid text-center my-5">
  <div class="g-col-6 md:g-col-4">.g-col-6 .md:g-col-4</div>
  <div class="g-col-6 md:g-col-4">.g-col-6 .md:g-col-4</div>
  <div class="g-col-6 md:g-col-4">.g-col-6 .md:g-col-4</div>
</div>
</Story>

## Auto Columns

Elements without column classes auto-size:

<Story title="Auto Columns">
<div class="demo-grid grid text-center my-5">
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
</div>
</Story>

This behavior can be mixed with grid column classes：

<Story title="Mixed Auto Columns">
<div class="demo-grid grid text-center my-5">
  <div class="g-col-6">.g-col-6</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
</div>
</Story>

## Grid Ordering

Adjust item order with `.g-cs-*` (column start):

<Story title="Grid Ordering">
<div class="demo-grid grid text-center my-5">
  <div class="g-col-3 md:g-cs-3">.g-col-3 .md:g-cs-3</div>
  <div class="g-col-4 g-cs-6">.g-col-4 .g-cs-6</div>
</div>
</Story>

## Row Spanning

Control vertical spans with `.g-row-*`:

<Story title="Row Spanning">
<div class="demo-grid grid my-5">
  <div class="g-col-2 g-row-1">.g-row-1</div>
  <div class="g-col-2 g-row-2">.g-row-2</div>
  <div class="g-col-2 g-row-3">.g-row-3</div>
  <div class="g-col-2 g-row-4">.g-row-4</div>
  <div class="g-col-2 g-row-5">.g-row-5</div>
  <div class="g-col-2 g-row-6">.g-row-6</div>
</div>
</Story>

Alternatively, use `g-rs-*`, `g-re-*` to adjust the start and end rows of the grid item. `*` is the number `1~6`:

<Story title="Custom row spanning">
<div class="demo-grid grid my-5">
  <div class="g-col-2 g-rs-1 g-re-2">.g-rs-1 .g-re-3</div>
  <div class="g-col-2 g-cs-3 g-rs-2 g-re-3">.g-rs-2 .g-re-3</div>
  <div class="g-col-2 g-cs-5 g-rs-3 g-re-4">.g-rs-3 .g-re-4</div>
  <div class="g-col-2 g-cs-7 g-rs-4 g-re-5">.g-rs-4 .g-re-5</div>
  <div class="g-col-2 g-cs-9 g-rs-5 g-re-6">.g-rs-5 .g-re-6</div>
  <div class="g-col-2 g-cs-11 g-rs-1 g-re-6">.g-rs-1 .g-re-6</div>
</div>
</Story>

## Custom Grid

Use CSS Variables `--ms-rows`, `--ms-columns` to dynamically adjust the number of grid rows and columns:

<Story title="Custom Grid">
<div class="demo-grid grid text-center my-5" style="--ms-rows: 3; --ms-columns: 3;">
  <div>Auto-column</div>
  <div class="g-cs-2 g-rs-2" style="grid-row: 2">Auto-column</div>
  <div class="g-cs-3 g-rs-3" style="grid-row: 3">Auto-column</div>
</div>
</Story>

## Custom Gap

Use CSS Variables `--ms-gap` to dynamically adjust the spacing between columns:

<Story title="Custom Gap">
<div class="demo-grid grid text-center my-5" style="--ms-gap: .5rem 1rem;">
  <div class="g-col-6">.g-col-6</div>
  <div class="g-col-6">.g-col-6</div>

  <div class="g-col-6">.g-col-6</div>
  <div class="g-col-6">.g-col-6</div>
</div>
</Story>

Alternatively, if you only adjust the spacing for a specific layout, you can also directly use the built-in [Spacing](../utilities/spacing.md) utilities:

<Story title="Custom Gap">
<div class="demo-grid grid text-center row-gap-2 column-gap-0 my-5">
  <div class="g-col-6">.g-col-6</div>
  <div class="g-col-6">.g-col-6</div>

  <div class="g-col-6">.g-col-6</div>
  <div class="g-col-6">.g-col-6</div>
</div>
</Story>

## Responsive Layout

Combining the `.d-*` utilities and responsive prefix, complex responsive layouts can be created:

<Story title="复杂混合布局">
<div class="demo-grid grid row-gap-2 text-center my-5">
  <div class="g-col-12">
    Header
  </div>
  <div class="g-col-4 g-row-2 d-none md:d-block">
    Sidebar
  </div>
  <div class="g-col-12 md:g-col-8">
    Main Content
  </div>
  <div class="g-col-6 md:g-col-4">
    Sub Content
  </div>
  <div class="g-col-6 md:g-col-4">
    Sub Content
  </div>
  <div class="g-col-12">
    Footer
  </div>
</div>
</Story>

## Quick Reference

| Class       | Styles                        |
| ----------- | ----------------------------- |
| `.grid`     | `display: grid`               |
| `.g-row-1`  | `grid-row: span 1 / span 1`   |
| `.g-row-2`  | `grid-row: span 2 / span 2`   |
| `.g-row-3`  | `grid-row: span 3 / span 3`   |
| `.g-row-4`  | `grid-row: span 4 / span 4`   |
| `.g-row-5`  | `grid-row: span 5 / span 5`   |
| `.g-row-6`  | `grid-row: span 6 / span 6`   |
| `.g-rs-2`   | `grid-row-start: 2`           |
| `.g-rs-3`   | `grid-row-start: 3`           |
| `.g-rs-4`   | `grid-row-start: 4`           |
| `.g-rs-5`   | `grid-row-start: 5`           |
| `.g-rs-6`   | `grid-row-start: 6`           |
| `.g-re-2`   | `grid-row-end: 2`             |
| `.g-re-3`   | `grid-row-end: 3`             |
| `.g-re-4`   | `grid-row-end: 4`             |
| `.g-re-5`   | `grid-row-end: 5`             |
| `.g-re-6`   | `grid-row-end: 6`             |
| `.g-col-1`  | `grid-column: auto / span 1`  |
| `.g-col-2`  | `grid-column: auto / span 2`  |
| `.g-col-3`  | `grid-column: auto / span 3`  |
| `.g-col-4`  | `grid-column: auto / span 4`  |
| `.g-col-5`  | `grid-column: auto / span 5`  |
| `.g-col-6`  | `grid-column: auto / span 6`  |
| `.g-col-7`  | `grid-column: auto / span 7`  |
| `.g-col-8`  | `grid-column: auto / span 8`  |
| `.g-col-9`  | `grid-column: auto / span 9`  |
| `.g-col-10` | `grid-column: auto / span 10` |
| `.g-col-11` | `grid-column: auto / span 11` |
| `.g-col-12` | `grid-column: auto / span 12` |
| `.g-cs-1`   | `grid-column-start: 1`        |
| `.g-cs-2`   | `grid-column-start: 2`        |
| `.g-cs-3`   | `grid-column-start: 3`        |
| `.g-cs-4`   | `grid-column-start: 4`        |
| `.g-cs-5`   | `grid-column-start: 5`        |
| `.g-cs-6`   | `grid-column-start: 6`        |
| `.g-cs-7`   | `grid-column-start: 7`        |
| `.g-cs-8`   | `grid-column-start: 8`        |
| `.g-cs-9`   | `grid-column-start: 9`        |
| `.g-cs-10`  | `grid-column-start: 10`       |
| `.g-cs-11`  | `grid-column-start: 11`       |

> All classes support responsive prefixes like `sm:`, `md:`, `lg:`, `xl:` etc.
