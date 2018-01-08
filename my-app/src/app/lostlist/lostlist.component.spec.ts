import { LostListComponent } from './lostlist.component';
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
import { Item } from '../item/item';
import { ItemService } from '../item/item.service';
import { Injectable, ReflectiveInjector } from '@angular/core';
import { fakeAsync, tick } from '@angular/core/testing';
import { BaseRequestOptions, ConnectionBackend, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';


describe('LostListComponent', () => {
    let de: DebugElement;
    let comp: LostListComponent;
    let fixture: ComponentFixture<LostListComponent>;
    let itemService: ItemService;
    let items: any[] = [];
    let spy;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RatingModule,
                FormsModule,
                HttpModule,
                RouterTestingModule
            ],
            declarations: [
                LostListComponent,
                ItemFilterPipe,
                ItemOrderPipe,
                StatusFilter
            ],
            providers: [],
        }).compileComponents();
    }));

    beforeEach(() => {
        this.injector = ReflectiveInjector.resolveAndCreate([
            ItemService,
            Http
        ]);
        fixture = TestBed.createComponent(LostListComponent);
        itemService = fixture.debugElement.injector.get(ItemService);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('h2'));
        spy = spyOn(itemService, 'getItems')
            .and.returnValue(Observable.of(items));

        const item1 = {
            name: 'Cap',
            category: 'OTHER',
            color: 'black',
            image: 'http://dsfdsdffds.pl/ddf.png',
            status: 'LOST',
            weight: '0.2'
        };
        const item2 = {
            name: 'Cap',
            category: 'OTHER',
            color: 'black',
            image: 'http://dsfdsdffds.pl/ddf.png',
            status: 'LOST',
            weight: '0.2'
        };

        items.push(item1);
        items.push(item2);

    });

    afterEach(() => {
        fixture.destroy();
        comp = null;
    });


    it('should create the LostListComponent component', async(() => {
        const fixture = TestBed.createComponent(LostListComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it('should have expected <h2> text', () => {
        fixture.detectChanges();
        const h2 = de.nativeElement;
        expect(h2.innerText).toContain('Lostlist');
    });

    it('should return false, because getItems() not yet called', () => {
        expect(spy.calls.any()).toBe(false, 'getItems not yet called');
    });

    it('should check call getItems()', () => {
        fixture.detectChanges();
        expect(spy.calls.any()).toBe(true, 'getItems called');
        expect(comp.items).toBeDefined();
    });

    it('should check variable LOST_STATUS', () => {
        fixture.detectChanges();
        expect(comp.LOST_STATUS).toBeDefined();
    });
}); 