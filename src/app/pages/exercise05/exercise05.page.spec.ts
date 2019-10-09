import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise05Page } from './exercise05.page';

describe('Exercise05Page', () => {
  let component: Exercise05Page;
  let fixture: ComponentFixture<Exercise05Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exercise05Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercise05Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
