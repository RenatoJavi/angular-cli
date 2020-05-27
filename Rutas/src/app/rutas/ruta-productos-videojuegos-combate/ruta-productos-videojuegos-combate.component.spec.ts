import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaProductosVideojuegosCombateComponent } from './ruta-productos-videojuegos-combate.component';

describe('RutaProductosVideojuegosCombateComponent', () => {
  let component: RutaProductosVideojuegosCombateComponent;
  let fixture: ComponentFixture<RutaProductosVideojuegosCombateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaProductosVideojuegosCombateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaProductosVideojuegosCombateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
