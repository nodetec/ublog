"use client";
import { useContext } from "react";
import { ToastContext } from "@/app/context/toast-context";

const typeClasses = {
  info: "alert-info",
  success: "alert-success",
  warning: "alert-warning",
  error: "alert-error",
};

const Toast = () => {
  const { toasts, clearToast } = useContext(ToastContext);
  if (toasts.length === 0) return null;

  return (
    <div className="toast toast-top toast-center z-50 w-max">
      {toasts.map((toast) => (
        <button
          key={toast.id}
          className={`alert ${typeClasses[toast.type]}`}
          onClick={() => clearToast(toast.id)}
        >
          <span>{toast.message}</span>
        </button>
      ))}
    </div>
  );
};

export default Toast;
