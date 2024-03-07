import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageLoad} */
export function load({ params }: any) {
  if (params.articleId) {
    return {
      articleId: params.articleId,
    };
  }
  error(404, "Not found");
}
