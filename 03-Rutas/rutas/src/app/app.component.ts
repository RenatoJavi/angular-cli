import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "rutas";

  //rutaHome = ["/home", "app"];
  rutaHome = ["/home", "app"];
  rutaCreditos = ["/creditos"];
  rutaProducto = ["/producto"];
  rutaNoEncontrada = ["/noencontrada"];
}
