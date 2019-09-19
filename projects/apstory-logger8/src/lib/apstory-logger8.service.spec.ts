import { TestBed } from '@angular/core/testing';

import { ApstoryLogger8Service } from './apstory-logger8.service';

describe('ApstoryLogger8Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApstoryLogger8Service = TestBed.get(ApstoryLogger8Service);
    expect(service).toBeTruthy();
  });
});
