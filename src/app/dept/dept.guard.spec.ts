import { TestBed, async, inject } from '@angular/core/testing';

import { DeptGuard } from './dept.guard';

describe('DeptGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeptGuard]
    });
  });

  it('should ...', inject([DeptGuard], (guard: DeptGuard) => {
    expect(guard).toBeTruthy();
  }));
});
