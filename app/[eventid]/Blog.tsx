// @ts-ignore
import { NoComment } from "react-nocomment";
import { Event } from "nostr-tools";
import { FC, useContext } from "react";
import { RelayContext } from "@/app/context/relay-context";
import { getTagValues } from "@/app/lib/utils";
import styles from "@/app/styles/nocomment.module.css";

interface BlogProps {
  event: Event;
  naddr: string;
}

const Blog: FC<BlogProps> = ({ event, naddr }) => {
  const { relayUrl } = useContext(RelayContext);
  function setupMarkdown(content: string) {
    var md = require("markdown-it")();
    var result = md.render(content || "");
    return result;
  }

  const tags = event?.tags;
  const content = event?.content;
  const title = getTagValues("title", tags!);
  const heroImage = getTagValues("image", tags!);
  const markdown = setupMarkdown(content!);

  return (
    <div>
      <div className="prose prose-lg mt-6 md:mt-12">
        {title ? <h1 className="text-4xl font-extrabold">{title}</h1> : null}
        {heroImage ? (
          <img
            className="rounded-box w-full h-auto object-contain"
            src={heroImage}
            alt={""}
          />
        ) : null}
        {markdown ? (
          <div
            className="mx-auto w-full h-full"
            dangerouslySetInnerHTML={{ __html: markdown }}
          />
        ) : null}
      </div>
      {event && naddr && naddr !== "" && (
        <div className={styles.nocomment}>
          <NoComment
            className="outline-none"
            relays={[relayUrl]}
            customBase={naddr}
          />
        </div>
      )}
    </div>
  );
};

export default Blog;
