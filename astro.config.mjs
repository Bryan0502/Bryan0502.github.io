import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"

import robotsTxt from "astro-robots-txt"

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), robotsTxt()],
   site: 'https://bryan0502.github.io', // URL base de tu sitio
   base: '/', // Ruta base de tu sitio
})
