import { type NostrEvent } from "@nostr-dev-kit/ndk";
import { writable } from "svelte/store";

export const zaps = writable<NostrEvent[]>([]);

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
