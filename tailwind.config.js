/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      colors: {
        gray: '#9597A5',
        'dark-blue': '#2D314D',
        lime: '#30C88F',
        'light-gray': '#FAFAFA',
        'very-light-blue': '#F4F5F7'
      }
    },
    fontFamily: {
      sans: ['Public Sans', 'sans-serif']
    },
    backgroundImage: {
      'cyan-gradient': 'linear-gradient(135deg, #33D35E 0%, #2AB6D9 99.58%)',
      'intro-desktop': 'url("/bg-intro-desktop.svg")'
    },
    borderRadius: {
      xs: '4px',
      sm: '5px',
      xl: '22px'
    },
    fontSize: {
      h1: '3.5rem', // 56px
      h2: '2.5rem', // 40px
      h3: '2rem', // 32px
      h4: '1.5rem', // 24px
      h5: '1.25rem', // 20px
      xl: '1.125rem', // 18px
      lg: '1rem', // 16px
      md: '0.9375rem', // 15px
      sm: '0.8125rem' // 13px
    },
    lineHeight: {
      h1: '4rem', // 64px
      h2: '2.9375rem', // 47px
      h3: '2.375rem', // 38px
      h4: '1.75rem', // 28px
      h5: '1.75rem', // 28px
      xl: '1.75rem', // 28px
      lg: '1.25rem', // 20px
      md: '1.5625rem', // 25px
      sm: '1.125rem' // 18px
    },
    maxWidth: {
      container: '1110px'
    },
    screens: {
      md: '768px',
      xl: '1110px'
    }
  },
  plugins: []
}
