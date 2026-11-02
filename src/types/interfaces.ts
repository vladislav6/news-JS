import type { Everything, SourcesType, Article, idNameSource } from "../types/types";

export interface IAppController {
  getNews: (e: PointerEvent, callback: (data: Everything) => void) => void;
  getSources: (callback: (data: SourcesType) => void) => void;
}
export interface IAppView {
  drawNews: (data: Everything) => void;
  drawSources: (data: SourcesType) => void;
}

export interface IApp {
    start: () => void;
}

export interface IApiKey {
  apiKey: string | undefined;
}

export interface IOptions {
  sources?: string;
}

export interface IEndpointOptions {
  endpoint: string;
  options?: IOptions | undefined;
}

export interface INews {
  draw: (data: Article[]) => void | undefined;
}

export interface ISources {
  draw: (data: idNameSource[]) => void | undefined;
}

export interface IAppView {
  drawNews: (data: Everything) => void;
  drawSources: (data: SourcesType) => void;
}