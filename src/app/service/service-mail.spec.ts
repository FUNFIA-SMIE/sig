import { TestBed } from '@angular/core/testing';

import { ServiceMail } from './service-mail';

describe('ServiceMail', () => {
  let service: ServiceMail;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceMail);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
