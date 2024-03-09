import ndk from "$lib/stores/ndk";
import session, { setSession } from "$lib/stores/session";
import { NDKNip07Signer } from "@nostr-dev-kit/ndk";
import { get } from "svelte/store";

export async function login() {
  if (get(session)) return;

  const signer = new NDKNip07Signer();
  get(ndk).signer = signer;

  const user = await signer.user();
  setSession(user);
}

export async function sudo<T>(fn: () => T): Promise<T> {
  if (!get(session)) {
    await login();
  }

  return fn();
}
