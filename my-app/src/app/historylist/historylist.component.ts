import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../history/history.service';
import { History } from '../history/history';

@Component({
    selector: 'history-list',
    templateUrl: './historylist.component.html',
    styleUrls: ['./historylist.component.css'],
    providers: [HistoryService]
})
export class HistoryListComponent implements OnInit {

    histories: History[];
    errorString: string;
    constructor(private _historyService: HistoryService) {
    }

    ngOnInit() {
        this.getHistory();
    }
    getHistory() {
        this._historyService.getHistory()
            .subscribe(
            histories => this.histories = histories,
            error => this.errorString = <any>error
            );
    }


}
