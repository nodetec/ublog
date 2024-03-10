import type { NostrEvent } from "@nostr-dev-kit/ndk";
import { get, writable } from "svelte/store";
import session from "$lib/stores/session";

export const reactions = writable<NostrEvent[]>([]);

export const upVotes = writable<NostrEvent[]>([]);
export const downVotes = writable<NostrEvent[]>([]);

export const upVoted = writable(false);
export const downVoted = writable(false);

reactions.subscribe((reacts) => {
  const ups = reacts.filter((react) => ["", "+", "❤️"].includes(react.content));
  upVotes.set(ups);

  const downs = reacts.filter((react) => react.content === "-");
  downVotes.set(downs);
});

downVotes.subscribe((downs) => {
  downVoted.set(downs.some((down) => down.pubkey === get(session)?.pubkey));
});

upVotes.subscribe((ups) => {
  upVoted.set(ups.some((up) => up.pubkey === get(session)?.pubkey));
});
