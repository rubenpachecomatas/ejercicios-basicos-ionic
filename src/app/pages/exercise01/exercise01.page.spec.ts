import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise01Page } from './exercise01.page';

describe('Exercise01Page', () => {
  let component: Exercise01Page;
  let fixture: ComponentFixture<Exercise01Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exercise01Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercise01Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
