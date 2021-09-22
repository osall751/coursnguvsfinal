/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EntetepageComponent } from './entetepage.component';

describe('EntetepageComponent', () => {
  let component: EntetepageComponent;
  let fixture: ComponentFixture<EntetepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntetepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntetepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
