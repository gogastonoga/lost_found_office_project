import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WishListComponent } from './wishlist/wishlist.component';
import { LostListComponent } from './lostlist/lostlist.component';
import { FoundListComponent } from './foundlist/foundlist.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { HistoryListComponent } from './historylist/historylist.component';
import { AdminManagmentComponent } from './admin-managment/admin-managment.component';

const routes: Routes = [
  { path: '', redirectTo: '/wishlist', pathMatch: 'full' },
  { path: 'wishlist', component: WishListComponent },
  { path: 'lostlist', component: LostListComponent },
  { path: 'foundlist', component: FoundListComponent },
  { path: 'detail/:id', component: ItemDetailComponent },
  { path: 'admin-managment', component: AdminManagmentComponent },
  { path: 'historylist', component: HistoryListComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
