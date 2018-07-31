import { TestBed, inject } from '@angular/core/testing';

import { PostManagerService } from './post-manager.service';

describe('PostManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostManagerService]
    });
  });

  it('should be created', inject([PostManagerService], (service: PostManagerService) => {
    expect(service).toBeTruthy();
  }));
});
