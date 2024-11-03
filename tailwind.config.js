// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cambia el esquema de colores a un estilo más vibrante y moderno
        primary: {
          500: '#4F46E5', // Azul vibrante para el fondo principal y los elementos destacados
          600: '#4338CA',
          700: '#3730A3',
        },
        secondary: {
          500: '#EC4899', // Rosa fuerte para los botones de acción
          600: '#DB2777',
          700: '#BE185D',
        },
        accent: {
          500: '#22C55E', // Verde para los elementos de éxito o positivo
          600: '#16A34A',
          700: '#15803D',
        },
        neutral: {
          500: '#64748B', // Gris suave para los textos y fondos secundarios
          600: '#475569',
          700: '#334155',
        },
        background: '#F9FAFB', // Fondo general de la aplicación para darle una apariencia limpia
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Fuente moderna y limpia
      },
      boxShadow: {
        'soft': '0 4px 6px rgba(0, 0, 0, 0.1)', // Sombra suave para tarjetas y contenedores
        'strong': '0 8px 12px rgba(0, 0, 0, 0.2)', // Sombra fuerte para elementos de énfasis
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio')
  ],
};



