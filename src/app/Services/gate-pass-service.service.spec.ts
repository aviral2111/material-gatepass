import { TestBed, inject } from '@angular/core/testing';

import { GatePassServiceService } from './gate-pass-service.service';

describe('GatePassServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GatePassServiceService]
    });
  });

  it('should be created', inject([GatePassServiceService], (service: GatePassServiceService) => {
    expect(service).toBeTruthy();
  }));
});
