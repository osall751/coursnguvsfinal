/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RendezVousApiService } from './RendezVousApi.service';

describe('Service: RendezVousApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RendezVousApiService]
    });
  });

  it('should ...', inject([RendezVousApiService], (service: RendezVousApiService) => {
    expect(service).toBeTruthy();
  }));
});
