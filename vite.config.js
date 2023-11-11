import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: "./tests/setup.js"
    },
    resolve: {
        alias: [
            { find: "@test-utils", replacement: path.resolve(__dirname, 'tests/test-utils.jsx') },
            { find: "@", replacement: path.resolve(__dirname, 'src') },
        ]
    }
})
