import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-leysv',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './leysv.component.html',
  styleUrl: './leysv.component.css'
})
export default class LeysvComponent implements OnInit {
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
