/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    grape: "#2D1B4E", // Deep Grape
                    purple: "#5B2E91", // Rich Purple
                },
                secondary: {
                    green: "#4A7C3F", // Leaf Green
                    gold: "#D4AF37", // Gold Accent
                },
                neutral: {
                    cream: "#F8F4E8", // Cream White
                    black: "#1A1A2E", // Deep Black
                },
            },
            fontFamily: {
                serif: ["Georgia", "Cambria", "'Times New Roman'", "serif"],
                sans: ["'Segoe UI'", "system-ui", "-apple-system", "sans-serif"],
                mono: ["'Cascadia Code'", "'Fira Code'", "Consolas", "monospace"],
            },
        },
    },
    plugins: [],
};
