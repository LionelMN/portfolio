import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualWorkComponent } from './individual-work.component';

describe('IndividualWorkComponent', () => {
  let component: IndividualWorkComponent;
  let fixture: ComponentFixture<IndividualWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
