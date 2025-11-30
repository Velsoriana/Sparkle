/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Palette personnalisée de l'utilisateur
        'palette': {
          'dark-gray': '#2a2a2a',      // Gris foncé/noir
          'muted-red': '#8b4513',     // Rouge désaturé foncé
          'dark-brown': '#654321',    // Brun foncé
          'blue-gray': '#708090',     // Gris-bleu
          'dark-blue': '#2f4f4f',     // Bleu foncé désaturé
        },
        // Couleurs existantes
        'sparkle': {
          'primary': '#dc2626',       // Rouge principal
          'secondary': '#1f2937',     // Gris foncé
          'accent': '#f59e0b',        // Orange
        },
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
} 