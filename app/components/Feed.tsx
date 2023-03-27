import type { Event } from "nostr-tools";
import { FC } from "react";
import Article from "@/app/components/Article";
import ArticleSkeleton from "@/app/components/Skeleton/Article";
import NoBlogs from "@/app/components/NoBlogs";

interface FeedProps {
  events: Event[];
  isEventsLoading: boolean;
}

const Feed: FC<FeedProps> = ({ events, isEventsLoading }) => {

  return (
    <div className="flex flex-col gap-4 py-4">
      {isEventsLoading ? (
        Array.from({ length: 3 }).map((_, i) => <ArticleSkeleton key={i} />)
      ) : events.length === 0 ? (
        <NoBlogs />
      ) : (
        events.map((event: Event) => <Article key={event.id} event={event} />)
      )}
    </div>
  );
};

export default Feed;
