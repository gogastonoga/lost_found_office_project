import { ItemOrderPipe } from './item-order.pipe';
import { Item } from '../item/item';

describe('ItemOrderPipe Test', () => {
    let pipe: ItemOrderPipe;
    let item1: Item;
    let item2: Item;
    let item3: Item;
    let items: Item[] = [];

    beforeEach(() => {
        pipe = new ItemOrderPipe();
        item1 = { name: 'Umbrella', status: 'FOUND', category: 'OTHER', color: 'black', dateOfAdded: new Date('August 10, 2017'), image: 'dfdsd', weight: '0.3' };
        item2 = { name: 'Cap', status: 'FOUND', category: 'OTHER', color: 'white', dateOfAdded: new Date('August 23, 2017'), image: 'dfdsd', weight: '0.3' };
        item3 = { name: 'Watch', status: 'FOUND', category: 'OTHER', color: 'blue', dateOfAdded: new Date('August 27, 2017'), image: 'dfdsd', weight: '0.3' };
        items.push(item1);
        items.push(item2);
        items.push(item3);
    });

    afterEach(() => {
        items.length = 0;
    })

    it('items order by name', () => {
        let value: Item[] = items;
        let expectArray = pipe.transform(value, 'name');
        expect(expectArray[0]).toEqual(item2);
        expect(expectArray[1]).toEqual(item1);
        expect(expectArray[2]).toEqual(item3);
    });

    it('items order by date', () => {
        let value: Item[] = items;
        let expectArrayy = pipe.transform(value, 'date');
        expect(expectArrayy[0]).toEqual(item3);
        expect(expectArrayy[1]).toEqual(item2);
        expect(expectArrayy[2]).toEqual(item1);
    });

    it('items order by color', () => {
        let value: Item[] = items;
        let expectArrayy = pipe.transform(value, 'color');
        expect(expectArrayy[0]).toEqual(item1);
        expect(expectArrayy[1]).toEqual(item3);
        expect(expectArrayy[2]).toEqual(item2);
    });

});