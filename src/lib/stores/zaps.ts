import { type NostrEvent } from "@nostr-dev-kit/ndk";
import { get, writable } from "svelte/store";
import session from "./session";

export const zaps = writable<NostrEvent[]>([]);

export const zapped = writable(false);

zaps.subscribe((current) => {
  const s = get(session);
  if (!s) return;

  zapped.set(current.some((zap) => zap.pubkey === s.pubkey));
});

interface ZapOpts {
  amount: number;
  comment?: string;
}

const DEFAULT_ZAP_OPTS = {
  amount: 1000,
} satisfies ZapOpts;

export const zapOpts = writable<ZapOpts>(DEFAULT_ZAP_OPTS);

export function setZapAmount(amount: number) {
  zapOpts.update((opts) => ({ ...opts, amount }));
}

export function setZapAction(action: any) {
  zapOpts.update((opts) => ({ ...opts, action }));
}

export const isZapPopupVisible = writable(false);

export function showPopup() {
  isZapPopupVisible.set(true);
}

export function hidePopup() {
  isZapPopupVisible.set(false);
}

export function togglePopup() {
  isZapPopupVisible.update((visible) => !visible);
}

isZapPopupVisible.subscribe((visible) => {
  if (visible) return;
  zapOpts.set(DEFAULT_ZAP_OPTS);
});
