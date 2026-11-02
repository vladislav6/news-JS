import type { ISources } from '../../../types/interfaces';
import type { idNameSource } from '../../../types/types';
import './sources.css';
const setCategory: Set<string> = new Set();

class Sources implements ISources {
    public draw(data: idNameSource[]): void {
        data.forEach((item: idNameSource) => {
        setCategory.add(item.category);
        });
        this.drawCat(data, setCategory);
    }

    private drawCat(data: idNameSource[], category: Set<string>): void | undefined {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceCatItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceCatItemTemp');
        const divElCat: HTMLDivElement | null = document.querySelector('.cats');

        if (!(sourceCatItemTemp && divElCat)) return;
        
        category.forEach((val: string) => {
            const sourceCatClone = sourceCatItemTemp.content.cloneNode(true) as HTMLElement;
            const catItemName: HTMLDivElement | null = sourceCatClone.querySelector('.catList');
            
            if (!(catItemName)) return;

            catItemName.textContent = val;
            fragment.append(sourceCatClone); 
            divElCat.append(fragment);
        });
        
        let catName = 'general';
        divElCat.addEventListener('click', (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const catItem = target.closest<HTMLDivElement>('.catList');
            
            if (!catItem) return;
            
            catName = catItem.textContent;
            this.drawItem(data, catName);
        });
        
        this.drawItem(data, catName);
    }

    private drawItem(data: idNameSource[], cat: string | undefined): void | undefined {
        const fragmentItem: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement | null = document.querySelector<HTMLTemplateElement>('#sourceItemTemp');
        const divElSource: Element | null = document.querySelector('.sources');

        if (!(cat && sourceItemTemp && divElSource)) return;

        if (divElSource.hasChildNodes()) {
            while (divElSource.firstChild) {
                divElSource.removeChild(divElSource.firstChild);
            }
        }

        data.forEach((item: idNameSource) => {
            if (cat !== item.category) return;
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;
            const spanElItemName: HTMLSpanElement | null = sourceClone.querySelector('.source__item-name');
            const divElItem: HTMLDivElement | null = sourceClone.querySelector('.source__item');

            if (!(spanElItemName && divElItem)) return;

            spanElItemName.textContent = item.name;
            divElItem.setAttribute('data-source-id', `${item.id}`);

            fragmentItem.append(sourceClone); 
            divElSource.append(fragmentItem);
        });
    }
}

export default Sources;
