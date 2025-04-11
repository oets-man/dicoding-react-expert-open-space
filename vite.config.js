import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
  },
  server: {
    host: '0.0.0.0', // Ensure the server listens on all network interfaces
    port: 5173, // Ensure the port matches your script
  },
});
