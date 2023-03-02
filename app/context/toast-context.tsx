"use client";

import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

export type ToastType = {
  message: string;
  type: "info" | "success" | "warning" | "error";
  timeout?: number;
};

export type ToastTypeID = ToastType & {
  id: number;
};

export const ToastContext = createContext<{
  toasts: ToastTypeID[];
  setToasts: Dispatch<SetStateAction<ToastTypeID[]>>;
  clearToast: (id: number) => void;
  createToast: (toast: ToastType) => void;
}>({
  toasts: [],
  setToasts: () => {},
  createToast: () => {},
  clearToast: () => {},
});

const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<ToastTypeID[]>([]);

  const clearToast = (id: number) => {
    setToasts((current) => current.filter((toast) => toast.id !== id));
  };

  const createToast = ({ message, type, timeout = 3 }: ToastType) => {
    const id = Date.now();
    setToasts((current) => [...current, { id, message, type, timeout }]);

    setTimeout(() => {
      clearToast(id);
    }, timeout * 1000);
  };

  return (
    <ToastContext.Provider
      value={{ toasts, setToasts, createToast, clearToast }}
    >
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
