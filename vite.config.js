// SPDX-FileCopyrightText: 2026 Antón Gómez López
//
// SPDX-License-Identifier: MIT

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
