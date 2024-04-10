/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js, jsx, ts, tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        titleColor: '#353025',
        subtitleColor: '#716650',
        paragraphColor: '#2F2312',
        linkColor: '#E37D1F',
        backgroundColor: '#FFFFFF',
        backdropColor: '#FFF3E0',
        borderColor: '#B87323',
        buttonColor: '#FFE4BB',
      },
      fontFamily: {
        RobotoFont: ['Roboto']
      }
    },
  },
  plugins: [],
}

