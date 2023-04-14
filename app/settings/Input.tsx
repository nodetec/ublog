import { twMerge } from "tailwind-merge";
import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  labelAlt?: string;
  type?: string;
}

const Input: FC<InputProps> = ({
  label,
  labelAlt,
  type = "text",
  className,
  ...props
}) => (
  <div className="form-control w-full">
    <label className="label">
      <span className="label-text">{label}</span>
    </label>
    <input
      type={type}
      className={twMerge(
        `input input-bordered focus:input-primary w-full`,
        className
      )}
      {...props}
    />
    <label className="label">
      <span className="label-text-alt">{labelAlt}</span>
    </label>
  </div>
);

export default Input;
