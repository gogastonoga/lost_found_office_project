import { Injectable, ReflectiveInjector } from '@angular/core';
import { async, fakeAsync, tick, inject } from '@angular/core/testing';
import { BaseRequestOptions, ConnectionBackend, Http, RequestOptions } from '@angular/http';
import { Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { HistoryService } from './history.service';
import { History } from './history'

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


describe('MockBackend HeroService Example', () => {
  beforeEach(() => {
    this.injector = ReflectiveInjector.resolveAndCreate([
      { provide: ConnectionBackend, useClass: MockBackend },
      { provide: RequestOptions, useClass: BaseRequestOptions },
      Http,
      HistoryService,
    ]);
    this.historyService = this.injector.get(HistoryService);
    this.backend = this.injector.get(ConnectionBackend) as MockBackend;
    this.backend.connections.subscribe((connection: any) => this.lastConnection = connection);
  });

  it('getItems() should query current service url', () => {
    this.historyService.getHistory();
    expect(this.lastConnection).toBeDefined('no http service connection at all?');
    expect(this.lastConnection.request.url).toMatch('http://localhost:8080/history');
  });

  it('getItems() should return some items', fakeAsync(() => {
    let result;
    this.historyService.getHistory().subscribe((histories: History[]) => result = histories);
    this.lastConnection.mockRespond(new Response(new ResponseOptions({
      body: JSON.stringify({ data: [history1, history2] })
    })));
    tick();
    expect(result.data.length).toEqual(2, 'should contain given amount of histories');
    expect(result.data[0]).toEqual(history1, ' History1 should be the first history');
    expect(result.data[0].id).toEqual(1, ' History1 id should be 1');
  }));

});