---
order: 300
---

# Display

Utility classes for controlling the display behavior of elements. Modify the `display` property to show/hide elements or change layout modes.

## Basic Usage

<Story title="Basic Usage">
<div class="demo-display text-center p-4">
  <div class="lg:d-none my-2"><b>Hide</b> on lg and wider screens</div>
  <div class="d-none lg:d-block my-2"><b>Show</b> on lg and wider screens</div>
</div>
</Story>

## Quick Reference

| Class             | Styles                   |
| ----------------- | ------------------------ |
| `.d-none`         | `display: none;`         |
| `.d-inline`       | `display: inline;`       |
| `.d-block`        | `display: block;`        |
| `.d-inline-block` | `display: inline-block;` |
| `.d-flex`         | `display: flex;`         |
| `.d-inline-flex`  | `display: inline-flex;`  |
| `.d-grid`         | `display: grid;`         |
| `.d-inline-grid`  | `display: inline-grid;`  |
| `.d-table`        | `display: table;`        |
| `.d-table-row`    | `display: table-row;`    |
| `.d-table-cell`   | `display: table-cell;`   |

> All classes support responsive prefixes like `sm:`, `md:`, `lg:`, `xl:` etc.
