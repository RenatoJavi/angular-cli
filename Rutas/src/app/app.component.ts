import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Rutas';

  rutaHome = ['/home', 'app']; //2 segmentos tambien, solo al primero se le pone el /
  rutaCreditos = ['/creditos', '4', '777'];
}
