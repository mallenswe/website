import { TestBed } from '@angular/core/testing';

import { ColorChangerService } from './color-changer.service';

describe('ColorChangerService', () => {
  let service: ColorChangerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorChangerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
