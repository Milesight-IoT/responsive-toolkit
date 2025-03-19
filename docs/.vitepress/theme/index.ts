// https://vitepress.dev/guide/custom-theme
// import { h } from 'vue';
import type { Theme } from 'vitepress';

import DefaultTheme from 'vitepress/theme';

import Story from './components/Story/index.vue';
import './style.css';

import '@milesight/responsive-style';

export default {
    extends: DefaultTheme,
    // Layout: () => {
    //   return h(DefaultTheme.Layout, null, {
    //     // https://vitepress.dev/guide/extending-default-theme#layout-slots
    //   })
    // },
    enhanceApp({ app }) {
        app.component('Story', Story);
        // ...
    },
} satisfies Theme;
