import clsx from "clsx";

import { RCProps } from "../types";

import { routes } from "../router.settings";

type Props = RCProps<
  Partial<{
    itemClassName: string;
  }>
>;

export const Nav = ({ className, itemClassName }: Props) => {
  return (
    <nav className={clsx("list-none", className)}>
      <a
        href={routes.CHARACTERS.path}
        className={clsx(
          "text-sm  uppercase rounded-md inline-flex items-center py-4 px-8",
          itemClassName
        )}
      >
        Characters
      </a>
      <a
        href={routes.COMICS.path}
        className={clsx(
          "text-sm  uppercase rounded-md inline-flex items-center py-4 px-8",
          itemClassName
        )}
      >
        Comics
      </a>
      <a
        href={routes.EVENTS.path}
        className={clsx(
          "text-sm  uppercase rounded-md inline-flex items-center py-4 px-8",
          itemClassName
        )}
      >
        Events
      </a>
      <a
        href={routes.SERIES.path}
        className={clsx(
          "text-sm  uppercase rounded-md inline-flex items-center py-4 px-8",
          itemClassName
        )}
      >
        Series
      </a>
      <a
        href={routes.STORIES.path}
        className={clsx(
          "text-sm  uppercase rounded-md inline-flex items-center py-4 px-8",
          itemClassName
        )}
      >
        Stories
      </a>
    </nav>
  );
};
