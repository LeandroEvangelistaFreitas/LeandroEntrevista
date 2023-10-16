import { TestBed } from '@angular/core/testing';

import { CalcJurosService } from './calc-juros.service';

describe('CalcJurosService', () => {
  let service: CalcJurosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcJurosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
