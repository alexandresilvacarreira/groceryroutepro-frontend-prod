import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryRoutesComponent } from './history-routes.component';

describe('HistoryRoutesComponent', () => {
  let component: HistoryRoutesComponent;
  let fixture: ComponentFixture<HistoryRoutesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoryRoutesComponent]
    });
    fixture = TestBed.createComponent(HistoryRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
