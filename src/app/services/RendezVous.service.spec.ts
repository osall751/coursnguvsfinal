/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RendezVousService } from './RendezVous.service';

describe('Service: RendezVous', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RendezVousService]
    });
  });

  it('should ...', inject([RendezVousService], (service: RendezVousService) => {
    expect(service).toBeTruthy();
  }));
});
