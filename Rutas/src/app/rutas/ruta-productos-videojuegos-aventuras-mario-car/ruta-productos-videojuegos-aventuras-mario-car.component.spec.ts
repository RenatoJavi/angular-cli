import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaProductosVideojuegosAventurasMarioCarComponent } from './ruta-productos-videojuegos-aventuras-mario-car.component';

describe('RutaProductosVideojuegosAventurasMarioCarComponent', () => {
  let component: RutaProductosVideojuegosAventurasMarioCarComponent;
  let fixture: ComponentFixture<RutaProductosVideojuegosAventurasMarioCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaProductosVideojuegosAventurasMarioCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaProductosVideojuegosAventurasMarioCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
