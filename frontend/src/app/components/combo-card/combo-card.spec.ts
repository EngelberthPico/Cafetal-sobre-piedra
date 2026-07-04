import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboCard } from './combo-card';

describe('ComboCard', () => {
  let component: ComboCard;
  let fixture: ComponentFixture<ComboCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComboCard],
    }).compileComponents();

    fixture = TestBed.createComponent(ComboCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
