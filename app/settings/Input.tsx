import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  labelAlt?: string;
}

const Input: FC<InputProps> = ({ label, labelAlt, ...props }) => (
  <div className="form-control w-full">
    <label className="label">
      <span className="label-text">{label}</span>
    </label>
    <input
      type="text"
      className="input input-bordered focus:input-primary w-full"
      {...props}
    />
    <label className="label">
      <span className="label-text-alt">{labelAlt}</span>
    </label>{" "}
  </div>
);

export default Input;
