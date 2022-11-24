import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import unocss from 'unocss/vite';

export default defineConfig(() => {
  const rootPath = path.resolve(process.cwd());
  const srcPath = `${rootPath}/src`;

  return {
    resolve: {
      alias: {
        '~': rootPath,
        '@': srcPath
      }
    },
    // css: {
    //   preprocessorOptions: {
    //     scss: {
    //       additionalData: `@use "./src/styles/scss/global.scss" as *;`
    //     }
    //   }
    // },
    plugins: [
      vue(),
      unocss()
    ],
    // server: {
    //   host: '0.0.0.0',
    //   open: true
    // },
    build: {
      brotliSize: false,
      sourcemap: false,
      commonjsOptions: {
        ignoreTryCatch: false
      }
    }
  };
});
