import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cuento1Component } from './cuento1.component';

describe('Cuento1Component', () => {
  let component: Cuento1Component;
  let fixture: ComponentFixture<Cuento1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cuento1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cuento1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
