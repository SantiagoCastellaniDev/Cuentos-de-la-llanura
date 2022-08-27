import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentosDropdownComponent } from './cuentos-dropdown.component';

describe('CuentosDropdownComponent', () => {
  let component: CuentosDropdownComponent;
  let fixture: ComponentFixture<CuentosDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentosDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentosDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
