import { TestBed } from '@angular/core/testing';

import { CommonBridgeService } from './common-bridge.service';

describe('CommonBridgeService', () => {
  let service: CommonBridgeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonBridgeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
