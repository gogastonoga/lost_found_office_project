import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { History } from './history';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class HistoryService {
    private _getHistoryURL = 'http://localhost:8080/history';
    constructor(private http: Http) {

    }
    getHistory() {
        return this.http.get(this._getHistoryURL)
            .map(res => <History[]>res.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
