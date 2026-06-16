export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: "var(--font-marcellus)",
        body: "var(--font-jost)",
      },
    },
  },
  plugins: [],
};