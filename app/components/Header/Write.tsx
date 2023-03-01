"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BlogContext } from "@/app/context/blog-context";
import { useContext, useEffect, useState } from "react";
import { RelayContext } from "@/app/context/relay-context";
import { useRouter } from "next/navigation";
import { NostrService } from "@/app/lib/nostr";
import { KeysContext } from "@/app/context/keys-context";
import { nip19 } from "nostr-tools";
import CreatableSelect from "react-select/creatable";
import { FeedContext } from "@/app/context/feed-context";
import { Note } from "@/app/icons";

const Write = () => {
  // @ts-ignore
  const { blog, setBlog } = useContext(BlogContext);
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [summary, setSummary] = useState("");
  const [image, setImage] = useState("");
  const [tagsList, setTagsList] = useState<{ label: string; value: string }[]>(
    []
  );

  // @ts-ignore
  const { keys } = useContext(KeysContext);
  const publicKey = keys?.publicKey;
  const { allRelays, relayUrl, publish } = useContext(RelayContext);
  const [toggledRelays, setToggledRelays] = useState<string[]>([relayUrl]);
  const [publishFailed, setPublishFailed] = useState<string[]>([]);
  const [publishSuccess, setPublishSuccess] = useState<string[]>([]);
  const [publishCount, setPublishCount] = useState<number>(0);
  const [publishEvent, setPublishEvent] = useState<any>();
  const [isRelayStatusOpen, setIsRelayStatusOpen] = useState<boolean>(false);
  const [isPublishing, setIsPublishing] = useState<boolean>(false);

  // @ts-ignore
  const { feed, setFeed } = useContext(FeedContext);

  // function getTValues(tags: string[][]) {
  //   return tags
  //     .filter((subTags) => subTags[0] === "t")
  //     .map((subTags) => subTags[1])
  //     .filter((t) => t.length <= 20);
  // }

  useEffect(() => {
    return () => {
      setBlog({
        title: "",
        summary: null,
        content: "",
        image: null,
        identifier: null,
        publishedAt: null,
      });
      setIsPublishing(false);
    };
  }, []);

  useEffect(() => {
    setSummary(blog.summary);
    setImage(blog.image);
  }, [blog]);

  useEffect(() => {
    // console.log("PUBLISH SUCCESS:", publishSuccess);
    // console.log("PUBLISH FAILED:", publishFailed);
    // console.log("PUBLISH TOGGLED:", toggledRelays);
    // console.log("PUBLISH SUCCESS LENGTH:", publishSuccess.length);
    // console.log("PUBLISH FAILED LENGTH:", publishFailed.length);
    // console.log("PUBLISH TOGGLED LENGTH:", toggledRelays.length);
    if (publishSuccess.length + publishFailed.length < toggledRelays.length) {
      if (publishEvent) {
        publishToRelay(publishEvent);
      }
    }
    // console.log("PUBLISH COUNT:", publishCount);
  }, [publishSuccess, publishFailed]);

  useEffect(() => {
    if (publishCount >= toggledRelays.length) {
      setIsOpen(false);
      setIsRelayStatusOpen(true);
    }
  }, [publishCount]);

  if (!keys.publicKey) {
    return null;
  }

  const setNoOptionsMessage = () => {
    return "No Options";
  };

  const handleSetTagsList = (list: any) => {
    if (list.length > 5) {
      return;
    }
    setTagsList(list);
  };

  const validateTags = (e: any) => {
    if (!e.key.match(/^[0-9a-zA-Z]+$/)) {
      e.preventDefault();
      return;
    }
  };

  const validateTitleAndContent = () => {
    const validations = { title: true, content: true };

    if (blog.title.trim().length) {
      validations.title = true;
    } else {
      validations.title = false;
    }

    if (blog.content.trim().length) {
      validations.content = true;
    } else {
      validations.content = false;
    }

    return validations;
  };

  const handlePublish = async () => {
    const validations = validateTitleAndContent();

    setBlog({
      ...blog,
      titleValid: validations.title,
      contentValid: validations.content,
    });
    if (validations.title && validations.content) {
      setIsOpen(true);
    }
  };

  const toggleRelay = (e: any) => {
    let relays = toggledRelays;
    if (e.target.checked) {
      if (!relays.includes(e.target.value)) {
        relays.push(e.target.value);
      }
    } else {
      if (relays.includes(e.target.value)) {
        relays = relays.filter((relay) => relay !== e.target.value);
      }
    }
    setToggledRelays(relays);
  };

  const publishToRelay = (event: any) => {
    const onOk = async () => {};

    const onSeen = async (url: string) => {
      let relayUrl = url.replace("wss://", "");
      let feedKey = `latest_${relayUrl}`;
      feed[feedKey] = null;
      let profileFeedKey = `profilefeed_${relayUrl}_${publicKey}`;
      feed[profileFeedKey] = null;
      setFeed(feed);
      if (!publishSuccess.includes(url)) {
        setPublishSuccess([...publishSuccess, url]);
      }
      setPublishCount(publishCount + 1);
    };

    const onFailed = async (url: string) => {
      setPublishFailed([...publishFailed, url]);
      setPublishCount(publishCount + 1);
    };

    publish([toggledRelays[publishCount]], event, onOk, onSeen, onFailed);
  };

  const submitPublish = async () => {
    const { title, content } = blog;

    const tags = [
      ["client", "blogstack.io"],
      ["title", title],
    ];

    if (image && image !== "") tags.push(["image", image]);
    if (summary && summary !== "") tags.push(["summary", summary]);

    for (let tagValue of tagsList) {
      tags.push(["t", tagValue.value]);
    }

    if (blog.identifier && blog.identifier !== "") {
      tags.push(["d", blog.identifier]);
    } else {
      tags.push(["d", NostrService.randomId()]);
    }

    if (blog.publishedAt && blog.publishedAt > 0) {
      tags.push(["published_at", blog.publishedAt.toString()]);
    } else {
      tags.push(["published_at", Math.floor(Date.now() / 1000).toString()]);
    }

    let event = NostrService.createEvent(30023, publicKey, content, tags);
    event = await NostrService.signEvent(event);

    console.log("EVENT:", event);

    console.log("PUBLISHING TO:", toggledRelays);

    setPublishEvent(event);

    setIsPublishing(true);
    publishToRelay(event);
  };

  const handleDismiss = () => {
    setIsRelayStatusOpen(false);
    router.push("/u/" + nip19.npubEncode(publicKey));
  };

  return (
    <>
      {pathname === "/write" ? (
        <>
          <button onClick={handlePublish}>Publish</button>
        </>
      ) : (
        <Link href="/write">
          <button className="btn btn-ghost btn-circle">
            <Note size="18" />
          </button>
        </Link>
      )}
    </>
  );
};

export default Write;
