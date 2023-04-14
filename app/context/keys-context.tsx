"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

const defualtKeys = {
  privateKey: "",
  publicKey: "",
};

export const KeysContext = createContext<{
  keys: { privateKey: string; publicKey: string };
  setKeys: Dispatch<SetStateAction<{ privateKey: string; publicKey: string }>>;
}>({
  keys: { privateKey: "", publicKey: "" },
  setKeys: () => defualtKeys,
});

interface KeysProviderProps {
  children: ReactNode;
}

const KeysProvider = ({ children }: KeysProviderProps) => {
  const [keys, setKeys] = useState(defualtKeys);

  return (
    <KeysContext.Provider value={{ keys, setKeys }}>
      {children}
    </KeysContext.Provider>
  );
};

export default KeysProvider;
