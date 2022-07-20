import { TestBed } from '@angular/core/testing';

import { PageDashboardApiService } from './page-dashboard-api.service';

describe('PageDashboardApiService', () => {
  let service: PageDashboardApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageDashboardApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
