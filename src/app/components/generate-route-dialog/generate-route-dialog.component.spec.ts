import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateRouteDialogComponent } from './generate-route-dialog.component';

describe('GenerateRouteDialogComponent', () => {
  let component: GenerateRouteDialogComponent;
  let fixture: ComponentFixture<GenerateRouteDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenerateRouteDialogComponent]
    });
    fixture = TestBed.createComponent(GenerateRouteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
