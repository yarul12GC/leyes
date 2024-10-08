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
  imports: [CommonModule],  // Agrega los módulos necesarios
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']  // Corrección aquí
})
export default class PanelComponent {
  cursos: Curso[] = [
    {
      titulo: 'Curso de Desarrollo Web',
      descripcion: 'Aprende las bases del desarrollo web con HTML, CSS y JavaScript.',
      imagen: 'https://via.placeholder.com/400x200'
    },
    {
      titulo: 'Curso de Marketing Digital',
      descripcion: 'Descubre cómo impulsar tu negocio en el mundo digital a través del marketing.',
      imagen: 'https://via.placeholder.com/400x200'
    },
    {
      titulo: 'Curso de Python para Data Science',
      descripcion: 'Aprende Python y cómo aplicarlo en el campo del análisis de datos.',
      imagen: 'https://via.placeholder.com/400x200'
    },
    {
      titulo: 'Curso de Diseño Gráfico',
      descripcion: 'Domina las herramientas clave para convertirte en un diseñador gráfico profesional.',
      imagen: 'https://via.placeholder.com/400x200'
    },
    {
      titulo: 'Curso de Inteligencia Artificial',
      descripcion: 'Explora los conceptos y aplicaciones de la inteligencia artificial en la actualidad.',
      imagen: 'https://via.placeholder.com/400x200'
    }
  ];
}
