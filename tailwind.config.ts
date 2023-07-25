import type { Config } from "tailwindcss";

export default {
    content: [
        "./resources/ts/Pages/**/*.{ts,tsx}",
        "./resources/ts/Components/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
} satisfies Config;
