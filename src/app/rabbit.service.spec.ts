import { TestBed, inject } from '@angular/core/testing';

import { RabbitService } from './rabbit.service';

describe('RabbitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RabbitService]
    });
  });

  it('should be created', inject([RabbitService], (service: RabbitService) => {
    expect(service).toBeTruthy();
  }));
});
