import { Config } from "tailwindcss";
import TailwindIonic from "@aparajita/tailwind-ionic";

/** @type {import('tailwindcss').Config} */
const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
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
				border: "var(--ion-border-color)",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "var(--ion-background-color)",
				foreground: "var(--ion-text-color)",
				primary: {
					DEFAULT: "var(--ion-color-primary)",
					foreground: "var(--ion-color-primary-contrast)",
				},
				secondary: {
					DEFAULT: "var(--ion-color-secondary)",
					foreground: "var(--ion-color-secondary-contrast)",
				},
				tertiary: {
					DEFAULT: "var(--ion-color-tertiary)",
					foreground: "var(--ion-color-tertiary-contrast)",
				},
				success: {
					DEFAULT: "var(--ion-color-success)",
					foreground: "var(--ion-color-success-contrast)",
				},
				destructive: {
					DEFAULT: "var(--ion-color-danger)",
					foreground: "var(--ion-color-danger-contrast)",
				},
				warning: {
					DEFAULT: "var(--ion-color-warning)",
					foreground: "var(--ion-color-warning-contrast)",
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
					DEFAULT: "var(--ion-card-background)",
					foreground: "var(--ion-card-foreground)",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0px" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0px" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [
		TailwindIonic("src/theme/variables.scss"),
		require("tailwindcss-animate"),
	],
};

export default config;
