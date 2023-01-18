import { defineConfig } from 'windicss/helpers'
import type { Plugin } from 'windicss/types/interfaces'

// plugins
import TypographyPlugin from 'windicss/plugin/typography'
import AspectRatioPlugin from 'windicss/plugin/aspect-ratio'
import FiltersPlugin from 'windicss/plugin/filters'
import FormsPlugin from 'windicss/plugin/forms'

export default defineConfig({
  attributify: {
    prefix: 'w:',
  },
  transformCSS: 'pre',
  darkMode: 'class',
  extract: {
    include: ['**/*.{vue,html,jsx,tsx,ts}'],
    exclude: [
      'node_modules',
      '.git',
      'excluded',
      'dist',
      'windi.config.{ts,js}',
      'tailwind.config.{ts,js}',
    ],
  },
  safelist: ['m-auto'],
  container: false,
  preflight: true,
  shortcuts: {
    'h-stack': 'flex flex-col min-h-screen w-full p-2',
    'w-stack': 'flex flex-col min-h-screen w-full max-w-md mx-auto',
  },
  plugins: [
    FiltersPlugin as Plugin,
    TypographyPlugin as Plugin,
    AspectRatioPlugin as Plugin,
    FormsPlugin as Plugin,
  ] as Plugin[],
})
