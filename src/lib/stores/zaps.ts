import { type NostrEvent } from "@nostr-dev-kit/ndk";
import { writable } from "svelte/store";

export const zaps = writable<NostrEvent[]>([]);
