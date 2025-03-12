import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Responsive Toolkit",
  description:
    "A lightweight and powerful Toolkit for building responsive websites.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Design", link: "/design/basic" },
      { text: "development", link: "/development/setup" },
    ],

    sidebar: {
        '/design/': {
            base: '/design/',
            items: [
                { text: 'Layout Basics', link: 'basic'  },
            ],
        },
        '/development/': {
            base: '/development/',
            items: [
                { text: 'Setup', link: 'setup'  },
            ],
        },
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/Milesight-IoT/responsive-toolkit",
      },
    ],
  },
});
