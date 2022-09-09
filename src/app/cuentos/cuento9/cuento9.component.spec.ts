import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cuento9Component } from './cuento9.component';

describe('Cuento9Component', () => {
  let component: Cuento9Component;
  let fixture: ComponentFixture<Cuento9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cuento9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cuento9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
