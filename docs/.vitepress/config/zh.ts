import { defineConfig } from "vitepress";

export const zh = defineConfig({
  lang: "zh-Hans",
  title: "Responsive Toolkit",
  description: "轻量级，功能强大的响应式网站搭建工具包",

  themeConfig: {
    nav: [
      // { text: "Home", link: "/zh" },
      { text: "Design", link: "/zh/design/basic", activeMatch: "/zh/design/" },
      {
        text: "Development",
        link: "/zh/development/setup",
        activeMatch: "/zh/development",
      },
    ],

    sidebar: {
      "/zh/design/": {
        base: "en/design/",
        items: [
          {
            text: "GETTING STARED",
            items: [
              {
                text: "Install",
              },
              {
                text: "Browser Support",
              },
              {
                text: "What's New",
              },
            ],
          },
          //   { text: "Layout Basics", link: "basic" },
        ],
      },
      "/zh/development/": {
        base: "/zh/development/",
        items: [
          {
            text: "GETTING STARED",
            items: [
              {
                text: "Install",
                link: "setup",
              },
              {
                text: "Browser Support",
              },
              {
                text: "What's New",
              },
            ],
          },
        ],
      },
    },
  },
});
