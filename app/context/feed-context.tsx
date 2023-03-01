"use client";

import { createContext, useState } from "react";

export const FeedContext = createContext<any>({});

export default function FeedProvider({ children }: any) {
  const [feed, setFeed] = useState({});
  const [latestFeedDone, setLatestFeedDone] = useState(false);

  return (
    <FeedContext.Provider
      value={{ feed, setFeed, latestFeedDone, setLatestFeedDone }}
    >
      {children}
    </FeedContext.Provider>
  );
}
