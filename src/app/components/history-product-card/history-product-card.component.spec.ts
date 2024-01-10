import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryProductCardComponent } from './history-product-card.component';

describe('HistoryProductCardComponent', () => {
  let component: HistoryProductCardComponent;
  let fixture: ComponentFixture<HistoryProductCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoryProductCardComponent]
    });
    fixture = TestBed.createComponent(HistoryProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
