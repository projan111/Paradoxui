import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        accent: {
          // green shades
          "50": "#effef2",
          "100": "#e0ffe7",
          "200": "#b5fdc6",
          "300": "#7cf99a",
          "400": "#3cec67",
          "500": "#13d443",
          "600": "#09b033",
          "700": "#0b8a2b",
          "800": "#0f6c27",
          "900": "#0e5923",
          "950": "#01320f",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          // black shades
          "50": "#f2f2f2",
          "100": "#d9d9d9",
          "200": "#d9d9d9",
          "300": "#a6a6a6",
          "400": "#8c8c8c",
          "500": "#737373",
          "600": "#595959",
          "700": "#404040",
          "800": "#262626",
          "900": "#0d0d0d",
          "950": "#002D00",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          // orange shades
          "50": "#fffce1",
          "100": "#fffac0",
          "200": "#fff385",
          "300": "#ffe43f",
          "400": "#ffd00b",
          "500": "#f4b600",
          "600": "#d38b00",
          "700": "#a86100",
          "800": "#8a4c09",
          "900": "#753e0e",
          "950": "#451f03",
        },

        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
