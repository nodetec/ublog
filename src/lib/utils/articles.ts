import { type NDKFilter, NDKKind } from "@nostr-dev-kit/ndk";
import ndk from "$lib/stores/ndk";
import { get } from "svelte/store";

export async function fetchArticles(authors: string[]) {
  console.log({ authors });
  const filter: NDKFilter = { kinds: [NDKKind.Article], authors };
  try {
    const events = await get(ndk).fetchEvents(filter);
    console.log({ events });
    return events;
  } catch (e) {
    console.error(e);
  }
}
