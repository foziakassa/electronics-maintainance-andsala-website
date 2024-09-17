import type { Config } from "tailwindcss";
// import laptor from './src/Asset/laptor.jpg'
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    
    
    extend: {
     
      keyframes: {
        'slide-up': {
          '0%': { transform: 'translateY(100vh)' },
          '100%': { transform: 'translateY(0)' },
        },
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }
        }
      },
      animation: {
        'slide-up': 'slide-up 1s ease-in-out',
        typing: "typing 2s steps(20) infinite alternate, blink .7s infinite"
      }
      
 
    },
  },
  plugins: [
    require('daisyui'),
    // require('@tailwindcss/aspect-ratio'),
  ],
};
export default config;
