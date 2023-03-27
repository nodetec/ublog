"use client";
import { useContext, useEffect, useId, useRef, useState } from "react";
import { KeysContext } from "@/app/context/keys-context";
import Account from "./Account";
import { ToastContext } from "@/app/context/toast-context";
import Popup from "@/app/components/Popup";

const Login = () => {
  const { keys, setKeys } = useContext(KeysContext);
  const [isLightningConnected, setIsLightningConnected] = useState(false);
  const { createToast } = useContext(ToastContext);
  const popupId = useId();

  useEffect(() => {
    const shouldReconnect = localStorage.getItem("shouldReconnect");

    const getConnected = async (shouldReconnect: string) => {
      let enabled = false;

      // @ts-ignore
      if (typeof window.nostr === "undefined") {
        return;
      }

      if (shouldReconnect === "true") {
        // @ts-ignore
        const publicKey = await nostr.getPublicKey();
        setKeys((keys) => ({ ...keys, publicKey }));
      }

      // @ts-ignore
      if (typeof window.webln === "undefined") {
        return;
      }

      // @ts-ignore
      if (shouldReconnect === "true" && !webln.executing) {
        try {
          // @ts-ignore
          enabled = await window.webln.enable();
          setIsLightningConnected(true);
        } catch (e: any) {
          console.log(e.message);
        }
      }
      return enabled;
    };

    if (shouldReconnect === "true") {
      getConnected(shouldReconnect);
    }
  }, [setKeys]);

  const loginHandler = async () => {
    // @ts-ignore
    if (typeof window.nostr !== "undefined") {
      // @ts-ignore
      const publicKey = await nostr.getPublicKey();
      setKeys((keys) => ({ ...keys, publicKey }));
      localStorage.setItem("shouldReconnect", "true");
    }

    // @ts-ignore
    if (typeof window.webln !== "undefined") {
      // @ts-ignore
      await window.webln.enable();
    }
    console.log("connected");
    createToast({ message: "connected", type: "success" });
    setIsLightningConnected(true);
  };

  return (
    <>
      {isLightningConnected && keys?.publicKey ? (
        <Account pubkey={keys.publicKey} />
      ) : (
        <>
          <label htmlFor={popupId} className="btn btn-outline">
            login
          </label>
          <Popup id={popupId} title="Login">
            {typeof window !== "undefined" &&
            // @ts-ignore
            typeof window.nostr === "undefined" ? (
              <>
                <p className="py-4">
                  Install Alby Extension and setup keys to Login
                </p>
                <a
                  href="https://getalby.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-active btn-block"
                >
                  Get Alby Extension
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://guides.getalby.com/overall-guide/alby-browser-extension/features/nostr"
                  className="link text-center block mt-2 font-bold text-sm"
                >
                  Learn more
                </a>
              </>
            ) : (
              <button
                className="btn btn-outline btn-block"
                onClick={loginHandler}
              >
                {isLightningConnected ? "Connected" : "Login with Extension"}
              </button>
            )}
          </Popup>
        </>
      )}
    </>
  );
};

export default Login;
