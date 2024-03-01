import { type NDKUserProfile } from "@nostr-dev-kit/ndk";
import { get, writable } from "svelte/store";
import ndk from "./ndk";
import { npub } from "~/config";

type Author = NDKUserProfile | null;

export const author = writable<Author>(null);

export function fetchAuthor() {
  if (get(author)) return;

  const user = get(ndk).getUser({ npub });

  user
    .fetchProfile()
    .then((u) => {
      author.set(u);
    })
    .catch((e) => {
      console.error(e);
    });
}
