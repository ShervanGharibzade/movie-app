/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      dropShadow:{
        "4xl": "0px 5px 12px rgba(0, 0, 0, 1)",
        "5xl": "0px 0px 0px 10px #000"
      },
      backgroundColor:{
        
        "normal": "linear-gradient(305deg, rgba(0,57,103,1) 0%, rgba(58,11,0,1) 22%, rgba(0,0,0,1) 50%, rgba(9,0,68,1) 79%, rgba(57,4,0,1) 100%)"
      }
    },
  },
  plugins: [],
}
