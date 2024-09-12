import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}', // Includes all pages
    './src/components/**/*.{js,ts,jsx,tsx,mdx}', // Includes all components
    './src/app/**/*.{js,ts,jsx,tsx,mdx}', // Includes all app-specific files
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)', // Custom background color variable
        foreground: 'var(--foreground)', // Custom foreground color variable
      },
      fontFamily: {
        lexend: ['"Lexend Deca"', 'sans-serif'], // Custom font family
      },
    },
  },
  plugins: [],
};

export default config;
