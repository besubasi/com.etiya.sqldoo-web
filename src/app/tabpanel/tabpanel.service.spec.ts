import { TestBed, inject } from '@angular/core/testing';

import { TabpanelService } from './tabpanel.service';

describe('TabpanelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TabpanelService]
    });
  });

  it('should be created', inject([TabpanelService], (service: TabpanelService) => {
    expect(service).toBeTruthy();
  }));
});
