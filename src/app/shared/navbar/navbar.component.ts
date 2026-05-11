import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';
import { NotificationService } from '../../core/services/notification.service';
import { Notification } from '../../core/models/models';

/**
 * NavbarComponent — Top navigation bar with live notification bell.
 */
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="navbar">
      <div class="navbar-left">
        <h2 class="page-title">{{ pageTitle }}</h2>
      </div>

      <div class="navbar-right">
        <!-- Notification Bell -->
        <div class="notification-wrapper">
          <button class="notif-btn" (click)="toggleNotifications()">
            <i class="fas fa-bell"></i>
            <span class="notif-count"
                  *ngIf="unreadCount > 0"
                  [ngStyle]="{ 'background': unreadCount > 5 ? '#ef4444' : '#6366f1' }">
              {{ unreadCount }}
            </span>
          </button>

          <!-- Dropdown -->
          <div class="notif-dropdown" *ngIf="showNotifications">
            <div class="notif-header">
              <span>Notifications</span>
              <div class="flex items-center gap-8">
                <button class="text-sm" style="color:#6366f1; background:none; border:none; cursor:pointer;"
                        (click)="markAllAsRead()" *ngIf="unreadCount > 0">
                  Mark all read
                </button>
                <span class="text-muted text-sm">{{ notifications.length }} total</span>
              </div>
            </div>
            <div class="notif-list">
              <div *ngIf="notifications.length === 0" class="notif-empty">
                <i class="fas fa-check-circle"></i>
                <p>No notifications</p>
              </div>
              <div *ngFor="let notif of notifications"
                   class="notif-item"
                   [ngClass]="{ 'unread': notif.status === 'UNREAD' }"
                   (click)="markRead(notif)">
                <div class="notif-icon"
                     [ngStyle]="{ 'color': getCategoryColor(notif.category), 'background': getCategoryBg(notif.category) }">
                  <i [class]="getCategoryIcon(notif.category)"></i>
                </div>
                <div class="notif-content">
                  <p class="notif-msg">{{ notif.message }}</p>
                  <span class="notif-time text-sm text-muted">{{ notif.createdDate | date:'short' }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- User -->
        <div class="navbar-user">
          <div class="user-avatar-sm">
            <i class="fas fa-user"></i>
          </div>
        </div>
      </div>
    </header>
  `,
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit, OnDestroy {

  @Input() pageTitle: string = 'Dashboard';

  notifications: Notification[] = [];
  showNotifications = false;
  unreadCount = 0;

  private refreshInterval: any;

  constructor(
    private authService: AuthService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.loadNotifications();
    // Auto-refresh every 30 seconds
    this.refreshInterval = setInterval(() => this.loadNotifications(), 30000);
  }

  ngOnDestroy(): void {
    if (this.refreshInterval) {
      clearInterval(this.refreshInterval);
    }
  }

  loadNotifications(): void {
    const userId = this.authService.getUserId();
    const role = this.authService.getRole();
    if (userId) {
      this.notificationService.getNotifications(userId.toString(), role).subscribe({
        next: (data: Notification[]) => {
          this.notifications = data || [];
          this.unreadCount = this.notifications.filter(n => n.status === 'UNREAD').length;
        },
        error: () => {
          this.notifications = [];
          this.unreadCount = 0;
        }
      });
    }
  }

  toggleNotifications(): void {
    this.showNotifications = !this.showNotifications;
    if (this.showNotifications) {
      this.loadNotifications(); // refresh on open
    }
  }

  markRead(notif: Notification): void {
    if (notif.status === 'UNREAD') {
      this.notificationService.markAsRead(notif.notificationId).subscribe({
        next: () => {
          notif.status = 'READ';
          this.unreadCount = this.notifications.filter(n => n.status === 'UNREAD').length;
        },
        error: () => {
          notif.status = 'READ';
          this.unreadCount = this.notifications.filter(n => n.status === 'UNREAD').length;
        }
      });
    }
  }

  markAllAsRead(): void {
    const userId = this.authService.getUserId();
    const role = this.authService.getRole();
    this.notificationService.markAllRead(userId.toString(), role).subscribe({
      next: () => {
        this.notifications.forEach(n => n.status = 'READ');
        this.unreadCount = 0;
      },
      error: () => {
        this.notifications.forEach(n => n.status = 'READ');
        this.unreadCount = 0;
      }
    });
  }

  getCategoryIcon(category: string): string {
    switch (category) {
      case 'CONSENT':  return 'fas fa-handshake';
      case 'SECURITY': return 'fas fa-shield-alt';
      case 'USAGE':    return 'fas fa-chart-bar';
      case 'INCIDENT': return 'fas fa-exclamation-triangle';
      default:         return 'fas fa-bell';
    }
  }

  getCategoryColor(category: string): string {
    switch (category) {
      case 'CONSENT':  return '#6366f1';
      case 'SECURITY': return '#ef4444';
      case 'USAGE':    return '#f59e0b';
      case 'INCIDENT': return '#ef4444';
      default:         return '#6366f1';
    }
  }

  getCategoryBg(category: string): string {
    switch (category) {
      case 'CONSENT':  return '#e0e7ff';
      case 'SECURITY': return '#fee2e2';
      case 'USAGE':    return '#fef3c7';
      case 'INCIDENT': return '#fee2e2';
      default:         return '#e0e7ff';
    }
  }
}

