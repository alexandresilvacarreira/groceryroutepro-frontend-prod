import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChainStickerComponent } from './chain-sticker.component';

describe('ChainStickerComponent', () => {
  let component: ChainStickerComponent;
  let fixture: ComponentFixture<ChainStickerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChainStickerComponent]
    });
    fixture = TestBed.createComponent(ChainStickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
