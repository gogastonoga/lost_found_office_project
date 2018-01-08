import { ItemFilterPipe } from './item-filter.pipe';
import { Item } from '../item/item';

describe('ItemFilterPipe Test', () => {
    let pipe: ItemFilterPipe;
    let item1: Item;
    let item2: Item;
    let item3: Item;
    let items: Item[] = [];

    beforeEach(() => {
        pipe = new ItemFilterPipe();
        item1 = { name: 'Umbrella', status: 'FOUND', category: 'OTHER', color: 'black', dateOfAdded: new Date('August 10, 2017'), image: 'dfdsd', weight: '0.3' };
        item2 = { name: 'Cap', status: 'FOUND', category: 'OTHER', color: 'white', dateOfAdded: new Date('August 23, 2017'), image: 'dfdsd', weight: '0.3' };
        item3 = { name: 'Watch', status: 'FOUND', category: 'ELECTRONICS', color: 'blue', dateOfAdded: new Date('August 27, 2017'), image: 'dfdsd', weight: '0.3' };
        items.push(item1);
        items.push(item2);
        items.push(item3);
    });

    afterEach(() => {
        items.length = 0;
    });

    it('filter item 1 from items', () => {
        let value: Item[] = items;
        let args: Item = item1;
        let result: Item[] = pipe.transform(value, args);
        expect(result.length).toEqual(1);
        expect(result).toContain(item1);
    });

    it('filter item 2 from items', () => {
        let value: Item[] = items;
        let args: Item = item2;
        let result: Item[] = pipe.transform(value, args);
        expect(result.length).toEqual(1);
        expect(result).toContain(item2);
    });

    it('items filter by category', () => {
        let value: Item[] = items;
        let args: Item = { name: '', status: '', category: 'OTHER', color: '', dateOfAdded: new Date(''), image: '', weight: '' };
        let result: Item[] = pipe.transform(value, args);
        expect(result.length).toEqual(2);
        expect(result).toContain(item1);
        expect(result).toContain(item2);
    });

});