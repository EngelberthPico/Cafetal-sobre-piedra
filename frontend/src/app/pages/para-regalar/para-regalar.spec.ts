import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParaRegalar } from './para-regalar';

describe('ParaRegalar', () => {
  let component: ParaRegalar;
  let fixture: ComponentFixture<ParaRegalar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParaRegalar],
    }).compileComponents();

    fixture = TestBed.createComponent(ParaRegalar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
