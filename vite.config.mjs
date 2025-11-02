import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { copyFileSync } from 'fs'

// Copy static file during build
function copyLastUpdate() {
  return {
    name: 'copy-last-update',
    closeBundle() {
      copyFileSync(
        resolve(__dirname, 'last-update.txt'),
        resolve(__dirname, 'dist/last-update.txt')
      )
    }
  }
}

export default defineConfig({
  plugins: [react(), copyLastUpdate()],
  base: '/devops_profile/', // your GitHub repo name
})