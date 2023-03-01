"use client";

import { createContext, useState } from "react";

export const UserContext = createContext<any>({});

const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
