"use client";
import { FeedContext } from "@/app/context/feed-context";
import { ProfilesContext } from "@/app/context/profiles-context";
import { RelayContext } from "@/app/context/relay-context";
import { NostrService } from "@/app/lib/nostr";
import { npub } from "@/ublog.config";
import { Event, nip19 } from "nostr-tools";
import { Fragment, useContext, useEffect, useState } from "react";
import Feed from "@/app/components/Feed";
import UserBox from "@/app/components/UserBox";

const Home = () => {
  const [events, setEvents] = useState<{ e: Event[]; isLoading: boolean }>({
    e: [],
    isLoading: true,
  });
  // @ts-ignore
  const { feed, setFeed } = useContext(FeedContext);
  const { relayUrl, subscribe } = useContext(RelayContext);
  // @ts-ignore
  const { addProfiles } = useContext(ProfilesContext);

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getProfileEvents = async () => {
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

  // look up blogs
  // look up profile
  useEffect(() => {
    getProfileEvents();
    // eslint-disable-next-line
  }, [relayUrl]);

  return (
    <Fragment>
      <UserBox npub={npub} />
      <Feed events={events.e} isEventsLoading={events.isLoading} />
    </Fragment>
  );
};

export default Home;
