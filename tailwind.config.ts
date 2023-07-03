import headlessUiPlugin from "@headlessui/tailwindcss";
import tailwindCssTypographyPlugin from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import { slate as gray, white } from "tailwindcss/colors";
import defaultTheme from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";
import tailwindCssAnimatePlugin from "tailwindcss-animate";

const tailwindCssConfig: Config = {
  content: ["./src/**/*.{mdx,ts,tsx}"],
  darkMode: "media",
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [
    headlessUiPlugin,
    tailwindCssAnimatePlugin,
    tailwindCssTypographyPlugin,
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          parallax: (value: string) => ({
            "--tw-scale-x": `${parseInt(value) + 1}`,
            "--tw-scale-y": `${parseInt(value) + 1}`,
            "--tw-translate-z": `-${parseInt(value)}px`,
            transform:
              "translate(var(--tw-translate-x), var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
          }),
        },
        {
          type: "number",
          values: Object.fromEntries(
            Array.from({ length: 12 }, (_, index) => [`${index}`, `${index}`])
          ),
        }
      );
      matchUtilities(
        {
          "translate-z": (value: string) => ({
            "--tw-translate-z": value,
            transform:
              "translate(var(--tw-translate-x), var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
          }),
        },
        {
          supportsNegativeValues: true,
          values: theme("translate"),
        }
      );
    }),
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        xl: "5rem",
      },
    },
    extend: {
      animation: {
        "line-1": "line-1 30s ease-in-out infinite both",
        "line-2": "line-2 30s ease-in-out infinite both",
      },
      backgroundImage: {
        "gradient-section": `linear-gradient(180deg, ${gray[100]}, ${white} 16rem)`,
      },
      colors: {
        gray,
        react: "#149eca",
        trpc: "#398ccb",
        typescript: "#3178c6",
      },
      fontFamily: {
        sans: ["var(--font-jost)", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        "line-1": {
          "0%, 100%": {
            top: "-17%",
          },
          "50%": {
            top: "62%",
          },
        },
        "line-2": {
          "0%, 100%": {
            top: "80%",
          },
          "25%": {
            top: "0%",
          },
          "50%": {
            top: "80%",
          },
          "75%": {
            top: "0%",
          },
        },
      },
    },
    zIndex: {
      header: "2",
      heading: "1",
      menu: "3",
      tooltip: "4",
    },
  },
};

export default tailwindCssConfig;
