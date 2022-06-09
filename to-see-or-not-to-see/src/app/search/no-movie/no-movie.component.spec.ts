import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoMovieComponent } from './no-movie.component';

describe('NoMovieComponent', () => {
  let component: NoMovieComponent;
  let fixture: ComponentFixture<NoMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
