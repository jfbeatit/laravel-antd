import AutoImport from "unplugin-auto-import/vite";

export default function () {
    return AutoImport({
        // targets to transform
        include: [/\.ts[x]?$/],

        // global imports to register
        imports: [
            // custom
            {
                react: ["useEffect", "useState", ["default", "React"]],
            },
        ],
        // Enable auto import by filename for default module exports under directories
        defaultExportByFilename: false,

        // Auto import for module exports under directories
        // by default it only scan one level of modules under the directory
        dirs: [
            // './hooks',
            // './composables' // only root modules
            // './composables/**', // all nested modules
            // ...
        ],

        // Filepath to generate corresponding .d.ts file.
        // Defaults to './auto-imports.d.ts' when `typescript` is installed locally.
        // Set `false` to disable.
        dts: "./auto-imports.d.ts",

        // Custom resolvers, compatible with `unplugin-vue-components`
        // see https://github.com/antfu/unplugin-auto-import/pull/23/
        resolvers: [
            /* ... */
        ],

        // Inject the imports at the end of other imports
        injectAtEnd: true,
    });
}
