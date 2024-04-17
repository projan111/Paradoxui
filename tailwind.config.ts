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
        //background: "hsl(var(--background))",
        background: "#000000",
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
          '50': '#fff8db',
          '100': '#fff4c0',
          '200': '#ffe785',
          '300': '#ffd23f',
          '400': '#ffb90b',
          '500': '#f49f00',
          '600': '#d37700',
          '700': '#a85200',
          '800': '#8a4009',
          '900': '#75340e',
          '950': '#451903',
        },
        accent: {
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

        black: {
          '50': '#f2f2f2', 
          '100': '#e6e6e6', 
          '200': '#bfbfbf', 
          '300': '#999999', 
          '400': '#4d4d4d', 
          '500': '#000000', 
          '600': '#000000', 
          '700': '#000000', 
          '800': '#000000', 
          '900': '#000000', 
          '950': '#000000'
      },

        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
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
