---
order: 130
---

# 支持的浏览器

Responsive Style 支持所有主流浏览器和平台的 最新、稳定版本。

对于其它使用了最新版本的 WebKit、Blink 或 Gecko 内核的浏览器，或者直接或间接调用了平台的 web view API，都不是明确被支持的。但是，Responsive Style 应该（大多数情况下）在这些浏览器中是能够正常显示和运行的。下面列出了更具体地支持情况。

你可以在 `.browserslistrc` 文件 中找到所有支持的浏览器及版本列表：

```plaintext
# https://github.com/browserslist/browserslist#readme

>= 0.5%
last 2 major versions
not dead
Chrome >= 60
Firefox >= 60
Firefox ESR
iOS >= 12
Safari >= 12
not Explorer <= 11
```

我们使用 [Autoprefixer](https://github.com/postcss/autoprefixer) 来自动添加特定于浏览器厂商地 CSS 属性前缀，并使用 [Browserslist](https://github.com/browserslist/browserslist) 来对浏览器地版本进行管理。请查阅这些工具各自地文档，以了解如何将这些工具集成到你的项目中。

## 移动设备

通常来说，Responsive Style 支持每个主要平台上的默认浏览器的最新版本。注意，基于代理（proxy）模式的浏览器（例如 Opera Mini、Opera Mobile’s Turbo mode、UC Browser Mini、Amazon Silk，这些浏览器自身并不具备完整的页面渲染能力）是不被支持的。

|                | Chrome | Firefox | Safari | Android Browser & WebView |
| -------------- | :----: | :-----: | :----: | :-----------------------: |
| Android Chrome |   ✔   |   ✔    |   -    |           v6.0+           |
| iOS            |   ✔   |   ✔    |   ✔   |             -             |

## 桌面浏览器

同样，大多数桌面浏览器的最新版本是被支持的。

|         | Chrome | Firefox | Safari | Edge |
| ------- | :----: | :-----: | :----: | :--: |
| Mac     |   ✔   |   ✔    |   ✔   |  ✔  |
| Windows |   ✔   |   ✔    |   -    |  ✔  |

## 特殊场景说明

### 浏览器缩放

页面缩放不可避免地会在某些组件中出现渲染问题，无论是使用 Responsive Style，还是其他相似的库。根据问题的具体情况，我们也许可以解决它（首先搜索，然后在必要时打开一个问题）。不过，我们倾向于忽略这些问题，因为它们通常没有直接的解决方案，只能采取一些简单的变通方法。

## 移动端 overflow & scrolling

在 iOS 和 Android 中，`<body>` 元素对 `overflow: hidden;` 的支持非常有限。因此，当在这两种设备的浏览器中滚动超过弹窗顶部或底部时，`<body>` 内容就会开始滚动。请参见 [Chrome bug #175502](https://bugs.chromium.org/p/chromium/issues/detail?id=175502)（已在 Chrome v40 中修复）和 [WebKit bug #153852](https://bugs.webkit.org/show_bug.cgi?id=153852)。

## iOS text fields & scrolling

从 iOS 9.2 起，当弹窗打开时，如果滚动手势的初始触摸位于文本 `<input>` 或 `<textarea>` 的边界内，模态下方的 `<body>` 内容将被滚动，而不是模态本身。请参见 [WebKit bug #153856](https://bugs.webkit.org/show_bug.cgi?id=153856)。
