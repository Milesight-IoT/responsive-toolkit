---
order: 250
---

# Gutters

Gutters control spacing between grid columns. Responsive Style provides gutter classes and CSS Variables for dynamic adjustments:

| Variable        | Default  | Description              |
| --------------- | -------- | ------------------------ |
| `--ms-gutter-x` | `1.5rem` | Horizontal column gutter |
| `--ms-gutter-y` | `0`      | Vertical row gutter      |

## Horizontal Gutters

Use `.gx-*` classes. For larger gutters, add padding to parent container:

<Story title="Horizontal Gutters">
<div class="demo-gutters container p-5 text-center">
  <div class="row gx-5">
    <div class="col">
     <div class="p-3">Custom column padding</div>
    </div>
    <div class="col">
      <div class="p-3">Custom column padding</div>
    </div>
  </div>
</div>
</Story>

Alternative solution with overflow wrapper:

<Story title="Horizontal Gutters">
<div class="demo-gutters container overflow-hidden text-center my-5">
  <div class="row gx-5">
    <div class="col">
     <div class="p-3">Custom column padding</div>
    </div>
    <div class="col">
      <div class="p-3">Custom column padding</div>
    </div>
  </div>
</div>
</Story>

## Vertical Gutters

Use `.gy-*` for vertical spacing. Add wrapper when overflow occurs:

<Story title="Vertical Gutters">
<div class="demo-gutters container overflow-hidden text-center my-4">
  <div class="row gy-5">
    <div class="col-6">
      <div class="p-3">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-3">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-3">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-3">Custom column padding</div>
    </div>
  </div>
</div>
</Story>

## Combined Gutters

Use `.g-*` for both axes. Smaller gutters don't need overflow control:

<Story title="Combined Gutters">
<div class="demo-gutters container text-center my-2">
  <div class="row g-2">
    <div class="col-6">
      <div class="p-3">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-3">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-3">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-3">Custom column padding</div>
    </div>
  </div>
</div>
</Story>

## Row Columns with Gutters

Combine responsive row columns with gutters:

<Story title="Row Columns with Gutters">
<div class="demo-gutters container text-center my-5">
  <div class="row row-cols-2 lg:row-cols-5 g-2 lg:g-3">
    <div class="col">
      <div class="p-3">Row column</div>
    </div>
    <div class="col">
      <div class="p-3">Row column</div>
    </div>
    <div class="col">
      <div class="p-3">Row column</div>
    </div>
    <div class="col">
      <div class="p-3">Row column</div>
    </div>
    <div class="col">
      <div class="p-3">Row column</div>
    </div>
    <div class="col">
      <div class="p-3">Row column</div>
    </div>
    <div class="col">
      <div class="p-3">Row column</div>
    </div>
    <div class="col">
      <div class="p-3">Row column</div>
    </div>
    <div class="col">
      <div class="p-3">Row column</div>
    </div>
    <div class="col">
      <div class="p-3">Row column</div>
    </div>
  </div>
</div>
</Story>

## No Gutters

Remove all spacing with `.g-0`:

<Story title="No Gutters">
<div class="demo-gutters-tight text-center my-5">
  <div class="row g-0">
    <div class="col-6 md:col-8">.col-6 .md:col-8</div>
    <div class="col-6 md:col-4">.col-6 .md:col-4</div>
  </div>
</div>
</Story>

## Quick Reference

| Class   | Styles                                            |
| ------- | ------------------------------------------------- |
| `.g-0`  | `--ms-gutter-x: 0; --ms-gutter-y: 0;`             |
| `.g-1`  | `--ms-gutter-x: 0.25rem; --ms-gutter-y: 0.25rem;` |
| `.g-2`  | `--ms-gutter-x: 0.5rem; --ms-gutter-y: 0.5rem;`   |
| `.g-3`  | `--ms-gutter-x: 0.75rem; --ms-gutter-y: 0.75rem;` |
| `.g-4`  | `--ms-gutter-x: 1rem; --ms-gutter-y: 1rem;`       |
| `.g-5`  | `--ms-gutter-x: 1.25rem; --ms-gutter-y: 1.25rem;` |
| `.gx-0` | `--ms-gutter-x: 0;`                               |
| `.gx-1` | `--ms-gutter-x: 0.25rem;`                         |
| `.gx-2` | `--ms-gutter-x: 0.5rem;`                          |
| `.gx-3` | `--ms-gutter-x: 0.75rem;`                         |
| `.gx-4` | `--ms-gutter-x: 1rem;`                            |
| `.gx-5` | `--ms-gutter-x: 1.25rem;`                         |
| `.gy-0` | `--ms-gutter-y: 0;`                               |
| `.gy-1` | `--ms-gutter-y: .25rem;`                          |
| `.gy-2` | `--ms-gutter-y: .5rem;`                           |
| `.gy-3` | `--ms-gutter-y: 0.75rem;`                         |
| `.gy-4` | `--ms-gutter-y: 1rem;`                            |
| `.gy-5` | `--ms-gutter-y: 1.25rem;`                         |

> All classes support responsive prefixes like `sm:`, `md:`, `lg:`, `xl:` etc.
