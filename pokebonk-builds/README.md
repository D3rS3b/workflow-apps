# Pokebonk Builds

Web estática (Astro + Tailwind) para ver, filtrar y exportar builds (JSON, CSV, texto).

## Uso
```
npm install
npm run dev      # desarrollo
npm run build    # genera dist/
```

## Datos
La web lee `src/data/builds.json`. Ahora contiene **datos de ejemplo** (`"sample": true`
muestra un aviso). Para usar datos reales, genera ese archivo con el mismo formato
(un script de extracción aún pendiente: falta confirmar la fuente/API de pokebonk.com)
y pon `"sample": false`.

## Publicar
Descomenta `site` y `base` en `astro.config.mjs` y despliega `dist/` en GitHub Pages, Netlify o Vercel.
