import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise02Page } from './exercise02.page';

describe('Exercise02Page', () => {
  let component: Exercise02Page;
  let fixture: ComponentFixture<Exercise02Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exercise02Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercise02Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
