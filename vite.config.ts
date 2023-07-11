import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";
import autoImport from "./vite.config.auto-imports";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/ts/app.tsx"],
            refresh: true,
        }),
        react(),
        autoImport(),
    ],
});

