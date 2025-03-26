---
order: 130
---

# Browser support

Responsive Style supports the latest stable versions of all major browsers and platforms.

Browsers using recent versions of WebKit, Blink, or Gecko engines (whether directly or via platform's web view APIs) are not explicitly supported. However, Responsive Style should work correctly in most cases. Below is detailed support information.

Find supported browsers list in `.browserslistrc`:

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

We use [Autoprefixer](https://github.com/postcss/autoprefixer) to automatically add vendor-specific CSS prefixes and [Browserslist](https://github.com/browserslist/browserslist) for browser version management. Refer to their documentation for integration details.

## Mobile Devices

Generally supports latest versions of default browsers on major platforms. Proxy-based browsers (Opera Mini, UC Mini, etc.) are unsupported.

|                | Chrome | Firefox | Safari | Android Browser & WebView |
| -------------- | :----: | :-----: | :----: | :-----------------------: |
| Android Chrome |   ✔   |   ✔    |   -    |           v6.0+           |
| iOS            |   ✔   |   ✔    |   ✔   |             -             |

## Desktop Browsers

Most recent desktop browsers are supported:

|         | Chrome | Firefox | Safari | Edge |
| ------- | :----: | :-----: | :----: | :--: |
| Mac     |   ✔   |   ✔    |   ✔   |  ✔  |
| Windows |   ✔   |   ✔    |   -    |  ✔  |

## Special Scenarios

### Browser Zooming

Page zooming can cause rendering issues in some components, whether using Responsive Style or other similar libraries. Depending on the specific situation, we may be able to solve it (first search, then open an issue if necessary). However, we tend to ignore these issues, because they usually have no direct solutions, and can only be worked around with some simple workarounds.

### Mobile Overflow & Scrolling

iOS/Android have limited `overflow: hidden` support for `<body>`. Scrolling beyond modal boundaries may cause body content to scroll. See [Chrome bug #175502](https://bugs.chromium.org/p/chromium/issues/detail?id=175502) (fixed in v40) and [WebKit bug #153852](https://bugs.webkit.org/show_bug.cgi?id=153852).

### iOS Text Fields & Scrolling

Since iOS 9.2, when scrolling starts within `<input>`/`<textarea>` in modals, underlying page content scrolls instead of modal. See [WebKit bug #153856](https://bugs.webkit.org/show_bug.cgi?id=153856).
