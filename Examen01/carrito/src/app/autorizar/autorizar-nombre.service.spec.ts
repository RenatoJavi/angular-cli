import { TestBed } from '@angular/core/testing';

import { AutorizarNombreService } from './autorizar-nombre.service';

describe('AutorizarNombreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutorizarNombreService = TestBed.get(AutorizarNombreService);
    expect(service).toBeTruthy();
  });
});
