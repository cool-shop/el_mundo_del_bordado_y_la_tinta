/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'cat-brown': '#483434',
                'cat-orange': '#6b4f4f',
                'cat-beige': '#fff3e4',
                'cat-teal-light': '#1cd6d9',
                'cat-teal-dark': '#0f7173',
            },
            fontFamily: {
                outfit: ['Outfit', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
