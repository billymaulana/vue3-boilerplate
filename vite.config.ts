/// <reference types="vitest" />

import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import Preview from 'vite-plugin-vue-component-preview'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import Inspect from 'vite-plugin-inspect'
import Inspector from 'vite-plugin-vue-inspector'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VitePWA } from 'vite-plugin-pwa'
import WindiCSS from 'vite-plugin-windicss'

export default defineConfig((env) => {
  const viteEnv = loadEnv(env.mode, process.cwd())
  return {
    base: viteEnv.VITE_BASE,
    resolve: {
      alias: {
        '~': `${path.resolve(__dirname, './')}`,
        '@/': `${path.resolve(__dirname, 'src')}/`,
      },
    },
    build: {
      reportCompressedSize: false,
      chunkSizeWarningLimit: 2000,
      minify: 'esbuild',
      assetsDir: 'static/assets',
      rollupOptions: {
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        },
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @import "@/assets/styles/_variables.scss";
        `,
          javascriptEnabled: true,
        },
      },
    },
    plugins: [
      Vue({
        reactivityTransform: true,
      }),
      Preview(),
      // https://github.com/hannoeru/vite-plugin-pages
      Pages(),
      // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
      Layouts({
        layoutsDirs: 'src/layouts',
        defaultLayout: 'default',
      }),

      // https://github.com/antfu/unplugin-auto-import
      AutoImport({
        imports: [
          'vue',
          'vue-router',
          '@vueuse/core',
          'pinia',
        ],
        dts: true,
        dirs: [
          './src/composables',
          './src/stores',
        ],
        vueTemplate: true,
      }),

      // https://github.com/antfu/vite-plugin-components
      Components({
        dts: true,
      }),
      VitePWA({
        registerType: 'autoUpdate',
      }),
      // https://github.com/antfu/vite-plugin-inspect
      // Visit http://localhost:3333/__inspect/ to see the inspector
      Inspect(),

      // https://github.com/webfansplz/vite-plugin-vue-inspector
      Inspector({
        toggleButtonVisibility: 'never',
      }),
      // https://github.com/antfu/unocss
      WindiCSS(),
    ],
    server: {
      host: true,
      open: true,
      cors: true,
      proxy: {
        '^/api/': {
          target: 'https://localhost',
          changeOrigin: true,
          secure: true,
          cookieDomainRewrite: 'localhost',
          rewrite: (path: string) => path.replace(/^\/api/, ''),
        },
      },
    },

    // https://github.com/vitest-dev/vitest
    test: {
      include: ['test/**/*.test.ts'],
      environment: 'jsdom',
      deps: {
        inline: ['@vue', '@vueuse'],
      },
    },
  }
})
