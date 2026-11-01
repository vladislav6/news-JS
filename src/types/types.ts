type Source = {
  id: string | null;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
};

export type Article = {
  source: Pick<Source, 'id' | 'name'>;
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
};

export type Sources = {
  status: string;
  sources: Source[];
};

export type Everything = {
  status: "ok" | "error";
  totalResults: number;
  articles: Article[];
};