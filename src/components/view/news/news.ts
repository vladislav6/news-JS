import './news.css';
import type { INews } from '../../../types/interfaces';
import type { Article } from '../../../types/types';

class News implements INews {
    draw(data: Article[]): void | undefined {
        const news: Article[] = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment: DocumentFragment = document.createDocumentFragment();
        const newsItemTemp: HTMLTemplateElement | null = document.querySelector('#newsItemTemp');

        if (!newsItemTemp) return;
        
        const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement;
        const newsElement: HTMLElement | null = document.querySelector('.news');
        const newsItem: HTMLElement | null = newsClone.querySelector('.news__item');
        const newsMetaPhoto: HTMLElement | null = newsClone.querySelector('.news__meta-photo');
        const newsMetaAuthor: HTMLElement | null = newsClone.querySelector('.news__meta-author');
        const newsMetadate: HTMLElement | null = newsClone.querySelector('.news__meta-date');
        const newsDescTitle: HTMLElement | null = newsClone.querySelector('.news__description-title');
        const newsDescSource: HTMLElement | null = newsClone.querySelector('.news__description-source');
        const newsDescContent: HTMLElement | null = newsClone.querySelector('.news__description-content');
        const newsReadMore: HTMLElement | null = newsClone.querySelector('.news__read-more a');
        
        if (!(
            newsItem &&
            newsMetaPhoto &&
            newsMetaAuthor &&
            newsMetadate &&
            newsDescTitle &&
            newsDescSource &&
            newsDescContent &&
            newsReadMore &&
            newsElement
        )) return;

        news.forEach((item, idx) => {
            if (idx % 2) newsItem.classList.add('alt');

            newsMetaPhoto.style.backgroundImage = `url(${
                item.urlToImage || 'img/news_placeholder.jpg'
            })`;
            newsMetaAuthor.textContent = item.author || item.source.name;
            newsMetadate.textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            newsDescTitle.textContent = item.title;
            newsDescSource.textContent = item.source.name;
            newsDescContent.textContent = item.description;
            newsReadMore.setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        newsElement.innerHTML = '';
        newsElement.appendChild(fragment);
    }
}

export default News;
