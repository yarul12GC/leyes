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
      title: 'Panel',
      icon: 'fas fa-tachometer-alt',
      link: '/panel',
      submenu: [
        { title: 'Anexo1', icon: 'fas fa-circle', link: '/anexo1', submenu: [] },
        { title: 'Submenu 2', icon: 'fas fa-circle', link: '/leyes/submenu2', submenu: [] },
        { title: 'Submenu 3', icon: 'fas fa-circle', link: '/leyes/submenu3', submenu: [] },
        { title: 'Submenu 4', icon: 'fas fa-circle', link: '/leyes/submenu4', submenu: [] },
        { title: 'Submenu 5', icon: 'fas fa-circle', link: '/leyes/submenu5', submenu: [] },
        { title: 'Submenu 6', icon: 'fas fa-circle', link: '/leyes/submenu6', submenu: [] },
        { title: 'Submenu 7', icon: 'fas fa-circle', link: '/leyes/submenu7', submenu: [] },
        { title: 'Submenu 8', icon: 'fas fa-circle', link: '/leyes/submenu8', submenu: [] },
        { title: 'Submenu 9', icon: 'fas fa-circle', link: '/leyes/submenu9', submenu: [] },
        { title: 'Submenu 10', icon: 'fas fa-circle', link: '/leyes/submenu10', submenu: [] }
      ]
    },
    {
      title: 'Leyes',
      icon: 'fas fa-gavel',
      link: '/leyes',
      submenu: [
        { title: 'Ley Aduanera', icon: 'fas fa-circle', link: '/leyadua', submenu: [] },
        { title: 'Ley Federal de Procedimiento Administrativo', icon: 'fas fa-circle', link: '/leyfpa', submenu: [] },
        { title: 'Ley Reglamentaria Del Artículo 27 Constitucional En Materia Nuclear', icon: 'fas fa-circle', link: '/ley27', submenu: [] },
        { title: 'Ley Federal De Los Derechos Del Contribuyente', icon: 'fas fa-circle', link: '/leyfdc', submenu: [] },
        { title: 'Submenu 5', icon: 'fas fa-circle', link: '/leyes/submenu5', submenu: [] },
        { title: 'Submenu 6', icon: 'fas fa-circle', link: '/leyes/submenu6', submenu: [] },
        { title: 'Submenu 7', icon: 'fas fa-circle', link: '/leyes/submenu7', submenu: [] },
        { title: 'Submenu 8', icon: 'fas fa-circle', link: '/leyes/submenu8', submenu: [] },
        { title: 'Submenu 9', icon: 'fas fa-circle', link: '/leyes/submenu9', submenu: [] },
        { title: 'Submenu 10', icon: 'fas fa-circle', link: '/leyes/submenu10', submenu: [] }
      ]
    },
    {
      title: 'Decretos',
      icon: 'fas fa-file-alt',
      link: '/decretos',
      submenu: [
        { title: 'Submenu 1', icon: 'fas fa-circle', link: '/leyes/submenu1', submenu: [] },
        { title: 'Submenu 2', icon: 'fas fa-circle', link: '/leyes/submenu2', submenu: [] },
        { title: 'Submenu 3', icon: 'fas fa-circle', link: '/leyes/submenu3', submenu: [] },
        { title: 'Submenu 4', icon: 'fas fa-circle', link: '/leyes/submenu4', submenu: [] },
        { title: 'Submenu 5', icon: 'fas fa-circle', link: '/leyes/submenu5', submenu: [] },
        { title: 'Submenu 6', icon: 'fas fa-circle', link: '/leyes/submenu6', submenu: [] },
        { title: 'Submenu 7', icon: 'fas fa-circle', link: '/leyes/submenu7', submenu: [] },
        { title: 'Submenu 8', icon: 'fas fa-circle', link: '/leyes/submenu8', submenu: [] },
        { title: 'Submenu 9', icon: 'fas fa-circle', link: '/leyes/submenu9', submenu: [] },
        { title: 'Submenu 10', icon: 'fas fa-circle', link: '/leyes/submenu10', submenu: [] }
      ]
    },
    {
      title: 'Reglas',
      icon: 'fas fa-book',
      link: '/reglas',
      submenu: [
        { title: 'Reglas y criterios de caracter general en materia decomercio exterior', icon: 'fas fa-circle', link: '/reglasycriterios', submenu: [] },
        { title: 'Reglas generales de comercio exterior', icon: 'fas fa-circle', link: '/reglasgenerales', submenu: [] },
        { title: 'Reglamento de la ley de comercio exterior', icon: 'fas fa-circle', link: '/reglamentoley/', submenu: [] },
        { title: 'Submenu 3', icon: 'fas fa-circle', link: '/leyes/submenu3', submenu: [] },
        { title: 'Submenu 4', icon: 'fas fa-circle', link: '/leyes/submenu4', submenu: [] },
        { title: 'Submenu 5', icon: 'fas fa-circle', link: '/leyes/submenu5', submenu: [] },
        { title: 'Submenu 6', icon: 'fas fa-circle', link: '/leyes/submenu6', submenu: [] },
        { title: 'Submenu 7', icon: 'fas fa-circle', link: '/leyes/submenu7', submenu: [] },
        { title: 'Submenu 8', icon: 'fas fa-circle', link: '/leyes/submenu8', submenu: [] },
        { title: 'Submenu 9', icon: 'fas fa-circle', link: '/leyes/submenu9', submenu: [] },
        { title: 'Submenu 10', icon: 'fas fa-circle', link: '/leyes/submenu10', submenu: [] }
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