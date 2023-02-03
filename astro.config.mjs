import { defineConfig } from 'astro/config'
import compress from 'astro-compress'
import purgecss from 'astro-purgecss'
import { loadEnv } from './dotenv.config'

loadEnv()

const baseURL = process.env.ASTRO_BASE_URL || 'http://localhost:3000'

if (baseURL.length === 0) {
  console.warn(`Missing environment variable 'ASTRO_BASE_URL'`)
}

// https://astro.build/config
export default defineConfig({
  site: baseURL,
  integrations: [
    purgecss(),
    compress(),
  ]
})
