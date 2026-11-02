type Source = {
  id: string | null;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
};

export type idNameSource = Pick<Source, 'id' | 'name' | 'category'>;

export type Article = {
  source: idNameSource;
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
};

export type SourcesType = {
  status: string;
  sources: Source[];
};

export type Everything = {
  status: "ok" | "error";
  totalResults: number;
  articles: Article[];
};