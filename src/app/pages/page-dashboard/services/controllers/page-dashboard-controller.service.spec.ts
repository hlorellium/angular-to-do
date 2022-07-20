import { TestBed } from '@angular/core/testing';

import { PageDashboardControllerService } from './page-dashboard-controller.service';

describe('PageDashboardControllerService', () => {
  let service: PageDashboardControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageDashboardControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
