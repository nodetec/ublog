import type { Event } from "nostr-tools";
import { FC } from "react";
import Article from "./Article";

interface FeedProps {
  events: Event[];
  isEventsLoading: boolean;
}

const Feed: FC<FeedProps> = ({ events }) => {
  return (
    <div className="flex flex-col gap-4">
      {events.map((event: Event) => (
        <Article key={event.id} event={event} />
      ))}
    </div>
  );
};

export default Feed;
