import {defineConfig} from 'vite';import react from '@vitejs/plugin-react';
// base './' => funciona en XAMPP (htdocs/mor), GitHub Pages y cualquier subcarpeta
export default defineConfig({plugins:[react()],base:'./'});
