import { FC, ReactNode } from "react";

interface GroupProps {
  title: string;
  children: ReactNode;
}

const Group: FC<GroupProps> = ({ title, children }) => (
  <div className="py-4">
    <div className="flex items-center gap-4">
      <div className="w-full md:w-6 h-[1px] bg-base-content bg-opacity-20" />
      <h2 className="font-bold text-xl">{title}</h2>
      <div className="w-full h-[1px] bg-base-content bg-opacity-20" />
    </div>
    <div className="py-2">{children}</div>
  </div>
);

export default Group;
