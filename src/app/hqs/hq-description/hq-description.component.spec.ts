import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HqDescriptionComponent } from './hq-description.component';

describe('HqDescriptionComponent', () => {
  let component: HqDescriptionComponent;
  let fixture: ComponentFixture<HqDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HqDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HqDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
