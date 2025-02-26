import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        wfgray: "#D9D9D9",
        wfblack: "#000000 ",
        light: {
          default: "#ebf3ff",
          hover: "#e1edfe",
          activer: "#c0d9fe",
        },
        normal: {
          default: "#3484fb",
          hover: "#2f77e2",
          active: "#2a6ac9",
        },
        dark: {
          default: "#2763bc",
          hover: "#1f4f97",
          active: "#173b71",
        },
        darker: {
          default: "#122e58",
        },
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
