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
        // background: "hsl(var(--background))",
        background: "#0d0d0d",
        foreground: "hsl(var(--foreground))",
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
          //  text
          "50": "#FFFFFC",
          "100": "#FFFFFC",
          "200": "#FFFEF7",
          "300": "#FFFDF0",
          "400": "#FFFBE6",
          "500": "#FFF8DB",
          "600": "#E6D9B1",
          "700": "#BFAB7A",
          "800": "#997E50",
          "900": "#73562D",
          "950": "#4A2F12",
        },
        green: {
          default: "#32CD32",
          "50": "#F5FDF5",
          "100": "#EBFAEB",
          "200": "#CCF3CC",
          "300": "#ADEBAD",
          "400": "#70DC70",
          "500": "#32CD32",
          "600": "#2DB92D",
          "700": "#1E7B1E",
          "800": "#175C17",
          "900": "#0F3E0F",
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
          //  green shades
          "50": "#f0ffe4",
          "100": "#ddffc5",
          "200": "#bcff91",
          "300": "#8fff51",
          "400": "#59fd0b",
          "500": "#45e400",
          "600": "#31b700",
          "700": "#268a01",
          "800": "#226c08",
          "900": "#1f5b0c",
          "950": "#0b3300",
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
  plugins: [
    require("tailwindcss-animate"),
    require("tailwindcss-debug-screens"),
  ],
} satisfies Config;

export default config;
