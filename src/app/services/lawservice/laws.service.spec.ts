import { TestBed, inject } from '@angular/core/testing';

import { LawsService } from './laws.service';

describe('LawserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LawsService]
    });
  });

  it('should be created', inject([LawsService], (service: LawsService) => {
    expect(service).toBeTruthy();
  }));
});
