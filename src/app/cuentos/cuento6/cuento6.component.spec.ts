import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cuento6Component } from './cuento6.component';

describe('Cuento6Component', () => {
  let component: Cuento6Component;
  let fixture: ComponentFixture<Cuento6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cuento6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cuento6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
