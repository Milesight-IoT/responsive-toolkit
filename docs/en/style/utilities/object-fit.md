---
order: 360
---

# Object Fit

Utility classes for controlling how [replaced elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element) (like `<img>`, `<video>`) fit within their containers.

## Basic Usage

<Story title="Basic Usage">
<div class="demo-object-fit p-4">
    <img class="object-fit-contain me-2" src="https://picsum.photos/seed/picsum/200/300" />
    <img class="object-fit-cover me-2" src="https://picsum.photos/seed/picsum/200/300" />
    <img class="object-fit-fill me-2" src="https://picsum.photos/seed/picsum/200/300" />
    <img class="object-fit-scale me-2" src="https://picsum.photos/seed/picsum/200/300" />
    <img class="object-fit-none me-2" src="https://picsum.photos/seed/picsum/200/300" />
</div>
</Story>

## Responsive Behavior

<Story title="Responsive Behavior">
<div class="demo-object-fit p-4">
    <img class="object-fit-contain md:object-fit-cover me-2" src="https://picsum.photos/seed/picsum/200/300" />
    <img class="object-fit-cover me-2" src="https://picsum.photos/seed/picsum/200/300" />
    <img class="object-fit-fill md:object-fit-cover me-2" src="https://picsum.photos/seed/picsum/200/300" />
    <img class="object-fit-scale md:object-fit-cover me-2" src="https://picsum.photos/seed/picsum/200/300" />
    <img class="object-fit-none md:object-fit-cover me-2" src="https://picsum.photos/seed/picsum/200/300" />
</div>
</Story>

## Quick Reference

| Class                 | Styles                    |
| --------------------- | ------------------------- |
| `.object-fit-contain` | `object-fit: contain;`    |
| `.object-fit-cover`   | `object-fit: cover;`      |
| `.object-fit-fill`    | `object-fit: fill;`       |
| `.object-fit-scale`   | `object-fit: scale-down;` |
| `.object-fit-none`    | `object-fit: none;`       |

> All classes support responsive prefixes like `sm:`, `md:`, `lg:`, `xl:` etc.
