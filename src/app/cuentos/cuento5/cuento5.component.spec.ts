import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cuento5Component } from './cuento5.component';

describe('Cuento5Component', () => {
  let component: Cuento5Component;
  let fixture: ComponentFixture<Cuento5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cuento5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cuento5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
