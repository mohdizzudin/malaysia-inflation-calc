module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          50: "#EFF6FF",
          100: "#D3E1FF",
          200: "#A8C1FF",
          300: "#7DA0FF",
          400: "#5D84FF",
          500: "#2757FF",
          600: "#1C42DB",
          700: "#1330B7",
          800: "#0C2193",
          900: "#07167A",
        },
        dark : { // Based on github dark mode
          header: "#161b22",
          body: "#0d1116",
          title: "#abb6c2",
          description: "#8b949e",
          label: "#c8d1da",
          link: "#A8C1FF",
          line: "#21262d",
          focus: "#58a6ff",
          highlight: "#ffffff",
        }
      },
      borderColor: (theme) => ({
        DEFAULT: theme('colors.gray.300', 'currentColor')
      }),
      fill: {
        darkgithub:"white"
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
