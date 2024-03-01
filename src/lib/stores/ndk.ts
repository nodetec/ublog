import { browser } from "$app/environment";
import type { NDKCacheAdapter } from "@nostr-dev-kit/ndk";
import NDKCacheAdapterDexie from "@nostr-dev-kit/ndk-cache-dexie";
import NDK from "@nostr-dev-kit/ndk";
import { writable } from "svelte/store";

let cacheAdapter: NDKCacheAdapter | undefined;

if (browser) {
  cacheAdapter = new NDKCacheAdapterDexie({ dbName: "uBlogDb" });
}

export const defaultRelays = [
  "wss://purplepag.es",
  "wss://nos.lol",
  "wss://relay.damus.io",
  "wss://relay.snort.social",
  "wss://nostr.mom",
  "wss://offchain.pub/",
  "wss://relay.nostr.band",
];

const ndk = writable(
  new NDK({
    explicitRelayUrls: defaultRelays,
    cacheAdapter,
  })
);

export default ndk;
