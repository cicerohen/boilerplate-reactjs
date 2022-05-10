import { useEffect } from "react";
import { ResourceCard } from "../components/ResourceCard";
import { useFetchApi } from "../hooks/useFetchApi";

export const CharactersResourceCardContainer = () => {
  const { startFetch } = useFetchApi("characters");

  useEffect(() => {
    // startFetch();
  }, []);

  return <ResourceCard />;
};
