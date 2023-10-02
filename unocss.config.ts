import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: {
    'border-main': 'border-gray-400 border-opacity-30',
    'bg-main': 'bg-gray-400',
    'bg-base': 'bg-white dark:bg-hex-1a1a1a',
    'flex_ccc': 'flex items-center justify-center',
    'linear-gradient-blue': 'bg-gradient-to-r from-cyan-500 to-blue-500',
    'linear-gradient-pink':'bg-gradient-to-r from-violet-500 to-fuchsia-500',
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
  ],
  theme: {
    colors: {
      primary: '#3eaf7c',
    },
    fontFamily: {
      mono: 'var(--vt-font-family-mono)',
    },
    extend:{
      boxShadow: {
        yi: '3px 3px 15px rgba(0,0,0,.1)',
      },
    },
  },
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
