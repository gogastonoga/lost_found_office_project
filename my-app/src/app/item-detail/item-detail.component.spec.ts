import { ItemDetailComponent } from './item-detail.component';
import { RatingModule } from 'ngx-rating';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { Item } from '../item/item';
import { ItemService } from '../item/item.service';
import { Injectable, ReflectiveInjector } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('ItemDetailComponent', () => {

    let de: DebugElement;
    let comp: ItemDetailComponent;
    let fixture: ComponentFixture<ItemDetailComponent>;
    let itemService: ItemService;
    let spy;

    const item1 = {
        name: 'Cap',
        category: 'OTHER',
        color: 'black',
        image: 'http://dsfdsdffds.pl/ddf.png',
        status: 'LOST',
        weight: '0.2'
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RatingModule,
                FormsModule,
                HttpModule,
                RouterTestingModule
            ],
            declarations: [
                ItemDetailComponent,
            ],
            providers: [],
        }).compileComponents();
    }));

    beforeEach(() => {
        this.injector = ReflectiveInjector.resolveAndCreate([
            ItemService
        ]);
        fixture = TestBed.createComponent(ItemDetailComponent);
        itemService = fixture.debugElement.injector.get(ItemService);
        spy = spyOn(itemService, 'getItems');

        fixture = TestBed.createComponent(ItemDetailComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('h2'));
    });

    afterEach(() => {
        fixture.destroy();
        comp = null;
    });

    it('should create the ItemDetailComponent component', async(() => {
        const fixture = TestBed.createComponent(ItemDetailComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it('should have expected <h2> text', () => {
        fixture.detectChanges();
        const h2 = de.nativeElement;
        expect(h2.innerText).toContain('Detail of item:');
    });

    it('should should return false, because getItem() not yet called', () => {
        expect(spy.calls.any()).toBe(false, 'getItem not yet called');
    });

}); 