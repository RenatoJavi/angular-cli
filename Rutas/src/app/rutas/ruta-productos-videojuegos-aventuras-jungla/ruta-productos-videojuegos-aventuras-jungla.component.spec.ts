import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaProductosVideojuegosAventurasJunglaComponent } from './ruta-productos-videojuegos-aventuras-jungla.component';

describe('RutaProductosVideojuegosAventurasJunglaComponent', () => {
  let component: RutaProductosVideojuegosAventurasJunglaComponent;
  let fixture: ComponentFixture<RutaProductosVideojuegosAventurasJunglaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaProductosVideojuegosAventurasJunglaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaProductosVideojuegosAventurasJunglaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
