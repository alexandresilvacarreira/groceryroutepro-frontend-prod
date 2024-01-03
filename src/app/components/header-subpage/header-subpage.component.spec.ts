import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSubpageComponent } from './header-subpage.component';

describe('HeaderSubpageComponent', () => {
  let component: HeaderSubpageComponent;
  let fixture: ComponentFixture<HeaderSubpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderSubpageComponent]
    });
    fixture = TestBed.createComponent(HeaderSubpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
