import { FC } from "react";
import { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: string | number;
}

export default IconProps;
export type IconType = FC<IconProps>;

export { default as X } from "./X";
