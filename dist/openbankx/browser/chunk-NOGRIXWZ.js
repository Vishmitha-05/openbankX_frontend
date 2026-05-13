import {
  NotificationService
} from "./chunk-L7ZLHMBC.js";
import {
  AuthService
} from "./chunk-WCVDOMTU.js";
import "./chunk-TX3HFKHN.js";
import "./chunk-5C4TBQN6.js";
import {
  CommonModule,
  Component,
  DatePipe,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-6UHLKSNQ.js";

// src/app/shared/notification-list/notification-list.component.ts
var _c0 = (a0) => ({ "unread": a0 });
var _c1 = (a0) => ({ "background": a0 });
function NotificationListComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "span", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 11);
    \u0275\u0275listener("click", function NotificationListComponent_div_8_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.markAllRead());
    });
    \u0275\u0275element(4, "i", 12);
    \u0275\u0275text(5, " Mark all read");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.unreadCount, " unread");
  }
}
function NotificationListComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "div", 14);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Loading notifications...");
    \u0275\u0275elementEnd()();
  }
}
function NotificationListComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "i", 16);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "No notifications yet");
    \u0275\u0275elementEnd()();
  }
}
function NotificationListComponent_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275listener("click", function NotificationListComponent_div_11_div_1_Template_div_click_0_listener() {
      const n_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openDetail(n_r4));
    });
    \u0275\u0275elementStart(1, "div", 20);
    \u0275\u0275element(2, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 21)(4, "p", 22);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 23)(7, "span", 24);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 25);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 26)(13, "button", 27);
    \u0275\u0275listener("click", function NotificationListComponent_div_11_div_1_Template_button_click_13_listener($event) {
      const n_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleRead(n_r4, $event));
    });
    \u0275\u0275element(14, "i", 28);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const n_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(13, _c0, n_r4.status === "UNREAD"));
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(15, _c1, ctx_r1.getCategoryColor(n_r4.category)));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getCategoryIcon(n_r4.category));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(n_r4.message);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", "badge-" + n_r4.category.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(n_r4.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 10, n_r4.createdDate, "medium"));
    \u0275\u0275advance(3);
    \u0275\u0275property("title", n_r4.status === "READ" ? "Mark unread" : "Mark read");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", n_r4.status === "READ" ? "fas fa-envelope-open" : "fas fa-envelope");
  }
}
function NotificationListComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275template(1, NotificationListComponent_div_11_div_1_Template, 15, 17, "div", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.notifications);
  }
}
function NotificationListComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275listener("click", function NotificationListComponent_div_12_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDetail());
    });
    \u0275\u0275elementStart(1, "div", 30);
    \u0275\u0275listener("click", function NotificationListComponent_div_12_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 31)(3, "div", 32);
    \u0275\u0275element(4, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "Notification Detail");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 33);
    \u0275\u0275listener("click", function NotificationListComponent_div_12_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDetail());
    });
    \u0275\u0275element(8, "i", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 35)(10, "p", 36);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 37)(13, "div")(14, "span", 25);
    \u0275\u0275text(15, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "br");
    \u0275\u0275elementStart(17, "span", 24);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div")(20, "span", 25);
    \u0275\u0275text(21, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "br");
    \u0275\u0275elementStart(23, "strong");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div")(26, "span", 25);
    \u0275\u0275text(27, "Timestamp");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "br");
    \u0275\u0275elementStart(29, "span");
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div")(33, "span", 25);
    \u0275\u0275text(34, "Notification ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "br");
    \u0275\u0275elementStart(36, "span");
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(38, "div", 38)(39, "button", 39);
    \u0275\u0275listener("click", function NotificationListComponent_div_12_Template_button_click_39_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.toggleRead(ctx_r1.selectedNotification, $event);
      return \u0275\u0275resetView(ctx_r1.closeDetail());
    });
    \u0275\u0275element(40, "i", 28);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "button", 11);
    \u0275\u0275listener("click", function NotificationListComponent_div_12_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDetail());
    });
    \u0275\u0275text(43, "Close");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(14, _c1, ctx_r1.getCategoryColor(ctx_r1.selectedNotification.category)));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getCategoryIcon(ctx_r1.selectedNotification.category));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.selectedNotification.message);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngClass", "badge-" + ctx_r1.selectedNotification.category.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.selectedNotification.category);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.selectedNotification.status);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(31, 11, ctx_r1.selectedNotification.createdDate, "full"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("#", ctx_r1.selectedNotification.notificationId);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r1.selectedNotification.status === "READ" ? "fas fa-envelope" : "fas fa-envelope-open");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedNotification.status === "READ" ? "Mark Unread" : "Mark Read", " ");
  }
}
var NotificationListComponent = class _NotificationListComponent {
  notificationService;
  authService;
  notifications = [];
  selectedNotification = null;
  isLoading = true;
  errorMessage = "";
  constructor(notificationService, authService) {
    this.notificationService = notificationService;
    this.authService = authService;
  }
  ngOnInit() {
    const userId = this.authService.getUserId();
    const role = this.authService.getRole();
    this.notificationService.getNotifications(userId.toString(), role).subscribe({
      next: (d) => {
        this.notifications = d || [];
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = "Unable to load notifications.";
        this.isLoading = false;
      }
    });
  }
  openDetail(n) {
    this.selectedNotification = n;
  }
  closeDetail() {
    this.selectedNotification = null;
  }
  toggleRead(n, event) {
    event.stopPropagation();
    const newStatus = n.status === "READ" ? "UNREAD" : "READ";
    this.notificationService.markAsRead(n.notificationId).subscribe({
      next: () => {
        n.status = newStatus;
      },
      error: () => {
        n.status = newStatus;
      }
    });
  }
  markAllRead() {
    const userId = this.authService.getUserId();
    const role = this.authService.getRole();
    this.notificationService.markAllRead(userId.toString(), role).subscribe({
      next: () => {
        this.notifications.forEach((n) => n.status = "READ");
      },
      error: () => {
        this.notifications.forEach((n) => n.status = "READ");
      }
    });
  }
  getCategoryIcon(cat) {
    switch (cat) {
      case "CONSENT":
        return "fas fa-handshake";
      case "SECURITY":
        return "fas fa-shield-alt";
      case "USAGE":
        return "fas fa-chart-bar";
      case "INCIDENT":
        return "fas fa-exclamation-triangle";
      default:
        return "fas fa-bell";
    }
  }
  getCategoryColor(cat) {
    switch (cat) {
      case "CONSENT":
        return "#667eea";
      case "SECURITY":
        return "#ef4444";
      case "USAGE":
        return "#10b981";
      case "INCIDENT":
        return "#f59e0b";
      default:
        return "#6b7280";
    }
  }
  get unreadCount() {
    return this.notifications.filter((n) => n.status === "UNREAD").length;
  }
  static \u0275fac = function NotificationListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationListComponent)(\u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotificationListComponent, selectors: [["app-notification-list"]], decls: 13, vars: 5, consts: [[1, "page-content"], [1, "page-header"], [1, "fas", "fa-bell"], [1, "page-subtitle"], ["class", "header-actions", 4, "ngIf"], ["class", "loading-container", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "notification-list", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "header-actions"], [1, "unread-badge"], [1, "btn", "btn-secondary", "btn-sm", 3, "click"], [1, "fas", "fa-check-double"], [1, "loading-container"], [1, "spinner"], [1, "empty-state"], [1, "fas", "fa-bell-slash"], [1, "notification-list"], ["class", "notification-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "notification-item", 3, "click", "ngClass"], [1, "notif-icon", 3, "ngStyle"], [1, "notif-body"], [1, "notif-message"], [1, "notif-meta"], [1, "badge", 3, "ngClass"], [1, "text-sm", "text-muted"], [1, "notif-actions"], [1, "btn-icon", 3, "click", "title"], [3, "ngClass"], [1, "modal-overlay", 3, "click"], [1, "modal-card", 3, "click"], [1, "modal-header"], [1, "modal-icon", 3, "ngStyle"], [1, "btn-icon", "close-btn", 3, "click"], [1, "fas", "fa-times"], [1, "modal-body"], [1, "detail-message"], [1, "detail-grid"], [1, "modal-footer"], [1, "btn", "btn-primary", "btn-sm", 3, "click"]], template: function NotificationListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
      \u0275\u0275element(4, "i", 2);
      \u0275\u0275text(5, " Notifications");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 3);
      \u0275\u0275text(7, "Alerts, consent updates & security events");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(8, NotificationListComponent_div_8_Template, 6, 1, "div", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275template(9, NotificationListComponent_div_9_Template, 4, 0, "div", 5)(10, NotificationListComponent_div_10_Template, 4, 0, "div", 6)(11, NotificationListComponent_div_11_Template, 2, 1, "div", 7)(12, NotificationListComponent_div_12_Template, 44, 16, "div", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.unreadCount > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.notifications.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.notifications.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedNotification);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, NgStyle, DatePipe], styles: ["\n.notification-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.notification-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px 20px;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.7);\n  cursor: pointer;\n  transition: all 0.2s;\n  border-left: 3px solid transparent;\n}\n.notification-item[_ngcontent-%COMP%]:hover {\n  transform: translateX(4px);\n  background: rgba(255, 255, 255, 0.9);\n}\n.notification-item.unread[_ngcontent-%COMP%] {\n  border-left-color: var(--primary);\n  background: rgba(102, 126, 234, 0.06);\n  font-weight: 500;\n}\n.notif-icon[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 1rem;\n  flex-shrink: 0;\n}\n.notif-body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.notif-message[_ngcontent-%COMP%] {\n  margin: 0 0 6px;\n  line-height: 1.4;\n}\n.notif-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.notif-actions[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 1.1rem;\n  color: var(--text-muted);\n  padding: 6px;\n  border-radius: 8px;\n}\n.btn-icon[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.05);\n  color: var(--primary);\n}\n.unread-badge[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: #fff;\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.modal-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  max-width: 520px;\n  width: 90%;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 20px 24px;\n  border-bottom: 1px solid #eee;\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  flex: 1;\n  margin: 0;\n}\n.modal-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n}\n.close-btn[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.detail-message[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  line-height: 1.6;\n  margin: 0 0 20px;\n}\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  padding: 16px 24px;\n  border-top: 1px solid #eee;\n  justify-content: flex-end;\n}\n.badge-consent[_ngcontent-%COMP%] {\n  background: rgba(102, 126, 234, 0.15);\n  color: #667eea;\n}\n.badge-security[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.15);\n  color: #ef4444;\n}\n.badge-usage[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.15);\n  color: #10b981;\n}\n.badge-incident[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.15);\n  color: #f59e0b;\n}\n/*# sourceMappingURL=notification-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationListComponent, [{
    type: Component,
    args: [{ selector: "app-notification-list", standalone: true, imports: [CommonModule], template: `<div class="page-content">\r
  <div class="page-header">\r
    <div>\r
      <h1><i class="fas fa-bell"></i> Notifications</h1>\r
      <p class="page-subtitle">Alerts, consent updates & security events</p>\r
    </div>\r
    <div class="header-actions" *ngIf="unreadCount > 0">\r
      <span class="unread-badge">{{ unreadCount }} unread</span>\r
      <button class="btn btn-secondary btn-sm" (click)="markAllRead()"><i class="fas fa-check-double"></i> Mark all read</button>\r
    </div>\r
  </div>\r
\r
  <div class="loading-container" *ngIf="isLoading"><div class="spinner"></div><span>Loading notifications...</span></div>\r
\r
  <div class="empty-state" *ngIf="!isLoading && notifications.length === 0">\r
    <i class="fas fa-bell-slash"></i><p>No notifications yet</p>\r
  </div>\r
\r
  <div class="notification-list" *ngIf="!isLoading && notifications.length > 0">\r
    <div *ngFor="let n of notifications" class="notification-item" [ngClass]="{ 'unread': n.status === 'UNREAD' }" (click)="openDetail(n)">\r
      <div class="notif-icon" [ngStyle]="{ 'background': getCategoryColor(n.category) }">\r
        <i [class]="getCategoryIcon(n.category)"></i>\r
      </div>\r
      <div class="notif-body">\r
        <p class="notif-message">{{ n.message }}</p>\r
        <div class="notif-meta">\r
          <span class="badge" [ngClass]="'badge-' + n.category.toLowerCase()">{{ n.category }}</span>\r
          <span class="text-sm text-muted">{{ n.createdDate | date:'medium' }}</span>\r
        </div>\r
      </div>\r
      <div class="notif-actions">\r
        <button class="btn-icon" (click)="toggleRead(n, $event)" [title]="n.status === 'READ' ? 'Mark unread' : 'Mark read'">\r
          <i [ngClass]="n.status === 'READ' ? 'fas fa-envelope-open' : 'fas fa-envelope'"></i>\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Detail Popup (Card 31) -->\r
  <div class="modal-overlay" *ngIf="selectedNotification" (click)="closeDetail()">\r
    <div class="modal-card" (click)="$event.stopPropagation()">\r
      <div class="modal-header">\r
        <div class="modal-icon" [ngStyle]="{ 'background': getCategoryColor(selectedNotification.category) }">\r
          <i [class]="getCategoryIcon(selectedNotification.category)"></i>\r
        </div>\r
        <h3>Notification Detail</h3>\r
        <button class="btn-icon close-btn" (click)="closeDetail()"><i class="fas fa-times"></i></button>\r
      </div>\r
      <div class="modal-body">\r
        <p class="detail-message">{{ selectedNotification.message }}</p>\r
        <div class="detail-grid">\r
          <div><span class="text-sm text-muted">Category</span><br><span class="badge" [ngClass]="'badge-' + selectedNotification.category.toLowerCase()">{{ selectedNotification.category }}</span></div>\r
          <div><span class="text-sm text-muted">Status</span><br><strong>{{ selectedNotification.status }}</strong></div>\r
          <div><span class="text-sm text-muted">Timestamp</span><br><span>{{ selectedNotification.createdDate | date:'full' }}</span></div>\r
          <div><span class="text-sm text-muted">Notification ID</span><br><span>#{{ selectedNotification.notificationId }}</span></div>\r
        </div>\r
      </div>\r
      <div class="modal-footer">\r
        <button class="btn btn-primary btn-sm" (click)="toggleRead(selectedNotification, $event); closeDetail()">\r
          <i [ngClass]="selectedNotification.status === 'READ' ? 'fas fa-envelope' : 'fas fa-envelope-open'"></i>\r
          {{ selectedNotification.status === 'READ' ? 'Mark Unread' : 'Mark Read' }}\r
        </button>\r
        <button class="btn btn-secondary btn-sm" (click)="closeDetail()">Close</button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/shared/notification-list/notification-list.component.css */\n.notification-list {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.notification-item {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px 20px;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.7);\n  cursor: pointer;\n  transition: all 0.2s;\n  border-left: 3px solid transparent;\n}\n.notification-item:hover {\n  transform: translateX(4px);\n  background: rgba(255, 255, 255, 0.9);\n}\n.notification-item.unread {\n  border-left-color: var(--primary);\n  background: rgba(102, 126, 234, 0.06);\n  font-weight: 500;\n}\n.notif-icon {\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 1rem;\n  flex-shrink: 0;\n}\n.notif-body {\n  flex: 1;\n  min-width: 0;\n}\n.notif-message {\n  margin: 0 0 6px;\n  line-height: 1.4;\n}\n.notif-meta {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.notif-actions {\n  flex-shrink: 0;\n}\n.btn-icon {\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 1.1rem;\n  color: var(--text-muted);\n  padding: 6px;\n  border-radius: 8px;\n}\n.btn-icon:hover {\n  background: rgba(0, 0, 0, 0.05);\n  color: var(--primary);\n}\n.unread-badge {\n  background: var(--primary);\n  color: #fff;\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n.header-actions {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.modal-card {\n  background: #fff;\n  border-radius: 16px;\n  max-width: 520px;\n  width: 90%;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.modal-header {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 20px 24px;\n  border-bottom: 1px solid #eee;\n}\n.modal-header h3 {\n  flex: 1;\n  margin: 0;\n}\n.modal-icon {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n}\n.close-btn {\n  font-size: 1.2rem;\n}\n.modal-body {\n  padding: 24px;\n}\n.detail-message {\n  font-size: 1.05rem;\n  line-height: 1.6;\n  margin: 0 0 20px;\n}\n.detail-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.modal-footer {\n  display: flex;\n  gap: 10px;\n  padding: 16px 24px;\n  border-top: 1px solid #eee;\n  justify-content: flex-end;\n}\n.badge-consent {\n  background: rgba(102, 126, 234, 0.15);\n  color: #667eea;\n}\n.badge-security {\n  background: rgba(239, 68, 68, 0.15);\n  color: #ef4444;\n}\n.badge-usage {\n  background: rgba(16, 185, 129, 0.15);\n  color: #10b981;\n}\n.badge-incident {\n  background: rgba(245, 158, 11, 0.15);\n  color: #f59e0b;\n}\n/*# sourceMappingURL=notification-list.component.css.map */\n"] }]
  }], () => [{ type: NotificationService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotificationListComponent, { className: "NotificationListComponent", filePath: "src/app/shared/notification-list/notification-list.component.ts", lineNumber: 14 });
})();
export {
  NotificationListComponent
};
//# sourceMappingURL=chunk-NOGRIXWZ.js.map
