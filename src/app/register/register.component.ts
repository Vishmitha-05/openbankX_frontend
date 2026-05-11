import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  name = '';
  email = '';
  phone = '';
  password = '';
  role: 'CUSTOMER' | 'TPP' | 'OPERATIONS' | 'ADMIN' = 'CUSTOMER';
  isSubmitting = false;
  successMessage = '';
  errorMessage = '';

  roles: { value: 'CUSTOMER' | 'TPP' | 'OPERATIONS' | 'ADMIN', label: string, icon: string, desc: string }[] = [
    { value: 'CUSTOMER', label: 'Bank Customer', icon: 'fas fa-user', desc: 'Manage consents & accounts' },
    { value: 'TPP', label: 'TPP Developer', icon: 'fas fa-code', desc: 'Register apps & test APIs' },
    { value: 'OPERATIONS', label: 'Operations', icon: 'fas fa-chart-line', desc: 'Monitor APIs & compliance' },
    { value: 'ADMIN', label: 'Administrator', icon: 'fas fa-cog', desc: 'Configure system & users' }
  ];

  constructor(private authService: AuthService, private router: Router) {}

  register(): void {
    this.errorMessage = '';
    this.successMessage = '';

    if (!this.name || !this.email || !this.password) {
      this.errorMessage = 'Name, email, and password are required.';
      return;
    }

    this.isSubmitting = true;

    this.authService.register({
      name: this.name,
      email: this.email,
      phone: this.phone || '+91-0000000000',
      password: this.password,
      role: this.role
    }).subscribe({
      next: () => {
        this.successMessage = `Account created successfully! Redirecting to login...`;
        setTimeout(() => {
          this.isSubmitting = false;
          this.router.navigate(['/login']);
        }, 1500);
      },
      error: (err: any) => {
        this.isSubmitting = false;
        if (err.status === 0) {
          this.errorMessage = 'Cannot connect to server. Please ensure the backend is running.';
        } else if (err.error?.message) {
          this.errorMessage = err.error.message;
        } else {
          this.errorMessage = 'Registration failed. Please try again.';
        }
      }
    });
  }
}
