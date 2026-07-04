import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoOtros } from './catalogo-otros';

describe('CatalogoOtros', () => {
  let component: CatalogoOtros;
  let fixture: ComponentFixture<CatalogoOtros>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogoOtros],
    }).compileComponents();

    fixture = TestBed.createComponent(CatalogoOtros);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
