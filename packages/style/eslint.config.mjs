import defineConfig from '@antfu/eslint-config';

export default defineConfig(
    {
        type: 'lib',
        stylistic: {
            indent: 4,
            semi: true,
            quotes: 'single',
        },
        formatters: {
            css: true,
        },
        lessOpinionated: true,
    },
    {
        rules: {
            'perfectionist/sort-imports': ['error', {
                type: 'line-length',
                order: 'desc',
                fallbackSort: { type: 'alphabetical', order: 'asc' },
            }],
        },
    },
);
