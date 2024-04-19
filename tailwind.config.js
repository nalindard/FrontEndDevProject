/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
      'poppins': ['Poppins', 'ui-sans-serif', 'system-ui'],
      'inter': ['Inter', 'ui-sans-serif', 'system-ui'],
      'lato': ['Lato', 'sans-serif', 'system-ui']
    },
    extend: {
      screens: {
        'sm': '375px',
        'md': '768px',
        'lg': '1200px',
        'xl': '1440px',
      },
      colors: {
        'primary': '#6B3CC9',
        'secondary': '#F28D35',
        'analogous-1': '#6A44F2',
        'analogous-2': '#1CBDDD',
        'triadic-1': '#52378C',
        'dark': '#78BF91',
        'text': '#2F2F2F',
        'text-light': '#545A75',
        'text-subtle': '#9C9991',
        'accent-1': '#E2F2FE',
        'accent-2': '#FFF8E0',
        'error': '#FF0335',
        'success': '#5EB30B',
      },
    },
  },
  plugins: [],
}

