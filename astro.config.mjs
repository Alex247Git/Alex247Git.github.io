import { defineConfig } from 'astro/config'
import { webcore } from 'webcoreui/integration'

export default defineConfig({
    site: 'https://Alex247Git.github.io', 
    integrations: [webcore()]
})