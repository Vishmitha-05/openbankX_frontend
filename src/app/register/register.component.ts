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

    if (!this.name || !this.email || !this.password || !this.phone) {
      this.errorMessage = 'Name, email, phone and password are all required.';
      return;
    }

    if (this.name.trim().length < 2) {
      this.errorMessage = 'Name must be at least 2 characters.';
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(this.email)) {
      this.errorMessage = 'Please enter a valid email address.';
      return;
    }

    if (this.password.length < 8 || !/[A-Za-z]/.test(this.password) || !/\d/.test(this.password)) {
      this.errorMessage = 'Password must be at least 8 characters and include both letters and numbers.';
      return;
    }

    const phonePattern = /^\+?[0-9\-\s]{7,20}$/;
    if (!phonePattern.test(this.phone)) {
      this.errorMessage = 'Please enter a valid phone number.';
      return;
    }

    if (!this.role) {
      this.errorMessage = 'Please select a role.';
      return;
    }

    this.isSubmitting = true;

    this.authService.register({
      name: this.name.trim(),
      email: this.email.trim(),
      phone: this.phone.trim(),
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
