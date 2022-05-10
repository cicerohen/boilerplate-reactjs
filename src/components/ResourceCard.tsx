import clsx from "clsx";
import { ResourceThumbnail } from "./ResourceThumbnail";
import { RCProps, Resource } from "../types";

export type Props = RCProps<
  Partial<{
    resource: Resource;
  }>
>;

export const ResourceCard = ({ resource, children, className }: Props) => {
  return (
    <a href="#" title={resource?.name}>
      <section
        className={clsx("p-4 border border-gray-200  rounded-md", className)}
      >
        <header className="flex flex-col items-center">
          <ResourceThumbnail
            thumbnail={{
              path: "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
              extension: ".jpg",
            }}
            className="mb-4"
          />
          <h2 className="text-md  text-gray-700 uppercase">{resource?.name}</h2>
          <h3 className="text-sm text-gray-500">{resource?.description}</h3>
        </header>
        {(typeof children === "function" && children({ resource })) || children}
        <footer>
          <p className="text-xs text-center text-gray-500">
            {resource?.attributionText}
          </p>
        </footer>
      </section>
    </a>
  );
};
