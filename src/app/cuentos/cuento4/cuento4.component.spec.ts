import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cuento4Component } from './cuento4.component';

describe('Cuento4Component', () => {
  let component: Cuento4Component;
  let fixture: ComponentFixture<Cuento4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cuento4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cuento4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
