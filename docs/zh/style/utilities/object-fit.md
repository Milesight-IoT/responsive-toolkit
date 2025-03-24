---
order: 360
---

# Object Fit

Object Fit 工具类用于调整[可替换元素](https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element)（如 `<img>`, `<video>`）的内容大小以适应其容器。

## 基础用法

<Story title="基础用法">
<div class="demo-object-fit p-4">
    <img class="object-fit-contain me-2" src="https://picsum.photos/seed/picsum/200/300" />
    <img class="object-fit-cover me-2" src="https://picsum.photos/seed/picsum/200/300" />
    <img class="object-fit-fill me-2" src="https://picsum.photos/seed/picsum/200/300" />
    <img class="object-fit-scale me-2" src="https://picsum.photos/seed/picsum/200/300" />
    <img class="object-fit-none me-2" src="https://picsum.photos/seed/picsum/200/300" />
</div>
</Story>

## 响应式

<Story title="响应式">
<div class="demo-object-fit p-4">
    <img class="object-fit-contain md:object-fit-cover me-2" src="https://picsum.photos/seed/picsum/200/300" />
    <img class="object-fit-cover me-2" src="https://picsum.photos/seed/picsum/200/300" />
    <img class="object-fit-fill md:object-fit-cover me-2" src="https://picsum.photos/seed/picsum/200/300" />
    <img class="object-fit-scale md:object-fit-cover me-2" src="https://picsum.photos/seed/picsum/200/300" />
    <img class="object-fit-none md:object-fit-cover me-2" src="https://picsum.photos/seed/picsum/200/300" />
</div>
</Story>

## 速查表

| 类名                  | 样式                      |
| --------------------- | ------------------------- |
| `.object-fit-contain` | `object-fit: contain;`    |
| `.object-fit-cover`   | `object-fit: cover;`      |
| `.object-fit-fill`    | `object-fit: fill;`       |
| `.object-fit-scale`   | `object-fit: scale-down;` |
| `.object-fit-none`    | `object-fit: none;`       |

> 以上所有类均支持响应式前缀，如 `sm:`, `md:`, `lg:`, `xl:`。
