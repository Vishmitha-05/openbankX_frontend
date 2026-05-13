import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

interface ScaPolicy { scope: string; description: string; requiresSca: boolean; }
interface ScaMethod { label: string; icon: string; enabled: boolean; }

@Component({
  selector: 'app-sca-policy',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sca-policy.component.html',
  styleUrl: './sca-policy.component.css'
})
export class ScaPolicyComponent implements OnInit {
  isSaving = false;
  saveMessage = '';
  errorMessage = '';
  lastSavedAt: string | null = null;
  savedLocation = '';

  private readonly STORAGE_KEY = 'obx_sca_policy';

  scaPolicies: ScaPolicy[] = [
    { scope: 'accounts:read',  description: 'View account list',         requiresSca: false },
    { scope: 'balances:read',  description: 'View balances',             requiresSca: true  },
    { scope: 'payments:write', description: 'Initiate payments',         requiresSca: true  },
    { scope: 'funds:read',     description: 'Check funds availability',  requiresSca: true  }
  ];

  scaMethods: ScaMethod[] = [
    { label: 'OTP (SMS)',     icon: 'fas fa-sms',          enabled: true  },
    { label: 'Device Push',   icon: 'fas fa-mobile-alt',   enabled: true  },
    { label: 'App Approval',  icon: 'fas fa-fingerprint',  enabled: false }
  ];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const cached = localStorage.getItem(this.STORAGE_KEY);
    if (cached) {
      try {
        const data = JSON.parse(cached);
        if (data.policies) this.scaPolicies = data.policies;
        if (data.methods) this.scaMethods = data.methods;
        if (data.savedAt) {
          this.lastSavedAt = data.savedAt;
          this.savedLocation = data.location || 'local cache';
        }
      } catch { /* ignore */ }
    }
  }

  savePolicy(): void {
    this.isSaving = true;
    this.saveMessage = '';
    this.errorMessage = '';

    const payload = {
      policies: this.scaPolicies,
      methods: this.scaMethods
    };

    this.http.post(`${environment.apiBaseUrl}/sca/policy`, payload).subscribe({
      next: () => {
        this.persistLocally('database');
        this.isSaving = false;
        this.saveMessage = 'Policy saved to the SCA policy database.';
        setTimeout(() => (this.saveMessage = ''), 4000);
      },
      error: () => {
        this.persistLocally('local browser storage');
        this.isSaving = false;
        this.saveMessage = 'Policy saved locally (backend endpoint unavailable).';
        setTimeout(() => (this.saveMessage = ''), 4000);
      }
    });
  }

  private persistLocally(location: string): void {
    const stamp = new Date().toISOString();
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify({
      policies: this.scaPolicies,
      methods: this.scaMethods,
      savedAt: stamp,
      location
    }));
    this.lastSavedAt = stamp;
    this.savedLocation = location;
  }
}
