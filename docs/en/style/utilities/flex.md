---
order: 310
---

# Flex

Utility classes for controlling flex layouts. Provides flexible alignment and distribution capabilities through `flex` properties. More adaptive than traditional grid systems for complex layouts.

## Basic Usage

<Story title="Basic Usage">
<div class="demo-flex p-4">
  <div class="d-flex p-2 mb-2">I'm a flexbox container!</div>
  <div class="d-inline-flex p-2">I'm an inline flexbox container!</div>
</div>
</Story>

## Direction Control

Use `.flex-row` (default) or `.flex-row-reverse` for horizontal layouts:

<Story title="Horizontal Direction">
<div class="demo-flex demo-flex-nest p-4">
  <div class="d-flex flex-row mb-4">
    <div class="p-2">Flex item 1</div>
    <div class="p-2">Flex item 2</div>
    <div class="p-2">Flex item 3</div>
  </div>
  <div class="d-flex flex-row-reverse">
    <div class="p-2">Flex item 1</div>
    <div class="p-2">Flex item 2</div>
    <div class="p-2">Flex item 3</div>
  </div>
</div>
</Story>

Use `.flex-column` or `.flex-column-reverse` for vertical layouts:

<Story title="Vertical Direction">
<div class="demo-flex-nest p-4">
  <div class="d-flex flex-column mb-4">
    <div class="p-2">Flex item 1</div>
    <div class="p-2">Flex item 2</div>
    <div class="p-2">Flex item 3</div>
  </div>
  <div class="d-flex flex-column-reverse">
    <div class="p-2">Flex item 1</div>
    <div class="p-2">Flex item 2</div>
    <div class="p-2">Flex item 3</div>
  </div>
</div>
</Story>

## Content Alignment

Control main axis alignment with `.justify-content-*` (`start`/`end`/`center`/`between`/`around`/`evenly`):

<Story title="Main Axis Alignment">
<div class="demo-flex demo-flex-nest p-4">
  <div class="d-flex justify-content-start mb-4">
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
  </div>
  <div class="d-flex justify-content-end mb-4">
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
  </div>
  <div class="d-flex justify-content-center mb-4">
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
  </div>
  <div class="d-flex justify-content-between mb-4">
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
  </div>
  <div class="d-flex justify-content-around mb-4">
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
  </div>
  <div class="d-flex justify-content-evenly mb-4">
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
  </div>
</div>
</Story>

Control cross axis alignment with `.align-items-*` (`start`/`end`/`center`/`baseline`/`stretch`):

<Story title="Cross Axis Alignment">
<div class="demo-flex demo-flex-nest p-4">
  <div class="d-flex align-items-start mb-4" style="height: 100px;">
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
  </div>
  <div class="d-flex align-items-end mb-4" style="height: 100px;">
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
  </div>
  <div class="d-flex align-items-center mb-4" style="height: 100px;">
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
  </div>
  <div class="d-flex align-items-baseline mb-4" style="height: 100px;">
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
  </div>
  <div class="d-flex align-items-stretch mb-4" style="height: 100px;">
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
  </div>
</div>
</Story>

Multi-line alignment with `.align-content-*` (`start`/`end`/`center`/`between`/`around`/`stretch`):

<Story title="Multi-line Alignment">
<div class="demo-flex demo-flex-nest p-4">
  <div class="d-flex align-content-start flex-wrap mb-4" style="height: 100px;">
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
  </div>
  <div class="d-flex align-content-end flex-wrap mb-4" style="height: 100px;">
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
  </div>
  <div class="d-flex align-content-center flex-wrap mb-4" style="height: 100px;">
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
  </div>
  <div class="d-flex align-content-between flex-wrap mb-4" style="height: 100px;">
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
  </div>
  <div class="d-flex align-content-around flex-wrap mb-4" style="height: 100px;">
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
  </div>
  <div class="d-flex align-content-stretch flex-wrap mb-4" style="height: 100px;">
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
  </div>
</div>
</Story>

## Individual Alignment

Adjust single item alignment with `.align-self-*`:

<Story title="Individual Alignment">
<div class="demo-flex demo-flex-nest p-4">
  <div class="d-flex mb-4" style="height: 100px;">
    <div class="p-2">Flex item</div>
    <div class="align-self-start p-2">Aligned flex item</div>
    <div class="p-2">Flex item</div>
  </div>
  <div class="d-flex mb-4" style="height: 100px;">
    <div class="p-2">Flex item</div>
    <div class="align-self-end p-2">Aligned flex item</div>
    <div class="p-2">Flex item</div>
  </div>
  <div class="d-flex mb-4" style="height: 100px;">
    <div class="p-2">Flex item</div>
    <div class="align-self-center p-2">Aligned flex item</div>
    <div class="p-2">Flex item</div>
  </div>
  <div class="d-flex mb-4" style="height: 100px;">
    <div class="p-2">Flex item</div>
    <div class="align-self-baseline p-2">Aligned flex item</div>
    <div class="p-2">Flex item</div>
  </div>
  <div class="d-flex mb-4" style="height: 100px;">
    <div class="p-2">Flex item</div>
    <div class="align-self-stretch p-2">Aligned flex item</div>
    <div class="p-2">Flex item</div>
  </div>
</div>
</Story>

## Item Scaling

Equal-width items with `.flex-fill`:

<Story title="Item Fill">
<div class="demo-flex-nest p-4">
  <div class="d-flex">
    <div class="p-2 flex-fill">Flex item with a lot of content</div>
    <div class="p-2 flex-fill">Flex item</div>
    <div class="p-2 flex-fill">Flex item</div>
  </div>
</div>
</Story>

Growth control with `.flex-grow-*`:

<Story title="Item Growth">
<div class="demo-flex-nest p-4">
  <div class="d-flex">
    <div class="p-2 flex-grow-1">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Third flex item</div>
  </div>
</div>
</Story>

Shrink control with `.flex-shrink-*`:

<Story title="Item Shrink">
<div class="demo-flex-nest p-4">
  <div class="d-flex">
    <div class="p-2" style="width: 100%">Flex item</div>
    <div class="p-2 flex-shrink-1">Flex item</div>
  </div>
</div>
</Story>

## Order Adjustment

Modify visual order with `.order-*`:

<Story title="Order Adjustment">
<div class="demo-flex-nest p-4">
  <div class="d-flex">
    <div class="order-3 p-2">First flex item</div>
    <div class="order-2 p-2">Second flex item</div>
    <div class="order-1 p-2">Third flex item</div>
  </div>
</div>
</Story>

## Quick Reference

| Class                      | Styles                           |
| -------------------------- | -------------------------------- |
| `.d-flex`                  | `display: flex`                  |
| `.d-inline-flex`           | `display: inline-flex`           |
| `.flex-fill`               | `flex: 1 1 auto`                 |
| `.flex-row`                | `flex-direction: row`            |
| `.flex-row-reverse`        | `flex-direction: row-reverse`    |
| `.flex-column`             | `flex-direction: column`         |
| `.flex-column-reverse`     | `flex-direction: column-reverse` |
| `.flex-wrap`               | `flex-wrap: wrap`                |
| `.flex-nowrap`             | `flex-wrap: nowrap`              |
| `.flex-wrap-reverse`       | `flex-wrap: wrap-reverse`        |
| `.justify-content-start`   | `justify-content: flex-start`    |
| `.justify-content-end`     | `justify-content: flex-end`      |
| `.justify-content-center`  | `justify-content: center`        |
| `.justify-content-between` | `justify-content: space-between` |
| `.justify-content-around`  | `justify-content: space-around`  |
| `.justify-content-evenly`  | `justify-content: space-evenly`  |
| `.align-items-start`       | `align-items: flex-start`        |
| `.align-items-end`         | `align-items: flex-end`          |
| `.align-items-center`      | `align-items: center`            |
| `.align-items-baseline`    | `align-items: baseline`          |
| `.align-items-stretch`     | `align-items: stretch`           |
| `.align-content-start`     | `align-content: flex-start`      |
| `.align-content-end`       | `align-content: flex-end`        |
| `.align-content-center`    | `align-content: center`          |
| `.align-content-between`   | `align-content: space-between`   |
| `.align-content-around`    | `align-content: space-around`    |
| `.align-content-stretch`   | `align-content: stretch`         |
| `.align-self-start`        | `align-self: flex-start`         |
| `.align-self-end`          | `align-self: flex-end`           |
| `.align-self-center`       | `align-self: center`             |
| `.align-self-baseline`     | `align-self: baseline`           |
| `.align-self-stretch`      | `align-self: stretch`            |
| `.flex-grow-0`             | `flex-grow: 0`                   |
| `.flex-grow-1`             | `flex-grow: 1`                   |
| `.flex-shrink-0`           | `flex-shrink: 0`                 |
| `.flex-shrink-1`           | `flex-shrink: 1`                 |
| `.order-first`             | `order: -1`                      |
| `.order-1`                 | `order: 1`                       |
| `.order-2`                 | `order: 2`                       |
| `.order-3`                 | `order: 3`                       |
| `.order-4`                 | `order: 4`                       |
| `.order-5`                 | `order: 5`                       |
| `.order-last`              | `order: 6`                       |

> All classes support responsive prefixes like `sm:`, `md:`, `lg:`, `xl:` etc.
