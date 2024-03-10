import type { NostrEvent } from "@nostr-dev-kit/ndk";

export function findTag(ev: NostrEvent, tag: string) {
  return ev.tags?.find((t) => t.at(0) === tag)?.at(1);
}
