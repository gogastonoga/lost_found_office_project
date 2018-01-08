import { HistoryListComponent } from './historylist.component';
import { RatingModule } from 'ngx-rating';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ItemFilterPipe } from '../item-pipe/item-filter.pipe';
import { ItemOrderPipe } from '../item-pipe/item-order.pipe';
import { StatusFilter } from '../item-pipe/status-filter.pipe';
import { RouterTestingModule } from '@angular/router/testing';
import { Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { History } from '../history/history';
import { HistoryService } from '../history/history.service';
import { Injectable, ReflectiveInjector } from '@angular/core';
import { fakeAsync, tick } from '@angular/core/testing';
import { BaseRequestOptions, ConnectionBackend, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';


describe('HistoryListComponent', () => {
    let de: DebugElement;
    let comp: HistoryListComponent;
    let fixture: ComponentFixture<HistoryListComponent>;
    let historyService: HistoryService;
    let histories: any[] = [];

    let history1 = {
        id: 1,
        itemId: { id: 3 },
        profileId: { id: 5 },
    }
    let history2 = {
        id: 1,
        itemId: { id: 3 },
        profileId: { id: 5 },
    }
    histories.push(history1);
    histories.push(history2);

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RatingModule,
                FormsModule,
                HttpModule,
                RouterTestingModule
            ],
            declarations: [
                HistoryListComponent
            ],
            providers: [],
        }).compileComponents();
    }));

    beforeEach(() => {
        this.injector = ReflectiveInjector.resolveAndCreate([
            HistoryService,
            Http
        ]);
        fixture = TestBed.createComponent(HistoryListComponent);
        historyService = fixture.debugElement.injector.get(HistoryService);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('h2'));

    });

    afterEach(() => {
        fixture.destroy();
        comp = null;
    });

    it('should create the HistoryListComponent component', async(() => {
        const fixture = TestBed.createComponent(HistoryListComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it('should have expected <h2> text', () => {
        fixture.detectChanges();
        const h2 = de.nativeElement;
        expect(h2.innerText).toContain('History of received');
    });

    it('should return false, because getItems() dont call', () => {
        let spy = spyOn(historyService, 'getHistory')
            .and.returnValue(Observable.of(histories));
        expect(spy.calls.any()).toBe(false, 'getItems not yet called');
    });

    it('should check call getHistory()', () => {
        let spy = spyOn(historyService, 'getHistory')
            .and.returnValue(Observable.of(histories));
        fixture.detectChanges();
        expect(spy.calls.any()).toBe(true, 'getHistory called');
        expect(comp.histories).toBeDefined();
    });

}); 