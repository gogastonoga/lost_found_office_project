import { Pipe, PipeTransform } from '@angular/core';

import { Item } from '../item/item';

@Pipe({
    name: 'itemfilter',
    pure: false
})
export class ItemFilterPipe implements PipeTransform {
  transform(items: Item[], filter: Item): Item[] {
    if (!items || !filter) {
      return items;
    }
    return items.filter((item: Item) => this.applyFilter(item, filter));
  }
  applyFilter(item: Item, filter: Item): boolean {
    for (let field in filter) {
      if (filter[field]) {
        if (typeof filter[field] === 'string') {
          if (item[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
            return false;
          }
        } else if (typeof filter[field] === 'number') {
          if (item[field] !== filter[field]) {
            return false;
          }
        }
      }
    }
    return true;
  }
}