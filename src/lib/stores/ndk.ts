import { browser } from "$app/environment";
import type { NDKCacheAdapter } from "@nostr-dev-kit/ndk";
import NDKCacheAdapterDexie from "@nostr-dev-kit/ndk-cache-dexie";
import NDK from "@nostr-dev-kit/ndk";
import { writable } from "svelte/store";
import { relays } from "~/config";

let cacheAdapter: NDKCacheAdapter | undefined;

if (browser) {
  cacheAdapter = new NDKCacheAdapterDexie({ dbName: "uBlogDb" });
}

const ndk = writable(
  new NDK({
    explicitRelayUrls: relays,
    cacheAdapter,
  })
);

export default ndk;
