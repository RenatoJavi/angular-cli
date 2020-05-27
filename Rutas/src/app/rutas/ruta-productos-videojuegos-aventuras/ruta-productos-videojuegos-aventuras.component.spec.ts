import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaProductosVideojuegosAventurasComponent } from './ruta-productos-videojuegos-aventuras.component';

describe('RutaProductosVideojuegosAventurasComponent', () => {
  let component: RutaProductosVideojuegosAventurasComponent;
  let fixture: ComponentFixture<RutaProductosVideojuegosAventurasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaProductosVideojuegosAventurasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaProductosVideojuegosAventurasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
