import type { NDKEvent } from "@nostr-dev-kit/ndk";
import { decode } from "light-bolt11-decoder";

export function getZapAmount(zap: NDKEvent) {
  try {
    const invoice = zap.tagValue("bolt11");
    if (invoice) {
      const decoded = decode(invoice);
      const amount = decoded.sections.find(({ name }) => name === "amount");
      return Number(amount?.value) / 1000;
    }
    return 0;
  } catch (error) {
    console.error(error);
    return 0;
  }
}
export function getZapsAmount(zaps: NDKEvent[]) {
  return zaps.reduce((total, zap) => total + getZapAmount(zap), 0);
}
