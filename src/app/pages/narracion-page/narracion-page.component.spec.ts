import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NarracionPageComponent } from './narracion-page.component';

describe('NarracionPageComponent', () => {
  let component: NarracionPageComponent;
  let fixture: ComponentFixture<NarracionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NarracionPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NarracionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
