import { MenuIcon } from "./icons/MenuIcon";
import { Nav } from "./Nav";
import { RCProps } from "../types";

import { routes } from "../router.settings";

type Props = RCProps<
  Partial<{
    onOpenSidebar: () => void;
  }>
>;

export const Header = ({ onOpenSidebar }: Props) => {
  return (
    <header className="bg-red-700 h-24 px-4 flex items-center">
      <h1 className="text-white uppercase font-bold">
        <a href={routes.HOME.path}>Marvel API</a>
      </h1>
      <button className="ml-auto" onClick={onOpenSidebar}>
        <MenuIcon className="text-white h-8 w-8 lg:hidden" />
      </button>
      <Nav className="hidden text-white ml-auto lg:flex" />
    </header>
  );
};
