import { TestBed } from '@angular/core/testing';

import { ListaReproductionesService } from './lista-reproductiones.service';

describe('ListaReproductionesService', () => {
  let service: ListaReproductionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaReproductionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
