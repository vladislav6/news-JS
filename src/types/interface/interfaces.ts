export interface IAppController {
  getNews: (e: PointerEvent, callback: object) => void;
  getSources: (callback: object) => void;
}
export interface IAppView {
  drawNews: (data: object) => void;
  drawSources: (data: object) => void;
}

export interface IApp {
    start: () => void;
}