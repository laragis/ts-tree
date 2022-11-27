import { Options, defineConfig } from 'tsup';

export default defineConfig((options: Options) => ({
  entry: ['src/index.ts'],
  target: 'es5',
  minify: false,
  watch: options.watch,
  outDir: 'dist',
  format: ['cjs', 'esm'],
  dts: true,
  sourcemap: !options.watch,
  splitting: false,
  clean: true,
  treeshake: true
}))
