import { User } from "@/app/icons";
import { DetailedHTMLProps, FC, ImgHTMLAttributes } from "react";

interface AvatarProps
  extends DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  src?: string;
}

const Avatar: FC<AvatarProps> = ({ src, className = "" }) =>
  src ? (
    <img className={`rounded-full ${className}`} src={src} alt="" />
  ) : (
    <User className={`${className}`} />
  );

export default Avatar;
