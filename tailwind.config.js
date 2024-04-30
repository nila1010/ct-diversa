/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontSize: {
      ss: "var(--step--1",
      sm: "var(--step-0)",
      md: "var(--step-1)",
      lg: "var(--step-2)",
      xl: "var(--step-3)",
      "2xl": "var(--step-4)",
      "3xl": "var(--step-5)",
    },
    colors: {
      "background-color-primary": "var(--colors-brand-beige-00)",
      "backgound-color-secondary": "var(--colors-brand-beige-10)",
      "primary-color": "var(--colors-grey-80)",
      "secondary-color": "var(--colors-grey-60)",
      "state-1-light": "var(--colors-brand-turquoise-20)",
      "state-1": "var(--colors-brand-turquoise-50)",
      "error-color": "var(--colors-brand-yellow-40)",
      "state-2-light": "var(--colors-brand-yellow-20)",
      "state-2": "var(--colors-brand-yellow-100)",
      "state-3-light": "var(--colors-brand-orange-20)",
      "state-3": "var(--colors-brand-orange-70)",
    },
  },
  plugins: [],
};
