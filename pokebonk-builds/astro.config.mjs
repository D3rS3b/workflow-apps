import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Para GitHub Pages en un repo (no usuario), descomenta y ajusta:
  // site: "https://USUARIO.github.io",
  // base: "/NOMBRE-DEL-REPO",
  vite: { plugins: [tailwindcss()] },
});
