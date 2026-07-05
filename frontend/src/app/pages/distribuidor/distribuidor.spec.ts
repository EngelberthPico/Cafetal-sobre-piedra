import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Distribuidor } from './distribuidor';

describe('Distribuidor', () => {
  let component: Distribuidor;
  let fixture: ComponentFixture<Distribuidor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Distribuidor],
    }).compileComponents();

    fixture = TestBed.createComponent(Distribuidor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
