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

const Providers: FC<{ children: ReactNode }> = ({ children }) => (
  <RelayProvider>
    <BlogProvider>
      <UserProvider>
        <FollowingProvider>
          <FeedProvider>
            <ProfilesProvider>
              <ToastProvider>
                <KeysProvider>{children}</KeysProvider>
              </ToastProvider>
            </ProfilesProvider>
          </FeedProvider>
        </FollowingProvider>
      </UserProvider>
    </BlogProvider>
  </RelayProvider>
);

export default Providers;
