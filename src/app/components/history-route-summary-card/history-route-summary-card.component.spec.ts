import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryRouteSummaryCardComponent } from './history-route-summary-card.component';

describe('HistoryRouteSummaryCardComponent', () => {
  let component: HistoryRouteSummaryCardComponent;
  let fixture: ComponentFixture<HistoryRouteSummaryCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoryRouteSummaryCardComponent]
    });
    fixture = TestBed.createComponent(HistoryRouteSummaryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
