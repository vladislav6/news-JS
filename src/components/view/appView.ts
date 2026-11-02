import type { IAppView, INews, ISources } from '../../types/interfaces';
import type { Everything, SourcesType } from '../../types/types';
import News from './news/news';
import Sources from './sources/sources';

export class AppView implements IAppView {
    private readonly news: INews;
    private readonly sources: ISources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data: Everything): void {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    public drawSources(data: SourcesType) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
