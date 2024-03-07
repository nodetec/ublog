import { NDKEvent } from "@nostr-dev-kit/ndk";
import { writable } from "svelte/store";

const articles = writable<NDKEvent[]>([]);

export default articles;
