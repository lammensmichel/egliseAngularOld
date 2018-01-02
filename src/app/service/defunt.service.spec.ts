import { TestBed, inject } from '@angular/core/testing';

import { DefuntService } from './defunt.service';

describe('DefuntService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DefuntService]
    });
  });

  it('should be created', inject([DefuntService], (service: DefuntService) => {
    expect(service).toBeTruthy();
  }));
});
