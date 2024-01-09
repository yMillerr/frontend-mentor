import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        yellow: '#F4D04E',
        grey: '#7F7F7F',
      },
      boxShadow: {
        '3xl': '8px 10px #000 ',
      },
    },
  },
  plugins: [],
}
export default config
