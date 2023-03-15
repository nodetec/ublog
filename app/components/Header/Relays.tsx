import { ProfilesContext } from "@/app/context/profiles-context";
import { RelayContext } from "@/app/context/relay-context";
import { Check, Relays as RelaysIcon } from "@/app/icons";
import ChevronDown from "@/app/icons/ChevronDown";
import { useContext, useState } from "react";

const Relays = () => {
  const { setRelayUrl, activeRelay, allRelays, connect } =
    useContext(RelayContext);

  const [isRelayConnecting, setIsRelayConnecting] = useState<string>(
    allRelays[0]
  );
  // @ts-ignore
  const { setReload } = useContext(ProfilesContext);

  const getRelayName = (relay: string) => relay.replace("wss://", "");

  const handleRelayClick = async (relay: string) => {
    if (activeRelay && activeRelay.url !== relay) {
      setIsRelayConnecting(relay);
      await connect(relay);
      setRelayUrl(relay);
      setReload((current: any) => !current);
    }
  };

  return (
    <div className="dropdown dropdown-end" title="Relays">
      <div className="btn gap-2 normal-case btn-ghost flex-nowrap" tabIndex={0}>
        <RelaysIcon />
        <ChevronDown />
      </div>
      <div className="dropdown-content bg-base-200 text-base-content rounded-t-box rounded-b-box max-h-96 w-max overflow-y-auto shadow-2xl mt-16 top-0 left-1/2 md:left-auto -translate-x-1/2 md:translate-x-0">
        <div className="grid grid-cols-1 gap-3 p-3" tabIndex={0}>
          {allRelays.map((relay, i) => (
            <button
              key={i}
              className={`btn px-4 justify-start gap-2 flex-1 
                         ${
                           activeRelay?.url === relay
                             ? "btn-success btn-active"
                             : relay === isRelayConnecting
                             ? "loading btn-warning btn-active"
                             : "btn-ghost"
                         }
                         `}
              onClick={() => handleRelayClick(relay)}
            >
              {activeRelay?.url !== relay &&
              relay === isRelayConnecting ? null : (
                <Check
                  className={`w-4 h-4 mr-2
                    ${activeRelay?.url === relay ? "opacity-100" : "opacity-0"}
                    `}
                />
              )}
              <img
                className="h-6 w-6 rounded-full mr-2"
                src={`https://${getRelayName(relay)}/favicon.ico`}
                alt=""
              />
              {getRelayName(relay)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Relays;
