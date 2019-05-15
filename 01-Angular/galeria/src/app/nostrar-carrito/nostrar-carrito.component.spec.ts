import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NostrarCarritoComponent } from './nostrar-carrito.component';

describe('NostrarCarritoComponent', () => {
  let component: NostrarCarritoComponent;
  let fixture: ComponentFixture<NostrarCarritoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NostrarCarritoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NostrarCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
