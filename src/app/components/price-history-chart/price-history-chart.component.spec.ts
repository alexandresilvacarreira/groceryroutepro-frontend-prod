import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceHistoryChartComponent } from './price-history-chart.component';

describe('PriceHistoryChartComponent', () => {
  let component: PriceHistoryChartComponent;
  let fixture: ComponentFixture<PriceHistoryChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PriceHistoryChartComponent]
    });
    fixture = TestBed.createComponent(PriceHistoryChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
