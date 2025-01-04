import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  watch: {
    usePolling: true,
    interval: 100,
  },
  plugins: [react(
    {
      include: ['**/*.jsx', '**/*.tsx'],
    }
  )],
})