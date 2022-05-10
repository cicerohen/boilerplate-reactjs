import clsx from "clsx";

import { XIcon } from "./icons/XIcon";
import { Nav } from "./Nav";
import { RCProps } from "../types";

type Props = RCProps<
  Partial<{
    onClose: () => void;
    isOpen: boolean;
  }>
>;

export const Sidebar = ({ isOpen = false, onClose }: Props) => {
  return (
    <aside
      className={clsx(
        "bg-gray-800 fixed right-0  transition duration-200 ease-in-out w-64 top-0 z-10  bottom-0",
        (isOpen && "translate-x-0 lg:translate-x-full") || "translate-x-full"
      )}
    >
      <div className="flex  h-24 px-4 items-center justify-between">
        <button className="ml-auto" onClick={onClose}>
          <XIcon className="text-gray-500 h-10 w-10" />
        </button>
      </div>
      <div className="flex flex-col min-w-max">
        <Nav className="flex flex-col text-white" />
      </div>
    </aside>
  );
};
