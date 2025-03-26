---
order: 300
---

# Display

Display 工具类用于控制元素的显示方式。通过改变 `display` 属性，可以实现元素的显示、隐藏、布局等效果。

## 基础用法

<Story title="基础用法">
<div class="demo-display text-center p-4">
  <div class="lg:d-none my-2"><b>Hide</b> on lg and wider screens</div>
  <div class="d-none lg:d-block my-2"><b>Show</b> on lg and wider screens</div>
</div>
</Story>

## 速查表

| 类名              | 样式                     |
| ----------------- | ------------------------ |
| `.d-none`         | `display: none;`         |
| `.d-inline`       | `display: inline;`       |
| `.d-block`        | `display: block;`        |
| `.d-inline-block` | `display: inline-block;` |
| `.d-flex`         | `display: flex;`         |
| `.d-inline-flex`  | `display: inline-flex;`  |
| `.d-grid`         | `display: grid;`         |
| `.d-inline-grid`  | `display: inline-grid;`  |
| `.d-table`        | `display: table;`        |
| `.d-table-row`    | `display: table-row;`    |
| `.d-table-cell`   | `display: table-cell;`   |

> 以上所有类均支持响应式前缀，如 `sm:`, `md:`, `lg:`, `xl:`。
