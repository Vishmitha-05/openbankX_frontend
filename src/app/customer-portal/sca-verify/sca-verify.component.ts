import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../core/services/auth.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-sca-verify',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="page-content">
      <div class="page-header"><div><h1><i class="fas fa-shield-alt"></i> SCA Verification</h1>
        <p class="page-subtitle">Strong Customer Authentication — verify your identity</p></div>
      </div>

      <div class="glass-card" style="max-width:440px">
        <div class="sca-icon-wrapper">
          <div class="sca-icon"><i class="fas fa-lock"></i></div>
        </div>

        <!-- Consent info banner -->
        <div class="alert alert-info mb-16" *ngIf="consentId" style="background:rgba(102,126,234,0.15);border:1px solid rgba(102,126,234,0.3);color:#a5b4fc;border-radius:10px;padding:12px;">
          <i class="fas fa-info-circle"></i> Verifying consent <strong>#{{ consentId }}</strong>. Complete SCA to activate it.
        </div>

        <div class="form-group">
          <label>Verification Method</label>
          <div class="pill-tabs">
            <button *ngFor="let m of methods" class="pill-tab"
                    [ngClass]="{ 'active': method === m }"
                    (click)="method = m">{{ m }}</button>
          </div>
        </div>

        <div class="form-group">
          <label>Reference ID (Consent/Payment ID)</label>
          <input type="text" class="form-control" [(ngModel)]="referenceId" placeholder="e.g., 123456">
        </div>

        <!-- OTP Display Box -->
        <div class="alert alert-info mb-16" *ngIf="otpGenerated && generatedOtp" style="background:rgba(34,197,94,0.15);border:1px solid rgba(34,197,94,0.3);color:#86efac;border-radius:10px;padding:16px;">
          <div style="text-align:center">
            <div style="font-size:0.9rem;margin-bottom:8px;opacity:0.8">Your OTP Code:</div>
            <div style="font-size:2rem;font-weight:bold;letter-spacing:4px;font-family:monospace;">{{ generatedOtp }}</div>
            <div style="font-size:0.8rem;margin-top:8px;opacity:0.7">This OTP has been generated for your SCA verification</div>
          </div>
        </div>

        <div class="form-group" *ngIf="method === 'OTP'">
          <label>Enter OTP Code</label>
          <input type="text" class="form-control otp-input" [(ngModel)]="otpCode" placeholder="••••••" maxlength="6">
        </div>

        <button class="btn btn-primary" style="width:100%" (click)="verify()" [disabled]="isVerifying">
          <span *ngIf="!isVerifying"><i class="fas fa-check-circle"></i> Verify</span>
          <span *ngIf="isVerifying"><i class="fas fa-spinner fa-spin"></i> Verifying...</span>
        </button>

        <div class="alert alert-success mt-16" *ngIf="result === 'PASS' && !consentActivated">
          <i class="fas fa-check-circle"></i> SCA verification successful! Activating consent...
        </div>
        <div class="alert alert-success mt-16" *ngIf="consentActivated">
          <i class="fas fa-check-circle"></i> Consent <strong>#{{ consentId }}</strong> is now <strong>ACTIVE</strong>. You can now use this app!
          <div class="mt-12">
            <button class="btn btn-secondary btn-sm" (click)="goToConsents()">
              <i class="fas fa-handshake"></i> View My Consents
            </button>
          </div>
        </div>
        <div class="alert alert-error mt-16" *ngIf="result === 'FAIL'">
          <i class="fas fa-times-circle"></i> Verification failed. Please try again.
        </div>
        <div class="alert alert-error mt-16" *ngIf="errorMessage">
          <i class="fas fa-exclamation-circle"></i> {{ errorMessage }}
        </div>
      </div>
    </div>
  `,
  styleUrl: './sca-verify.component.css'
})
export class ScaVerifyComponent implements OnInit {
  method = 'OTP';
  referenceId = '';
  otpCode = '';
  result = '';
  errorMessage = '';
  isVerifying = false;
  consentActivated = false;
  consentId: string | null = null;
  generatedOtp: string = '';
  otpGenerated = false;
  methods = ['OTP', 'DEVICE', 'APP'];

  private apiUrl = environment.apiBaseUrl;

  constructor(
    private authService: AuthService,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Read consentId from query params (set by app-browser after consent creation)
    this.route.queryParams.subscribe(params => {
      if (params['consentId']) {
        this.consentId = params['consentId'];
        this.referenceId = this.consentId!;
        // Auto-generate OTP when page loads
        this.generateOtp();
      }
    });
  }

  generateOtp(): void {
    if (!this.referenceId) {
      this.errorMessage = 'Reference ID is required';
      return;
    }

    this.http.post<any>(`${this.apiUrl}/sca/otp?userId=${this.authService.getUserId()}&referenceId=${this.referenceId}`, {}).subscribe({
      next: (response) => {
        this.generatedOtp = response.otp || response.code || '123456';
        this.otpGenerated = true;
        console.log('OTP Generated:', this.generatedOtp);
      },
      error: (err) => {
        console.error('OTP generation error:', err);
        this.errorMessage = 'Failed to generate OTP. Please try again.';
      }
    });
  }

  verify(): void {
    if (!this.otpCode.trim()) {
      this.errorMessage = 'Please enter the OTP code';
      return;
    }

    this.isVerifying = true;
    this.result = '';
    this.errorMessage = '';
    this.consentActivated = false;

    this.authService.verifySca(this.authService.getUserId(), this.method, this.referenceId).subscribe({
      next: () => {
        this.result = 'PASS';
        this.isVerifying = false;

        // If we have a consentId, activate the consent after SCA passes
        if (this.consentId) {
          this.activateConsent();
        }
      },
      error: (err) => {
        console.error('SCA verification error:', err);
        this.errorMessage = 'SCA verification failed. Please ensure backend is running.';
        this.isVerifying = false;
      }
    });
  }

  private activateConsent(): void {
    this.http.put<any>(`${this.apiUrl}/consents/${this.consentId}/activate`, {}).subscribe({
      next: () => {
        this.consentActivated = true;
      },
      error: (err) => {
        console.error('Consent activation error:', err);
        this.errorMessage = 'SCA passed but failed to activate consent. Please try again.';
      }
    });
  }

  goToConsents(): void {
    this.router.navigate(['/customer/consents']);
  }
}

