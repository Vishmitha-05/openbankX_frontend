import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

/**
 * LoginComponent — Real JWT-based login page.
 *
 * DIRECTIVES DEMONSTRATED:
 *   [(ngModel)]  → Two-way binding on email and password
 *   *ngIf        → Show error messages, loading spinner
 */
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  isLoading: boolean = false;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.errorMessage = '';
    this.successMessage = '';

    if (!this.email || !this.password) {
      this.errorMessage = 'Please enter your email and password.';
      return;
    }

    this.isLoading = true;

    this.authService.login(this.email, this.password).subscribe({
      next: (response: any) => {
        // Backend returns { accessToken, userId, name, email, role }
        this.authService.saveSession(
          response.userId,
          response.name,
          response.email,
          response.role,
          response.accessToken
        );

        this.successMessage = `Welcome, ${response.name}! Redirecting to ${response.role} portal...`;

        // Route based on role
        setTimeout(() => {
          switch (response.role) {
            case 'TPP':        this.router.navigate(['/developer/dashboard']); break;
            case 'CUSTOMER':   this.router.navigate(['/customer/consents']); break;
            case 'OPERATIONS': this.router.navigate(['/operations/health']); break;
            case 'ADMIN':      this.router.navigate(['/admin/products']); break;
            default:           this.router.navigate(['/login']);
          }
        }, 600);
      },
      error: (err: any) => {
        this.isLoading = false;
        if (err.status === 0) {
          this.errorMessage = 'Cannot connect to server. Please ensure the backend is running on port 8081.';
        } else if (err.error?.message) {
          this.errorMessage = err.error.message;
        } else {
          this.errorMessage = 'Invalid email or password. Please try again.';
        }
      }
    });
  }
}
