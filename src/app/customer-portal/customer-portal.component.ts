import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';

@Component({
  selector: 'app-customer-portal',
  standalone: true,
  imports: [CommonModule, RouterModule, SidebarComponent, NavbarComponent],
  template: `
    <div class="portal-layout">
      <app-sidebar></app-sidebar>
      <div class="portal-main">
        <app-navbar [pageTitle]="'Customer Portal'"></app-navbar>
        <div class="portal-content"><router-outlet></router-outlet></div>
      </div>
    </div>
  `,
  styleUrl: './customer-portal.component.css'
})
export class CustomerPortalComponent {}
