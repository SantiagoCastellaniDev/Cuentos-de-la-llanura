import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscelaneaPageComponent } from './miscelanea-page.component';

describe('MiscelaneaPageComponent', () => {
  let component: MiscelaneaPageComponent;
  let fixture: ComponentFixture<MiscelaneaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiscelaneaPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiscelaneaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
