/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PiedpageComponent } from './piedpage.component';

describe('PiedpageComponent', () => {
  let component: PiedpageComponent;
  let fixture: ComponentFixture<PiedpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiedpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiedpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
