import { TestBed } from '@angular/core/testing';

import { MealDetailGuard } from './meal-detail.guard';

describe('MealDetailGuard', () => {
  let guard: MealDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MealDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
