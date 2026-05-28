import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtapeSlider } from './etape-slider';

describe('EtapeSlider', () => {
  let component: EtapeSlider;
  let fixture: ComponentFixture<EtapeSlider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtapeSlider],
    }).compileComponents();

    fixture = TestBed.createComponent(EtapeSlider);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
