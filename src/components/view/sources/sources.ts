import type { ISources } from '../../../types/interfaces';
import type { idNameSource } from '../../../types/types';
import './sources.css';

class Sources implements ISources {
    public draw(data: idNameSource[]): void | undefined {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');
        const sources: HTMLTemplateElement | null = document.querySelector('.sources');
        
        if (!(sourceItemTemp && sources)) return;
        
        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;
            const sourceItemName: HTMLElement | null = sourceClone.querySelector('.source__item-name');
            const sourceItem: HTMLElement | null = sourceClone.querySelector('.source__item');
            
            if (!(sourceItemName && sourceItem)) return;
        
            sourceItemName.textContent = item.name;
            sourceItem.setAttribute('data-source-id', String(item.id));

            fragment.append(sourceClone);
        });

        sources.append(fragment);
    }
}

export default Sources;
