import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaProductosVideojuegosAventurasTarzanComponent } from './ruta-productos-videojuegos-aventuras-tarzan.component';

describe('RutaProductosVideojuegosAventurasTarzanComponent', () => {
  let component: RutaProductosVideojuegosAventurasTarzanComponent;
  let fixture: ComponentFixture<RutaProductosVideojuegosAventurasTarzanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaProductosVideojuegosAventurasTarzanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaProductosVideojuegosAventurasTarzanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
