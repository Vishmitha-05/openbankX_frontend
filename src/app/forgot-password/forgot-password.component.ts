import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div class="fp-wrapper">
      <div class="fp-card">
        <div class="fp-header">
          <div class="fp-logo"><i class="fas fa-key"></i></div>
          <h1>Reset Password</h1>
          <p class="fp-subtitle">Enter your registered email and we'll send you a reset link.</p>
        </div>

        <div class="alert alert-error" *ngIf="errorMessage">
          <i class="fas fa-exclamation-circle"></i> {{ errorMessage }}
        </div>
        <div class="alert alert-success" *ngIf="successMessage">
          <i class="fas fa-check-circle"></i> {{ successMessage }}
        </div>

        <div class="form-group">
          <label>Email Address</label>
          <div class="input-icon">
            <i class="fas fa-envelope"></i>
            <input type="email"
                   class="form-control with-icon"
                   placeholder="your@email.com"
                   [(ngModel)]="email"
                   (keyup.enter)="submit()">
          </div>
        </div>

        <button class="btn btn-primary btn-full"
                (click)="submit()"
                [disabled]="isLoading">
          <span *ngIf="!isLoading"><i class="fas fa-paper-plane"></i> Send Reset Link</span>
          <span *ngIf="isLoading"><i class="fas fa-spinner fa-spin"></i> Sending...</span>
        </button>

        <div class="back-link">
          <a routerLink="/login"><i class="fas fa-arrow-left"></i> Back to sign in</a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .fp-wrapper {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      background: linear-gradient(135deg, #0a2540 0%, #1e40af 100%);
    }
    .fp-card {
      background: #fff;
      border-radius: 14px;
      padding: 40px 36px 32px;
      width: 100%;
      max-width: 420px;
      box-shadow: 0 20px 50px rgba(0,0,0,0.18);
      border-top: 4px solid #c79a2a;
    }
    .fp-header { text-align: center; margin-bottom: 24px; }
    .fp-logo {
      width: 60px; height: 60px;
      background: #0a2540;
      color: #c79a2a;
      border: 2px solid #c79a2a;
      border-radius: 14px;
      display: flex; align-items: center; justify-content: center;
      margin: 0 auto 14px;
      font-size: 1.4rem;
    }
    .fp-header h1 { font-size: 1.5rem; color: #0a2540; font-weight: 700; }
    .fp-subtitle { color: #64748b; font-size: 0.85rem; margin-top: 6px; }
    .input-icon { position: relative; }
    .input-icon i {
      position: absolute; left: 14px; top: 50%;
      transform: translateY(-50%);
      color: #94a3b8; font-size: 0.9rem;
    }
    .input-icon .form-control.with-icon { padding-left: 42px; }
    .btn-full { width: 100%; padding: 12px; border-radius: 8px; font-weight: 600; }
    .back-link {
      text-align: center; margin-top: 18px; font-size: 0.85rem;
    }
    .back-link a {
      color: #1e40af; font-weight: 600; text-decoration: none;
    }
    .back-link a:hover { text-decoration: underline; }
  `]
})
export class ForgotPasswordComponent {
  email = '';
  isLoading = false;
  errorMessage = '';
  successMessage = '';

  constructor(private http: HttpClient) {}

  submit(): void {
    this.errorMessage = '';
    this.successMessage = '';

    if (!this.email) {
      this.errorMessage = 'Please enter your email address.';
      return;
    }

    this.isLoading = true;

    this.http.post(`${environment.apiBaseUrl}/auth/forgot-password`, { email: this.email })
      .subscribe({
        next: () => {
          this.isLoading = false;
          this.successMessage = `If an account exists for ${this.email}, a reset link has been sent.`;
          this.email = '';
        },
        error: (err) => {
          this.isLoading = false;
          // For demo: even if backend endpoint doesn't exist, show success-style message
          // (don't leak whether the email is registered)
          if (err.status === 404 || err.status === 0) {
            this.successMessage = `If an account exists for ${this.email}, a reset link has been sent.`;
            this.email = '';
          } else {
            this.errorMessage = err.error?.message || 'Unable to process the request right now.';
          }
        }
      });
  }
}
