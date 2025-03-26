---
order: 220
---

# Columns

Responsive Style's columns system uses containers, rows and columns for layout alignment. Built with flexbox, it provides a 12-column responsive columns. Key principles:

- Columns created via `.row > .col` structure
- Content should be placed within `.col` elements
- Column spans 1-12 (e.g. 3 equal columns use `<div class="col" />`)
- Excess columns wrap to new row when total exceeds 12
- Add responsive prefixes like `.sm:col-4` for breakpoint-specific layouts

## Basic Columns

Use predefined `.row` and `.col` classes with parent `.container` for centered layouts:

<Story title="Basic Columns">
<div class="demo-columns container text-center my-5">
  <div class="row mb-3 mb-3">
    <div class="col">
      Column 12
    </div>
  </div>
  <div class="row mb-3 mb-3">
    <div class="col">
      Column 6
    </div>
    <div class="col">
      Column 6
    </div>
  </div>
  <div class="row mb-3 mb-3">
    <div class="col">
      Column 3
    </div>
    <div class="col">
      Column 6
    </div>
    <div class="col">
      Column 3
    </div>
  </div>
</div>
</Story>

## Horizontal Alignment

Control column alignment with `.justify-content-*` + responsive prefixes:

<Story title="Horizontal Alignment">
<div class="demo-columns container text-center my-5">
  <div class="row justify-content-start lg:justify-content-center mb-3">
    <div class="col-4">
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div>
  <div class="row justify-content-center mb-3">
    <div class="col-4">
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div>
  <div class="row justify-content-end mb-3">
    <div class="col-4">
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div>
  <div class="row justify-content-around mb-3">
    <div class="col-4">
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div>
  <div class="row justify-content-between mb-3">
    <div class="col-4">
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div>
  <div class="row justify-content-evenly mb-3">
    <div class="col-4">
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div>
</div>
</Story>

## Vertical Alignment

Adjust vertical alignment using `.align-items-*` classes:

<Story title="Vertical Alignment">
<div class="demo-columns container text-center bg-gray my-5">
  <div class="row align-items-start lg:align-items-center" style="height: 150px;">
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
  </div>
</div>
<div class="demo-columns container text-center bg-gray my-5">
  <div class="row align-items-center" style="height: 150px;">
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
  </div>
</div>
<div class="demo-columns container text-center bg-gray my-5">
  <div class="row align-items-end" style="height: 150px;">
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
  </div>
</div>
</Story>

Or apply individual alignment with `.align-self-*`:

<Story title="Individual Vertical Alignment">
<div class="demo-columns container text-center bg-gray">
  <div class="row" style="height: 150px;">
    <div class="col align-self-start">
      One of three columns
    </div>
    <div class="col align-self-center">
      One of three columns
    </div>
    <div class="col align-self-end">
      One of three columns
    </div>
  </div>
</div>
</Story>

## Column Ordering

Control visual order with `.order-*` classes (responsive supported):

<Story title="Column Ordering">
<div class="demo-columns container text-center my-5">
  <div class="row">
    <div class="col">
      First in DOM, no order applied
    </div>
    <div class="col order-5">
      Second in DOM, with a larger order
    </div>
    <div class="col order-1">
      Third in DOM, with an order of 1
    </div>
  </div>
</div>
</Story>

Use special `.order-first` and `.order-last` utilities:

<Story title="Special Order Classes">
<div class="demo-columns container text-center my-5">
  <div class="row">
    <div class="col order-last">
      First in DOM, ordered last
    </div>
    <div class="col">
      Second in DOM, unordered
    </div>
    <div class="col order-first">
      Third in DOM, ordered first
    </div>
  </div>
</div>
</Story>

## Column Offsets

Shift columns with `.offset-*` classes:

<Story title="Column Offsets">
<div class="demo-columns container text-center my-5">
  <div class="row">
    <div class="md:col-4">.md:col-4</div>
    <div class="md:col-4 md:offset-4">.md:col-4 .md:offset-4</div>
  </div>
  <div class="row">
    <div class="md:col-3 md:offset-3">.md:col-3 .md:offset-3</div>
    <div class="md:col-3 md:offset-3">.md:col-3 .md:offset-3</div>
  </div>
  <div class="row">
    <div class="md:col-6 md:offset-3">.md:col-6 .md:offset-3</div>
  </div>
</div>
</Story>

## Quick Reference

| Class        | Styles                            |
| ------------ | --------------------------------- |
| `.row`       | `display: flex; flex-wrap: wrap;` |
| `.col`       | `flex: 1 0 0;`                    |
| `.col-1`     | `width: 8.33333333%`              |
| `.col-2`     | `width: 16.66666667%`             |
| `.col-3`     | `width: 25%`                      |
| `.col-4`     | `width: 33.33333333%`             |
| `.col-5`     | `width: 41.66666667%`             |
| `.col-6`     | `width: 50%`                      |
| `.col-7`     | `width: 58.33333333%`             |
| `.col-8`     | `width: 66.66666667%`             |
| `.col-9`     | `width: 75%`                      |
| `.col-10`    | `width: 83.33333333%`             |
| `.col-11`    | `width: 91.66666667%`             |
| `.col-12`    | `width: 100%`                     |
| `.offset-1`  | `margin-left: 8.33333333%`        |
| `.offset-2`  | `margin-left: 16.66666667%`       |
| `.offset-3`  | `margin-left: 25%`                |
| `.offset-4`  | `margin-left: 33.33333333%`       |
| `.offset-5`  | `margin-left: 41.66666667%`       |
| `.offset-6`  | `margin-left: 50%`                |
| `.offset-7`  | `margin-left: 58.33333333%`       |
| `.offset-8`  | `margin-left: 66.66666667%`       |
| `.offset-9`  | `margin-left: 75%`                |
| `.offset-10` | `margin-left: 83.33333333%`       |
| `.offset-11` | `margin-left: 91.66666667%`       |

> All classes support responsive prefixes like `sm:`, `md:`, `lg:`, `xl:` etc.
