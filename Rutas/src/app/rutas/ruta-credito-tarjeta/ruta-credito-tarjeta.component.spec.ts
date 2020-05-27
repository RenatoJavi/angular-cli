import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaCreditoTarjetaComponent } from './ruta-credito-tarjeta.component';

describe('RutaCreditoTarjetaComponent', () => {
  let component: RutaCreditoTarjetaComponent;
  let fixture: ComponentFixture<RutaCreditoTarjetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaCreditoTarjetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaCreditoTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
