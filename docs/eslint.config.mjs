import defineConfig from '@antfu/eslint-config';

export default defineConfig(
    {
        stylistic: {
            indent: 4,
            semi: true,
            quotes: 'single',
        },
        formatters: {
            css: true,
            markdown: true,
        },

        vue: true,
        typescript: true,
        lessOpinionated: true,
    },
    {
        rules: {
            // Enforce consistent brace style for multiple control statements
            'curly': ['error', 'multi-line', 'consistent'],

            'perfectionist/sort-imports': ['error', {
                type: 'line-length',
                fallbackSort: { type: 'alphabetical', order: 'asc' },
            }],

            // 'unused-imports/no-unused-vars': 'off',
            'unused-imports/no-unused-vars': [
                'warn',
                {
                    args: 'after-used',
                    argsIgnorePattern: '^_',
                    ignoreRestSiblings: true,
                    vars: 'all',
                    varsIgnorePattern: '^_',
                },
            ],
        },
    },
);
