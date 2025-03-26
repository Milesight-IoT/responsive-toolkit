---
order: 320
---

# Float

Utility classes for controlling element floating behavior using [CSS float property](https://developer.mozilla.org/en-US/docs/Web/CSS/float). Includes `!important` to override other styles. Note: These utilities have no effect on flex items.

## Basic Usage

<Story title="Basic Usage">
<div class="demo-float p-4">
  <div class="float-start">Float start on all viewport sizes</div><br>
  <div class="float-end">Float end on all viewport sizes</div><br>
  <div class="float-none">Don't float on all viewport sizes</div>
</div>
</Story>

## Responsive Behavior

<Story title="Responsive Behavior">
<div class="demo-float p-4">
  <div class="sm:float-start">Float start on viewport sized SM (small) or wider</div><br>
  <div class="md:float-start">Float start on viewport sized MD (medium) or wider</div><br>
  <div class="lg:float-start">Float start on viewport sized LG (large) or wider</div><br>
  <div class="xl:float-start">Float start on viewport sized XL (extra-large) or wider</div><br>
</div>
</Story>

## Quick Reference

| Class          | Styles                     |
| -------------- | -------------------------- |
| `.float-start` | `float: left !important;`  |
| `.float-end`   | `float: right !important;` |
| `.float-none`  | `float: none !important;`  |

> All classes support responsive prefixes like `sm:`, `md:`, `lg:`, `xl:` etc.
