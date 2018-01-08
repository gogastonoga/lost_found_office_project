import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Item }        from '../item/item';
import { ItemService } from '../item/item.service';

@Component({
  selector: 'item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css'],
  providers: [ItemService]
})

export class ItemDetailComponent implements OnInit {
  item: Item;
  constructor(
    private _itemService: ItemService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this._itemService.getItem(+params.get('id')))
      .subscribe(item => this.item = item);
  }

  goBack(): void {
    this.location.back();
  }
}
