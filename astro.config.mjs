import { defineConfig, sharpImageService } from 'astro/config';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
    integrations: [icon()],
    image: {
      service: sharpImageService(),
      domains: ["astro.build"],
    }
});
