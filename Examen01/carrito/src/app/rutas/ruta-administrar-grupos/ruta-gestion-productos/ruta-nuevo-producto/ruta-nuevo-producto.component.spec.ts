import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaNuevoProductoComponent } from './ruta-nuevo-producto.component';

describe('RutaNuevoProductoComponent', () => {
  let component: RutaNuevoProductoComponent;
  let fixture: ComponentFixture<RutaNuevoProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaNuevoProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaNuevoProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
