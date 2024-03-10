import type { NDKEvent } from "@nostr-dev-kit/ndk";
import { decode } from "light-bolt11-decoder";

export function getZapAmount(zap: NDKEvent) {
  try {
    const invoice = zap.tagValue("bolt11");
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
export function getZapsTotalAmount(zaps: NDKEvent[]) {
  return zaps.reduce((total, zap) => total + getZapAmount(zap), 0);
}
