import { Component, OnInit, Injectable } from '@angular/core';
import {ItemService} from '../item/item.service';
import {Item} from '../item/item';

@Component({
  selector: 'lost-list',
  templateUrl: './lostlist.component.html',
  styleUrls: ['./lostlist.component.css'],
  providers: [ItemService]
})
@Injectable()
export class LostListComponent implements OnInit {
    LOST_STATUS = 'LOST';
    items: Item[];
    errorString: string;
    filter: Item = new Item();
    constructor(private _itemService: ItemService){
    }

    ngOnInit(){
    this.getItems();
    }
    getItems(){
      this._itemService.getItems()
                      .subscribe(
                      items => this.items = items,
                      error => this.errorString = <any>error
                      );
                    }

}

