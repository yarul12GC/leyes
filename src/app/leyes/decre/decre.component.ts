import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-decre',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './decre.component.html',
  styleUrl: './decre.component.css'
})
export default class DecreComponent implements OnInit {
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