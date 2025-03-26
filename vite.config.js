import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Book-Inventory-System/', // Replace with your GitHub repo name
});
