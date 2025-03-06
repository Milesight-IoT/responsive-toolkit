import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts'],
    dts: true,
    outDir: 'dist',
    clean: true,
    // minify: true,
    // sourcemap: true,
    format: ['cjs', 'esm'],
    treeshake: true,
    splitting: false,
    cjsInterop: true,
});
