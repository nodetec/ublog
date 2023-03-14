"use client";

import { FC, ReactNode } from "react";
import BlogProvider from "./blog-context";
import FollowingProvider from "./following-context";
import KeysProvider from "./keys-context";
import RelayProvider from "./relay-context";
import UserProvider from "./user-context";
import FeedProvider from "./feed-context";
import ToastProvider from "./toast-context";
import ProfilesProvider from "./profiles-context";
import CachedEventProvider from "./cached-event-context";

const Providers: FC<{ children: ReactNode }> = ({ children }) => (
  <RelayProvider>
    <BlogProvider>
      <UserProvider>
        <FollowingProvider>
          <CachedEventProvider>
            <FeedProvider>
              <ProfilesProvider>
                <ToastProvider>
                  <KeysProvider>{children}</KeysProvider>
                </ToastProvider>
              </ProfilesProvider>
            </FeedProvider>
          </CachedEventProvider>
        </FollowingProvider>
      </UserProvider>
    </BlogProvider>
  </RelayProvider>
);

export default Providers;
