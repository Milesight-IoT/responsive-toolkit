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
                text: 'Development',
                link: '/development/start/install',
                activeMatch: '/development/',
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
            '/development/': {
                base: '/development/',
                items: [
                    {
                        text: 'GETTING STARED',
                        items: [
                            {
                                text: 'Install',
                                link: 'start/install',
                            },
                            {
                                text: 'Developing',
                                link: 'start/developing',
                            },
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
                                text: 'CSS Grid',
                                link: 'layout/css-grid',
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
                            {
                                text: 'Position',
                                link: 'utilities/position',
                            },
                        ],
                    },
                ],
            },
        },
    },
});
