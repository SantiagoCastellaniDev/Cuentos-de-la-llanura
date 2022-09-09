import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cuento10Component } from './cuento10.component';

describe('Cuento10Component', () => {
  let component: Cuento10Component;
  let fixture: ComponentFixture<Cuento10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cuento10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cuento10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
