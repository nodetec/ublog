"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export const KeysContext = createContext<{
  keys: { privateKey: string; publicKey: string };
  setKeys: Dispatch<SetStateAction<{ privateKey: string; publicKey: string }>>;
}>({
  keys: { privateKey: "", publicKey: "" },
  setKeys: () => { },
});

interface KeysProviderProps {
  children: ReactNode;
}

const KeysProvider = ({ children }: KeysProviderProps) => {
  const [keys, setKeys] = useState({
    privateKey: "",
    publicKey: "",
  });

  return (
    <KeysContext.Provider value={{ keys, setKeys }}>
      {children}
    </KeysContext.Provider>
  );
};

export default KeysProvider;
