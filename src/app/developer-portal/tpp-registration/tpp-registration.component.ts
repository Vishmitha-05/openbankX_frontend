import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TppService } from '../../core/services/tpp.service';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-tpp-registration',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tpp-registration.component.html',
  styleUrl: './tpp-registration.component.css'
})
export class TppRegistrationComponent implements OnInit {
  legalName = '';
  registrationNumber = '';
  contactInfo = '';
  certificationRef = '';
  isSubmitting = false;
  successMessage = '';
  errorMessage = '';

  constructor(
    private tppService: TppService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    // Tie this TPP company to the logged-in developer's account
    this.contactInfo = this.authService.getEmail();
  }

  register(): void {
    this.errorMessage = '';
    this.successMessage = '';
    if (!this.legalName || !this.registrationNumber) {
      this.errorMessage = 'Legal name and registration number are required.';
      return;
    }
    // Always overwrite contactInfo with the logged-in user's email so we can
    // correctly attribute TPP companies (and downstream apps) to this account.
    const ownerEmail = this.authService.getEmail();
    if (!ownerEmail) {
      this.errorMessage = 'Your session has expired. Please sign in again.';
      return;
    }

    this.isSubmitting = true;
    this.tppService.registerTpp({
      legalName: this.legalName,
      registrationNumber: this.registrationNumber,
      contactInfo: ownerEmail,
      certificationRef: this.certificationRef || 'CERT-' + Date.now(),
      status: 'SANDBOX'
    }).subscribe({
      next: () => {
        this.successMessage = 'TPP registered successfully! Redirecting to apps...';
        setTimeout(() => this.router.navigate(['/developer/apps']), 1500);
      },
      error: (err) => {
        this.isSubmitting = false;
        this.errorMessage = this.describeError(err);
      }
    });
  }

  /** Turn the HTTP error into a meaningful, user-readable message. */
  private describeError(err: any): string {
    if (err?.status === 0) {
      return 'Cannot reach the backend. Make sure it is running on port 8081.';
    }
    if (err?.status === 401) {
      return 'Your session has expired. Please sign in again.';
    }
    if (err?.status === 403) {
      return 'You do not have permission to register a TPP.';
    }
    const serverMsg: string | undefined =
      err?.error?.message || err?.error?.error || (typeof err?.error === 'string' ? err.error : undefined);
    if (serverMsg) {
      if (/duplicate|unique|already exists|constraint/i.test(serverMsg)) {
        return `A TPP with registration number "${this.registrationNumber}" already exists. Use a different number.`;
      }
      return serverMsg;
    }
    if (err?.status === 409) {
      return `A TPP with registration number "${this.registrationNumber}" already exists.`;
    }
    if (err?.status === 500) {
      return 'Server error while registering TPP. Likely the registration number is already taken — try a different one.';
    }
    return 'Failed to register TPP. Please try again.';
  }
}
