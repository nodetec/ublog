import { get } from "svelte/store";
import session from "$lib/stores/session";
import ndk from "$lib/stores/ndk";
import { NDKEvent, NDKKind } from "@nostr-dev-kit/ndk";
import { sudo } from "$lib/utils/login";
import { dateToUnix } from "$lib/utils/time";
import { npub } from "~/config";
import { decode } from "nostr-tools/nip19";
import { following } from "../stores/follow";

export function getContacts() {
  return sudo(async () => {
    try {
      const event = await get(ndk).fetchEvent({
        kinds: [NDKKind.Contacts],
        authors: [get(session)!.pubkey],
      });
      return event?.getMatchingTags("p") || [];
    } catch (err) {
      console.error(err);
      return [];
    }
  });
}

export async function follow() {
  const contacts = await getContacts();
  const authorPk = decode(npub).data;

  sudo(async () => {
    const event = new NDKEvent(get(ndk), {
      kind: NDKKind.Contacts,
      content: "",
      pubkey: get(session)!.pubkey,
      created_at: dateToUnix(),
      tags: [...contacts, ["p", authorPk]],
    });

    try {
      await event.publish();
      following.set(true);
    } catch (err) {
      console.error(err);
    }
  });
}

export async function unFollow() {
  const contacts = await getContacts();
  const authorPk = decode(npub).data;

  sudo(async () => {
    const event = new NDKEvent(get(ndk), {
      kind: NDKKind.Contacts,
      content: "",
      pubkey: get(session)!.pubkey,
      created_at: dateToUnix(),
      tags: contacts.filter((contact) => contact[1] !== authorPk),
    });

    try {
      await event.publish();
      following.set(false);
    } catch (err) {
      console.error(err);
    }
  });
}
