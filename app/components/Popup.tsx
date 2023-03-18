import { X } from "@/app/icons";
import { FC, useEffect, useRef } from "react";

interface PopupProps {
  id: string;
  title: string;
  children: JSX.Element;
}

const Popup: FC<PopupProps> = ({ id, title, children }) => {
  const popupRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyup = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (popupRef.current?.checked) {
          popupRef.current?.click();
        }
      }
    };

    document.documentElement.addEventListener("keyup", handleKeyup);

    return () => {
      document.documentElement.removeEventListener("keyup", handleKeyup);
    };
  }, []);

  return (
    <>
      <input type="checkbox" ref={popupRef} id={id} className="modal-toggle" />
      <label htmlFor={id} className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <label
            htmlFor={id}
            className="btn btn-ghost btn-sm btn-circle absolute right-2 top-2"
          >
            <X size="14" />
          </label>
          <h3 className="text-xl font-bold mb-4">{title}</h3>
          {children}
        </label>
      </label>
    </>
  );
};

export default Popup;
