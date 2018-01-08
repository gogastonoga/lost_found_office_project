import { Component, OnInit, Input } from '@angular/core';
import { ItemService } from '../item/item.service';
import { Item } from '../item/item';
import { Message } from '../message/message';
import { MessageService } from '../message/message.service';
import { ValidateWishlistService } from './validate-wishlist.service';

@Component({
  selector: 'wish-list',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
  providers: [ItemService, ValidateWishlistService, MessageService]
})
export class WishListComponent implements OnInit {
  items: Item[];
  errorString: string;
  @Input() item: Item;
  @Input() message: Message;
  responseStatus: Object = [];
  returnMsg: String = '';
  errorMsg: String = '';
  selectedItem: Item;
  FOUND_STATUS = 'FOUND';

  constructor(private _itemService: ItemService, private _validateWishlistService: ValidateWishlistService,
    private _messageService: MessageService) {
  }

  ngOnInit() {
    this.item = new Item();
    this.message = new Message();
    this.getItems();
  }

  onSelect(item: Item): void {
    this.selectedItem = item;
  }

  getItems() {
    this._itemService.getItems()
      .subscribe(
      items => this.items = items,
      error => this.errorString = <any>error
      );
  }

  validateDate(dateStr: string): boolean {
    let date = new Date(dateStr);
    return this._validateWishlistService.validateDate(date);
  }

  closeWishlist(id: number): void {
    this.message.itemsId = id;
    this._messageService.closeWishlist(this.message).subscribe(
      data => { console.log(this.responseStatus = data); location.reload() },
      err => console.log(err),
      () => this.returnMsg = 'Item (' + id + ') return to first user from wishlist '
    );
  }

  addProfile(id: number): void {
    this.message.itemsId = id;
    this._messageService.addProfile(this.message).subscribe(
      data => { console.log(this.responseStatus = data); location.reload() },
      err => this.errorMsg = (JSON.parse(err._body).message),
      () => this.returnMsg = 'Profile is added to wishlist of item ' + id,
    );

  }

  cleanMessage() {
    this.returnMsg = '';
    this.errorMsg = '';
  }

}
