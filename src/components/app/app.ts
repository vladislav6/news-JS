import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import type { IApp, IAppController, IAppView } from '../../types/interface/interfaces';

class App implements IApp {
    controller: IAppController;
    view: IAppView;
    
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(): void {
        const sourcesDiv = document.querySelector('.sources') as HTMLDivElement;
        if (!sourcesDiv) return;
        sourcesDiv
            .addEventListener('click', (e: PointerEvent) => this.controller.getNews(e, (data: object) => this.view.drawNews(data)));
        this.controller.getSources((data: object) => this.view.drawSources(data));
    }
}

export default App;
