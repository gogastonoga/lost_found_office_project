import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Item } from './item';
import { Message } from '../message/message';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class ItemService {
    private _itemsURL = 'http://localhost:8080/items';
    private _itemURL = 'http://localhost:8080/detail';
    private _createitemURL = 'http://localhost:8080/create_item';
    private _returnOwnerURL = 'http://localhost:8080/return';
    constructor(private http: Http) {

    }
    getItems() {
        return this.http.get(this._itemsURL)
            .map(res => <Item[]>res.json())
            .catch(this.handleError);
    }

    getItem(id: number) {
        const url = `${this._itemURL}/${id}`;
        return this.http.get(url)
            .map(res => <Item[]>res.json())
            .catch(this.handleError);
    }

    create(item: Item) {
        return this.http.post(this._createitemURL, item, {
        })
            .map(res => res.json());
    }

    returnToOwner(message: Message) {
        return this.http.post(this._returnOwnerURL, message, {
        })
            .map(res => res.json());
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}