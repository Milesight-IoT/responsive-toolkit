---
order: 230
---

# 网格

当前，大多数浏览器都支持 CSS Grid 布局。不同于栅格布局，CSS Grid 布局更加强大，可以创建更复杂的布局。默认为 12 列网格，同时支持使用 CSS Variables 动态调整网格行数、列数及间距。以下为支持的 CSS Variables：

| 变量名         | 默认值   | 描述                           |
| -------------- | -------- | ------------------------------ |
| `--ms-rows`    | `1`      | 网格模板中的行数               |
| `--ms-columns` | `12`     | 网格模板中的列数               |
| `--ms-gap`     | `1.5rem` | 列（垂直和水平）之间的间隙大小 |

详细用法见下方示例。

## 基础用法

使用 `.grid` 类来创建一个网格布局。网格布局的子元素使用 `.g-col-*` 类来定义列宽。当水平方向没有更多空间时，网格项会自动换行到下一行

<Story title="基础用法">
<div class="demo-grid grid text-center my-5">
  <div class="g-col-4">.g-col-4</div>
  <div class="g-col-4">.g-col-4</div>
  <div class="g-col-4">.g-col-4</div>
  <div class="g-col-4">.g-col-4</div>
  <div class="g-col-4">.g-col-4</div>
  <div class="g-col-4">.g-col-4</div>
</div>
</Story>

## 响应式网格

使用响应式类来调整跨视口的布局。这里我们从最窄视口上的两列开始，然后在中等及以上的视口上增加到三列。

<Story title="响应式网格">
<div class="demo-grid grid text-center my-5">
  <div class="g-col-6 md:g-col-4">.g-col-6 .md:g-col-4</div>
  <div class="g-col-6 md:g-col-4">.g-col-6 .md:g-col-4</div>
  <div class="g-col-6 md:g-col-4">.g-col-6 .md:g-col-4</div>
</div>
</Story>

## 自动列

当网格项（`.grid` 的直接子项）上没有任何类时，每个网格项将自动调整为一列。

<Story title="自动列">
<div class="demo-grid grid text-center my-5">
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
</div>
</Story>

此行为可以与网格列类混合。

<Story title="混用自动列">
<div class="demo-grid grid text-center my-5">
  <div class="g-col-6">.g-col-6</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
</div>
</Story>

## 网格排序

通过使用 `.g-start-*` 类来调整网格项的顺序。`*` 为数字 `1~11`。

<Story title="网格排序">
<div class="demo-grid grid text-center my-5">
  <div class="g-col-3 md:g-start-3">.g-col-3 .md:g-start-3</div>
  <div class="g-col-4 g-start-6">.g-col-4 .g-start-6</div>
</div>
</Story>

## 跨行网格

通过使用 `g-row-*` 类来调整网格项的跨行。`*` 为数字 `1~6`。

<Story title="跨行网格">
<div class="demo-grid grid my-5">
  <div class="g-col-2 g-row-1">.g-row-1</div>
  <div class="g-col-2 g-row-2">.g-row-2</div>
  <div class="g-col-2 g-row-3">.g-row-3</div>
  <div class="g-col-2 g-row-4">.g-row-4</div>
  <div class="g-col-2 g-row-5">.g-row-5</div>
  <div class="g-col-2 g-row-6">.g-row-6</div>
</div>
</Story>

或者，使用 `g-rs-*`, `g-re-*` 来调整网格项的起始行和结束行。`*` 为数字 `1~6`。

<Story title="自定义跨行">
<div class="demo-grid grid my-5">
  <div class="g-col-2 g-rs-1 g-re-2">.g-rs-1 .g-re-3</div>
  <div class="g-col-2 g-start-3 g-rs-2 g-re-3">.g-rs-2 .g-re-3</div>
  <div class="g-col-2 g-start-5 g-rs-3 g-re-4">.g-rs-3 .g-re-4</div>
  <div class="g-col-2 g-start-7 g-rs-4 g-re-5">.g-rs-4 .g-re-5</div>
  <div class="g-col-2 g-start-9 g-rs-5 g-re-6">.g-rs-5 .g-re-6</div>
  <div class="g-col-2 g-start-11 g-rs-1 g-re-6">.g-rs-1 .g-re-6</div>
</div>
</Story>

## 自定义行列

使用 CSS Variables `--ms-rows`, `--ms-columns` 来动态调整网格行数、列数。

<Story title="自定义行列">
<div class="demo-grid grid text-center my-5" style="--ms-rows: 3; --ms-columns: 3;">
  <div>Auto-column</div>
  <div class="g-start-2" style="grid-row: 2">Auto-column</div>
  <div class="g-start-3" style="grid-row: 3">Auto-column</div>
</div>
</Story>

## 自定义间距

通用 CSS Variables `--ms-gap` 来动态调整列之间的间距。

<Story title="自定义间距">
<div class="demo-grid grid text-center my-5" style="--ms-gap: .5rem 1rem;">
  <div class="g-col-6">.g-col-6</div>
  <div class="g-col-6">.g-col-6</div>

  <div class="g-col-6">.g-col-6</div>
  <div class="g-col-6">.g-col-6</div>
</div>
</Story>

当然，若只针对特定布局调整间距，也可直接修改 CSS 属性 `row-gap` 和 `column-gap`。

<Story title="自定义间距">
<div class="demo-grid grid text-center my-5" style="row-gap: .5rem; column-gap: 0;">
  <div class="g-col-6">.g-col-6</div>
  <div class="g-col-6">.g-col-6</div>

  <div class="g-col-6">.g-col-6</div>
  <div class="g-col-6">.g-col-6</div>
</div>
</Story>

## 复杂混合布局

结合 `.d-*` 工具类及响应式前缀，可以创建复杂的混合布局。

<Story title="复杂混合布局">
<div class="demo-grid grid row-gap-2 text-center my-5">
  <div class="g-col-12">
    Header
  </div>
  <div class="g-col-4 g-row-2 d-none md:d-block">
    Sidebar
  </div>
  <div class="g-col-12 md:g-col-8">
    Main Content
  </div>
  <div class="g-col-6 md:g-col-4">
    Sub Content
  </div>
  <div class="g-col-6 md:g-col-4">
    Sub Content
  </div>
  <div class="g-col-12">
    Footer
  </div>
</div>
</Story>
