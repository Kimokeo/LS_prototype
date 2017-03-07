/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { JobService } from './job.service';

describe('JobsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JobService]
    });
  });

  it('should ...', inject([JobService], (service: JobService) => {
    expect(service).toBeTruthy();
  }));
});
