import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

interface SkeletonProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Skeleton: FC<SkeletonProps> = ({ children, className, ...props }) => {
  return (
    <div
      className={`
      bg-base-content
      bg-opacity-20
      relative
      before:absolute before:inset-0
      before:-translate-x-full
      before:animate-[shimmer_2s_infinite]
      before:bg-gradient-to-r
      before:from-transparent before:via-base-100 before:to-transparent
      isolate
      overflow-hidden
      before:border-t before:border-base-100
      ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Skeleton;
