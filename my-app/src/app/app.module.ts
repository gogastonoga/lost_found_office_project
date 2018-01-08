import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { RatingModule } from '../../node_modules/ngx-rating/index.js';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WishListComponent } from './wishlist/wishlist.component';
import { LostListComponent } from './lostlist/lostlist.component';
import { FoundListComponent } from './foundlist/foundlist.component';
import { HistoryListComponent } from './historylist/historylist.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemFilterPipe } from './item-pipe/item-filter.pipe';
import { ItemOrderPipe } from './item-pipe/item-order.pipe';
import { AdminManagmentComponent } from './admin-managment/admin-managment.component';
import { StatusFilter } from './item-pipe/status-filter.pipe';
import { ItemService } from './item/item.service';
import { ProfileService } from './profile/profile.service';
import { MessageService } from './message/message.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    Ng2Bs3ModalModule,
    RatingModule
  ],
  providers: [
    ItemService,
    ProfileService,
    MessageService
  ],
  declarations: [
    AppComponent,
    ItemFilterPipe,
    ItemOrderPipe,
    WishListComponent,
    ItemDetailComponent,
    LostListComponent,
    FoundListComponent,
    AdminManagmentComponent,
    HistoryListComponent,
    StatusFilter],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
