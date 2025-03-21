---
order: 210
---

# 容器

容器是 Responsive Style 中最基本的布局元素，在使用默认网格系统时必须使用。容器用于容纳、填充和（有时）居中放置其中的内容。虽然容器可以嵌套，但大多数布局并不需要嵌套容器。

Responsive Style 中有三种不同的容器：

- `.container`：在每个响应断点处设置 `max-width: {bp}`；
- `.{断点}:container`：在指定断点前为 `width: 100%`，其他则为 `max-width: {bp}`；
- `.container-fluid`：在所有断点处均为 `width: 100%`；

下表列举了在每个断点上，每个容器的 `max-width` 与原始 `.container` 和 `.container-fluid` 的比较情况。

|                    | xs(<576px) | sm(≥576px) | md(≥768px) | lg(≥992px) | xl(≥1200px) |
| ------------------ | :--------: | :--------: | :--------: | :--------: | :---------: |
| `.container`       |    100%    | **540px**  | **720px**  | **960px**  | **1140px**  |
| `.sm:container`    |    100%    | **540px**  | **720px**  | **960px**  | **1140px**  |
| `.md:container`    |    100%    |    100%    | **720px**  | **960px**  | **1140px**  |
| `.lg:container`    |    100%    |    100%    |    100%    | **960px**  | **1140px**  |
| `.xl:container`    |    100%    |    100%    |    100%    |    100%    | **1140px**  |
| `.container-fluid` |    100%    |    100%    |    100%    |    100%    |    100%     |

## 基础用法

<Story title="基础用法">
<div class="container my-2 rounded-soft bg-soft">
    <h5>Container</h5>
</div>
<div class="sm:container my-2 rounded-soft bg-soft">
    <h5>Container Small</h5>
</div>
<div class="sm:container my-2 rounded-soft bg-soft">
    <h5>Container Middle</h5>
</div>
<div class="sm:container my-2 rounded-soft bg-soft">
    <h5>Container Large</h5>
</div>
<div class="sm:container my-2 rounded-soft bg-soft">
    <h5>Container xLarge</h5>
</div>
<div class="sm:container my-2 rounded-soft bg-soft">
    <h5>Container Fluid</h5>
</div>
</Story>
