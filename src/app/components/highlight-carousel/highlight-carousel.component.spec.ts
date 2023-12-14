import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightCarouselComponent } from './highlight-carousel.component';

describe('HighlightCarouselComponent', () => {
  let component: HighlightCarouselComponent;
  let fixture: ComponentFixture<HighlightCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HighlightCarouselComponent]
    });
    fixture = TestBed.createComponent(HighlightCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
