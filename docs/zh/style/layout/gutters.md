---
order: 250
---

# 间距

间距用于栅格布局，可响应式的间隔和对齐内容。Responsive Style 中预设了一系列的间隔类，用于设置元素之间的间距。支持使用 CSS Variables 来动态调整列之间的间距：

| 变量名          | 默认值   | 描述             |
| --------------- | -------- | ---------------- |
| `--ms-gutter-x` | `1.5rem` | 列之间的水平间距 |
| `--ms-gutter-y` | `0`      | 行之间的垂直间距 |

## 水平间距

`.gx-*` 类可用于控制水平间距宽度。如果使用较大的间距，则可能需要使用匹配的填充实用程序调整 `.container` 或 `.container-fluid` 父级以避免不必要的溢出。例如，在下面的例子中，我们使用 `.p-5` 增加了填充：

<Story title="水平间距">
<div class="demo-gutters container p-5 text-center">
  <div class="row gx-5">
    <div class="col">
     <div class="p-3">Custom column padding</div>
    </div>
    <div class="col">
      <div class="p-3">Custom column padding</div>
    </div>
  </div>
</div>
</Story>

另一种解决方案是使用 `.overflow-hidden` 类在 `.row` 周围添加包装器：

<Story title="水平间距">
<div class="demo-gutters container overflow-hidden text-center my-5">
  <div class="row gx-5">
    <div class="col">
     <div class="p-3">Custom column padding</div>
    </div>
    <div class="col">
      <div class="p-3">Custom column padding</div>
    </div>
  </div>
</div>
</Story>

## 垂直间距

当列换行时，可以使用 `.gy-*` 类来控制行内的垂直间距宽度。与水平间距一样，垂直间距可能会导致页面末尾 `.row` 下方出现溢出。如果发生这种情况，您可以使用 `.overflow-hidden` 类在 `.row` 周围添加包装器：

<Story title="垂直间距">
<div class="demo-gutters container overflow-hidden text-center my-4">
  <div class="row gy-5">
    <div class="col-6">
      <div class="p-3">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-3">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-3">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-3">Custom column padding</div>
    </div>
  </div>
</div>
</Story>

## 水平和垂直间距

`.g-*` 类可用于控制水平和垂直间距，在下面的示例中，我们使用较小的间距，因此不需要添加 `.overflow-hidden` 包装类。

<Story title="水平和垂直间距">
<div class="demo-gutters container text-center my-2">
  <div class="row g-2">
    <div class="col-6">
      <div class="p-3">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-3">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-3">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-3">Custom column padding</div>
    </div>
  </div>
</div>
</Story>

## 行列间距

行列中也可以添加间距类。在下面的例子中，我们使用了响应式行列和响应式间距类。

<Story title="行列间距">
<div class="demo-gutters container text-center my-5">
  <div class="row row-cols-2 lg:row-cols-5 g-2 lg:g-3">
    <div class="col">
      <div class="p-3">Row column</div>
    </div>
    <div class="col">
      <div class="p-3">Row column</div>
    </div>
    <div class="col">
      <div class="p-3">Row column</div>
    </div>
    <div class="col">
      <div class="p-3">Row column</div>
    </div>
    <div class="col">
      <div class="p-3">Row column</div>
    </div>
    <div class="col">
      <div class="p-3">Row column</div>
    </div>
    <div class="col">
      <div class="p-3">Row column</div>
    </div>
    <div class="col">
      <div class="p-3">Row column</div>
    </div>
    <div class="col">
      <div class="p-3">Row column</div>
    </div>
    <div class="col">
      <div class="p-3">Row column</div>
    </div>
  </div>
</div>
</Story>

## 无间距

实际使用场景中，我们可能遇到需要去除间距的情况。在这种情况下，可以使用 `.g-0` 类来移除所有间距。这将删除 `.row` 中的负 margins 以及所有直接子列中的水平 padding。

<Story title="无间距">
<div class="demo-gutters-tight text-center my-5">
  <div class="row g-0">
    <div class="col-6 md:col-8">.col-6 .md:col-8</div>
    <div class="col-6 md:col-4">.col-6 .md:col-4</div>
  </div>
</div>
</Story>

## 速查表

| 类名    | 样式                                              |
| ------- | ------------------------------------------------- |
| `.g-0`  | `--ms-gutter-x: 0; --ms-gutter-y: 0;`             |
| `.g-1`  | `--ms-gutter-x: 0.25rem; --ms-gutter-y: 0.25rem;` |
| `.g-2`  | `--ms-gutter-x: 0.5rem; --ms-gutter-y: 0.5rem;`   |
| `.g-3`  | `--ms-gutter-x: 0.75rem; --ms-gutter-y: 0.75rem;` |
| `.g-4`  | `--ms-gutter-x: 1rem; --ms-gutter-y: 1rem;`       |
| `.g-5`  | `--ms-gutter-x: 1.25rem; --ms-gutter-y: 1.25rem;` |
| `.gx-0` | `--ms-gutter-x: 0;`                               |
| `.gx-1` | `--ms-gutter-x: 0.25rem;`                         |
| `.gx-2` | `--ms-gutter-x: 0.5rem;`                          |
| `.gx-3` | `--ms-gutter-x: 0.75rem;`                         |
| `.gx-4` | `--ms-gutter-x: 1rem;`                            |
| `.gx-5` | `--ms-gutter-x: 1.25rem;`                         |
| `.gy-0` | `--ms-gutter-y: 0;`                               |
| `.gy-1` | `--ms-gutter-y: .25rem;`                          |
| `.gy-2` | `--ms-gutter-y: .5rem;`                           |
| `.gy-3` | `--ms-gutter-y: 0.75rem;`                         |
| `.gy-4` | `--ms-gutter-y: 1rem;`                            |
| `.gy-5` | `--ms-gutter-y: 1.25rem;`                         |

> 以上所有类均支持响应式前缀，如 `sm:`, `md:`, `lg:`, `xl:`。
