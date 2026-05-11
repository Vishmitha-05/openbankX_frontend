import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TppService } from '../../core/services/tpp.service';

@Component({
  selector: 'app-tpp-registration',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tpp-registration.component.html',
  styleUrl: './tpp-registration.component.css'
})
export class TppRegistrationComponent {
  legalName = '';
  registrationNumber = '';
  contactInfo = '';
  certificationRef = '';
  isSubmitting = false;
  successMessage = '';
  errorMessage = '';

  constructor(private tppService: TppService, private router: Router) {}

  register(): void {
    this.errorMessage = '';
    this.successMessage = '';
    if (!this.legalName || !this.registrationNumber || !this.contactInfo) {
      this.errorMessage = 'Legal name, registration number, and contact info are required.';
      return;
    }
    this.isSubmitting = true;
    this.tppService.registerTpp({
      legalName: this.legalName,
      registrationNumber: this.registrationNumber,
      contactInfo: this.contactInfo,
      certificationRef: this.certificationRef || 'CERT-' + Date.now(),
      status: 'SANDBOX'
    }).subscribe({
      next: () => {
        this.successMessage = 'TPP registered successfully! Redirecting to apps...';
        setTimeout(() => this.router.navigate(['/developer/apps']), 1500);
      },
      error: () => {
        this.errorMessage = 'Failed to register TPP. Please ensure backend is running.';
        this.isSubmitting = false;
      }
    });
  }
}
