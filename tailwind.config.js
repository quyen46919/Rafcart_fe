/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px'
    },
    container: {
      center: true,
      padding: '1rem'
    },
    extend: {
      colors: {
        primary: '#FD3D57'
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        roboto: "'Roboto', sans-serif"
      },
      // animation
      keyframes: {
        scaleShowSelect: {
          '0%': {
            opacity: '0',
            marginTop: '-15px',
            transform: 'scale(0.3)',
            transformOrigin: 'top'
          },

          '100%': {
            marginTop: '0px',
            opacity: '1',
            transform: 'scale(1)',
            transformOrigin: 'top'
          }
        },
        unScaleShowSelect: {
          '0%': {
            opacity: '1',
            marginTop: '0px',
            transform: 'scale(1)',
            transformOrigin: 'top'
          },
          '100%': {
            marginTop: '-15px',
            opacity: '0',
            transform: 'scale(0.3)',
            transformOrigin: 'top',
            display: 'none'
          }
        }
      },
      animation: {
        scaleShowSelect: 'scaleShowSelect 0.2s ease-in-out forwards  ',
        unScaleShowSelect: 'unScaleShowSelect 0.2s ease-in-out forwards '
      }
    }
  },
  variants: {
    extend: {
      visibility: ['group-hover'],
      display: ['group-hover']
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
