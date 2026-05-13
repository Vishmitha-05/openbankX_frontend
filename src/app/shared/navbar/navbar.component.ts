import { Component, Input, OnInit, OnDestroy, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { NotificationService } from '../../core/services/notification.service';
import { Notification } from '../../core/models/models';

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
          <button class="notif-btn" (click)="toggleNotifications()" aria-label="Notifications">
            <i class="fas fa-bell"></i>
            <span class="notif-count" *ngIf="unreadCount > 0">{{ unreadCount }}</span>
          </button>

          <div class="notif-dropdown" *ngIf="showNotifications">
            <div class="notif-header">
              <span>Notifications</span>
              <div class="flex items-center gap-8">
                <button class="link-btn"
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

        <!-- Profile Menu -->
        <div class="profile-wrapper">
          <button class="user-avatar-sm" (click)="toggleProfile()" aria-label="Profile menu">
            <span class="avatar-initials">{{ initials }}</span>
          </button>

          <div class="profile-dropdown" *ngIf="showProfile">
            <div class="profile-header">
              <div class="profile-avatar-lg">{{ initials }}</div>
              <div class="profile-meta">
                <div class="profile-name">{{ session?.name || 'User' }}</div>
                <div class="profile-email">{{ session?.email || '' }}</div>
                <span class="badge badge-info mt-4">{{ session?.role }}</span>
              </div>
            </div>
            <div class="profile-divider"></div>
            <button class="profile-item" (click)="goToNotifications()">
              <i class="fas fa-bell"></i> Notifications
            </button>
            <button class="profile-item danger" (click)="logout()">
              <i class="fas fa-sign-out-alt"></i> Sign out
            </button>
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
  showProfile = false;
  unreadCount = 0;
  session: any = null;
  initials = 'U';

  private refreshInterval: any;

  constructor(
    private authService: AuthService,
    private notificationService: NotificationService,
    private router: Router,
    private elRef: ElementRef
  ) {}

  ngOnInit(): void {
    this.session = this.authService.getSession();
    this.initials = this.computeInitials(this.session?.name);
    this.loadNotifications();
    this.refreshInterval = setInterval(() => this.loadNotifications(), 30000);
  }

  ngOnDestroy(): void {
    if (this.refreshInterval) {
      clearInterval(this.refreshInterval);
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.elRef.nativeElement.contains(event.target)) {
      this.showNotifications = false;
      this.showProfile = false;
    }
  }

  private computeInitials(name: string | undefined): string {
    if (!name) return 'U';
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
    return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
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
      this.showProfile = false;
      this.loadNotifications();
    }
  }

  toggleProfile(): void {
    this.showProfile = !this.showProfile;
    if (this.showProfile) {
      this.showNotifications = false;
    }
  }

  goToNotifications(): void {
    this.showProfile = false;
    this.router.navigate(['/notifications']);
  }

  logout(): void {
    this.authService.logout();
    this.showProfile = false;
    this.router.navigate(['/login']);
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
      case 'CONSENT':  return '#1e40af';
      case 'SECURITY': return '#dc2626';
      case 'USAGE':    return '#d97706';
      case 'INCIDENT': return '#dc2626';
      default:         return '#1e40af';
    }
  }

  getCategoryBg(category: string): string {
    switch (category) {
      case 'CONSENT':  return '#dbeafe';
      case 'SECURITY': return '#fee2e2';
      case 'USAGE':    return '#fef3c7';
      case 'INCIDENT': return '#fee2e2';
      default:         return '#dbeafe';
    }
  }
}
