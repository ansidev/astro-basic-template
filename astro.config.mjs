import { defineConfig } from 'astro/config'
import compress from 'astro-compress'
import purgecss from 'astro-purgecss'

import { loadEnv } from './dotenv.config'

loadEnv()

const baseURL = process.env.ASTRO_BASE_URL || ''

if (baseURL.length === 0) {
  console.log('Missing environment variable \'ASTRO_BASE_URL\'.')
  process.exit(1)
}

// https://astro.build/config
export default defineConfig({
  site: baseURL,
  integrations: [
    purgecss(),
    compress(),
  ]
})
