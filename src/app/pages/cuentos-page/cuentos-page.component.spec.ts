import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentosPageComponent } from './cuentos-page.component';

describe('CuentosPageComponent', () => {
  let component: CuentosPageComponent;
  let fixture: ComponentFixture<CuentosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentosPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
