import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise06Page } from './exercise06.page';

describe('Exercise06Page', () => {
  let component: Exercise06Page;
  let fixture: ComponentFixture<Exercise06Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exercise06Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercise06Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
