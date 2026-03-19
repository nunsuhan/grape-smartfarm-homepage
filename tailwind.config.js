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
        bg: {
          DEFAULT: "#050a12",
          2: "#0a1020",
          3: "#101830",
          4: "#182040",
        },
        surface: "#0d1528",
        txt: {
          DEFAULT: "#e4e9f2",
          2: "#7b8ba8",
          3: "#4a5a78",
        },
        accent: {
          DEFAULT: "#00e5c8",
          glow: "rgba(0,229,200,0.15)",
          2: "#00c2a8",
        },
        mod: {
          grow: "#10b981",
          climate: "#06b6d4",
          protect: "#f43f5e",
          water: "#3b82f6",
          yield: "#f59e0b",
          trace: "#8b5cf6",
          export: "#ec4899",
        },
      },
      fontFamily: {
        sans: ["'Outfit'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      borderRadius: {
        card: "16px",
        sm: "10px",
        xs: "6px",
      },
    },
  },
  plugins: [],
};
