import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
// import devtools from 'solid-devtools/vite';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig({
  root: './ui',
  plugins: [
    viteSingleFile(),
    /* 
    Uncomment the following line to enable solid-devtools.
    For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
    */
    // devtools(),
    solidPlugin(),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
    assetsInlineLimit: 100000000,
    chunkSizeWarningLimit: 100000000,
    cssCodeSplit: false,
    outDir: '../dist',
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
      },
    },
  },
});
