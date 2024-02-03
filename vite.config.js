import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    cssCodeSplit: true, // Prevent splitting CSS into multiple files
    outDir: 'dist', // Specify your output directory
    assetsDir: 'assets', // Specify your assets directory
    assetsInlineLimit: 4096, // Adjust as needed

    // Use the fixed name for your CSS file
    css: {
      fileName: 'index-fixed-name.css',
    },
  }
})
