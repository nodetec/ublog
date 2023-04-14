import { useContext, useEffect, useId, useState } from "react";
import Popup from "@/app/components/Popup";
import Input from "@/app/settings/Input";
import Select from "@/app/components/Select";
import { RelayContext } from "@/app/context/relay-context";
import { NostrService } from "@/app/lib/nostr";
import { KeysContext } from "@/app/context/keys-context";
import { FeedContext } from "@/app/context/feed-context";
import { BlogContext } from "@/app/context/blog-context";
import { useRouter } from "next/navigation";

const Publish = () => {
  const popupId = useId();
  const router = useRouter();

  const { keys } = useContext(KeysContext);
  const publicKey = keys?.publicKey;
  const [summary, setSummary] = useState("");
  const [image, setImage] = useState("");
  const [selectValue, setSelectValue] = useState<string>("");
  const [tagsList, setTagsList] = useState<string[]>([]);
  const { allRelays, relayUrl, publish } = useContext(RelayContext);
  const [toggledRelays, setToggledRelays] = useState<string[]>([relayUrl]);
  const [activeStepIdx, setActiveStepIdx] = useState(0);
  const { blog, setBlog } = useContext(BlogContext);
  const [publishEvent, setPublishEvent] = useState<any>();
  const [isPublishing, setIsPublishing] = useState<boolean>(false);
  const { feed, setFeed } = useContext(FeedContext);
  const [publishSuccess, setPublishSuccess] = useState<string[]>([]);
  const [publishCount, setPublishCount] = useState<number>(0);
  const [publishFailed, setPublishFailed] = useState<string[]>([]);
  const [isRelayStatusOpen, setIsRelayStatusOpen] = useState<boolean>(false);

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
    // eslint-disable-next-line
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
    // eslint-disable-next-line
  }, [publishSuccess, publishFailed]);

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

  const STEPS = [
    {
      Details: (
        <>
          <Input
            value={summary ?? ""}
            onChange={(evn) => setSummary(evn.target.value)}
            label="Summary"
          />
          <Input
            value={image ?? ""}
            onChange={(e) => setImage(e.target.value)}
            label="Hero Image"
          />
          <>
            <Select
              value={selectValue}
              setValue={setSelectValue}
              items={tagsList}
              setItems={setTagsList}
              label="Add topics (up to 5)"
            />
          </>
        </>
      ),
    },
    {
      "Choose relays": (
        <ul>
          {allRelays.map((relay, idx) => (
            <li key={idx}>
              <label className="label cursor-pointer justify-start gap-4">
                <input
                  type="checkbox"
                  className="checkbox checkbox-primary"
                  value={relay}
                  onChange={toggleRelay}
                  defaultChecked={relay === relayUrl}
                />
                <span className="label-text">{relay}</span>
              </label>
            </li>
          ))}
        </ul>
      ),
    },
  ];

  const publishToRelay = (event: any) => {
    const onOk = async () => { };

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
      ["client", "u-blog.vercel.app"],
      ["title", title],
    ];

    if (image && image !== "") tags.push(["image", image]);
    if (summary && summary !== "") tags.push(["summary", summary]);

    for (let tagValue of tagsList) {
      tags.push(["t", tagValue]);
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

  useEffect(() => {
    if (publishCount >= toggledRelays.length) {
      setIsRelayStatusOpen(true);
    }
    // eslint-disable-next-line
  }, [publishCount]);

  const handleDismiss = () => {
    router.push("/");
  };

  return (
    <div className="sticky bottom-2 z-30">
      <label htmlFor={popupId} className="btn btn-primary">
        Publish
      </label>
      <Popup id={popupId} title={isRelayStatusOpen ? "Status" : "Publish"}>
        {isRelayStatusOpen ? (
          <>
            {publishSuccess.length > 0 && (
              <div className="py-4">
                <h4 className="text-lg font-semibold pb-4">
                  Successful published to:
                </h4>
                <ul className="flex flex-col gap-2">
                  {publishSuccess.map((relay: string) => {
                    return (
                      <li key={relay}>✅ {relay.replace("wss://", "")}</li>
                    );
                  })}
                </ul>
              </div>
            )}
            {publishFailed.length > 0 && (
              <div className="py-4">
                <h4 className="text-lg font-semibold pb-4">
                  Failed to publish:
                </h4>
                <ul className="flex flex-col gap-2">
                  {publishFailed.map((relay: string) => {
                    return (
                      <li key={relay}>❌ {relay.replace("wss://", "")}</li>
                    );
                  })}
                </ul>
              </div>
            )}

            <button className="btn w-full" onClick={handleDismiss}>
              Dismiss
            </button>
          </>
        ) : (
          <>
            <ul className="steps w-full mb-6">
              {STEPS.map((step, idx) => (
                <li
                  key={idx}
                  className={`step ${idx <= activeStepIdx ? "step-primary" : ""
                    }`}
                >
                  {Object.keys(step)[0]}
                </li>
              ))}
            </ul>
            {Object.values(STEPS[activeStepIdx])[0]}

            <div className="flex items-center justify-between gap-4 mt-6">
              {activeStepIdx > 0 ? (
                <button
                  className="btn"
                  onClick={() =>
                    setActiveStepIdx((currentState) => currentState - 1)
                  }
                >
                  Back
                </button>
              ) : null}
              {activeStepIdx === STEPS.length - 1 ? (
                <button
                  className={`btn btn-primary ml-auto ${isPublishing ? "loading" : ""
                    }`}
                  onClick={submitPublish}
                >
                  {isPublishing ? "Publishing" : "Publish"}
                </button>
              ) : (
                activeStepIdx < STEPS.length - 1 && (
                  <button
                    className="btn btn-primary ml-auto"
                    onClick={() =>
                      setActiveStepIdx((currentState) => currentState + 1)
                    }
                  >
                    Next
                  </button>
                )
              )}
            </div>
          </>
        )}
      </Popup>
    </div>
  );
};

export default Publish;
