import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss({ config: 'src/shared/configs/tailwind.config.ts' }),
    tsconfigPaths(),
  ],
  server: {
    port: 3000,
  },
});
