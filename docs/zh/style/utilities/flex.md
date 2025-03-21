---
order: 310
---

# Flex

Flex 工具类用于控制 Flex 布局。通过改变 `flex` 属性，可以实现元素的自适应、对齐等效果。区别于栅格布局，Flex 工具类更加灵活，可以创建更复杂的布局。

## 基础用法

<Story title="基础用法">
<div class="demo-flex p-4">
  <div class="d-flex p-2 mb-2">I'm a flexbox container!</div>
  <div class="d-inline-flex p-2">I'm an inline flexbox container!</div>
</div>
</Story>

## 方向控制

使用 `.flex-row` 设置水平方向（浏览器默认），或 `.flex-row-reverse` 定义水平反向。

<Story title="水平方向">
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

使用 `.flex-column` 设置垂直方向，或 `.flex-column-reverse` 定义垂直反向。

<Story title="垂直方向">
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

## 内容对齐

在 flexbox 容器上使用 `.justify-content-*` 工具类来更改主轴上 flex 项目的对齐方式（起始为 x 轴，如果 `flex-direction: column` 则为 y 轴）。`*` 可以是 `start` （浏览器默认）、 `end` 、 `center` 、 `between` 、 `around` 或 `evenly`。

<Story title="主轴对齐">
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

在 flexbox 容器上使用 `.align-items-*` 工具类来更改交叉轴上 flex 项目的对齐方式（起始为 y 轴，如果 `flex-direction: column` 则为 x 轴）。`*` 可以是 `start` 、 `end` 、 `center` 、 `baseline` 或 `stretch`。

<Story title="交叉轴对齐">
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

在 flexbox 容器上使用 `.align-content-*` 工具类来更改多行容器交叉轴上 flex 项目的对齐方式（起始为 y 轴，如果 `flex-direction: column` 则为 x 轴）。`*` 可以是 `start` 、 `end` 、 `center` 、 `between` 、 `around` 或 `stretch`。

> **注意**：此属性对单行弹性项目没有影响。

<Story title="多行交叉轴对齐">
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

## 独立交叉轴对齐

在 flexbox 容器上使用 `.align-self-*` 工具类来更改单个 flex 项目的对齐方式。`*` 可以是 `start` 、 `end` 、 `center` 、 `baseline` 或 `stretch`。

<Story title="交叉轴对齐">
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

## 项目缩放

在一系列同级元素上使用 `.flex-fill` 类，强制它们的宽度等于它们的内容（如果它们的内容没有超出它们的边框，则宽度相等），同时占用所有可用的水平空间。

<Story title="项目填充">
<div class="demo-flex-nest p-4">
  <div class="d-flex">
    <div class="p-2 flex-fill">Flex item with a lot of content</div>
    <div class="p-2 flex-fill">Flex item</div>
    <div class="p-2 flex-fill">Flex item</div>
  </div>
</div>
</Story>

使用 `.flex-grow-*` 工具类切换弹性项目扩展以填充可用空间的能力。在下面的示例中， `.flex-grow-1` 元素使用其所能使用的所有可用空间，同时为其余两个弹性项目留出必要的空间。

<Story title="项目扩展">
<div class="demo-flex-nest p-4">
  <div class="d-flex">
    <div class="p-2 flex-grow-1">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Third flex item</div>
  </div>
</div>
</Story>

使用` .flex-shrink-*` 工具类在必要时切换弹性项目的收缩能力。在下面的示例中，第二个带有 `.flex-shrink-1` 的弹性项目中的内容被强制换行，「收缩」以便为前一个带有 `width: 100%` 的弹性项目留出更多空间。

<Story title="项目收缩">
<div class="demo-flex-nest p-4">
  <div class="d-flex">
    <div class="p-2" style="width: 100%">Flex item</div>
    <div class="p-2 flex-shrink-1">Flex item</div>
  </div>
</div>
</Story>

## 顺序调整

使用 `.order-*` 工具类更改特定弹性项目的视觉顺序。我们仅提供将项目设为第一或最后以及重置以使用 DOM 顺序的选项。由于 `order` 采用 `0` 到 `5` 之间的任何整数值，因此可以为任何需要的其他值添加自定义 CSS。

<Story title="顺序调整">
<div class="demo-flex-nest p-4">
  <div class="d-flex">
    <div class="order-3 p-2">First flex item</div>
    <div class="order-2 p-2">Second flex item</div>
    <div class="order-1 p-2">Third flex item</div>
  </div>
</div>
</Story>

## 速查表

| 类名           | 描述                   |
| -------------- | ---------------------- |
| `.order-first` | `order: -1 !important` |
| `.order-1`     | `order: 1 !important`  |
| `.order-2`     | `order: 2 !important`  |
| `.order-3`     | `order: 3 !important`  |
| `.order-4`     | `order: 4 !important`  |
| `.order-5`     | `order: 5 !important`  |
| `.order-last`  | `order: 6 !important`  |

> 以上所有类均支持响应式前缀，如 `sm:`, `md:`, `lg:`, `xl:`。
