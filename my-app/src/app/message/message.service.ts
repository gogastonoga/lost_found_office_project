import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { Message } from './message';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class MessageService {

    private _returnOwnerURL = 'http://localhost:8080/return';
    private _closeWishlistURL = 'http://localhost:8080/close_wishlist';
    private _addToWishlistURL = 'http://localhost:8080/add_user';
    constructor(private http: Http) {

    }
    returnToOwner(message: Message) {
        return this.http.post(this._returnOwnerURL, message, {
        })
            .map(res => res.json());
    }

    closeWishlist(message: Message) {
        return this.http.post(this._closeWishlistURL, message, {
        })
            .map(res => res.json());
    }

    addProfile(message: Message) {
        return this.http.post(this._addToWishlistURL, message, {
        })
            .map(res => res.json());
    }

}