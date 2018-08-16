import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogArchiveListComponent } from './blog-archive-list.component';

describe('BlogArchiveListComponent', () => {
  let component: BlogArchiveListComponent;
  let fixture: ComponentFixture<BlogArchiveListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogArchiveListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogArchiveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
