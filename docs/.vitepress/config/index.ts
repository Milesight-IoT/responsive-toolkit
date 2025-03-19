import { defineConfig } from 'vitepress';

import { en } from './en';
import { shared } from './shared';
// import { zh } from './zh';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    ...shared,
    locales: {
        root: { label: 'English', ...en },
        // zh: { label: '简体中文', ...zh },
    },
});
