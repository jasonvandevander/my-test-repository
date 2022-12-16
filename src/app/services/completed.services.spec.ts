import { TestBed } from '@angular/core/testing';

import { CompletedService } from './completed.service';

describe('TodoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompletedService = TestBed.get(CompletedService);
    expect(service).toBeTruthy();
  });
});
