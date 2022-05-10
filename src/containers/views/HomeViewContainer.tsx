import { View } from "../../components/View";
import { Grid } from "../../components/Grid";
import { ResourceCard } from "../../components/ResourceCard";

export const HomeViewContainer = () => {
  const items = [
    {
      id: 1,
      Render: () => (
        <ResourceCard
          resource={{
            id: 1,
            name: "Characters",
            description: "",
            resourceURI: "",
            attributionText: "",
            thumbnail: {
              path: "",
              extension: "",
            },
          }}
        />
      ),
    },
    {
      id: 2,
      Render: () => (
        <ResourceCard
          resource={{
            id: 2,
            name: "Comics",
            description: "",
            resourceURI: "",
            attributionText: "",
            thumbnail: {
              path: "",
              extension: "",
            },
          }}
        />
      ),
    },
    {
      id: 3,
      Render: () => (
        <ResourceCard
          resource={{
            id: 3,
            name: "Events",
            description: "",
            resourceURI: "",
            attributionText: "",
            thumbnail: {
              path: "",
              extension: "",
            },
          }}
        />
      ),
    },
    {
      id: 4,
      Render: () => (
        <ResourceCard
          resource={{
            id: 4,
            name: "Series",
            description: "",
            resourceURI: "",
            attributionText: "",
            thumbnail: {
              path: "",
              extension: "",
            },
          }}
        />
      ),
    },
    {
      id: 5,
      Render: () => (
        <ResourceCard
          resource={{
            id: 5,
            name: "Stories",
            description: "",
            resourceURI: "",
            attributionText: "",
            thumbnail: {
              path: "",
              extension: "",
            },
          }}
        />
      ),
    },
  ];

  return (
    <View>
      <Grid items={items} />
    </View>
  );
};
