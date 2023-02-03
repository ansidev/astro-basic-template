import dotenv from 'dotenv'

export const loadEnv = () => dotenv.config({ path: '.env.local' })
