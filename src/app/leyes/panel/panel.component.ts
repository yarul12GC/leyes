import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Asegúrate de importar esto

export interface Curso {
  titulo: string;
  descripcion: string;
  imagen: string;
}

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export default class PanelComponent {
  cursos: Curso[] = [
    {
      titulo: 'Curso de Desarrollo Web',
      descripcion: 'Aprende las bases del desarrollo web con HTML, CSS y JavaScript.',
      imagen: 'public/26.png'
    },
    {
      titulo: 'Curso de Marketing Digital',
      descripcion: 'Descubre cómo impulsar tu negocio en el mundo digital a través del marketing.',
      imagen: 'https://via.placeholder.com/400x200'
    },
  ];
}
