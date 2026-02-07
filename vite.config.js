/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// trigger rebuild

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/currency-converter-7feb/',
})