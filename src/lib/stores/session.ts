import { NDKUser } from "@nostr-dev-kit/ndk";
import { writable } from "svelte/store";

type Session = NDKUser | null;

const session = writable<Session>(null);

export function setSession(s: Session) {
  session.set(s);
}

export default session;
