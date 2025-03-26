---
order: 350
---

# Ratio

Utility classes for quickly configuring element aspect ratios. Ideal for video containers, images, and iframes requiring proportional scaling.

## Basic Usage

<Story title="Basic Usage">
<div class="demo-ratio p-4">
  <div class="ratio ratio-1x1">
    <div>1x1</div>
  </div>
  <div class="ratio ratio-4x3">
    <div>4x3</div>
  </div>
  <div class="ratio ratio-16x9">
    <div>16x9</div>
  </div>
  <div class="ratio ratio-21x9">
    <div>21x9</div>
  </div>
</div>
</Story>

## Custom Ratios

Override the CSS variable `--ms-aspect-ratio` for custom aspect ratios:

<Story title="Custom Ratios">
<div class="demo-ratio p-5">
  <div class="ratio" style="--ms-aspect-ratio: 50%;">
    <div>2x1</div>
  </div>
</div>
</Story>

## Quick Reference

| Class         | Styles                               |
| ------------- | ------------------------------------ |
| `.ratio`      | `position: relative;`                |
| `.ratio-1x1`  | `--ms-aspect-ratio: 100%;`           |
| `.ratio-4x3`  | `--ms-aspect-ratio: 75%;`            |
| `.ratio-16x9` | `--ms-aspect-ratio: 56.25%;`         |
| `.ratio-21x9` | `--ms-aspect-ratio: 42.8571428571%;` |

> All classes support responsive prefixes like `sm:`, `md:`, `lg:`, `xl:` etc.
