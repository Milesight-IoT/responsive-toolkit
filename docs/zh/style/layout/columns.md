---
order: 220
---

# 栅格

Responsive Style 的栅格系统使用一系列容器、行和列来布局和对齐内容。它采用 flexbox 构建 12 列栅格系统，具备完整的响应式支持。下面简单介绍一下它的工作原理：

- 通过 `.row` 在水平方向建立一组 `column`（类名 `.col`）；
- 你的内容应当放置于 `.col` 元素内，并且，只有 `.col` 可以作为 `.row` 的直接元素；
- 栅格系统中的列是指 1 到 12 的值来表示其跨越的范围。例如，三个等宽的列可以使用 `<div class="col" />` 来创建；
- 如果一个 `.row` 中的 `.col` 总和超过 12，那么多余的 `.col` 会作为一个整体另起一行排列；
- 响应式支持通过在 `.col` 上使用断点前缀类来实现，例如：`.sm:col-4`；

## 基础栅格

使用我们预定义的 `.row`, `.col` 网格类在所有设备和视口上创建各类宽度的列。这些列与父级 `.container` 一起居中显示在页面中。

<Story title="基础栅格">
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

## 水平对齐

在 `.row` 上使用 `.justify-content-*` 这些类可以结合响应式前缀使用（如 `.sm:justify-content-end`），以便在不同的断点上对齐列。

<Story title="水平对齐">
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

## 垂直对齐

在 `.row` 上使用 `.align-items-*` 类可以控制列的垂直对齐方式。这些类可以结合响应式前缀使用（如 `.sm:align-items-end`），以便在不同的断点上对齐列。

<Story title="垂直对齐">
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

或者，使用任何响应式 `.align-self-*` 类单独更改每一列的对齐方式。

<Story title="独立垂直对齐">
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

## 栅格排序

使用 `.order-` 类来控制内容的视觉顺序。这些类是响应式的，因此您可以通过断点来设置顺序（例如，`.order-1 .md:order-2`）。包括对所有六个网格层中 1 到 5 的支持。如果您需要更多 `.order-*` 类，可以通过 Sass 变量修改默认数量。

<Story title="栅格排序">
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

还有响应式 `.order-first` 和 `.order-last` 类，通过应用 `order: -1` 和 `order: 6` 来改变元素的顺序。这些类还可以根据需要与编号为 `.order-*` 的类混合使用。

<Story title="特殊栅格排序类">
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

## 栅格偏移

使用响应式 `.offset-*` 类将列向右移动。这些类将列的左边距增加 `*` 列。例如，`.md:offset-4` 将在 `md` 断点移动 4 列。

<Story title="栅格偏移">
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

## 速查表

| 类名         | 样式                              |
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

> 以上所有类均支持响应式前缀，如 `sm:`, `md:`, `lg:`, `xl:`。
