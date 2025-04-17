import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: "https://github.com/mrsan-Cah/cse.git", // 👈 Change this to your GitHub repo name
  plugins: [react(), tailwindcss()],
});
