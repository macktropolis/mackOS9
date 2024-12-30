import { defineConfig, sharpImageService } from 'astro/config';
import icon from "astro-icon";

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: "https://mackrichardson.com",
    integrations: [icon(), sitemap()],
    image: {
      service: sharpImageService(),
      domains: ["astro.build"],
    }
});
