/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: {
                primary: 'var(--color-primary)',
                'primary-content': 'var(--color-primary-content)',
                secondary: 'var(--color-secondary)',
                neutral: {
                    50: 'var(--color-neutral-50)',
                    100: 'var(--color-neutral-100)',
                    200: 'var(--color-neutral-200)',
                    300: 'var(--color-neutral-300)',
                    400: 'var(--color-neutral-400)',
                    500: 'var(--color-neutral-500)',
                    600: 'var(--color-neutral-600)',
                    700: 'var(--color-neutral-700)',
                    800: 'var(--color-neutral-800)',
                    900: 'var(--color-neutral-900)',
                    950: 'var(--color-neutral-950)'
                }
            },
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
