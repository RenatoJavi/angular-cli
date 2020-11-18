import { TestBed } from '@angular/core/testing';

import { ProcesoHttpService } from './proceso-http.service';

describe('ProcesoHttpService', () => {
  let service: ProcesoHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcesoHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
