import { defineConfig } from "astro/config";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify";
import robotsTxt from "astro-robots-txt";
import partytown from "@astrojs/partytown";

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
    robotsTxt(),
    partytown({
      // Example: Add dataLayer.push as a forwarding-event.
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  output: "static",
  adapter: netlify(),
});
