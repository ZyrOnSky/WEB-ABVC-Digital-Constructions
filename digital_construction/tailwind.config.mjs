/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        "background-2": "#312f2f",
        title: "#3b82f6",
        text: "#f3f3f3",
        "text-secondary": "#c4c4c4",
        line: "rgba(243, 243, 243, 0.78)",
        "line-soft": "rgba(243, 243, 243, 0.3)",
        button: "#3b82f6",
        "button-hover": "#2f6ede",
      },
      fontFamily: {
        body: ["Segoe UI", "Tahoma", "Geneva", "Verdana", "sans-serif"],
        display: ["Segoe UI", "Tahoma", "Geneva", "Verdana", "sans-serif"],
      },
      animation: {
        'marquee-scroll': 'marquee-scroll 18s linear infinite',
      },
      keyframes: {
        'marquee-scroll': {
          'from': { transform: 'translateX(0)' },
          'to': { transform: 'translateX(calc(-50% - 12px))' },
        },
      },
    },
  },
  plugins: [],
};
