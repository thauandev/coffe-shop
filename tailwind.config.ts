import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    colors: {
      purple: {
        100: '#EBE5F9',
        200: '#8047f8',
        300: '#4b2995'
      },
      yellow: {
        100: '#F1E9C9',
        200: '#DBAC2C',
        300: '#C47F17'
      }

    },
    extend: {
      fontFamily: {
        display: ['var(--font-baloo-2)'],
        regular: ['var(--font-roboto)']
      }
    }
  },
  plugins: []
}
export default config
