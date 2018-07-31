import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalPostComponent } from './normal-post.component';

describe('NormalPostComponent', () => {
  let component: NormalPostComponent;
  let fixture: ComponentFixture<NormalPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
