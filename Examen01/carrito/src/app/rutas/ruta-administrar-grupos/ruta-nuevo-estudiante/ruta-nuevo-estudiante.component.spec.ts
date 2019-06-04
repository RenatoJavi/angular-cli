import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaNuevoEstudianteComponent } from './ruta-nuevo-estudiante.component';

describe('RutaNuevoEstudianteComponent', () => {
  let component: RutaNuevoEstudianteComponent;
  let fixture: ComponentFixture<RutaNuevoEstudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaNuevoEstudianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaNuevoEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
