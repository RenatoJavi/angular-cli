import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarListaComponent } from './mostrar-lista.component';

describe('MostrarListaComponent', () => {
  let component: MostrarListaComponent;
  let fixture: ComponentFixture<MostrarListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
