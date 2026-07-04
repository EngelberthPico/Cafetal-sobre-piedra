import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoCafe } from './catalogo-cafe';

describe('CatalogoCafe', () => {
  let component: CatalogoCafe;
  let fixture: ComponentFixture<CatalogoCafe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogoCafe],
    }).compileComponents();

    fixture = TestBed.createComponent(CatalogoCafe);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
