import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise04Page } from './exercise04.page';

describe('Exercise04Page', () => {
  let component: Exercise04Page;
  let fixture: ComponentFixture<Exercise04Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exercise04Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercise04Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
