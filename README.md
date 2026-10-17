# Para Mor ❤️ (React + Vite + Framer Motion)

## Local (VS Code)
`npm install` → `npm run dev` (abre http://localhost:5173)

## XAMPP
`npm run build` → copia el CONTENIDO de `dist/` a `C:\xampp\htdocs\mor\` → http://localhost/mor/

## GitHub Pages
Sube el repo a GitHub (rama `main`), en Settings → Pages elige "GitHub Actions". El workflow ya está en `.github/workflows/deploy.yml`.

## Personalizar (todo en `src/data/config.js`)
Cada bloque tiene un comentario `✏️ MODIFICAR` que explica qué cambiar. En la página no se muestra ningún texto técnico.
- Textos, cartas, diario, preguntas del quiz, cajas sorpresa: `src/data/config.js`
- Fotos: copia el archivo a `public/photos/` y escribe su nombre en `config.js`
- **Galería:** añade una línea `['Categoría','archivo.jpg']` en `gallery`; la cuadrícula crece sola (botón "Ver más fotos") y las categorías nuevas crean su pestaña. Si un archivo no existe, esa foto se oculta.
- Música: archivos en `public/music/` + lista `playlist` en config.js (si está vacía, el botón no aparece)
- Login: usuario `mor`, contraseña `20102026` (barrera visual, no seguridad real)
