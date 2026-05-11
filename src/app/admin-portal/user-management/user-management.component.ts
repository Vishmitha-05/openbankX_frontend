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
        </div>
        <button class="btn btn-primary" (click)="openCreate()">
          <i class="fas fa-plus"></i> Add User
        </button>
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
 
        <button class="btn btn-success" (click)="save()">
          {{ editMode ? 'Update' : 'Create' }}
        </button>
 
        <button class="btn btn-light ml-8" (click)="cancel()">Cancel</button>
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
                  [ngClass]="u.status === 'ACTIVE'
                    ? 'badge-active'
                    : 'badge-locked'">
                  {{ u.status }}
                </span>
              </td>
              <td>
                <button class="btn btn-sm btn-secondary" (click)="edit(u)">
                  Edit
                </button>
 
                <button class="btn btn-sm"
                  [ngClass]="u.status==='ACTIVE'
                    ? 'btn-danger'
                    : 'btn-success'"
                  (click)="toggleStatus(u)">
                  {{ u.status === 'ACTIVE' ? 'Lock' : 'Unlock' }}
                </button>
 
                <button class="btn btn-sm btn-danger"
                        (click)="delete(u.userId)">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styleUrl: './user-management.component.css'
})
export class UserManagementComponent implements OnInit {
 
  users: User[] = [];
  isLoading = true;
  showForm = false;
  editMode = false;
 
  roles = ['CUSTOMER', 'TPP', 'OPERATIONS', 'ADMIN'];
 
  form: any = {
    userId: null,
    name: '',
    email: '',
    phone: '',
    password: '',
    role: 'CUSTOMER',
    status: 'ACTIVE'
  };
 
  constructor(private userService: UserService) {}
 
  ngOnInit(): void {
    this.loadUsers();
  }
 
  /* ✅ FIX 1: Proper loading handling */
  loadUsers(): void {
    this.isLoading = true;
 
    this.userService.getUsers().subscribe({
      next: (d) => {
        this.users = d || [];
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }
 
  openCreate(): void {
    this.editMode = false;
    this.form = {
      name: '',
      email: '',
      phone: '',
      password: '',
      role: 'CUSTOMER',
      status: 'ACTIVE'
    };
    this.showForm = true;
  }
 
  edit(u: User): void {
    this.editMode = true;
    this.form = { ...u };
    this.showForm = true;
  }
 
  /* ✅ FIX 2: Reload data after save */
  save(): void {
    this.isLoading = true;
 
    const req = this.editMode
      ? this.userService.updateUser(this.form.userId, this.form)
      : this.userService.createUser(this.form);
 
    req.subscribe({
      next: () => {
        this.showForm = false;
        this.loadUsers();
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }
 
  /* ✅ FIX 3: Reload data after lock/unlock */
  toggleStatus(u: User): void {
    const status = u.status === 'ACTIVE' ? 'LOCKED' : 'ACTIVE';
 
    const previousStatus = u.status;
    u.status = status;
 
    this.userService.updateUser(u.userId, { status }).subscribe({
      next: (updated) => {
        u.status = updated?.status ?? status;
      },
      error: () => {
        u.status = previousStatus;
      }
    });
  }
 
  delete(id: number): void {
    if (!confirm('Delete user?')) return;
 
    this.isLoading = true;
    this.userService.deleteUser(id).subscribe({
      next: () => this.loadUsers(),
      error: () => this.isLoading = false
    });
  }
 
  cancel(): void {
    this.showForm = false;
  }
}
 