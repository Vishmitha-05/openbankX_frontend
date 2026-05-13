import {
  NotificationService
} from "./chunk-L7ZLHMBC.js";
import {
  AuthService
} from "./chunk-WCVDOMTU.js";
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule
} from "./chunk-QS26HGQT.js";
import {
  CommonModule,
  Component,
  DatePipe,
  ElementRef,
  HostListener,
  Input,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgSwitch,
  NgSwitchCase,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-6UHLKSNQ.js";

// src/app/shared/sidebar/sidebar.component.ts
var _c0 = (a0) => ({ "collapsed": a0 });
function SidebarComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1, "OpenBank");
    \u0275\u0275elementStart(2, "span", 16);
    \u0275\u0275text(3, "X");
    \u0275\u0275elementEnd()();
  }
}
function SidebarComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18);
    \u0275\u0275element(2, "i", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 20)(4, "div", 21);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 22)(7, "span", 23);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.session == null ? null : ctx_r0.session.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.session == null ? null : ctx_r0.session.role);
  }
}
function SidebarComponent_ng_container_10_a_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r2.label);
  }
}
function SidebarComponent_ng_container_10_a_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 25);
    \u0275\u0275element(1, "i");
    \u0275\u0275template(2, SidebarComponent_ng_container_10_a_1_span_2_Template, 2, 1, "span", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", item_r2.route)("title", item_r2.label);
    \u0275\u0275advance();
    \u0275\u0275classMap(item_r2.icon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isCollapsed);
  }
}
function SidebarComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SidebarComponent_ng_container_10_a_1_Template, 3, 5, "a", 24);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.tppMenu);
  }
}
function SidebarComponent_ng_container_11_a_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r3.label);
  }
}
function SidebarComponent_ng_container_11_a_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 25);
    \u0275\u0275element(1, "i");
    \u0275\u0275template(2, SidebarComponent_ng_container_11_a_1_span_2_Template, 2, 1, "span", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", item_r3.route)("title", item_r3.label);
    \u0275\u0275advance();
    \u0275\u0275classMap(item_r3.icon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isCollapsed);
  }
}
function SidebarComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SidebarComponent_ng_container_11_a_1_Template, 3, 5, "a", 24);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.customerMenu);
  }
}
function SidebarComponent_ng_container_12_a_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r4.label);
  }
}
function SidebarComponent_ng_container_12_a_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 25);
    \u0275\u0275element(1, "i");
    \u0275\u0275template(2, SidebarComponent_ng_container_12_a_1_span_2_Template, 2, 1, "span", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", item_r4.route)("title", item_r4.label);
    \u0275\u0275advance();
    \u0275\u0275classMap(item_r4.icon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isCollapsed);
  }
}
function SidebarComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SidebarComponent_ng_container_12_a_1_Template, 3, 5, "a", 24);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.opsMenu);
  }
}
function SidebarComponent_ng_container_13_a_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r5.label);
  }
}
function SidebarComponent_ng_container_13_a_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 25);
    \u0275\u0275element(1, "i");
    \u0275\u0275template(2, SidebarComponent_ng_container_13_a_1_span_2_Template, 2, 1, "span", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", item_r5.route)("title", item_r5.label);
    \u0275\u0275advance();
    \u0275\u0275classMap(item_r5.icon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isCollapsed);
  }
}
function SidebarComponent_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SidebarComponent_ng_container_13_a_1_Template, 3, 5, "a", 24);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.adminMenu);
  }
}
function SidebarComponent_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Logout");
    \u0275\u0275elementEnd();
  }
}
var SidebarComponent = class _SidebarComponent {
  authService;
  session = null;
  isCollapsed = false;
  // Menu items for each role — rendered with *ngFor
  tppMenu = [
    { label: "Dashboard", route: "/developer/dashboard", icon: "fas fa-tachometer-alt" },
    { label: "Register TPP", route: "/developer/tpp-register", icon: "fas fa-building" },
    { label: "My Apps", route: "/developer/apps", icon: "fas fa-cube" },
    { label: "Register App", route: "/developer/apps/new", icon: "fas fa-plus-circle" },
    { label: "Subscribe Plan", route: "/developer/subscribe", icon: "fas fa-plug" },
    { label: "Sandbox", route: "/developer/sandbox", icon: "fas fa-flask" },
    { label: "Analytics", route: "/developer/analytics", icon: "fas fa-chart-bar" }
  ];
  customerMenu = [
    { label: "My Apps", route: "/customer/apps", icon: "fas fa-store" },
    { label: "My Consents", route: "/customer/consents", icon: "fas fa-handshake" },
    { label: "My Accounts", route: "/customer/accounts", icon: "fas fa-wallet" },
    { label: "Payments", route: "/customer/payment-initiate", icon: "fas fa-paper-plane" },
    { label: "Funds Check", route: "/customer/funds-check", icon: "fas fa-search-dollar" },
    { label: "SCA Verify", route: "/customer/sca", icon: "fas fa-shield-alt" }
  ];
  opsMenu = [
    { label: "API Health", route: "/operations/health", icon: "fas fa-heartbeat" },
    { label: "Throttle Log", route: "/operations/throttle-log", icon: "fas fa-tachometer-alt" },
    { label: "Incidents", route: "/operations/incidents", icon: "fas fa-exclamation-triangle" },
    { label: "Latency Charts", route: "/operations/latency", icon: "fas fa-chart-line" },
    { label: "Consent Registry", route: "/compliance/consents", icon: "fas fa-file-contract" },
    { label: "SCA Stats", route: "/compliance/sca", icon: "fas fa-chart-pie" },
    { label: "Audit Trail", route: "/compliance/audit", icon: "fas fa-search" },
    { label: "Reports", route: "/compliance/reports", icon: "fas fa-file-alt" }
  ];
  adminMenu = [
    { label: "API Products", route: "/admin/products", icon: "fas fa-boxes" },
    { label: "Plan Config", route: "/admin/plans", icon: "fas fa-sliders-h" },
    { label: "User Mgmt", route: "/admin/users", icon: "fas fa-users" },
    { label: "TPP Mgmt", route: "/admin/tpp", icon: "fas fa-building" },
    { label: "SCA Policy", route: "/admin/sca-policy", icon: "fas fa-lock" }
  ];
  constructor(authService) {
    this.authService = authService;
    this.session = this.authService.getSession();
  }
  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
  logout() {
    this.authService.logout();
    window.location.href = "/login";
  }
  static \u0275fac = function SidebarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SidebarComponent)(\u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SidebarComponent, selectors: [["app-sidebar"]], decls: 18, vars: 13, consts: [[1, "sidebar", 3, "ngClass"], [1, "sidebar-logo"], [1, "logo-icon"], [1, "fas", "fa-university"], ["class", "logo-text", 4, "ngIf"], [1, "collapse-btn", 3, "click"], [3, "ngClass"], ["class", "sidebar-user", 4, "ngIf"], [1, "sidebar-divider"], [1, "sidebar-nav", 3, "ngSwitch"], [4, "ngSwitchCase"], [1, "sidebar-footer"], [1, "nav-item", "logout", 3, "click", "title"], [1, "fas", "fa-sign-out-alt"], [4, "ngIf"], [1, "logo-text"], [1, "accent"], [1, "sidebar-user"], [1, "user-avatar"], [1, "fas", "fa-user"], [1, "user-info"], [1, "user-name"], [1, "user-role"], [1, "badge", "badge-info"], ["routerLinkActive", "active", "class", "nav-item", 3, "routerLink", "title", 4, "ngFor", "ngForOf"], ["routerLinkActive", "active", 1, "nav-item", 3, "routerLink", "title"]], template: function SidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "aside", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "i", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, SidebarComponent_span_4_Template, 4, 0, "span", 4);
      \u0275\u0275elementStart(5, "button", 5);
      \u0275\u0275listener("click", function SidebarComponent_Template_button_click_5_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275element(6, "i", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(7, SidebarComponent_div_7_Template, 9, 2, "div", 7);
      \u0275\u0275element(8, "div", 8);
      \u0275\u0275elementStart(9, "nav", 9);
      \u0275\u0275template(10, SidebarComponent_ng_container_10_Template, 2, 1, "ng-container", 10)(11, SidebarComponent_ng_container_11_Template, 2, 1, "ng-container", 10)(12, SidebarComponent_ng_container_12_Template, 2, 1, "ng-container", 10)(13, SidebarComponent_ng_container_13_Template, 2, 1, "ng-container", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 11)(15, "a", 12);
      \u0275\u0275listener("click", function SidebarComponent_Template_a_click_15_listener() {
        return ctx.logout();
      });
      \u0275\u0275element(16, "i", 13);
      \u0275\u0275template(17, SidebarComponent_span_17_Template, 2, 0, "span", 14);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(11, _c0, ctx.isCollapsed));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", !ctx.isCollapsed);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", ctx.isCollapsed ? "fas fa-chevron-right" : "fas fa-chevron-left");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isCollapsed);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngSwitch", ctx.session == null ? null : ctx.session.role);
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "TPP");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "CUSTOMER");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "OPERATIONS");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "ADMIN");
      \u0275\u0275advance(2);
      \u0275\u0275property("title", "Logout");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.isCollapsed);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, NgSwitch, NgSwitchCase, RouterModule, RouterLink, RouterLinkActive], styles: ["\n.sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 240px;\n  background: #0a2540;\n  color: #e2e8f0;\n  display: flex;\n  flex-direction: column;\n  z-index: 100;\n  transition: width 0.2s ease;\n  overflow: hidden;\n}\n.sidebar.collapsed[_ngcontent-%COMP%] {\n  width: 72px;\n}\n.sidebar-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 18px 18px;\n  position: relative;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n}\n.logo-icon[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  background: #c79a2a;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #0a2540;\n  font-size: 1rem;\n  flex-shrink: 0;\n}\n.logo-text[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #fff;\n  white-space: nowrap;\n  letter-spacing: 0.2px;\n}\n.logo-text[_ngcontent-%COMP%]   .accent[_ngcontent-%COMP%] {\n  color: #c79a2a;\n}\n.collapse-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  color: #cbd5e1;\n  width: 26px;\n  height: 26px;\n  border-radius: 6px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.6rem;\n  transition: all 0.15s ease;\n}\n.collapse-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.15);\n  color: #fff;\n}\n.sidebar-user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 18px;\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  background: rgba(199, 154, 42, 0.18);\n  border: 1px solid rgba(199, 154, 42, 0.4);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #e6c25a;\n  flex-shrink: 0;\n  font-size: 0.9rem;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #f8fafc;\n  white-space: nowrap;\n}\n.user-role[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n.user-role[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  background: rgba(199, 154, 42, 0.15);\n  color: #e6c25a;\n  border-color: rgba(199, 154, 42, 0.35);\n}\n.sidebar-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: rgba(255, 255, 255, 0.08);\n  margin: 4px 16px 8px;\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 8px 10px;\n  overflow-y: auto;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 14px;\n  border-radius: 6px;\n  color: #cbd5e1;\n  font-size: 0.85rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  text-decoration: none;\n  margin-bottom: 2px;\n  white-space: nowrap;\n}\n.nav-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 20px;\n  text-align: center;\n  font-size: 0.9rem;\n  flex-shrink: 0;\n  color: #94a3b8;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  color: #fff;\n}\n.nav-item[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: #e6c25a;\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background: rgba(30, 64, 175, 0.35);\n  color: #fff;\n  font-weight: 600;\n  border-left: 3px solid #c79a2a;\n  padding-left: 11px;\n}\n.nav-item.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #e6c25a;\n}\n.nav-item.logout[_ngcontent-%COMP%] {\n  color: #fca5a5;\n}\n.nav-item.logout[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.12);\n  color: #fecaca;\n}\n.nav-item.logout[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fca5a5;\n}\n.sidebar-footer[_ngcontent-%COMP%] {\n  padding: 8px 10px 14px;\n  border-top: 1px solid rgba(255, 255, 255, 0.08);\n}\n.sidebar-nav[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n.sidebar-nav[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 2px;\n}\n/*# sourceMappingURL=sidebar.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarComponent, [{
    type: Component,
    args: [{ selector: "app-sidebar", standalone: true, imports: [CommonModule, RouterModule], template: `
    <aside class="sidebar" [ngClass]="{ 'collapsed': isCollapsed }">

      <!-- Logo -->
      <div class="sidebar-logo">
        <div class="logo-icon">
          <i class="fas fa-university"></i>
        </div>
        <span class="logo-text" *ngIf="!isCollapsed">OpenBank<span class="accent">X</span></span>
        <button class="collapse-btn" (click)="toggleCollapse()">
          <i [ngClass]="isCollapsed ? 'fas fa-chevron-right' : 'fas fa-chevron-left'"></i>
        </button>
      </div>

      <!-- User Info -->
      <div class="sidebar-user" *ngIf="!isCollapsed">
        <div class="user-avatar">
          <i class="fas fa-user"></i>
        </div>
        <div class="user-info">
          <div class="user-name">{{ session?.name }}</div>
          <div class="user-role">
            <span class="badge badge-info">{{ session?.role }}</span>
          </div>
        </div>
      </div>

      <div class="sidebar-divider"></div>

      <!-- Navigation Menu \u2014 changes based on role using *ngSwitch -->
      <nav class="sidebar-nav" [ngSwitch]="session?.role">

        <!-- TPP Developer Menu -->
        <ng-container *ngSwitchCase="'TPP'">
          <a *ngFor="let item of tppMenu"
             [routerLink]="item.route"
             routerLinkActive="active"
             class="nav-item"
             [title]="item.label">
            <i [class]="item.icon"></i>
            <span *ngIf="!isCollapsed">{{ item.label }}</span>
          </a>
        </ng-container>

        <!-- Customer Menu -->
        <ng-container *ngSwitchCase="'CUSTOMER'">
          <a *ngFor="let item of customerMenu"
             [routerLink]="item.route"
             routerLinkActive="active"
             class="nav-item"
             [title]="item.label">
            <i [class]="item.icon"></i>
            <span *ngIf="!isCollapsed">{{ item.label }}</span>
          </a>
        </ng-container>

        <!-- Operations Menu -->
        <ng-container *ngSwitchCase="'OPERATIONS'">
          <a *ngFor="let item of opsMenu"
             [routerLink]="item.route"
             routerLinkActive="active"
             class="nav-item"
             [title]="item.label">
            <i [class]="item.icon"></i>
            <span *ngIf="!isCollapsed">{{ item.label }}</span>
          </a>
        </ng-container>

        <!-- Admin Menu -->
        <ng-container *ngSwitchCase="'ADMIN'">
          <a *ngFor="let item of adminMenu"
             [routerLink]="item.route"
             routerLinkActive="active"
             class="nav-item"
             [title]="item.label">
            <i [class]="item.icon"></i>
            <span *ngIf="!isCollapsed">{{ item.label }}</span>
          </a>
        </ng-container>

      </nav>

      <!-- Logout -->
      <div class="sidebar-footer">
        <a class="nav-item logout" (click)="logout()" [title]="'Logout'">
          <i class="fas fa-sign-out-alt"></i>
          <span *ngIf="!isCollapsed">Logout</span>
        </a>
      </div>
    </aside>
  `, styles: ["/* src/app/shared/sidebar/sidebar.component.css */\n.sidebar {\n  position: fixed;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 240px;\n  background: #0a2540;\n  color: #e2e8f0;\n  display: flex;\n  flex-direction: column;\n  z-index: 100;\n  transition: width 0.2s ease;\n  overflow: hidden;\n}\n.sidebar.collapsed {\n  width: 72px;\n}\n.sidebar-logo {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 18px 18px;\n  position: relative;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n}\n.logo-icon {\n  width: 38px;\n  height: 38px;\n  background: #c79a2a;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #0a2540;\n  font-size: 1rem;\n  flex-shrink: 0;\n}\n.logo-text {\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #fff;\n  white-space: nowrap;\n  letter-spacing: 0.2px;\n}\n.logo-text .accent {\n  color: #c79a2a;\n}\n.collapse-btn {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  color: #cbd5e1;\n  width: 26px;\n  height: 26px;\n  border-radius: 6px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.6rem;\n  transition: all 0.15s ease;\n}\n.collapse-btn:hover {\n  background: rgba(255, 255, 255, 0.15);\n  color: #fff;\n}\n.sidebar-user {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 18px;\n}\n.user-avatar {\n  width: 38px;\n  height: 38px;\n  background: rgba(199, 154, 42, 0.18);\n  border: 1px solid rgba(199, 154, 42, 0.4);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #e6c25a;\n  flex-shrink: 0;\n  font-size: 0.9rem;\n}\n.user-name {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #f8fafc;\n  white-space: nowrap;\n}\n.user-role {\n  margin-top: 4px;\n}\n.user-role .badge {\n  background: rgba(199, 154, 42, 0.15);\n  color: #e6c25a;\n  border-color: rgba(199, 154, 42, 0.35);\n}\n.sidebar-divider {\n  height: 1px;\n  background: rgba(255, 255, 255, 0.08);\n  margin: 4px 16px 8px;\n}\n.sidebar-nav {\n  flex: 1;\n  padding: 8px 10px;\n  overflow-y: auto;\n}\n.nav-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 14px;\n  border-radius: 6px;\n  color: #cbd5e1;\n  font-size: 0.85rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  text-decoration: none;\n  margin-bottom: 2px;\n  white-space: nowrap;\n}\n.nav-item i {\n  width: 20px;\n  text-align: center;\n  font-size: 0.9rem;\n  flex-shrink: 0;\n  color: #94a3b8;\n}\n.nav-item:hover {\n  background: rgba(255, 255, 255, 0.06);\n  color: #fff;\n}\n.nav-item:hover i {\n  color: #e6c25a;\n}\n.nav-item.active {\n  background: rgba(30, 64, 175, 0.35);\n  color: #fff;\n  font-weight: 600;\n  border-left: 3px solid #c79a2a;\n  padding-left: 11px;\n}\n.nav-item.active i {\n  color: #e6c25a;\n}\n.nav-item.logout {\n  color: #fca5a5;\n}\n.nav-item.logout:hover {\n  background: rgba(239, 68, 68, 0.12);\n  color: #fecaca;\n}\n.nav-item.logout i {\n  color: #fca5a5;\n}\n.sidebar-footer {\n  padding: 8px 10px 14px;\n  border-top: 1px solid rgba(255, 255, 255, 0.08);\n}\n.sidebar-nav::-webkit-scrollbar {\n  width: 4px;\n}\n.sidebar-nav::-webkit-scrollbar-thumb {\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 2px;\n}\n/*# sourceMappingURL=sidebar.component.css.map */\n"] }]
  }], () => [{ type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SidebarComponent, { className: "SidebarComponent", filePath: "src/app/shared/sidebar/sidebar.component.ts", lineNumber: 112 });
})();

// src/app/shared/navbar/navbar.component.ts
var _c02 = (a0) => ({ "unread": a0 });
var _c1 = (a0, a1) => ({ "color": a0, "background": a1 });
function NavbarComponent_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.unreadCount);
  }
}
function NavbarComponent_div_9_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function NavbarComponent_div_9_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.markAllAsRead());
    });
    \u0275\u0275text(1, " Mark all read ");
    \u0275\u0275elementEnd();
  }
}
function NavbarComponent_div_9_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275element(1, "i", 24);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "No notifications");
    \u0275\u0275elementEnd()();
  }
}
function NavbarComponent_div_9_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275listener("click", function NavbarComponent_div_9_div_10_Template_div_click_0_listener() {
      const notif_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.markRead(notif_r4));
    });
    \u0275\u0275elementStart(1, "div", 26);
    \u0275\u0275element(2, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 27)(4, "p", 28);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 29);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const notif_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(9, _c02, notif_r4.status === "UNREAD"));
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction2(11, _c1, ctx_r0.getCategoryColor(notif_r4.category), ctx_r0.getCategoryBg(notif_r4.category)));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.getCategoryIcon(notif_r4.category));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(notif_r4.message);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 6, notif_r4.createdDate, "short"));
  }
}
function NavbarComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "span");
    \u0275\u0275text(3, "Notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 16);
    \u0275\u0275template(5, NavbarComponent_div_9_button_5_Template, 2, 0, "button", 17);
    \u0275\u0275elementStart(6, "span", 18);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 19);
    \u0275\u0275template(9, NavbarComponent_div_9_div_9_Template, 4, 0, "div", 20)(10, NavbarComponent_div_9_div_10_Template, 9, 14, "div", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r0.unreadCount > 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.notifications.length, " total");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.notifications.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.notifications);
  }
}
function NavbarComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31)(2, "div", 32);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 33)(5, "div", 34);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 35);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 36);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(11, "div", 37);
    \u0275\u0275elementStart(12, "button", 38);
    \u0275\u0275listener("click", function NavbarComponent_div_14_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToNotifications());
    });
    \u0275\u0275element(13, "i", 6);
    \u0275\u0275text(14, " Notifications ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 39);
    \u0275\u0275listener("click", function NavbarComponent_div_14_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.logout());
    });
    \u0275\u0275element(16, "i", 40);
    \u0275\u0275text(17, " Sign out ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.initials);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r0.session == null ? null : ctx_r0.session.name) || "User");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r0.session == null ? null : ctx_r0.session.email) || "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.session == null ? null : ctx_r0.session.role);
  }
}
var NavbarComponent = class _NavbarComponent {
  authService;
  notificationService;
  router;
  elRef;
  pageTitle = "Dashboard";
  notifications = [];
  showNotifications = false;
  showProfile = false;
  unreadCount = 0;
  session = null;
  initials = "U";
  refreshInterval;
  constructor(authService, notificationService, router, elRef) {
    this.authService = authService;
    this.notificationService = notificationService;
    this.router = router;
    this.elRef = elRef;
  }
  ngOnInit() {
    this.session = this.authService.getSession();
    this.initials = this.computeInitials(this.session?.name);
    this.loadNotifications();
    this.refreshInterval = setInterval(() => this.loadNotifications(), 3e4);
  }
  ngOnDestroy() {
    if (this.refreshInterval) {
      clearInterval(this.refreshInterval);
    }
  }
  onDocumentClick(event) {
    if (!this.elRef.nativeElement.contains(event.target)) {
      this.showNotifications = false;
      this.showProfile = false;
    }
  }
  computeInitials(name) {
    if (!name)
      return "U";
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1)
      return parts[0].charAt(0).toUpperCase();
    return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
  }
  loadNotifications() {
    const userId = this.authService.getUserId();
    const role = this.authService.getRole();
    if (userId) {
      this.notificationService.getNotifications(userId.toString(), role).subscribe({
        next: (data) => {
          this.notifications = data || [];
          this.unreadCount = this.notifications.filter((n) => n.status === "UNREAD").length;
        },
        error: () => {
          this.notifications = [];
          this.unreadCount = 0;
        }
      });
    }
  }
  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
    if (this.showNotifications) {
      this.showProfile = false;
      this.loadNotifications();
    }
  }
  toggleProfile() {
    this.showProfile = !this.showProfile;
    if (this.showProfile) {
      this.showNotifications = false;
    }
  }
  goToNotifications() {
    this.showProfile = false;
    this.router.navigate(["/notifications"]);
  }
  logout() {
    this.authService.logout();
    this.showProfile = false;
    this.router.navigate(["/login"]);
  }
  markRead(notif) {
    if (notif.status === "UNREAD") {
      this.notificationService.markAsRead(notif.notificationId).subscribe({
        next: () => {
          notif.status = "READ";
          this.unreadCount = this.notifications.filter((n) => n.status === "UNREAD").length;
        },
        error: () => {
          notif.status = "READ";
          this.unreadCount = this.notifications.filter((n) => n.status === "UNREAD").length;
        }
      });
    }
  }
  markAllAsRead() {
    const userId = this.authService.getUserId();
    const role = this.authService.getRole();
    this.notificationService.markAllRead(userId.toString(), role).subscribe({
      next: () => {
        this.notifications.forEach((n) => n.status = "READ");
        this.unreadCount = 0;
      },
      error: () => {
        this.notifications.forEach((n) => n.status = "READ");
        this.unreadCount = 0;
      }
    });
  }
  getCategoryIcon(category) {
    switch (category) {
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
  getCategoryColor(category) {
    switch (category) {
      case "CONSENT":
        return "#1e40af";
      case "SECURITY":
        return "#dc2626";
      case "USAGE":
        return "#d97706";
      case "INCIDENT":
        return "#dc2626";
      default:
        return "#1e40af";
    }
  }
  getCategoryBg(category) {
    switch (category) {
      case "CONSENT":
        return "#dbeafe";
      case "SECURITY":
        return "#fee2e2";
      case "USAGE":
        return "#fef3c7";
      case "INCIDENT":
        return "#fee2e2";
      default:
        return "#dbeafe";
    }
  }
  static \u0275fac = function NavbarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NavbarComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ElementRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NavbarComponent, selectors: [["app-navbar"]], hostBindings: function NavbarComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function NavbarComponent_click_HostBindingHandler($event) {
        return ctx.onDocumentClick($event);
      }, \u0275\u0275resolveDocument);
    }
  }, inputs: { pageTitle: "pageTitle" }, decls: 15, vars: 5, consts: [[1, "navbar"], [1, "navbar-left"], [1, "page-title"], [1, "navbar-right"], [1, "notification-wrapper"], ["aria-label", "Notifications", 1, "notif-btn", 3, "click"], [1, "fas", "fa-bell"], ["class", "notif-count", 4, "ngIf"], ["class", "notif-dropdown", 4, "ngIf"], [1, "profile-wrapper"], ["aria-label", "Profile menu", 1, "user-avatar-sm", 3, "click"], [1, "avatar-initials"], ["class", "profile-dropdown", 4, "ngIf"], [1, "notif-count"], [1, "notif-dropdown"], [1, "notif-header"], [1, "flex", "items-center", "gap-8"], ["class", "link-btn", 3, "click", 4, "ngIf"], [1, "text-muted", "text-sm"], [1, "notif-list"], ["class", "notif-empty", 4, "ngIf"], ["class", "notif-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "link-btn", 3, "click"], [1, "notif-empty"], [1, "fas", "fa-check-circle"], [1, "notif-item", 3, "click", "ngClass"], [1, "notif-icon", 3, "ngStyle"], [1, "notif-content"], [1, "notif-msg"], [1, "notif-time", "text-sm", "text-muted"], [1, "profile-dropdown"], [1, "profile-header"], [1, "profile-avatar-lg"], [1, "profile-meta"], [1, "profile-name"], [1, "profile-email"], [1, "badge", "badge-info", "mt-4"], [1, "profile-divider"], [1, "profile-item", 3, "click"], [1, "profile-item", "danger", 3, "click"], [1, "fas", "fa-sign-out-alt"]], template: function NavbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 0)(1, "div", 1)(2, "h2", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "button", 5);
      \u0275\u0275listener("click", function NavbarComponent_Template_button_click_6_listener() {
        return ctx.toggleNotifications();
      });
      \u0275\u0275element(7, "i", 6);
      \u0275\u0275template(8, NavbarComponent_span_8_Template, 2, 1, "span", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275template(9, NavbarComponent_div_9_Template, 11, 4, "div", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 9)(11, "button", 10);
      \u0275\u0275listener("click", function NavbarComponent_Template_button_click_11_listener() {
        return ctx.toggleProfile();
      });
      \u0275\u0275elementStart(12, "span", 11);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(14, NavbarComponent_div_14_Template, 18, 4, "div", 12);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.pageTitle);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.unreadCount > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showNotifications);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.initials);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showProfile);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, NgStyle, DatePipe], styles: ["\n.navbar[_ngcontent-%COMP%] {\n  height: 64px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 28px;\n  border-bottom: 1px solid #e2e8f0;\n  background: #ffffff;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0a2540;\n  letter-spacing: 0.2px;\n}\n.navbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.notification-wrapper[_ngcontent-%COMP%], \n.profile-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.notif-btn[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  color: #475569;\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n  position: relative;\n  transition: all 0.15s ease;\n}\n.notif-btn[_ngcontent-%COMP%]:hover {\n  background: #eff6ff;\n  color: #1e40af;\n  border-color: #bfdbfe;\n}\n.notif-count[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -6px;\n  right: -6px;\n  min-width: 18px;\n  height: 18px;\n  border-radius: 9px;\n  font-size: 0.65rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  background: #dc2626;\n  padding: 0 5px;\n  border: 2px solid #fff;\n}\n.notif-dropdown[_ngcontent-%COMP%], \n.profile-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 52px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  box-shadow: 0 12px 32px rgba(15, 23, 42, 0.10);\n  overflow: hidden;\n  z-index: 200;\n}\n.notif-dropdown[_ngcontent-%COMP%] {\n  width: 360px;\n}\n.profile-dropdown[_ngcontent-%COMP%] {\n  width: 260px;\n  padding: 8px;\n}\n.notif-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 14px 16px;\n  border-bottom: 1px solid #e2e8f0;\n  font-weight: 700;\n  font-size: 0.9rem;\n  background: #f8fafc;\n  color: #0a2540;\n}\n.link-btn[_ngcontent-%COMP%] {\n  color: #1e40af;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 0.78rem;\n  font-weight: 600;\n}\n.link-btn[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.notif-list[_ngcontent-%COMP%] {\n  max-height: 340px;\n  overflow-y: auto;\n}\n.notif-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 36px 20px;\n  color: #94a3b8;\n}\n.notif-empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  margin-bottom: 10px;\n  opacity: 0.4;\n  color: #1e40af;\n}\n.notif-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  padding: 14px 16px;\n  cursor: pointer;\n  transition: background 0.15s ease;\n  border-bottom: 1px solid #f1f5f9;\n}\n.notif-item[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.notif-item.unread[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  border-left: 3px solid #1e40af;\n}\n.notif-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  font-size: 0.95rem;\n}\n.notif-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.notif-msg[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  line-height: 1.4;\n  color: #334155;\n  margin-bottom: 4px;\n}\n.notif-time[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #94a3b8;\n}\n.user-avatar-sm[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: #0a2540;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 0.85rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  border: 2px solid #c79a2a;\n  padding: 0;\n}\n.user-avatar-sm[_ngcontent-%COMP%]:hover {\n  background: #1e40af;\n}\n.avatar-initials[_ngcontent-%COMP%] {\n  letter-spacing: 0.5px;\n}\n.profile-header[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n  padding: 10px 8px 12px;\n}\n.profile-avatar-lg[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  background: #0a2540;\n  color: #fff;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 1rem;\n  border: 2px solid #c79a2a;\n  flex-shrink: 0;\n}\n.profile-meta[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.profile-name[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 0.92rem;\n  color: #0f172a;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.profile-email[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  color: #64748b;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.profile-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: #e2e8f0;\n  margin: 4px 0 6px;\n}\n.profile-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 10px 12px;\n  background: none;\n  border: none;\n  text-align: left;\n  font-size: 0.85rem;\n  color: #334155;\n  cursor: pointer;\n  border-radius: 6px;\n  transition: all 0.15s ease;\n  font-family: inherit;\n}\n.profile-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 18px;\n  color: #64748b;\n}\n.profile-item[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n}\n.profile-item.danger[_ngcontent-%COMP%] {\n  color: #b91c1c;\n}\n.profile-item.danger[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #b91c1c;\n}\n.profile-item.danger[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n}\n/*# sourceMappingURL=navbar.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavbarComponent, [{
    type: Component,
    args: [{ selector: "app-navbar", standalone: true, imports: [CommonModule], template: `
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
  `, styles: ["/* src/app/shared/navbar/navbar.component.css */\n.navbar {\n  height: 64px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 28px;\n  border-bottom: 1px solid #e2e8f0;\n  background: #ffffff;\n}\n.page-title {\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0a2540;\n  letter-spacing: 0.2px;\n}\n.navbar-right {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.notification-wrapper,\n.profile-wrapper {\n  position: relative;\n}\n.notif-btn {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  color: #475569;\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n  position: relative;\n  transition: all 0.15s ease;\n}\n.notif-btn:hover {\n  background: #eff6ff;\n  color: #1e40af;\n  border-color: #bfdbfe;\n}\n.notif-count {\n  position: absolute;\n  top: -6px;\n  right: -6px;\n  min-width: 18px;\n  height: 18px;\n  border-radius: 9px;\n  font-size: 0.65rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  background: #dc2626;\n  padding: 0 5px;\n  border: 2px solid #fff;\n}\n.notif-dropdown,\n.profile-dropdown {\n  position: absolute;\n  right: 0;\n  top: 52px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  box-shadow: 0 12px 32px rgba(15, 23, 42, 0.10);\n  overflow: hidden;\n  z-index: 200;\n}\n.notif-dropdown {\n  width: 360px;\n}\n.profile-dropdown {\n  width: 260px;\n  padding: 8px;\n}\n.notif-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 14px 16px;\n  border-bottom: 1px solid #e2e8f0;\n  font-weight: 700;\n  font-size: 0.9rem;\n  background: #f8fafc;\n  color: #0a2540;\n}\n.link-btn {\n  color: #1e40af;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 0.78rem;\n  font-weight: 600;\n}\n.link-btn:hover {\n  text-decoration: underline;\n}\n.notif-list {\n  max-height: 340px;\n  overflow-y: auto;\n}\n.notif-empty {\n  text-align: center;\n  padding: 36px 20px;\n  color: #94a3b8;\n}\n.notif-empty i {\n  font-size: 2.2rem;\n  margin-bottom: 10px;\n  opacity: 0.4;\n  color: #1e40af;\n}\n.notif-item {\n  display: flex;\n  gap: 12px;\n  padding: 14px 16px;\n  cursor: pointer;\n  transition: background 0.15s ease;\n  border-bottom: 1px solid #f1f5f9;\n}\n.notif-item:hover {\n  background: #f8fafc;\n}\n.notif-item.unread {\n  background: #eff6ff;\n  border-left: 3px solid #1e40af;\n}\n.notif-icon {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  font-size: 0.95rem;\n}\n.notif-content {\n  flex: 1;\n}\n.notif-msg {\n  font-size: 0.85rem;\n  line-height: 1.4;\n  color: #334155;\n  margin-bottom: 4px;\n}\n.notif-time {\n  font-size: 0.72rem;\n  color: #94a3b8;\n}\n.user-avatar-sm {\n  width: 40px;\n  height: 40px;\n  background: #0a2540;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 0.85rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  border: 2px solid #c79a2a;\n  padding: 0;\n}\n.user-avatar-sm:hover {\n  background: #1e40af;\n}\n.avatar-initials {\n  letter-spacing: 0.5px;\n}\n.profile-header {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n  padding: 10px 8px 12px;\n}\n.profile-avatar-lg {\n  width: 44px;\n  height: 44px;\n  background: #0a2540;\n  color: #fff;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 1rem;\n  border: 2px solid #c79a2a;\n  flex-shrink: 0;\n}\n.profile-meta {\n  flex: 1;\n  min-width: 0;\n}\n.profile-name {\n  font-weight: 700;\n  font-size: 0.92rem;\n  color: #0f172a;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.profile-email {\n  font-size: 0.76rem;\n  color: #64748b;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.profile-divider {\n  height: 1px;\n  background: #e2e8f0;\n  margin: 4px 0 6px;\n}\n.profile-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 10px 12px;\n  background: none;\n  border: none;\n  text-align: left;\n  font-size: 0.85rem;\n  color: #334155;\n  cursor: pointer;\n  border-radius: 6px;\n  transition: all 0.15s ease;\n  font-family: inherit;\n}\n.profile-item i {\n  width: 18px;\n  color: #64748b;\n}\n.profile-item:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n}\n.profile-item.danger {\n  color: #b91c1c;\n}\n.profile-item.danger i {\n  color: #b91c1c;\n}\n.profile-item.danger:hover {\n  background: #fee2e2;\n}\n/*# sourceMappingURL=navbar.component.css.map */\n"] }]
  }], () => [{ type: AuthService }, { type: NotificationService }, { type: Router }, { type: ElementRef }], { pageTitle: [{
    type: Input
  }], onDocumentClick: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NavbarComponent, { className: "NavbarComponent", filePath: "src/app/shared/navbar/navbar.component.ts", lineNumber: 88 });
})();

export {
  SidebarComponent,
  NavbarComponent
};
//# sourceMappingURL=chunk-BZJ3JBQG.js.map
