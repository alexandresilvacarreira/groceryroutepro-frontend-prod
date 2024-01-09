import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordSucessComponent } from './forgot-password-sucess.component';

describe('ForgotPasswordSucessComponent', () => {
  let component: ForgotPasswordSucessComponent;
  let fixture: ComponentFixture<ForgotPasswordSucessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForgotPasswordSucessComponent]
    });
    fixture = TestBed.createComponent(ForgotPasswordSucessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
