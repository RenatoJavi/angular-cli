import { TestBed } from '@angular/core/testing';

import { TieneNombreService } from './tiene-nombre.service';

describe('TieneNombreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TieneNombreService = TestBed.get(TieneNombreService);
    expect(service).toBeTruthy();
  });
});
