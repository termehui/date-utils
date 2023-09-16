import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

/// <reference types="vitest" />
// Configure Vitest (https://vitest.dev/config/)
// https://vitejs.dev/config/
export default defineConfig({
    build: {
        cssCodeSplit: true,
        sourcemap: true,
        lib: {
            entry: resolve(__dirname, "src", "dateUtils.ts"),
            name: "date-utils",
            fileName: (format) => `date-utils.${format}.js`,
        },
        rollupOptions: {
            external: ["moment", "moment-jalaali"],
        },
    },
    plugins: [dts({ rollupTypes: true })],
});
