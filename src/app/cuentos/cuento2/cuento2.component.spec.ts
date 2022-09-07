import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cuento2Component } from './cuento2.component';

describe('Cuento2Component', () => {
  let component: Cuento2Component;
  let fixture: ComponentFixture<Cuento2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cuento2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cuento2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
