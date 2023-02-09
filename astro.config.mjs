import { defineConfig } from 'astro/config'
import compress from 'astro-compress'
import purgecss from 'astro-purgecss'

// https://astro.build/config
export default defineConfig({
  integrations: [
    purgecss(),
    compress(),
  ]
})
