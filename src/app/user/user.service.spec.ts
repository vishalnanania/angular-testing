import { TestBed, inject } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  beforeEach(() => {
    service = new UserService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getDetail should return value from a promise',
    (done: DoneFn) => {
      service.getDetail().then(value => {
        expect(value).toBe('Data');
        done();
      });
    }
  );

});
