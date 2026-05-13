import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsentService } from '../../core/services/consent.service';

type ScaMethod = 'OTP' | 'DEVICE' | 'APP';

interface MethodConfig {
  id: ScaMethod;
  label: string;
  description: string;
  length: number;
  alphabet: string;
}

@Component({
  selector: 'app-sca-verify',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="page-content">
      <div class="page-header">
        <div>
          <h1><i class="fas fa-shield-alt"></i> SCA Verification</h1>
          <p class="page-subtitle">Strong Customer Authentication — verify your identity to activate the consent</p>
        </div>
      </div>

      <div class="glass-card" style="max-width:480px">

        <div class="alert alert-info mb-16" *ngIf="consentId">
          <i class="fas fa-info-circle"></i>
          Verifying consent <strong>#{{ consentId }}</strong>. Complete SCA to activate it.
        </div>

        <div class="form-group">
          <label>Verification Method</label>
          <div class="pill-tabs">
            <button *ngFor="let m of methods"
                    class="pill-tab"
                    [ngClass]="{ 'active': method === m.id }"
                    (click)="selectMethod(m.id)">
              {{ m.label }}
            </button>
          </div>
          <small class="text-muted">{{ currentMethod.description }}</small>
        </div>

        <div class="alert alert-info mb-16">
          <i class="fas fa-terminal"></i>
          A one-time code has been generated. <strong>Open your browser console</strong>
          (F12 → Console) to see it.
        </div>

        <div class="form-group">
          <label>Enter the {{ currentMethod.label }} code</label>
          <input type="text"
                 class="form-control otp-input"
                 [(ngModel)]="enteredCode"
                 [placeholder]="placeholder()"
                 [maxlength]="currentMethod.length"
                 autocomplete="off">
        </div>

        <button class="btn btn-light mb-12" (click)="regenerateCode()">
          <i class="fas fa-redo"></i> Generate a new code
        </button>

        <button class="btn btn-primary" style="width:100%"
                (click)="verify()"
                [disabled]="isVerifying || activated">
          <span *ngIf="!isVerifying && !activated">
            <i class="fas fa-check-circle"></i> Verify &amp; activate consent
          </span>
          <span *ngIf="isVerifying">
            <i class="fas fa-spinner fa-spin"></i> Verifying...
          </span>
          <span *ngIf="activated">
            <i class="fas fa-check-circle"></i> Activated
          </span>
        </button>

        <div class="alert alert-success mt-16" *ngIf="activated">
          <i class="fas fa-check-circle"></i>
          Consent <strong>#{{ consentId }}</strong> is now <strong>ACTIVE</strong>.
          Redirecting to My Consents...
        </div>

        <div class="alert alert-error mt-16" *ngIf="errorMessage">
          <i class="fas fa-times-circle"></i> {{ errorMessage }}
        </div>
      </div>
    </div>
  `,
  styleUrl: './sca-verify.component.css'
})
export class ScaVerifyComponent implements OnInit {

  methods: MethodConfig[] = [
    { id: 'OTP',    label: 'OTP (SMS)',     description: 'A 6-digit numeric code is sent to your registered phone.', length: 6, alphabet: '0123456789' },
    { id: 'DEVICE', label: 'Device push',   description: 'A 4-digit code is pushed to your trusted device.',          length: 4, alphabet: '0123456789' },
    { id: 'APP',    label: 'App approval',  description: 'An 8-character alphanumeric code from your banking app.',   length: 8, alphabet: 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789' }
  ];

  method: ScaMethod = 'OTP';
  generatedCode = '';
  enteredCode = '';
  consentId: number | null = null;

  isVerifying = false;
  activated = false;
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private consentService: ConsentService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['consentId']) this.consentId = Number(params['consentId']);
      if (params['method'] && this.methods.some(m => m.id === params['method'])) {
        this.method = params['method'] as ScaMethod;
      }
      this.regenerateCode();
    });
  }

  get currentMethod(): MethodConfig {
    return this.methods.find(m => m.id === this.method)!;
  }

  selectMethod(id: ScaMethod): void {
    if (this.method === id) return;
    this.method = id;
    this.enteredCode = '';
    this.errorMessage = '';
    this.regenerateCode();
  }

  /** Generate a random code locally based on the SCA method and log it to the console. */
  regenerateCode(): void {
    const cfg = this.currentMethod;
    let code = '';
    for (let i = 0; i < cfg.length; i++) {
      code += cfg.alphabet.charAt(Math.floor(Math.random() * cfg.alphabet.length));
    }
    this.generatedCode = code;
    this.errorMessage = '';

    console.log(
      `%c[SCA] ${cfg.label} code for consent #${this.consentId ?? '—'}: %c${code}`,
      'color:#1e40af; font-weight:bold;',
      'color:#c79a2a; font-weight:bold; font-size:1.1em; letter-spacing:2px;'
    );
  }

  placeholder(): string {
    return '•'.repeat(this.currentMethod.length);
  }

  verify(): void {
    this.errorMessage = '';
    const entered = (this.enteredCode || '').trim().toUpperCase();
    const expected = (this.generatedCode || '').toUpperCase();

    if (!entered) {
      this.errorMessage = `Please enter the ${this.currentMethod.label} code shown in the console.`;
      return;
    }
    if (entered !== expected) {
      this.errorMessage = 'That code is incorrect. Check the browser console for the current code, or generate a new one.';
      return;
    }
    if (!this.consentId) {
      this.errorMessage = 'No consent reference found. Go back to Browse Apps and try again.';
      return;
    }

    this.isVerifying = true;
    this.consentService.activateAfterSca(this.consentId, this.method).subscribe({
      next: () => {
        this.isVerifying = false;
        this.activated = true;
        setTimeout(() => this.router.navigate(['/customer/consents']), 1500);
      },
      error: (err) => {
        this.isVerifying = false;
        this.errorMessage = err?.error?.message
          || 'SCA passed but the consent could not be activated. Please try again.';
      }
    });
  }
}
