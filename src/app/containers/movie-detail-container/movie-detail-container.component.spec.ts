import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailContainerComponent } from './movie-detail-container.component';

describe('MovieDetailContainerComponent', () => {
  let component: MovieDetailContainerComponent;
  let fixture: ComponentFixture<MovieDetailContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDetailContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
