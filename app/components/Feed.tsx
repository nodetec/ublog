import type { Event } from "nostr-tools";
import { FC } from "react";
import Article from "@/app/components/Article";
import ArticleSkeleton from "@/app/components/Skeleton/Article";

interface FeedProps {
  events: Event[];
  isEventsLoading: boolean;
}

const Feed: FC<FeedProps> = ({ events, isEventsLoading }) => {
  return (
    <div className="flex flex-col gap-4 py-4">
      {isEventsLoading
        ? Array.from({ length: 4 }).map((_, i) => <ArticleSkeleton key={i} />)
        : events.map((event: Event) => (
            <Article key={event.id} event={event} />
          ))}
    </div>
  );
};

export default Feed;
