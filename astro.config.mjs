// https://astro.build/config
import netlify from "@astrojs/netlify/functions";
import { defineConfig } from "astro/config";
import storyblok from "@storyblok/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [
    storyblok({
      accessToken: "TVd6QLQct84fnJSH6cedyAtt",
      components: {
        page: "storyblok/Page",
	      feature: "storyblok/Feature",
	      grid: "storyblok/Grid",
	      teaser: "storyblok/Teaser",
      }
    }),
  ],
  output: "server",
  adapter: netlify()
});



