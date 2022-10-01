import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliografiaPageComponent } from './bibliografia-page.component';

describe('BibliografiaPageComponent', () => {
  let component: BibliografiaPageComponent;
  let fixture: ComponentFixture<BibliografiaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BibliografiaPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BibliografiaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
