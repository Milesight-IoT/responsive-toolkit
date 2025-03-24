---
order: 350
---

# Ratio

Ratio 工具类可快速配置元素的宽高比。适合用于需根据父元素宽高比例调整的元素，如视频、图片、iframe 等。

## 基础用法

<Story title="基础用法">
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

## 自定义比例

每个 `.ratio-*` 工具类中都包含一个自定义 CSS 变量 `--ms-aspect-ratio`，可以通过覆盖该变量来自定义宽高比。

<Story title="自定义比例">
<div class="demo-ratio p-5">
  <div class="ratio" style="--ms-aspect-ratio: 50%;">
    <div>2x1</div>
  </div>
</div>
</Story>

## 速查表

| 类名          | 样式                                 |
| ------------- | ------------------------------------ |
| `.ratio`      | `position: relative;`                |
| `.ratio-1x1`  | `--ms-aspect-ratio: 100%;`           |
| `.ratio-4x3`  | `--ms-aspect-ratio: 75%;`            |
| `.ratio-16x9` | `--ms-aspect-ratio: 56.25%;`         |
| `.ratio-21x9` | `--ms-aspect-ratio: 42.8571428571%;` |

> 以上所有类均支持响应式前缀，如 `sm:`, `md:`, `lg:`, `xl:`。
