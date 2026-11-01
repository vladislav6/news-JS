import AppLoader from './appLoader';
import { endpointAPI } from '../../types/enums';

class AppController extends AppLoader {
    getSources(callback: () => void): void {
        super.getResp(
            {
                endpoint: endpointAPI.SOURCE,
            },
            callback
        );
    }

    getNews(e: PointerEvent, callback: () => void): void | undefined {
        let target: EventTarget | null = e.target;
        const newsContainer = e.currentTarget;

        while (target !== newsContainer) {
            if (
                !(target instanceof Element) ||
                !(newsContainer instanceof Element)
            ) return;
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (
                    newsContainer.getAttribute('data-source') !== sourceId &&
                    sourceId
                ) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: endpointAPI.EVERYTHING,
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode;
        }
    }
}

export default AppController;
