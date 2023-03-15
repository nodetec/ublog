"use client";

import UserBox from "@/app/components/UserBox";
import { useContext } from "react";
import { KeysContext } from "@/app/context/keys-context";
import Account from "./Account";
import { nip19 } from "nostr-tools";

const Settings = () => {
  const { keys } = useContext(KeysContext);
  const publicKey = keys?.publicKey;
  const npub = nip19.npubEncode(publicKey);

  return (
    <div>
      <UserBox npub={npub} />
      <h1 className="text-3xl font-bold py-4 text-center md:text-start">
        Settings
      </h1>
      <Account />
    </div>
  );
};

export default Settings;
