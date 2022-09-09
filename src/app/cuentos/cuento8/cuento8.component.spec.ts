import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cuento8Component } from './cuento8.component';

describe('Cuento8Component', () => {
  let component: Cuento8Component;
  let fixture: ComponentFixture<Cuento8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cuento8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cuento8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
