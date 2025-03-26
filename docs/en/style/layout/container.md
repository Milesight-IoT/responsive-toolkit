---
order: 210
---

# Container

Containers are fundamental layout components in Responsive Style, required when using default grid system. They contain, pad, and center content. While nesting is possible, most layouts don't require nested containers.

Three container types available:

- `.container`: Sets `max-width` at each breakpoint
- `.{breakpoint}:container`: `width: 100%` until specified breakpoint
- `.container-fluid`: Full-width at all breakpoints

Comparison table showing `max-width` behavior:

|                    | xs(<576px) | sm(≥576px) | md(≥768px) | lg(≥992px) | xl(≥1200px) |
| ------------------ | :--------: | :--------: | :--------: | :--------: | :---------: |
| `.container`       |    100%    | **540px**  | **720px**  | **960px**  | **1140px**  |
| `.sm:container`    |    100%    | **540px**  | **720px**  | **960px**  | **1140px**  |
| `.md:container`    |    100%    |    100%    | **720px**  | **960px**  | **1140px**  |
| `.lg:container`    |    100%    |    100%    |    100%    | **960px**  | **1140px**  |
| `.xl:container`    |    100%    |    100%    |    100%    |    100%    | **1140px**  |
| `.container-fluid` |    100%    |    100%    |    100%    |    100%    |    100%     |

## Basic Usage

<Story title="Basic Usage">
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
