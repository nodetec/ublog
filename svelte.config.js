import adapter from "@sveltejs/adapter-vercel";
import preprocess from "svelte-preprocess";

export default {
  kit: {
    alias: {
      "~": "src",
    },
    adapter: adapter({
      // see below for options that can be set here
    }),
  },
  preprocess: preprocess({}),
};
