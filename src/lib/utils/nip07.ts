import { NDKEvent } from "@nostr-dev-kit/ndk";
import { get } from "svelte/store";
import { downVoted, upVoted, upVotes, downVotes } from "$lib/stores/reactions";
import { sudo } from "$lib/utils/login";

export function upVote(article: NDKEvent) {
  if (get(upVoted)) return;

  sudo(async function () {
    try {
      const event = await article.react("+");
      upVotes.update((ups) => [...ups, event]);
    } catch (err) {
      console.error(err);
    }
  });
}

export function downVote(article: NDKEvent) {
  if (get(downVoted)) return;

  sudo(async function () {
    try {
      const event = await article.react("-");
      downVotes.update((downs) => [...downs, event]);
    } catch (err) {
      console.error(err);
    }
  });
}
