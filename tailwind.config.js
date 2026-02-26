/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary-black': '#3D3936', // Figma Sidebar color
        'border-gray': '#E5E5E4',   // Figma Card border color
        'brand-gold': '#C29D7D',    // Employee Role color
      },
      borderRadius: {
        'sidebar': '20px', // Figma Sidebar radius
        'card': '24px',    // Figma Card radius
      },
      boxShadow: {
        'gold-glow': '0 10px 30px -10px rgba(194, 157, 125, 0.15)',
      }
    },
  },
  plugins: [],
};