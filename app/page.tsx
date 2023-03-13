"use client";
import { useContext, useEffect, useState } from "react";
import { FeedContext } from "@/app/context/feed-context";
import { ProfilesContext } from "./context/profiles-context";
import { RelayContext } from "./context/relay-context";
import { npub } from "@/ublog.config";
import { nip19 } from "nostr-tools";
import { utils } from "lnurl-pay";
import { LightningCharge, PatchCheck } from "./icons";

const Home = () => {
  const [events, setEvents] = useState<{ e: Event[]; isLoading: boolean }>({
    e: [],
    isLoading: true,
  });
  const { feed, setFeed } = useContext(FeedContext);
  // @ts-ignore
  const { addProfiles, profiles, reload } = useContext(ProfilesContext);
  const { relayUrl, subscribe } = useContext(RelayContext);

  const initialProfile = {
    name: "",
    lud16: "",
    nip05: "",
    about: "",
    picture: "",
    banner: "",
  };

  const [profile, setProfile] = useState(initialProfile);
  const { name, lud16, nip05, about, picture, banner } = profile;

  const resetProfile = () => {
    setProfile(initialProfile);
  };

  let profilePubkey = "";
  try {
    profilePubkey = nip19.decode(npub).data.toString();
  } catch (e) {
    console.log(e);
  }
  const filter = {
    kinds: [30023],
    authors: [profilePubkey],
    limit: 50,
    until: undefined,
  };

  const getProfileEvents = async () => {
    resetProfile();
    let pubkeysSet = new Set<string>();

    setEvents({ e: [], isLoading: true });
    let relayName = relayUrl.replace("wss://", "");
    let feedKey = `profilefeed_${relayUrl}_${profilePubkey}`;

    if (feed[feedKey]) {
      setEvents({ e: feed[feedKey], isLoading: false });
      return;
    }

    let events: Event[] = [];

    const onEvent = (event: any) => {
      // @ts-ignore
      event.relayUrl = relayName;
      events.push(event);
      pubkeysSet.add(event.pubkey);
    };

    const onEOSE = () => {
      // @ts-ignore
      const filteredEvents = NostrService.filterBlogEvents(events);
      let feedKey = `profilefeed_${relayUrl}_${profilePubkey}`;
      feed[feedKey] = filteredEvents;
      setFeed(feed);
      if (filteredEvents.length > 0) {
        // @ts-ignore
        setEvents({ e: filteredEvents, isLoading: false });
      } else {
        setEvents({ e: [], isLoading: false });
      }
      if (pubkeysSet.size > 0) {
        // setpubkeys([...Array.from(pubkeysSet), ...pubkeys]);
        addProfiles(Array.from(pubkeysSet));
      }
    };

    subscribe([relayUrl], filter, onEvent, onEOSE);
  };

  const getProfile = () => {
    let relayName = relayUrl.replace("wss://", "");
    const profileKey = `profile_${relayName}_${profilePubkey}`;
    const profile = profiles[profileKey];
    if (!profile) {
      addProfiles([profilePubkey]);
    }
    if (profile && profile.content) {
      const profileContent = JSON.parse(profile.content);
      setProfile(profileContent);
    }
  };

  // look up blogs
  // look up profile
  useEffect(() => {
    getProfileEvents();
    // eslint-disable-next-line
  }, [relayUrl]);

  useEffect(() => {
    getProfile();
    // eslint-disable-next-line
  }, [reload, relayUrl]);

  return (
    <div className="rounded-box bg-neutral text-neutral-content overflow-hidden mt-4">
      <img
        className="min-h-[8rem] h-auto max-h-[24rem] w-full object-cover"
        src={banner}
        alt=""
      />
      <div className="-translate-y-8 md:px-12 flex items-center md:items-start gap-6 flex-col md:flex-row px-4">
        <img
          className="w-24 h-24 min-w-[6rem] rounded-full border-4 border-neutral"
          src={picture}
          alt=""
        />
        <div className="text-center md:text-start md:mt-10 flex flex-col gap-2 items-center md:items-start">
          {name ? <h2 className="font-bold text-2xl">{name}</h2> : null}
          {nip05 ? (
            <p className="text-sm flex items-center gap-2">
              {nip05}
              <PatchCheck className="text-info" size="12" />
            </p>
          ) : null}
          {lud16 && utils.isLightningAddress(lud16) ? (
            <p className="text-sm flex items-center gap-2">
              {lud16}
              <LightningCharge className="text-warning" size="12" />
            </p>
          ) : null}
          {about ? <p>{about}</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Home;
