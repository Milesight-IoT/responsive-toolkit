---
order: 200
---

# 断点

Responsive Style 利用断点（Breakpoints）来确定响应式布局在设备或视口（viewport）大小变化时的行为，该宽度可自定义。

## 核心概念

- **断点**：断点是响应式设计中的关键概念，用于确定在不同屏幕尺寸下如何显示内容。断点通常是一个像素值，表示在该值以下的屏幕尺寸下，内容将以特定方式显示；
- **媒体查询**：媒体查询是 CSS 的一项功能，它允许你根据一组浏览器和操作系统参数有条件地应用样式。我们最常在媒体查询中使用最小宽度；
- **移动优先**：Responsive Style 是移动优先的，旨在应用最少的样式，使布局在最小的断点上正常工作，然后再层层叠加样式，为更大的设备调整设计。这样可以优化 CSS，缩短渲染时间，为访客提供良好的体验。

## 默认断点

Responsive Style 提供了一组默认断点，用于在不同屏幕尺寸下调整布局。如果你使用的是 SCSS 源文件，则可以自定义这些断点。

| 名称 | 类前缀 | 断点值    |
| ---- | ------ | --------- |
| 超小 | -      | `<576px`  |
| 小   | `.sm:` | `≥576px`  |
| 中等 | `.md:` | `≥768px`  |
| 大   | `.lg:` | `≥992px`  |
| 超大 | `.xl:` | `≥1200px` |

每个断点的宽度都是 12 的倍数。断点还代表了常见设备尺寸和视口尺寸的子集 -- 它们并非专门针对每一种使用案例或设备。相反，这些范围为几乎所有设备提供了一个强大而一致的基础。

这些断点可以通过 SCSS 变量来自定义（你可以在 `_variables.scss` 文件中找到它们）。

```scss
$grid-breakpoints: (
    xs: 0,
    sm: 576px,
    md: 768px,
    lg: 992px,
    xl: 1200px,
) !default;
```

## 如何使用

Responsive Style 中提供的所有工具类都支持响应式类前缀，所以你可以大胆的在本文档列举的所有工具类前加上断点前缀，以实现在不同断点下的样式调整。

需注意的是，Responsive Style 遵循的是「**移动优先**」原则，这意味着如果一个样式类若无任何断点前缀，则该样式将在所有断点下生效。举个例子：

<Story title="断点隐藏" defaultShowCode>
<div class="demo-bps text-center p-4">
  <div class="d-none my-2"><b>Hide</b> on all screens</div>
  <div class="sm:d-none my-2"><b>Hide</b> on sm and wider screens</div>
  <div class="md:d-none my-2"><b>Hide</b> on md and wider screens</div>
  <div class="lg:d-none my-2"><b>Hide</b> on lg and wider screens</div>
  <div class="xl:d-none my-2"><b>Hide</b> on xl and wider screens</div>
</div>
</Story>

<Story title="断点显示" defaultShowCode>
<div class="demo-bps text-center p-4">
  <div class="d-none sm:d-block my-2"><b>Show</b> on sm and wider screens</div>
  <div class="d-none md:d-block my-2"><b>Show</b> on md and wider screens</div>
  <div class="d-none lg:d-block my-2"><b>Show</b> on lg and wider screens</div>
  <div class="d-none xl:d-block my-2"><b>Show</b> on xl and wider screens</div>
</div>
</Story>
