---
order: 320
---

# Float

Float 工具类使用 [CSS float 属性](https://developer.mozilla.org/en-US/docs/Web/CSS/float)将元素向左或向右浮动，或禁用浮动。包含 `!important` 以避免特殊性问题。需注意的是，Float 工具类对弹性项目没有影响。

## 基础用法

<Story title="基础用法">
<div class="demo-float p-4">
  <div class="float-start">Float start on all viewport sizes</div><br>
  <div class="float-end">Float end on all viewport sizes</div><br>
  <div class="float-none">Don't float on all viewport sizes</div>
</div>
</Story>

## 响应式用法

<Story title="响应式用法">
<div class="demo-float p-4">
  <div class="sm:float-start">Float start on viewport sized SM (small) or wider</div><br>
  <div class="md:float-start">Float start on viewport sized MD (medium) or wider</div><br>
  <div class="lg:float-start">Float start on viewport sized LG (large) or wider</div><br>
  <div class="xl:float-start">Float start on viewport sized XL (extra-large) or wider</div><br>
</div>
</Story>

# 速查表

| 类名           | 样式                       |
| -------------- | -------------------------- |
| `.float-start` | `float: left !important;`  |
| `.float-end`   | `float: right !important;` |
| `.float-none`  | `float: none !important;`  |

> 以上所有类均支持响应式前缀，如 `sm:`, `md:`, `lg:`, `xl:`。
