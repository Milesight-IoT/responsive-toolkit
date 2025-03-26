import { defineConfig } from 'vitepress';

// const data = await createContentLoader("en/**/*.md").load();
// console.log(data);

export const en = defineConfig({
    lang: 'en-US',
    title: 'Responsive Toolkit',
    description:
    'A lightweight and powerful Toolkit for building responsive websites',

    themeConfig: {
        nav: [
            // { text: "Home", link: "/en" },
            { text: 'Design', link: '/design/basic', activeMatch: '/design/' },
            {
                text: 'Style',
                link: '/style/start/quick-start',
                activeMatch: '/style/',
            },
        ],

        sidebar: {
            '/design/': {
                base: '/design/',
                items: [
                    {
                        text: 'GETTING STARED',
                        items: [
                            {
                                text: 'Basic',
                                link: 'basic',
                            },
                            {
                                text: 'Browser Support',
                            },
                            {
                                text: 'What\'s New',
                            },
                        ],
                    },
                    //   { text: "Layout Basics", link: "basic" },
                ],
            },
            '/style/': {
                base: '/style/',
                items: [
                    {
                        text: 'Introduction',
                        items: [
                            {
                                text: 'Quick Start',
                                link: 'start/quick-start',
                            },
                            // {
                            //     text: 'Customize',
                            //     link: 'start/customize',
                            // },
                            {
                                text: 'Browser Support',
                                link: 'start/browsers',
                            },
                            {
                                text: 'What\'s New',
                                link: 'start/whats-new',
                            },
                        ],
                    },
                    {
                        text: 'Layout',
                        items: [
                            {
                                text: 'Breakpoints',
                                link: 'layout/breakpoints',
                            },
                            {
                                text: 'Container',
                                link: 'layout/container',
                            },
                            {
                                text: 'Columns',
                                link: 'layout/columns',
                            },
                            {
                                text: 'Grid',
                                link: 'layout/grid',
                            },
                            {
                                text: 'Gutters',
                                link: 'layout/gutters',
                            },
                        ],
                    },
                    {
                        text: 'Utilities',
                        items: [
                            {
                                text: 'Display',
                                link: 'utilities/display',
                            },
                            {
                                text: 'flex',
                                link: 'utilities/flex',
                            },
                            {
                                text: 'Float',
                                link: 'utilities/float',
                            },
                            {
                                text: 'Spacing',
                                link: 'utilities/spacing',
                            },
                            // {
                            //     text: 'Position',
                            //     link: 'utilities/position',
                            // },
                            {
                                text: 'Ratio',
                                link: 'utilities/ratio',
                            },
                            {
                                text: 'Object Fit',
                                link: 'utilities/object-fit',
                            },
                            // {
                            //     text: 'Font Size',
                            //     link: 'utilities/font-size',
                            // },
                        ],
                    },
                ],
            },
        },
    },
});
