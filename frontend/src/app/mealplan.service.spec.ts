import { TestBed, inject } from '@angular/core/testing';

import { MealplanService } from './mealplan.service';

describe('MealplanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MealplanService]
    });
  });

  it('should be created', inject([MealplanService], (service: MealplanService) => {
    expect(service).toBeTruthy();
  }));
});
