import {
  DetailedHTMLProps,
  Dispatch,
  FC,
  InputHTMLAttributes,
  SetStateAction,
} from "react";
import { X } from "@/app/icons";

interface SelectProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  items: string[];
  setItems: Dispatch<SetStateAction<string[]>>;
  label?: string;
}

const Select: FC<SelectProps> = ({
  value,
  setValue,
  items,
  setItems,
  label,
  ...props
}) => {
  const validateTagsInputKeyDown = (event: any) => {
    const TAG_KEYS = ["Enter", ",", " "];
    if (TAG_KEYS.some((key) => key === event.key)) {
      event.preventDefault();
      if (value) {
        if (items.length < 5) {
          setItems(Array.from(new Set([...items, value])));
          setValue("");
        }
      }
    }
  };

  return (
    <div className="form-control w-full">
      <label className="label">
        {label && <span className="label-text">{label}</span>}
      </label>
      <input
        type="text"
        className="input input-bordered focus-within:input-primary w-full"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={validateTagsInputKeyDown}
        {...props}
      />

      <div className="flex gap-2 flex-1 w-full flex-wrap my-4">
        {items?.map((item: string) => (
          <div
            key={item}
            className="flex items-center gap-2 rounded-btn bg-primary bg-opacity-20 p-2 text-sm border border-transparent hover:border-primary"
          >
            {item}
            <button
              className="btn btn-ghost btn-xs btn-circle"
              onClick={() =>
                setItems!(items.filter((listItem: string) => listItem !== item))
              }
            >
              <X size="14" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Select;
