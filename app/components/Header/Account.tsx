import { FC, useContext, useEffect, useState } from "react";
import { Event } from "nostr-tools";
import { UserContext } from "@/app/context/user-context";
import { RelayContext } from "@/app/context/relay-context";
import { FollowingContext } from "@/app/context/following-context";

interface AccountProps {
  pubkey: string;
}

const Account: FC<AccountProps> = ({ pubkey }) => {
  const [picture, setPicture] = useState("");
  const { user, setUser } = useContext(UserContext);
  const { relayUrl, activeRelay, subscribe } = useContext(RelayContext);
  const { following, setFollowing, followingReload, setFollowingReload } =
    useContext(FollowingContext);

  const getEvents = async () => {
    let kinds = [0, 3];

    let userKey = `user_${relayUrl}`;
    if (user[userKey]) {
      kinds = kinds.filter((kind) => kind !== 3);
      // console.log("Cached events from context");
      const content = user[userKey].content;
      if (content) {
        const contentObj = JSON.parse(content);
        if (contentObj.picture) {
          setPicture(contentObj.picture);
        }
      }
    }

    let followingKey = `following_${relayUrl}_${pubkey}`;

    if (following[followingKey]) {
      kinds = kinds.filter((kind) => kind !== 0);
    }

    if (kinds.length === 0) {
      return;
    }

    let relayName = relayUrl.replace("wss://", "");

    const filter = {
      kinds,
      authors: [pubkey],
      limit: 5,
    };

    let events: Event[] = [];

    const onEvent = (event: any) => {
      // @ts-ignore
      event.relayUrl = relayUrl;
      events.push(event);
      if (event.kind === 0) {
        const profileMetadata = event;
        user[userKey] = profileMetadata;
        setUser(user);
        const content = event.content;
        if (content) {
          const contentObj = JSON.parse(content);
          if (contentObj.picture) {
            setPicture(contentObj.picture);
          }
        }
      }
    };

    const onEOSE = () => {
      if (events.length !== 0) {
        // filter through events for kind 3
        const followingEvents = events.filter((event) => event.kind === 3);
        let followingKey = `following_${relayName}_${pubkey}`;

        const contacts = followingEvents[0].tags;
        const contactPublicKeys = contacts.map((contact: any) => {
          return contact[1];
        });

        following[followingKey] = contactPublicKeys;
        setFollowing(following);
        // addProfiles(contactPublicKeys.slice(0, 5));
        setFollowingReload(!followingReload);
      }
    };

    subscribe([relayUrl], filter, onEvent, onEOSE);
  };

  useEffect(() => {
    getEvents();
  }, [relayUrl, activeRelay]);

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={picture || "https://via.placeholder.com/150"} alt="" />
        </div>
      </label>
      <ul
        tabIndex={0}
        className="mt-3 p-2 shadow menu gap-1 menu-compact dropdown-content bg-base-100 rounded-box w-52"
      >
        <li>
          <button>Settings</button>
        </li>
        <li>
          <a>Logout</a>
        </li>
      </ul>
    </div>
  );
};

export default Account;
