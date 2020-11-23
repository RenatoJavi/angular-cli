import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MovieDetallesPage } from './movie-detalles.page';

describe('MovieDetallesPage', () => {
  let component: MovieDetallesPage;
  let fixture: ComponentFixture<MovieDetallesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDetallesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MovieDetallesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
