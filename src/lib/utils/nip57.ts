import type { NostrEvent } from "@nostr-dev-kit/ndk";
import { decode } from "light-bolt11-decoder";
import { findTag } from "./tags";

export function getZapAmount(zap: NostrEvent) {
  try {
    const invoice = findTag(zap, "bolt11");
    if (!invoice) return 0;
    const amount = decode(invoice).sections.find(
      ({ name }) => name === "amount"
    );
    return Number(amount?.value) / 1000;
  } catch (error) {
    console.error(error);
    return 0;
  }
}
export function getZapsTotalAmount(zaps: NostrEvent[]) {
  return zaps.reduce((total, zap) => total + getZapAmount(zap), 0);
}
