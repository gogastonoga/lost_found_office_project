import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item/item.service';
import { Item } from '../item/item';


@Component({
  selector: 'found-list',
  templateUrl: './foundlist.component.html',
  styleUrls: ['./foundlist.component.css'],
  providers: [ItemService]
})
export class FoundListComponent implements OnInit {
  FOUND_STATUS = 'FOUND';
  items: Item[];
  errorString: string;
  filter: Item = new Item();
  constructor(private _itemService: ItemService) {
  }

  ngOnInit() {
    this.getItems();
  }

  getItems(): void {
    this._itemService.getItems()
      .subscribe(
      items => this.items = items,
      error => this.errorString = <any>error
      );
  }


}
