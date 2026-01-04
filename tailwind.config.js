/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        zimo: {
          light: '#EAFDF0',   // Background sangat muda
          primary: '#86EFAC', // Hijau muda (Badan Zimo/Button)
          main: '#22C55E',    // Hijau Utama
          dark: '#14532D',    // Hijau Tua (Text/Border)
          yellow: '#FACC15',  // Kuning (Quest/Gold)
          blue: '#67E8F9',    // Biru (Aksen Karakter)
          red: '#F87171',     // Merah (Health Bar)
        }
      },
      fontFamily: {
        sans: ['Quicksand', 'sans-serif'],
        display: ['Fredoka', 'sans-serif'], // Font Judul Lucu
      },
      boxShadow: {
        'comic': '4px 4px 0px 0px #14532D', // Efek bayangan kartun
        'comic-hover': '2px 2px 0px 0px #14532D',
      }
    },
  },
  plugins: [],
}