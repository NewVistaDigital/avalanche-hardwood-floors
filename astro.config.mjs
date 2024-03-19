import { defineConfig } from "astro/config";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://springshardwood.com",
  integrations: [
    mdx(),
    sitemap(),
    icon({
      include: {
        tabler: ["*"],
      },
    }),
    tailwind(),
  ],
  output: "static",
  adapter: netlify(),
});
