/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            spacing: {
                2: '0.5rem', // xs
                3: '0.75rem', // sm
                4: '1rem', // base
                6: '1.5rem', // lg
                8: '2rem' // xl
            }
        }
    },
    plugins: []
};
