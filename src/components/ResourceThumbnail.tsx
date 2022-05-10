import clsx from "clsx";
import { RCProps, Resource } from "../types";

type Props = RCProps<Pick<Resource, "thumbnail">>;

export const ResourceThumbnail = ({ thumbnail, className }: Props) => {
  const src = `${thumbnail.path}.${thumbnail.extension}`;
  return (
    <img
      src="http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg"
      className={clsx(
        "border-4 border-gray-200 rounded-full h-28 w-28",
        className
      )}
    />
  );
};
