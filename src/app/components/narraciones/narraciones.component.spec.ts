import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NarracionesComponent } from './narraciones.component';

describe('NarracionesComponent', () => {
  let component: NarracionesComponent;
  let fixture: ComponentFixture<NarracionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NarracionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NarracionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
