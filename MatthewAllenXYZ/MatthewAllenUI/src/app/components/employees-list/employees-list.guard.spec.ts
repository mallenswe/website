import { TestBed } from '@angular/core/testing';

import { EmployeesListGuard } from './employees-list.guard';

describe('EmployeesListGuard', () => {
  let guard: EmployeesListGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EmployeesListGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
