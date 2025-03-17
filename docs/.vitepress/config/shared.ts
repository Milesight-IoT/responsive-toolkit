import { defineConfig } from "vitepress";
import { whyframe } from "@whyframe/core";
import { whyframeVue } from "@whyframe/vue";

export const shared = defineConfig({
  title: "Responsive Toolkit",
  description:
    "A lightweight and powerful Toolkit for building responsive websites.",

  rewrites: {
    "en/:rest*": ":rest*",
  },

  themeConfig: {
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/Milesight-IoT/responsive-toolkit",
      },
    ],
  },

  vite: {
    plugins: [
      whyframe({
        defaultSrc: "/frames/default.html", // vitepress doesn't support whyframe default html
        components: [{ name: "Story", showSource: true }],
      }),
      whyframeVue({
        include: /\.(?:vue|md)$/,
      }),
    ],
  },
});
