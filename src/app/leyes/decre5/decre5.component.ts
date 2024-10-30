import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-decre5',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './decre5.component.html',
  styleUrl: './decre5.component.css'
})
export default class Decre5Component implements   OnInit {
  isMenuOpen = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleSubMenu(seccion: any) {
    seccion.isOpen = !seccion.isOpen;
  }
}
