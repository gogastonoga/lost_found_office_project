import { Injectable, ReflectiveInjector } from '@angular/core';
import { async, fakeAsync, tick, inject } from '@angular/core/testing';
import { BaseRequestOptions, ConnectionBackend, Http, RequestOptions } from '@angular/http';
import { Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { ItemService } from './item.service';
import { Item } from './item';
import { Message } from '../message/message';

const item1 = {
  name: 'Cap',
  category: 'OTHER',
  color: 'black',
  date: '19-09-2017',
  image: 'http://dsfdsdffds.pl/ddf.png',
  status: 'LOST',
  weight: '0.2'
};
const item2 = {
  name: 'Blouse',
  category: 'OTHER',
  color: 'black',
  date: '19-09-2017',
  image: 'http://dsfdsdffds.pl/ddf.png',
  status: 'LOST',
  weight: '0.2'
};

const message = {
  itemsId: 1,
  usersLogin: 'Peptic',
  note: 3
}

describe('MockBackend ItemService Test', () => {
  beforeEach(() => {
    this.injector = ReflectiveInjector.resolveAndCreate([
      { provide: ConnectionBackend, useClass: MockBackend },
      { provide: RequestOptions, useClass: BaseRequestOptions },
      Http,
      ItemService,
    ]);
    this.itemService = this.injector.get(ItemService);
    this.backend = this.injector.get(ConnectionBackend) as MockBackend;
    this.backend.connections.subscribe((connection: any) => this.lastConnection = connection);
  });

  it('getItems() should query current service url', () => {
    this.itemService.getItems();
    expect(this.lastConnection).toBeDefined('no http service connection at all?');
    expect(this.lastConnection.request.url).toMatch('http://localhost:8080/items');
  });

  it('getItems() should return some items', fakeAsync(() => {
    let result;
    this.itemService.getItems().subscribe((items: Item[]) => result = items);
    this.lastConnection.mockRespond(new Response(new ResponseOptions({
      body: JSON.stringify({ data: [item1, item2] })
    })));
    tick();
    expect(result.data.length).toEqual(2, 'should contain given amount of items');
    expect(result.data[0]).toEqual(item1, ' Item_One should be the first item');
    expect(result.data[0].status).toEqual('LOST', ' Item1 id should be status LOST');
    expect(result.data[0].name).toEqual('Cap', ' Item1 name should be Cap');
  }));

  it('create() should query current service url', () => {
    this.itemService.create();
    expect(this.lastConnection).toBeDefined('no http service connection at all?');
    expect(this.lastConnection.request.url).toMatch('http://localhost:8080/create_item');
  });

  it('create() should create profile and return this', fakeAsync(() => {
    let result;
    this.itemService.getItems().subscribe((item: Item) => result = item);
    this.lastConnection.mockRespond(new Response(new ResponseOptions({
      body: JSON.stringify({ data: [item1] })
    })));
    tick();
    expect(result.data[0]).toEqual(item1, ' Item_One should be the created item');
    expect(result.data[0].status).toEqual('LOST', ' Item1 id should be status LOST');
    expect(result.data[0].name).toEqual('Cap', ' Item1 name should be Cap');
  }));

  it('getItem(1) should query current service url', () => {
    this.itemService.getItem(1);
    expect(this.lastConnection).toBeDefined('no http service connection at all?');
    expect(this.lastConnection.request.url).toMatch('http://localhost:8080/detail/' + 1);
  });

  it('returnToOwner() should query current service url', () => {
    this.itemService.returnToOwner(this.message);
    expect(this.lastConnection).toBeDefined('no http service connection at all?');
    expect(this.lastConnection.request.url).toMatch('http://localhost:8080/return');
  });

  it('returnToOwner() should return massage', fakeAsync(() => {
    let result;
    this.itemService.returnToOwner().subscribe((massage: Message) => result = massage);
    this.lastConnection.mockRespond(new Response(new ResponseOptions({
      body: JSON.stringify({ data: [message] })
    })));
    tick();
    expect(result.data.length).toEqual(1, 'should contain given amount of message');
    expect(result.data[0]).toEqual(message, ' Item_One should be the first item');
    expect(result.data[0].itemsId).toEqual(1, ' Items id should be 1');
    expect(result.data[0].usersLogin).toEqual('Peptic', ' UsersLogin should be Peptic');
  }));

});