"use client";

import { FC, ReactNode } from "react";
import KeysProvider from "./keys-context";

const Providers: FC<{ children: ReactNode }> = ({ children }) => (
  <KeysProvider>{children}</KeysProvider>
);

export default Providers;
