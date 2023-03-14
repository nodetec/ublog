"use client";

import { createContext, useState } from "react";

export const FollowingContext = createContext<any>({});

const FollowingProvider = ({ children }: any) => {
  const [following, setFollowing] = useState({});
  const [followingReload, setFollowingReload] = useState(false);

  return (
    <FollowingContext.Provider
      value={{ following, setFollowing, followingReload, setFollowingReload }}
    >
      {children}
    </FollowingContext.Provider>
  );
};

export default FollowingProvider;
