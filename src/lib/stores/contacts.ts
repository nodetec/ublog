import { writable } from "svelte/store";
import { npub } from "~/config";
import { decode } from "nostr-tools/nip19";
import { getContacts } from "$lib/utils/nip02";

export const following = writable<boolean>(false);

export async function getFollowing() {
  const contacts = await getContacts();
  const authorPk = decode(npub).data;

  following.set(contacts.some((contact) => contact[1] === authorPk));
}
