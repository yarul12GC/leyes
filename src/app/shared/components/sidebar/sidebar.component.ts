// src/app/shared/components/sidebar/sidebar.component.ts
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importar CommonModule

interface MenuItem {
  title: string;
  icon: string;
  link: string;
  submenu: MenuItem[];
  isOpen?: boolean; // Propiedad para controlar el estado de apertura
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, CommonModule], // Añadir CommonModule aquí
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})


export class SidebarComponent {
  menuItems: MenuItem[] = [
    {
      title: 'Leyes',
      icon: 'fas fa-gavel',
      link: '/leyes',
      submenu: [
        { title: 'Ley Aduanera', icon: 'fas fa-circle', link: '/leyadua', submenu: [] },
        { title: 'Ley Federal de Procedimiento Administrativo', icon: 'fas fa-circle', link: '/leyfpa', submenu: [] },
        { title: 'Ley Reglamentaria Del Artículo 27 Constitucional En Materia Nuclear', icon: 'fas fa-circle', link: '/ley27', submenu: [] },
        { title: 'Ley Federal De Los Derechos Del Contribuyente', icon: 'fas fa-circle', link: '/leyfdc', submenu: [] },
        { title: 'Ley Federal Sobre Monumentos Y Zonas Arqueológicos, Artísticos E Históricos', icon: 'fas fa-circle', link: '/ley-myza', submenu: [] },
        { title: 'Ley Federal Para La Prevención E Identificación De Operaciones Con Recursos De Procedencia Ilícita', icon: 'fas fa-circle', link: '/leyfpii', submenu: [] },
        { title: 'Ley Federal Para El Control De Sustancias Químicas Susceptibles De Desvío Para La Fabricación De Armas Químicas', icon: 'fas fa-circle', link: '/leyarmas', submenu: [] },
        { title: 'Ley Federal Del Impuesto Sobre Automóviles Nuevos', icon: 'fas fa-circle', link: '/leyia', submenu: [] },
        { title: 'Ley Del Servicio De Administración Tributaria', icon: 'fas fa-circle', link: '/leyat', submenu: [] },
        { title: 'Ley Federal De Zonas Económicas Especiales', icon: 'fas fa-circle', link: '/leyze', submenu: [] },
        { title: 'Ley Federal De Sanidad Vegetal', icon: 'fas fa-circle', link: '/leysv', submenu: [] },
        { title: 'Ley Federal De Responsabilidades Administrativas De Los Servidores Públicos', icon: 'fas fa-circle', link: '/leyasp', submenu: [] },
        { title: 'Ley De Puertos', icon: 'fas fa-circle', link: '/leypu', submenu: [] },
        { title: 'Ley Federal Para El Control De Precursores Químicos, Productos Químicos Esenciales Y Máquinas Para Elaborar Cápsulas, Tabletas y/o Comprimidos', icon: 'fas fa-circle', link: '/leymaq', submenu: [] },
        { title: 'Ley De Caminos, Puentes Y Autotransporte Federal', icon: 'fas fa-circle', link: '/leycam', submenu: [] },

      ]
    },
    {
      title: 'Decretos',
      icon: 'fas fa-file-alt',
      link: '/decretos',
      submenu: [
        { title: 'DECRETO por el que se crea la Autoridad Federal para el Desarrollo de las Zonas Económicas Especiales y se reforman y adicionan diversas disposiciones del Reglamento Interior de la Secretaría de Hacienda y Crédito Público.', icon: 'fas fa-circle', link: '/decre1', submenu: [] },
        { title: 'DECRETO para el apoyo de la competitividad de la industria automotriz terminal y el impulso al desarrollo del mercado interno de automóviles.', icon: 'fas fa-circle', link: '/decre2', submenu: [] },
        { title: 'DECRETO por el que se otorgan facilidades administrativas en Materia Aduanera y de Comercio Exterior.', icon: 'fas fa-circle', link: '/decre3', submenu: [] },
        { title: 'DECRETO para el fomento del recinto fiscalizado estratégico y del régimen de recinto fiscalizado estratégico.', icon: 'fas fa-circle', link: '/decre4', submenu: [] },
        { title: 'DECRETO por el que se regula la importación definitiva de vehículos usados.', icon: 'fas fa-circle', link: '/decre5', submenu: [] },
        { title: 'DECRETO por el que se establece el impuesto general de importación para la región fronteriza y la franja fronteriza norte.', icon: 'fas fa-circle', link: '/decre6', submenu: [] },
        { title: 'DECRETO por el que se establecen medidas para la productividad, competitividad y combate de prácticas de subvaluación del sector calzado.', icon: 'fas fa-circle', link: '/decre7', submenu: [] },
        { title: 'DECRETO por el que se establecen medidas para la productividad, competitividad y combate de prácticas de subvaluación de los sectores textil y confección.', icon: 'fas fa-circle', link: '/decre8', submenu: [] },
        { title: 'DECRETO de la zona libre de Chetumal.', icon: 'fas fa-circle', link: '/decre9', submenu: [] },
        { title: 'DECRETO que establece la devolución de impuestos de importación a los exportadores.', icon: 'fas fa-circle', link: '/decre10', submenu: [] },
        { title: 'DECRETO por el que se modifica el diverso para el fomento y operación de la industria maquiladora de exportación', icon: 'fas fa-circle', link: '/decre11', submenu: [] },
        { title: 'DECRETO por el que se establece la Ventanilla Digital Mexicana de Comercio Exterior.', icon: 'fas fa-circle', link: '/decre12', submenu: [] },
        { title: 'DECRETO IMMEX', icon: 'fas fa-circle', link: '/decre', submenu: [] },

      ]
    },
    {
      title: 'Reglas',
      icon: 'fas fa-book',
      link: '/reglas',
      submenu: [
        { title: 'Reglas Generales de Comercio Exterior', icon: 'fas fa-circle', link: '/reglasgenerales', submenu: [] },
        { title: '-  Anexo 1 de Las RGDCE', icon: 'fas fa-circle', link: '/anexo1', submenu: [] },
        { title: '-  Anexo 2 de Las RGDCE', icon: 'fas fa-circle', link: '/anexo2', submenu: [] },
        { title: '-  Anexo 3 de Las RGDCE', icon: 'fas fa-circle', link: '/anexo3', submenu: [] },
        { title: '-  Anexo 4 de Las RGDCE', icon: 'fas fa-circle', link: '/anexo4', submenu: [] },
        { title: '-  Anexo 5 de Las RGDCE', icon: 'fas fa-circle', link: '/anexo5', submenu: [] },
        { title: '-  Anexo 6 de Las RGDCE', icon: 'fas fa-circle', link: '/anexo6', submenu: [] },
        { title: '-  Anexo 7 de Las RGDCE', icon: 'fas fa-circle', link: '/anexo7', submenu: [] },
        { title: '-  Anexo 8 de Las RGDCE', icon: 'fas fa-circle', link: '/anexo8', submenu: [] },
        { title: '-  Anexo 9 de Las RGDCE', icon: 'fas fa-circle', link: '/anexo9', submenu: [] },
        { title: '-  Anexo 10 de Las RGDCE', icon: 'fas fa-circle', link: '/anexo10', submenu: [] },
        { title: '-  Anexo 11 de Las RGDCE', icon: 'fas fa-circle', link: '/anexo11', submenu: [] },
        { title: '-  Anexo 12 de Las RGDCE', icon: 'fas fa-circle', link: '/anexo12', submenu: [] },
        { title: '-  Anexo 13 de Las RGDCE', icon: 'fas fa-circle', link: '/anexo13', submenu: [] },
        { title: '-  Anexo 14 de Las RGDCE', icon: 'fas fa-circle', link: '/anexo14', submenu: [] },
        { title: '-  Anexo 15 de Las RGDCE', icon: 'fas fa-circle', link: '/anexo15', submenu: [] },
        { title: '-  Anexo 16 de Las RGDCE', icon: 'fas fa-circle', link: '/anexo16', submenu: [] },
        { title: '-  Anexo 17 de Las RGDCE', icon: 'fas fa-circle', link: '/anexo17', submenu: [] },
        { title: '-  Anexo 18 de Las RGDCE', icon: 'fas fa-circle', link: '/anexo18', submenu: [] },
        { title: '-  Anexo 19 de Las RGDCE', icon: 'fas fa-circle', link: '/anexo19', submenu: [] },
        { title: '-  Anexo 20 de Las RGDCE', icon: 'fas fa-circle', link: '/anexo20', submenu: [] },
        { title: '-  Anexo 21 de Las RGDCE', icon: 'fas fa-circle', link: '/anexo21', submenu: [] },
        { title: '-  Anexo 22 de Las RGDCE', icon: 'fas fa-circle', link: '/anexo22', submenu: [] },
        { title: '-  Anexo 23 de Las RGDCE', icon: 'fas fa-circle', link: '/anexo23', submenu: [] },
        { title: '-  Anexo 24 de Las RGDCE', icon: 'fas fa-circle', link: '/anexo24', submenu: [] },
        { title: '-  Anexo 25 de Las RGDCE', icon: 'fas fa-circle', link: '/anexo25', submenu: [] },
        { title: '-  Anexo 26 de Las RGDCE', icon: 'fas fa-circle', link: '/anexo26', submenu: [] },
        { title: '-  Anexo 27 de Las RGDCE', icon: 'fas fa-circle', link: '/anexo27', submenu: [] },
        { title: '-  Anexo 28 de Las RGDCE', icon: 'fas fa-circle', link: '/anexo28', submenu: [] },
        { title: '-  Anexo 29 de Las RGDCE', icon: 'fas fa-circle', link: '/anexo29', submenu: [] },
        { title: '-  Anexo 30 de Las RGDCE', icon: 'fas fa-circle', link: '/anexo30', submenu: [] },

        //esta seccion es para los  30 anexos que corresponden a las reglas generales de comercio exterior 
        { title: 'Reglamento de la ley de comercio exterior', icon: 'fas fa-circle', link: '/reglamentoley/', submenu: [] },
        { title: 'Reglas y criterios de caracter general en materia decomercio exterior', icon: 'fas fa-circle', link: '/reglasycriterios', submenu: [] },
      ]
    }
  ];

  isSidebarOpen = true; // Controla la visibilidad del sidebar

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen; // Alterna la visibilidad de la barra lateral
  }

  toggleMenu(item: MenuItem) {
    item.isOpen = !item.isOpen; // Alternar el estado del menú
  }
}