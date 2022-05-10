import { ResourceCard, Props as ResourceCardProps } from "./ResourceCard";
import { RCProps, Resource } from "../types";

type Item = {
  id: number;
  Render: React.FC;
};

export type Props = RCProps<
  Partial<{
    items: Item[];
  }>
>;

export const Grid = ({ items = [] }: Props) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {items.map((item) => {
        if (typeof item.Render === "function") {
          return <div key={item.id}>{item.Render({})}</div>;
        }
        return null;
      })}
    </div>
  );
};
