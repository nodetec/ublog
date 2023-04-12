import { FC, useContext } from "react";
import { Event, nip19 } from "nostr-tools";
import { getTagValues } from "@/app/lib/utils";
import { CachedEventContext } from "@/app/context/cached-event-context";
import { AddressPointer } from "nostr-tools/nip19";
import { RelayContext } from "@/app/context/relay-context";
import { useRouter } from "next/navigation";

interface ArticleProps {
  event: Event;
}

const Article: FC<ArticleProps> = ({ event }) => {
  const { tags } = event;
  const title = getTagValues("title", tags);
  const image = getTagValues("image", tags);
  const summary = getTagValues("summary", tags);
  let { content } = event;

  function getTValues(tags: string[][]) {
    return tags
      .filter((subTags) => subTags[0] === "t")
      .map((subTags) => subTags[1])
      .filter((t) => t.length <= 20);
  }

  const tValues = getTValues(event.tags);
  const SUMMARY_PREVIEW_LENGTH = 200;

  const { setCachedEvent } = useContext(CachedEventContext);
  const { relayUrl } = useContext(RelayContext);
  const router = useRouter();

  const routeCachedEvent = () => {
    setCachedEvent(event);

    const identifier = getTagValues("d", tags);

    // TODO: handle relays
    const addressPointer: AddressPointer = {
      identifier: identifier,
      pubkey: event.pubkey,
      kind: 30023,
      relays: [relayUrl],
    };

    router.push("/" + nip19.naddrEncode(addressPointer));
  };

  return (
    <article
      onClick={routeCachedEvent}
      className="card sm:card-side bg-base-100 hover:shadow-lg border border-base-content border-opacity-20 hover:border-primary cursor-pointer"
    >
      {image ? (
        <figure className="sm:flex-[.35]">
          <img
            className="sm:h-full sm:w-full sm:object-cover"
            src={image}
            alt=""
          />
        </figure>
      ) : null}
      <div className="card-body sm:flex-[.65] gap-4">
        {title ? <h2 className="card-title">{title}</h2> : null}
        {summary ? (
          <p>
            {summary
              ? summary.length > SUMMARY_PREVIEW_LENGTH
                ? summary.slice(0, SUMMARY_PREVIEW_LENGTH) + "..."
                : summary
              : content.length > SUMMARY_PREVIEW_LENGTH
                ? content.slice(0, SUMMARY_PREVIEW_LENGTH) + "..."
                : content}
          </p>
        ) : null}
        <ul className="flex items-center gap-2 flex-wrap">
          {tValues.map((tag, idx) => (
            <li key={idx} className="badge">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default Article;
