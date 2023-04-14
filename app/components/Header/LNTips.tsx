import { ProfilesContext } from "@/app/context/profiles-context";
import { RelayContext } from "@/app/context/relay-context";
import { npub } from "@/ublog.config";
import { nip19 } from "nostr-tools";
import { useContext, useId, useState } from "react";
import { requestInvoice } from "lnurl-pay";
import { LightningCharge } from "@/app/icons";
import Popup from "../Popup";
import Input from "@/app/settings/Input";
import { Satoshis } from "lnurl-pay/dist/types/types";
import { ToastContext } from "@/app/context/toast-context";

const PRESET_AMOUNTS = [
  { value: 1000 as Satoshis, label: "1k" },
  { value: 5000 as Satoshis, label: "5k" },
  { value: 10000 as Satoshis, label: "10k" },
  { value: 25000 as Satoshis, label: "25k" },
];

const LNTips = () => {
  const popupId = useId();
  // @ts-ignore
  const { profiles } = useContext(ProfilesContext);
  const { relayUrl } = useContext(RelayContext);
  const defaultTipAmount = 100 as Satoshis;
  const [tipInputValue, setTipInputValue] =
    useState<Satoshis>(defaultTipAmount);
  const [tipMessage, setTipMessage] = useState<string>();
  const { createToast } = useContext(ToastContext);

  const profilePubkey = nip19.decode(npub).data.toString();
  let relayName = relayUrl.replace("wss://", "");
  const profileKey = `profile_${relayName}_${profilePubkey}`;
  const profile = profiles[profileKey];
  if (!profile) return null;
  const content = JSON.parse(profile.content);
  const lud06 = content.lud06;
  const lud16 = content.lud16;
  if (!lud06 && !lud16) return null;

  const handleSendTip = async () => {
    if (typeof window.webln !== "undefined") {
      const lnUrlOrAddress = lud06 || lud16;
      createToast({
        message: `Sending Payment...`,
        type: "warning",
      });
      const { invoice /* , params, successAction, validatePreimage  */ } =
        await requestInvoice({
          lnUrlOrAddress,
          tokens: tipInputValue, // satoshis
          comment: tipMessage,
        });
      try {
        const result = await webln.sendPayment(invoice);
        console.log("payment hash: ", result.paymentHash);
        createToast({
          message: `Payment Hash: ${result.paymentHash}`,
          type: "success",
        });
      } catch (e) {
        console.log("Tip Error:", e);
        createToast({
          message: `Payment Failed!`,
          type: "error",
        });
      }
    }
  };

  return (
    <>
      <label
        htmlFor={popupId}
        className="btn btn-warning gap-2"
        onClick={() => {
          setTipMessage("");
          setTipInputValue(defaultTipAmount);
        }}
      >
        <LightningCharge />
        <span>Tip</span>
      </label>
      <Popup id={popupId} title="Pay with Lightning">
        <Input
          label="Amount (satoshis)"
          type="number"
          min="0"
          step="100"
          value={tipInputValue}
          className="focus:input-warning"
          onChange={(e) => {
            const inputValue = parseInt(e.target.value);
            const satoshisValue = inputValue as Satoshis;
            setTipInputValue(satoshisValue);
          }}
        />
        <div className="flex items-center gap-4 mb-4">
          {PRESET_AMOUNTS.map((amount, idx) => (
            <button
              key={idx}
              className="btn btn-warning gap-2 flex-1"
              onClick={() => setTipInputValue(amount.value)}
            >
              <LightningCharge />
              <span>{amount.label}</span>
            </button>
          ))}
        </div>
        <Input
          label="Message (optional)"
          value={tipMessage}
          className="focus:input-warning"
          onChange={(e) => setTipMessage(e.target.value)}
        />
        <button
          className="btn btn-warning btn-block gap-2 flex-1"
          onClick={handleSendTip}
        >
          <LightningCharge />
          <span>Send</span>
        </button>
      </Popup>
    </>
  );
};

export default LNTips;
