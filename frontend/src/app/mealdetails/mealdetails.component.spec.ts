import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealdetailsComponent } from './mealdetails.component';

describe('MealdetailsComponent', () => {
  let component: MealdetailsComponent;
  let fixture: ComponentFixture<MealdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
