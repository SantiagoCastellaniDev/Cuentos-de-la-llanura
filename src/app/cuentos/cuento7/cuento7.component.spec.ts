import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cuento7Component } from './cuento7.component';

describe('Cuento7Component', () => {
  let component: Cuento7Component;
  let fixture: ComponentFixture<Cuento7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cuento7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cuento7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
