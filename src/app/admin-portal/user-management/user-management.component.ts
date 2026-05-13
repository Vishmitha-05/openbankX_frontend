import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../core/services/user.service';
import { User } from '../../core/models/models';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="page-content">
      <div class="page-header">
        <div>
          <h1><i class="fas fa-users"></i> User Management</h1>
          <p class="page-subtitle">Manage users, roles and account status</p>
        </div>
        <button class="btn btn-primary" (click)="openCreate()" *ngIf="!showForm">
          <i class="fas fa-plus"></i> Add User
        </button>
      </div>

      <div class="alert alert-success" *ngIf="successMessage">
        <i class="fas fa-check-circle"></i> {{ successMessage }}
      </div>
      <div class="alert alert-error" *ngIf="errorMessage">
        <i class="fas fa-exclamation-circle"></i> {{ errorMessage }}
      </div>

      <!-- CREATE / EDIT -->
      <div class="glass-card mb-20" *ngIf="showForm" style="max-width:480px">
        <h3 class="mb-16">
          {{ editMode ? 'Edit User' : 'Create User' }}
        </h3>

        <div class="form-group">
          <label>Name</label>
          <input class="form-control" [(ngModel)]="form.name">
        </div>

        <div class="form-group">
          <label>Email</label>
          <input class="form-control" [(ngModel)]="form.email">
        </div>

        <div class="form-group">
          <label>Phone</label>
          <input class="form-control" [(ngModel)]="form.phone">
        </div>

        <div class="form-group" *ngIf="!editMode">
          <label>Password</label>
          <input type="password" class="form-control"
                 [(ngModel)]="form.password">
        </div>

        <div class="form-group">
          <label>Role</label>
          <select class="form-control" [(ngModel)]="form.role">
            <option *ngFor="let r of roles" [value]="r">{{ r }}</option>
          </select>
        </div>

        <div class="flex gap-8">
          <button class="btn btn-success" (click)="save()" [disabled]="isSaving">
            <span *ngIf="!isSaving"><i class="fas fa-check"></i> {{ editMode ? 'Update' : 'Create' }}</span>
            <span *ngIf="isSaving"><i class="fas fa-spinner fa-spin"></i> Saving...</span>
          </button>
          <button class="btn btn-light" (click)="cancel()" [disabled]="isSaving">Cancel</button>
        </div>
      </div>

      <!-- LOADER -->
      <div class="loading-container" *ngIf="isLoading">
        <div class="spinner"></div>
      </div>

      <!-- USERS -->
      <div class="glass-card" *ngIf="!isLoading">
        <table class="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let u of users">
              <td>#{{ u.userId }}</td>
              <td>{{ u.name }}</td>
              <td>{{ u.email }}</td>
              <td><span class="badge badge-info">{{ u.role }}</span></td>
              <td>
                <span class="badge"
                  [ngClass]="u.status === 'ACTIVE' ? 'badge-active' : 'badge-locked'">
                  {{ u.status }}
                </span>
              </td>
              <td>
                <div class="flex gap-8">
                  <button class="btn btn-sm btn-secondary" (click)="edit(u)">Edit</button>
                  <button class="btn btn-sm"
                    [ngClass]="u.status==='ACTIVE' ? 'btn-danger' : 'btn-success'"
                    (click)="toggleStatus(u)">
                    {{ u.status === 'ACTIVE' ? 'Lock' : 'Unlock' }}
                  </button>
                  <button class="btn btn-sm btn-danger" (click)="delete(u.userId)">Delete</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="empty-state" *ngIf="users.length === 0">
          <i class="fas fa-users"></i>
          <p>No users yet</p>
        </div>
      </div>
    </div>
  `,
  styleUrl: './user-management.component.css'
})
export class UserManagementComponent implements OnInit {

  users: User[] = [];
  isLoading = true;
  isSaving = false;
  showForm = false;
  editMode = false;
  successMessage = '';
  errorMessage = '';

  roles = ['CUSTOMER', 'TPP', 'OPERATIONS', 'ADMIN'];

  form: any = this.blankForm();

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  private blankForm() {
    return {
      userId: null,
      name: '',
      email: '',
      phone: '',
      password: '',
      role: 'CUSTOMER',
      status: 'ACTIVE'
    };
  }

  loadUsers(): void {
    this.isLoading = true;
    this.userService.getUsers().subscribe({
      next: (d) => {
        this.users = d || [];
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = this.describeError(err, 'load users');
      }
    });
  }

  private describeError(err: any, action: string): string {
    // rxjs timeout() throws a TimeoutError with no `status`
    if (err?.name === 'TimeoutError') {
      return `Backend did not respond within 20s while trying to ${action}. ` +
             `Make sure the Spring backend has been restarted after the latest code change.`;
    }
    if (err?.status === 0) return 'Cannot reach the backend. Make sure it is running on port 8081.';
    if (err?.status === 401) return 'Your session has expired. Please sign in again.';
    if (err?.status === 403) return 'You need ADMIN access to ' + action + '.';
    if (err?.status === 404 || err?.status === 405) {
      return `This action is not available on the running backend yet — please restart the Spring app so it picks up the new /api/v1/users endpoint.`;
    }
    const serverMsg = err?.error?.message || err?.error?.error;
    if (serverMsg) return serverMsg;
    return `Failed to ${action} (HTTP ${err?.status || '?'}).`;
  }

  openCreate(): void {
    this.editMode = false;
    this.form = this.blankForm();
    this.showForm = true;
    this.successMessage = '';
    this.errorMessage = '';
  }

  edit(u: User): void {
    this.editMode = true;
    this.form = { ...u };
    this.showForm = true;
    this.successMessage = '';
    this.errorMessage = '';
  }

  save(): void {
    if (!this.form.name || !this.form.email) {
      this.errorMessage = 'Name and email are required.';
      return;
    }
    if (!this.editMode && !this.form.password) {
      this.errorMessage = 'Password is required for new users.';
      return;
    }

    this.isSaving = true;
    this.errorMessage = '';

    const wasEdit = this.editMode;
    const userName = this.form.name;
    const req = this.editMode
      ? this.userService.updateUser(this.form.userId, this.form)
      : this.userService.createUser(this.form);

    req.subscribe({
      next: (savedUser: any) => {
        this.isSaving = false;
        this.showForm = false;
        this.successMessage = wasEdit
          ? `User "${userName}" updated successfully.`
          : `User "${userName}" created successfully.`;
        setTimeout(() => (this.successMessage = ''), 4000);

        if (wasEdit && savedUser) {
          const idx = this.users.findIndex(x => x.userId === savedUser.userId);
          if (idx > -1) this.users[idx] = savedUser;
        } else if (savedUser?.userId) {
          this.users.unshift(savedUser);
        } else {
          this.loadUsers();
        }
      },
      error: (err) => {
        this.isSaving = false;
        this.errorMessage = this.describeError(err, wasEdit ? 'update user' : 'create user');
      }
    });
  }

  toggleStatus(u: User): void {
    const newStatus = u.status === 'ACTIVE' ? 'LOCKED' : 'ACTIVE';
    const prev = u.status;
    u.status = newStatus;

    this.userService.updateUser(u.userId, { status: newStatus }).subscribe({
      next: (updated) => {
        u.status = updated?.status ?? newStatus;
        this.successMessage = `"${u.name}" is now ${u.status}.`;
        setTimeout(() => (this.successMessage = ''), 3000);
      },
      error: (err) => {
        u.status = prev;
        this.errorMessage = this.describeError(err, newStatus === 'LOCKED' ? 'lock user' : 'unlock user');
      }
    });
  }

  delete(id: number): void {
    const target = this.users.find(u => u.userId === id);
    const label = target ? `"${target.name}"` : `user #${id}`;
    if (!confirm(`Delete ${label}? This cannot be undone.`)) return;

    this.userService.deleteUser(id).subscribe({
      next: () => {
        this.users = this.users.filter(u => u.userId !== id);
        this.successMessage = `${label} deleted.`;
        setTimeout(() => (this.successMessage = ''), 3000);
      },
      error: (err) => {
        this.errorMessage = this.describeError(err, 'delete user');
      }
    });
  }

  cancel(): void {
    this.showForm = false;
    this.errorMessage = '';
  }
}
