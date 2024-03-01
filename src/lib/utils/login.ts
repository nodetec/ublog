import ndk from "$lib/stores/ndk";
import { setSession } from "$lib/stores/session";
import { NDKNip07Signer } from "@nostr-dev-kit/ndk";
import { get } from "svelte/store";

export async function login() {
  const signer = new NDKNip07Signer();
  get(ndk).signer = signer;

  const user = await signer.user();

  setSession(user);
}
