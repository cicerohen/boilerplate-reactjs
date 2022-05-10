import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Footer } from "./Footer";

import { RCProps } from "../types";
import { useState } from "react";

type Props = RCProps;
export const View = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(true);

  const onClose = () => {
    setIsOpen(false);
  };

  const onOpen = () => {
    setIsOpen(true);
  };

  return (
    <div className="flex overflow-x-hidden">
      <Sidebar isOpen={isOpen} onClose={onClose} />
      <div className="flex flex-1 flex-col min-h-screen">
        <Header onOpenSidebar={onOpen} />
        <main className="flex flex-1 flex-col p-4">{children}</main>
        <Footer />
      </div>
    </div>
  );
};
