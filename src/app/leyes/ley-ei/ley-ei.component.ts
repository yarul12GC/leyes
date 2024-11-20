import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-ley-ei',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ley-ei.component.html',
  styleUrl: './ley-ei.component.css'
})
export default class LeyEIComponent implements OnInit {
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
