"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { KeysContext } from "@/app/context/keys-context";
import { Note } from "@/app/icons";
import { npub } from "@/ublog.config";
import { nip19 } from "nostr-tools";

const Write = () => {
  const pathname = usePathname();

  const { keys } = useContext(KeysContext);
  const publicKey = keys?.publicKey;

  if (
    !publicKey ||
    pathname === "/write" ||
    nip19.npubEncode(publicKey) !== npub
  ) {
    return null;
  }

  return (
    <Link href="/write">
      <button className="btn btn-ghost btn-circle">
        <Note size="18" />
      </button>
    </Link>
  );
};

export default Write;
