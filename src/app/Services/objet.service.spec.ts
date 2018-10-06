import { TestBed, inject } from '@angular/core/testing';

import { ObjetService } from './objet.service';

describe('ObjetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ObjetService]
    });
  });

  it('should be created', inject([ObjetService], (service: ObjetService) => {
    expect(service).toBeTruthy();
  }));
});
