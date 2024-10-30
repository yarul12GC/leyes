import { Component, OnInit } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

export interface Curso {
  titulo: string;
  descripcion: string;
  imagen: string;
}

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export default class PanelComponent implements OnInit {
  cursos: Curso[] = [
    {
      titulo: 'TALLER DE IMPORTACIÓN DE VEHÍCULOS',
      descripcion: 'Aprende los fundamentos esenciales para importar vehículos de manera legal y eficiente.',
      imagen: 'assets/26.png'
    },
    {
      titulo: 'TALLER DE CLASIFICACIÓN ARANCELARIA',
      descripcion: 'Descubre cómo identificar y aplicar correctamente las fracciones arancelarias.',
      imagen: 'assets/27.png'
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private viewportScroller: ViewportScroller,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        this.viewportScroller.scrollToAnchor(fragment);
      }
    });
  }
}
