import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveProductConfirmationComponent } from './remove-product-confirmation.component';

describe('RemoveProductConfirmationComponent', () => {
  let component: RemoveProductConfirmationComponent;
  let fixture: ComponentFixture<RemoveProductConfirmationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemoveProductConfirmationComponent]
    });
    fixture = TestBed.createComponent(RemoveProductConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
