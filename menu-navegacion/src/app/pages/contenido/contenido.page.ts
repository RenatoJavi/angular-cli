import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.page.html',
  styleUrls: ['./contenido.page.scss'],
})
export class ContenidoPage implements OnInit {
  level = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.level = this.route.snapshot.paramMap.get('level');
  }
}
