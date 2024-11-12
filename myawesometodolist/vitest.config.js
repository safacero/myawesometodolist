// vitest.config.js
import { defineConfig } from 'vitest/config';
import { searchForWorkspaceRoot } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        fs: {
            allow: [searchForWorkspaceRoot(process.cwd()),
                // Substitute this value for the path of your own Visual Studio installation.
                'C:/Program Files/Microsoft Visual Studio/2022/Preview/Common7/IDE/Extensions/Microsoft/JavaScript/TestFrameworks/Vitest/']
        }
    },
    test: {
        globals: true,                  // Enables global variables like `describe`, `it`, etc.
        environment: 'jsdom',            // Simulates a DOM environment for React components
        css: true,                       // Enable CSS handling for components that import CSS
    },
});
