// src/app/shared/components/layout/layout.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, FooterComponent],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export default class LayoutComponent { }
