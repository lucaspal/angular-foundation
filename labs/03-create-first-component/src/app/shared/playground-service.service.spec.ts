import { TestBed } from '@angular/core/testing';

import { PlaygroundServiceService } from './playground-service.service';

describe('PlaygroundServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlaygroundServiceService = TestBed.get(PlaygroundServiceService);
    expect(service).toBeTruthy();
  });
});
