"use client";

import { FC, ReactNode } from "react";
import FollowingProvider from "./following-context";
import KeysProvider from "./keys-context";
import RelayProvider from "./relay-context";
import UserProvider from "./user-context";

const Providers: FC<{ children: ReactNode }> = ({ children }) => (
  <KeysProvider>
    <FollowingProvider>
      <UserProvider>
        <RelayProvider>{children}</RelayProvider>
      </UserProvider>
    </FollowingProvider>
  </KeysProvider>
);

export default Providers;
