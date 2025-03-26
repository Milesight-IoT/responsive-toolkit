---
order: 330
---

# Spacing

Spacing 工具类可用于响应式地设置元素的间距。

## 常规元素间距

使用规范的简写类为元素分配响应式 `margin` 和 `padding` 值，包括对单个属性、所有属性以及垂直和水平属性的支持。

类的命名规则遵循 `{property}{side}-{size}` 的格式，其中：

- `{property}` 是 `m`（外边距）或 `p`（内边距）；
- `{side}` 是 `t`（顶部）、`b`（底部）、`s`（start, 在 LTR 中为左，在 RTL 中为右）、`e`（end, 在 LTR 中为右，在 RTL 中为左）或 `x`（水平）、 `y`（垂直）；
- `{size}` 是从 `.25rem` 到 `1.5rem` 的间距值。若为空白，则表示 `margin` 或 `padding` 的所有方向。

<Story title="常规元素间距">
<div class="demo-spacing p-4">
  <div class="mx-auto p-2" style="width: 200px;">
    Centered element
  </div>
</div>
</Story>

<!--
同时，Spacing 工具类还支持负边距，语法与默认的正边距工具类几乎相同，但在请求的大小前添加了 `n` 。以下是简单示例：

<Story title="负间距">
<div class="demo-spacing text-center p-4">
  <div class="mt-n4" style="width: 200px;">
    Block Element
  </div>
</div>
</Story>

**注意**：负边距默认不做开启以减小包体积，若有需求可在 `src/scss/_variables.scss` 中修改 `$enable-negative-margins` 变量开启，自行编译。
-->

## 网格元素间距

Spacing 工具类还支持网格元素的间距设置，包括对网格行和列的支持。

<Story title="网格间距">
<div class="demo-grid grid gap-3 p-4">
  <div class="p-2 g-col-6">Grid item 1</div>
  <div class="p-2 g-col-6">Grid item 2</div>
  <div class="p-2 g-col-6">Grid item 3</div>
  <div class="p-2 g-col-6">Grid item 4</div>
</div>
</Story>

<Story title="网格行间距">
<div class="demo-grid grid gap-0 row-gap-3 p-4">
  <div class="p-2 g-col-6">Grid item 1</div>
  <div class="p-2 g-col-6">Grid item 2</div>
  <div class="p-2 g-col-6">Grid item 3</div>
  <div class="p-2 g-col-6">Grid item 4</div>
</div>
</Story>

<Story title="网格列间距">
<div class="demo-grid grid gap-0 column-gap-3 p-4">
  <div class="p-2 g-col-6">Grid item 1</div>
  <div class="p-2 g-col-6">Grid item 2</div>
  <div class="p-2 g-col-6">Grid item 3</div>
  <div class="p-2 g-col-6">Grid item 4</div>
</div>
</Story>

## 速查表

> 以下所有类均支持响应式前缀，如 `sm:`, `md:`, `lg:`, `xl:`。

### Margin

| 类名       | 样式                                           |
| ---------- | ---------------------------------------------- |
| `.m-0`     | `margin: 0;`                                   |
| `.m-1`     | `margin: 0.25rem;`                             |
| `.m-2`     | `margin: 0.5rem;`                              |
| `.m-3`     | `margin: 0.75rem;`                             |
| `.m-4`     | `margin: 1rem;`                                |
| `.m-5`     | `margin: 1.25rem;`                             |
| `.m-6`     | `margin: 1.5rem;`                              |
| `.m-auto`  | `margin: auto;`                                |
| `.mx-0`    | `margin-left: 0; margin-right: 0;`             |
| `.mx-1`    | `margin-left: 0.25rem; margin-right: 0.25rem;` |
| `.mx-2`    | `margin-left: 0.5rem; margin-right: 0.5rem;`   |
| `.mx-3`    | `margin-left: 0.75rem; margin-right: 0.75rem;` |
| `.mx-4`    | `margin-left: 1rem; margin-right: 1rem;`       |
| `.mx-5`    | `margin-left: 1.25rem; margin-right: 1.25rem;` |
| `.mx-6`    | `margin-left: 1.5rem; margin-right: 1.5rem;`   |
| `.mx-auto` | `margin-left: auto; margin-right: auto;`       |
| `.my-0`    | `margin-top: 0; margin-bottom: 0;`             |
| `.my-1`    | `margin-top: 0.25rem; margin-bottom: 0.25rem;` |
| `.my-2`    | `margin-top: 0.5rem; margin-bottom: 0.5rem;`   |
| `.my-3`    | `margin-top: 0.75rem; margin-bottom: 0.75rem;` |
| `.my-4`    | `margin-top: 1rem; margin-bottom: 1rem;`       |
| `.my-5`    | `margin-top: 1.25rem; margin-bottom: 1.25rem;` |
| `.my-6`    | `margin-top: 1.5rem; margin-bottom: 1.5rem;`   |
| `.my-auto` | `margin-top: auto; margin-bottom: auto;`       |
| `.mt-0`    | `margin-top: 0;`                               |
| `.mt-1`    | `margin-top: 0.25rem;`                         |
| `.mt-2`    | `margin-top: 0.5rem;`                          |
| `.mt-3`    | `margin-top: 0.75rem;`                         |
| `.mt-4`    | `margin-top: 1rem;`                            |
| `.mt-5`    | `margin-top: 1.25rem;`                         |
| `.mt-6`    | `margin-top: 1.5rem;`                          |
| `.mt-auto` | `margin-top: auto;`                            |
| `.mb-0`    | `margin-bottom: 0;`                            |
| `.mb-1`    | `margin-bottom: 0.25rem;`                      |
| `.mb-2`    | `margin-bottom: 0.5rem;`                       |
| `.mb-3`    | `margin-bottom: 0.75rem;`                      |
| `.mb-4`    | `margin-bottom: 1rem;`                         |
| `.mb-5`    | `margin-bottom: 1.25rem;`                      |
| `.mb-6`    | `margin-bottom: 1.5rem;`                       |
| `.mb-auto` | `margin-bottom: auto;`                         |
| `.ms-0`    | `margin-left: 0;`                              |
| `.ms-1`    | `margin-left: 0.25rem;`                        |
| `.ms-2`    | `margin-left: 0.5rem;`                         |
| `.ms-3`    | `margin-left: 0.75rem;`                        |
| `.ms-4`    | `margin-left: 1rem;`                           |
| `.ms-5`    | `margin-left: 1.25rem;`                        |
| `.ms-6`    | `margin-left: 1.5rem;`                         |
| `.ms-auto` | `margin-left: auto;`                           |
| `.me-0`    | `margin-right: 0;`                             |
| `.me-1`    | `margin-right: 0.25rem;`                       |
| `.me-2`    | `margin-right: 0.5rem;`                        |
| `.me-3`    | `margin-right: 0.75rem;`                       |
| `.me-4`    | `margin-right: 1rem;`                          |
| `.me-5`    | `margin-right: 1.25rem;`                       |
| `.me-6`    | `margin-right: 1.5rem;`                        |
| `.me-auto` | `margin-right: auto;`                          |

### Padding

| 类名    | 样式                                             |
| ------- | ------------------------------------------------ |
| `.p-0`  | `padding: 0;`                                    |
| `.p-1`  | `padding: 0.25rem;`                              |
| `.p-2`  | `padding: 0.5rem;`                               |
| `.p-3`  | `padding: 0.75rem;`                              |
| `.p-4`  | `padding: 1rem;`                                 |
| `.p-5`  | `padding: 1.25rem;`                              |
| `.p-6`  | `padding: 1.5rem;`                               |
| `.px-0` | `padding-left: 0; padding-right: 0;`             |
| `.px-1` | `padding-left: 0.25rem; padding-right: 0.25rem;` |
| `.px-2` | `padding-left: 0.5rem; padding-right: 0.5rem;`   |
| `.px-3` | `padding-left: 0.75rem; padding-right: 0.75rem;` |
| `.px-4` | `padding-left: 1rem; padding-right: 1rem;`       |
| `.px-5` | `padding-left: 1.25rem; padding-right: 1.25rem;` |
| `.px-6` | `padding-left: 1.5rem; padding-right: 1.5rem;`   |
| `.py-0` | `padding-top: 0; padding-bottom: 0;`             |
| `.py-1` | `padding-top: 0.25rem; padding-bottom: 0.25rem;` |
| `.py-2` | `padding-top: 0.5rem; padding-bottom: 0.5rem;`   |
| `.py-3` | `padding-top: 0.75rem; padding-bottom: 0.75rem;` |
| `.py-4` | `padding-top: 1rem; padding-bottom: 1rem;`       |
| `.py-5` | `padding-top: 1.25rem; padding-bottom: 1.25rem;` |
| `.py-6` | `padding-top: 1.5rem; padding-bottom: 1.5rem;`   |
| `.pt-0` | `padding-top: 0;`                                |
| `.pt-1` | `padding-top: 0.25rem;`                          |
| `.pt-2` | `padding-top: 0.5rem;`                           |
| `.pt-3` | `padding-top: 0.75rem;`                          |
| `.pt-4` | `padding-top: 1rem;`                             |
| `.pt-5` | `padding-top: 1.25rem;`                          |
| `.pt-6` | `padding-top: 1.5rem;`                           |
| `.pb-0` | `padding-bottom: 0;`                             |
| `.pb-1` | `padding-bottom: 0.25rem;`                       |
| `.pb-2` | `padding-bottom: 0.5rem;`                        |
| `.pb-3` | `padding-bottom: 0.75rem;`                       |
| `.pb-4` | `padding-bottom: 1rem;`                          |
| `.pb-5` | `padding-bottom: 1.25rem;`                       |
| `.pb-6` | `padding-bottom: 1.5rem;`                        |
| `.ps-0` | `padding-left: 0;`                               |
| `.ps-1` | `padding-left: 0.25rem;`                         |
| `.ps-2` | `padding-left: 0.5rem;`                          |
| `.ps-3` | `padding-left: 0.75rem;`                         |
| `.ps-4` | `padding-left: 1rem;`                            |
| `.ps-5` | `padding-left: 1.25rem;`                         |
| `.ps-6` | `padding-left: 1.5rem;`                          |
| `.pe-0` | `padding-right: 0;`                              |
| `.pe-1` | `padding-right: 0.25rem;`                        |
| `.pe-2` | `padding-right: 0.5rem;`                         |
| `.pe-3` | `padding-right: 0.75rem;`                        |
| `.pe-4` | `padding-right: 1rem;`                           |
| `.pe-5` | `padding-right: 1.25rem;`                        |
| `.pe-6` | `padding-right: 1.5rem;`                         |

### Gap

| 类名            | 样式                   |
| --------------- | ---------------------- |
| `.gap-0`        | `gap: 0;`              |
| `.gap-1`        | `gap: 0.25rem;`        |
| `.gap-2`        | `gap: 0.5rem;`         |
| `.gap-3`        | `gap: 0.75rem;`        |
| `.gap-4`        | `gap: 1rem;`           |
| `.gap-5`        | `gap: 1.25rem;`        |
| `.gap-6`        | `gap: 1.5rem;`         |
| `.row-gap-0`    | `row-gap: 0;`          |
| `.row-gap-1`    | `row-gap: 0.25rem;`    |
| `.row-gap-2`    | `row-gap: 0.5rem;`     |
| `.row-gap-3`    | `row-gap: 0.75rem;`    |
| `.row-gap-4`    | `row-gap: 1rem;`       |
| `.row-gap-5`    | `row-gap: 1.25rem;`    |
| `.row-gap-6`    | `row-gap: 1.5rem;`     |
| `.column-gap-0` | `column-gap: 0;`       |
| `.column-gap-1` | `column-gap: 0.25rem;` |
| `.column-gap-2` | `column-gap: 0.5rem;`  |
| `.column-gap-3` | `column-gap: 0.75rem;` |
| `.column-gap-4` | `column-gap: 1rem;`    |
| `.column-gap-5` | `column-gap: 1.25rem;` |
| `.column-gap-6` | `column-gap: 1.5rem;`  |
