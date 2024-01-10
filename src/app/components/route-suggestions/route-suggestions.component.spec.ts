import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteSuggestionsComponent } from './route-suggestions.component';

describe('RouteSuggestionsComponent', () => {
  let component: RouteSuggestionsComponent;
  let fixture: ComponentFixture<RouteSuggestionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RouteSuggestionsComponent]
    });
    fixture = TestBed.createComponent(RouteSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
