import { TestBed, inject } from '@angular/core/testing';

import { AjaxCallsService } from './ajax-calls.service';

describe('AjaxCallsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AjaxCallsService]
    });
  });

  it('should be created', inject([AjaxCallsService], (service: AjaxCallsService) => {
    expect(service).toBeTruthy();
  }));
});
