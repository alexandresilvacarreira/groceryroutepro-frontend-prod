import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightCarouselDesktopComponent } from './highlight-carousel-desktop.component';

describe('HighlightCarouselDesktopComponent', () => {
  let component: HighlightCarouselDesktopComponent;
  let fixture: ComponentFixture<HighlightCarouselDesktopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HighlightCarouselDesktopComponent]
    });
    fixture = TestBed.createComponent(HighlightCarouselDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
