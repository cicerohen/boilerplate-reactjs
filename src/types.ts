export type RCProps<T = {}> = T & {
  children?: React.ReactNode;
  className?: string;
};

export type ResponseData = {
  offset: number;
  limit: number;
  total: number;
  count: number;
};

export type ResourceTbumbnail = {
  path: string;
  extension: string;
};

export type Resource = {
  id: number;
  name: string;
  description: string;
  attributionText: string;
  thumbnail: ResourceTbumbnail;
  resourceURI: string;
};
