"use client";
import { useContext, useEffect, useState } from "react";
import { FeedContext } from "@/app/context/feed-context";
import { ProfilesContext } from "./context/profiles-context";
import { RelayContext } from "./context/relay-context";
import { npub } from "@/ublog.config";
import { nip19 } from "nostr-tools";

const Home = () => {
  const [events, setEvents] = useState<{ e: Event[]; isLoading: boolean }>({
    e: [],
    isLoading: true,
  });
  const { feed, setFeed } = useContext(FeedContext);
  // @ts-ignore
  const { addProfiles, profiles, reload } = useContext(ProfilesContext);
  const { relayUrl, subscribe } = useContext(RelayContext);
  console.log(npub);

  const initialProfile = {
    name: "",
    about: "",
    picture: "",
    banner: "",
  };

  const [profile, setProfile] = useState(initialProfile);

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

  return <h1 className="text-3xl font-bold underline"></h1>;
};

export default Home;
