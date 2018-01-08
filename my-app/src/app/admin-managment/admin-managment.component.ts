import { Component, OnInit, Input } from '@angular/core';
import { ProfileService } from '../profile/profile.service';
import { Profile } from '../profile/profile';
import { ItemService } from '../item/item.service';
import { Item } from '../item/item';
import { Message } from '../message/message';
import { MessageService } from '../message/message.service';


@Component({
  selector: 'found-list',
  templateUrl: './admin-managment.component.html',
  styleUrls: ['./admin-managment.component.css'],
  providers: [ItemService, ProfileService, MessageService]
})
export class AdminManagmentComponent implements OnInit {

  errorString: string;
  @Input() item: Item;
  @Input() profile: Profile;
  @Input() message: Message;
  responseStatus: Object = [];
  showDialog = false;
  returnMsg: String;
  errorMsg: String;

  categories = ['OTHER', 'CLOTHING', 'JEWELRY', 'HOME', 'ELECTRONICS', 'SPORTS'];
  status = ['FOUND', 'LOST'];

  constructor(private _itemService: ItemService, private _profileService: ProfileService, private _messageService: MessageService) {
  }

  ngOnInit() {
    this.item = new Item();
    this.profile = new Profile();
    this.message = new Message();
  }

  createItem() {
    this._itemService.create(this.item).subscribe(
      data => console.log(this.responseStatus = data),
      err => console.log(err),
      () => this.returnMsg = 'Item is added!'
    );
  }

  createProfile() {
    this._profileService.create(this.profile).subscribe(
      data => console.log(this.responseStatus = data),
      err => console.log(err),
      () => this.returnMsg = 'Profile is added!'
    );
  }

  returnToOwner() {
    this._messageService.returnToOwner(this.message).subscribe(
      data => console.log(this.responseStatus = data),
      err => this.errorMsg = (JSON.parse(err._body).message),
      () => this.returnMsg = 'Item returned to owner!'
    );
  }

  cleanMessage() {
    this.returnMsg = '';
    this.errorMsg = '';
  }

}
