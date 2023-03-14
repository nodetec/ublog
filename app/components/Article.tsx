import { FC } from "react";
import type { Event } from "nostr-tools";
import { getTagValues } from "@/app/lib/utils";

interface ArticleProps {
  event: Event;
}

const Article: FC<ArticleProps> = ({ event }) => {
  const { tags } = event;
  const title = getTagValues("title", tags);
  const image = getTagValues("image", tags);
  const summary = getTagValues("summary", tags);
  const SUMMARY_PREVIEW_LENGTH = 200;

  return (
    <article>
      <div className="card md:card-side bg-base-100 shadow-xl">
        <figure className="md:flex-[.35]">
          <img
            className="md:h-full md:w-full md:object-cover"
            src={image}
            alt=""
          />
        </figure>
        <div className="card-body md:flex-[.65]">
          <h2 className="card-title">{title}</h2>
          <p className="">
            {summary.length > SUMMARY_PREVIEW_LENGTH
              ? summary.slice(0, SUMMARY_PREVIEW_LENGTH) + "..."
              : summary}
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Read</button>
          </div>
        </div>
      </div>{" "}
    </article>
  );
};

export default Article;
