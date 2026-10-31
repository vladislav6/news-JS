import type { Everything, Sources } from "../types/types";

export interface IAppController {
  getNews: (e: PointerEvent, callback: object) => void;
  getSources: (callback: object) => void;
}
export interface IAppView {
  drawNews: (data: Everything) => void;
  drawSources: (data: Sources) => void;
}

export interface IApp {
    start: () => void;
}