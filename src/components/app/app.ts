import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import type { IApp, IAppController, IAppView } from '../../types/interfaces';
import type { Sources, Everything } from '../../types/types';

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
            .addEventListener('click', (e: PointerEvent) => this.controller.getNews(e, (data: Everything) => this.view.drawNews(data)));
        this.controller.getSources((data: Sources) => this.view.drawSources(data));
    }
}

export default App;
