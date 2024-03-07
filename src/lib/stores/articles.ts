import { NDKEvent } from "@nostr-dev-kit/ndk";
import { writable } from "svelte/store";

const currentPageArticles = writable<NDKEvent[]>([]);

export default currentPageArticles;
