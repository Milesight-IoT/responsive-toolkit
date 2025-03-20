import { defineConfig } from 'vitepress';

export const zh = defineConfig({
    lang: 'zh-Hans',
    title: 'Responsive Toolkit',
    description: '轻量级，功能强大的响应式网站搭建工具包',

    themeConfig: {
        nav: [
            // { text: "Home", link: "/zh" },
            { text: 'Design', link: '/zh/design/basic', activeMatch: '/zh/design/' },
            {
                text: 'Development',
                link: '/zh/development/setup',
                activeMatch: '/zh/development',
            },
        ],

        sidebar: {
            '/zh/design/': {
                base: 'en/design/',
                items: [
                    {
                        text: '快速开始',
                        items: [
                            {
                                text: '下载',
                            },
                            {
                                text: '浏览器兼容',
                            },
                            {
                                text: '更新日志',
                            },
                        ],
                    },
                    // { text: "Layout Basics", link: "basic" },
                ],
            },
            '/zh/development/': {
                base: '/zh/development/',
                items: [
                    {
                        text: '快速开始',
                        items: [
                            {
                                text: '下载',
                                link: 'start/install',
                            },
                            {
                                text: '浏览器兼容',
                                link: 'start/browsers',
                            },
                            {
                                text: '更新日志',
                                link: 'start/whats-new',
                            },
                        ],
                    },
                    {
                        text: '布局',
                        items: [
                            {
                                text: '断点',
                                link: 'layout/breakpoints',
                            },
                            {
                                text: '容器',
                                link: 'layout/container',
                            },
                            {
                                text: '栅格',
                                link: 'layout/columns',
                            },
                            {
                                text: '网格',
                                link: 'layout/grid',
                            },
                            {
                                text: '间距',
                                link: 'layout/gutters',
                            },
                        ],
                    },
                    {
                        text: '工具',
                        items: [
                            {
                                text: 'Display',
                                link: 'utilities/display',
                            },
                            {
                                text: 'Flex',
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
