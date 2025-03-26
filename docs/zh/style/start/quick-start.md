---
order: 100
---

# 快速开始

Responsive Style 是一个功能强大且易于使用的 CSS 框架，旨在帮助开发人员快速构建响应式网站。它提供了一组简单的类，用于创建灵活和可扩展的布局。

## 安装

### 使用包管理器

::: code-group

```bash [pnpm]
pnpm add @milesight/responsive-style
```

```bash [npm]
npm install @milesight/responsive-style
```

```bash [yarn]
yarn add @milesight/responsive-style
```

:::

同时在项目中引入引入资源：

::: code-group

```css [style.css]
@import '@milesight/responsive-style/dist/index.css';
```

```scss [style.scss]
@import '@milesight/responsive-style/scss/index.scss';
```

```ts [index.ts]
import '@milesight/responsive-style/dist/index.css';
```

:::

### 使用免费 CDN

使用 jsDelivr 跳过下载文件的操作，直接在项目中使用编译后的 CSS 资源：

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@milesight/responsive-style/dist/index.min.css">
```

## 使用

完成安装并引入后，就可以在项目中使用 Responsive Style 提供的类来构建响应式布局。具体可参考本文档中的示例。
