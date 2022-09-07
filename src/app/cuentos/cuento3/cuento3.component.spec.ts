import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cuento3Component } from './cuento3.component';

describe('Cuento3Component', () => {
  let component: Cuento3Component;
  let fixture: ComponentFixture<Cuento3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cuento3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cuento3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
