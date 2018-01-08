import { AdminManagmentComponent } from './admin-managment.component';
import { Input } from '@angular/core';
import { ProfileService } from '../profile/profile.service';
import { Profile } from '../profile/profile';
import { ItemService } from '../item/item.service';
import { Item } from '../item/item';
import { Message } from '../message/message';
import { MessageService } from '../message/message.service';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'ngx-rating';
import { HttpModule } from '@angular/http';
import $ from 'jquery/dist/jquery';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';


describe('AdminManagmentComponent', function () {
  let de: DebugElement;
  let buttonAdd: DebugElement;
  let buttonReturn: DebugElement;
  let buttonAddP: DebugElement;
  let comp: AdminManagmentComponent;
  let fixture: ComponentFixture<AdminManagmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        Ng2Bs3ModalModule,
        FormsModule,
        RatingModule,
        HttpModule],
      declarations: [
        AdminManagmentComponent
      ],

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminManagmentComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h2'));
    buttonAdd = fixture.debugElement.query(By.css('.add'));
    buttonReturn = fixture.debugElement.query(By.css('.return'));
    buttonAddP = fixture.debugElement.query(By.css('.addP'));
  });

  it('should create AdminManagmentComponent component', () => expect(comp).toBeDefined());

  it('should have expected <h2> text', () => {
    fixture.detectChanges();
    const h2 = de.nativeElement;
    expect(h2.innerText).toContain('Admin Managment');
  });

  it('should have expected .add text', () => {
    fixture.detectChanges();
    const buttAdd = buttonAdd.nativeElement;
    expect(buttAdd.innerText).toContain('Add item');
  });

  it('should have expected .addP text', () => {
    fixture.detectChanges();
    const buttAddP = buttonAddP.nativeElement;
    expect(buttAddP.innerText).toContain('Add profile');
  });

  it('should have expected .return text', () => {
    fixture.detectChanges();
    const buttRet = buttonReturn.nativeElement;
    expect(buttRet.innerText).toContain('Return item to owner');
  });

  it('should check variable categories and status', () => {
    fixture.detectChanges();
    expect(comp.categories).toBeDefined();
    expect(comp.status).toBeDefined();
  });

  it('should clean massages', () => {
    comp.returnMsg = 'aaaaa';
    comp.errorMsg = 'error';
    comp.cleanMessage();
    expect(comp.returnMsg).toEqual('');
    expect(comp.errorMsg).toEqual('');
  });

});