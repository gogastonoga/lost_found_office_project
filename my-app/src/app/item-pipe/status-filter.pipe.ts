import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../item/item';
@Pipe({
    name: 'filterByStatus',
    pure: false
})

export class StatusFilter implements PipeTransform {
    transform(items: Item[], field: string): Item[] {
        if (!items) {
            return items;
        }
        return items.filter(item => item.status === field);
    }
}