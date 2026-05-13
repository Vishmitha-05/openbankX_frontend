import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-IBGG5UE3.js";
import {
  environment
} from "./chunk-TX3HFKHN.js";
import {
  HttpClient
} from "./chunk-5C4TBQN6.js";
import {
  CommonModule,
  Component,
  Injectable,
  NgClass,
  NgForOf,
  NgIf,
  __spreadValues,
  setClassMetadata,
  timeout,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-6UHLKSNQ.js";

// src/app/core/services/user.service.ts
var USER_REQUEST_TIMEOUT_MS = 2e4;
var UserService = class _UserService {
  http;
  api = environment.apiBaseUrl;
  constructor(http) {
    this.http = http;
  }
  getUsers() {
    return this.http.get(`${this.api}/users`).pipe(timeout(USER_REQUEST_TIMEOUT_MS));
  }
  createUser(user) {
    return this.http.post(`${this.api}/users`, user).pipe(timeout(USER_REQUEST_TIMEOUT_MS));
  }
  updateUser(id, user) {
    return this.http.put(`${this.api}/users/${id}`, user).pipe(timeout(USER_REQUEST_TIMEOUT_MS));
  }
  deleteUser(id) {
    return this.http.delete(`${this.api}/users/${id}`).pipe(timeout(USER_REQUEST_TIMEOUT_MS));
  }
  static \u0275fac = function UserService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UserService, factory: _UserService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/admin-portal/user-management/user-management.component.ts
function UserManagementComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function UserManagementComponent_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCreate());
    });
    \u0275\u0275element(1, "i", 11);
    \u0275\u0275text(2, " Add User ");
    \u0275\u0275elementEnd();
  }
}
function UserManagementComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "i", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.successMessage, " ");
  }
}
function UserManagementComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "i", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMessage, " ");
  }
}
function UserManagementComponent_div_11_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "label");
    \u0275\u0275text(2, "Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 26);
    \u0275\u0275twoWayListener("ngModelChange", function UserManagementComponent_div_11_div_15_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.form.password, $event) || (ctx_r1.form.password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.password);
  }
}
function UserManagementComponent_div_11_option_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r5 = ctx.$implicit;
    \u0275\u0275property("value", r_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r5);
  }
}
function UserManagementComponent_div_11_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.editMode ? "Update" : "Create");
  }
}
function UserManagementComponent_div_11_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 29);
    \u0275\u0275text(2, " Saving...");
    \u0275\u0275elementEnd();
  }
}
function UserManagementComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "h3", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 18)(4, "label");
    \u0275\u0275text(5, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function UserManagementComponent_div_11_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.name, $event) || (ctx_r1.form.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 18)(8, "label");
    \u0275\u0275text(9, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function UserManagementComponent_div_11_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.email, $event) || (ctx_r1.form.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 18)(12, "label");
    \u0275\u0275text(13, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function UserManagementComponent_div_11_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.phone, $event) || (ctx_r1.form.phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, UserManagementComponent_div_11_div_15_Template, 4, 1, "div", 20);
    \u0275\u0275elementStart(16, "div", 18)(17, "label");
    \u0275\u0275text(18, "Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "select", 19);
    \u0275\u0275twoWayListener("ngModelChange", function UserManagementComponent_div_11_Template_select_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.role, $event) || (ctx_r1.form.role = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(20, UserManagementComponent_div_11_option_20_Template, 2, 2, "option", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 22)(22, "button", 23);
    \u0275\u0275listener("click", function UserManagementComponent_div_11_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275template(23, UserManagementComponent_div_11_span_23_Template, 3, 1, "span", 24)(24, UserManagementComponent_div_11_span_24_Template, 3, 0, "span", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 25);
    \u0275\u0275listener("click", function UserManagementComponent_div_11_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275text(26, "Cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.editMode ? "Edit User" : "Create User", " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.email);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.phone);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.editMode);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.role);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.roles);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isSaving);
  }
}
function UserManagementComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275element(1, "div", 31);
    \u0275\u0275elementEnd();
  }
}
function UserManagementComponent_div_13_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "span", 36);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "span", 37);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td")(14, "div", 22)(15, "button", 38);
    \u0275\u0275listener("click", function UserManagementComponent_div_13_tr_17_Template_button_click_15_listener() {
      const u_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.edit(u_r7));
    });
    \u0275\u0275text(16, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 39);
    \u0275\u0275listener("click", function UserManagementComponent_div_13_tr_17_Template_button_click_17_listener() {
      const u_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleStatus(u_r7));
    });
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 40);
    \u0275\u0275listener("click", function UserManagementComponent_div_13_tr_17_Template_button_click_19_listener() {
      const u_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.delete(u_r7.userId));
    });
    \u0275\u0275text(20, "Delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const u_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#", u_r7.userId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r7.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r7.email);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(u_r7.role);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", u_r7.status === "ACTIVE" ? "badge-active" : "badge-locked");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", u_r7.status, " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", u_r7.status === "ACTIVE" ? "btn-danger" : "btn-success");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", u_r7.status === "ACTIVE" ? "Lock" : "Unlock", " ");
  }
}
function UserManagementComponent_div_13_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275element(1, "i", 2);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "No users yet");
    \u0275\u0275elementEnd()();
  }
}
function UserManagementComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "table", 33)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275template(17, UserManagementComponent_div_13_tr_17_Template, 21, 8, "tr", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, UserManagementComponent_div_13_div_18_Template, 4, 0, "div", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275property("ngForOf", ctx_r1.users);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.users.length === 0);
  }
}
var UserManagementComponent = class _UserManagementComponent {
  userService;
  users = [];
  isLoading = true;
  isSaving = false;
  showForm = false;
  editMode = false;
  successMessage = "";
  errorMessage = "";
  roles = ["CUSTOMER", "TPP", "OPERATIONS", "ADMIN"];
  form = this.blankForm();
  constructor(userService) {
    this.userService = userService;
  }
  ngOnInit() {
    this.loadUsers();
  }
  blankForm() {
    return {
      userId: null,
      name: "",
      email: "",
      phone: "",
      password: "",
      role: "CUSTOMER",
      status: "ACTIVE"
    };
  }
  loadUsers() {
    this.isLoading = true;
    this.userService.getUsers().subscribe({
      next: (d) => {
        this.users = d || [];
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = this.describeError(err, "load users");
      }
    });
  }
  describeError(err, action) {
    if (err?.name === "TimeoutError") {
      return `Backend did not respond within 20s while trying to ${action}. Make sure the Spring backend has been restarted after the latest code change.`;
    }
    if (err?.status === 0)
      return "Cannot reach the backend. Make sure it is running on port 8081.";
    if (err?.status === 401)
      return "Your session has expired. Please sign in again.";
    if (err?.status === 403)
      return "You need ADMIN access to " + action + ".";
    if (err?.status === 404 || err?.status === 405) {
      return `This action is not available on the running backend yet \u2014 please restart the Spring app so it picks up the new /api/v1/users endpoint.`;
    }
    const serverMsg = err?.error?.message || err?.error?.error;
    if (serverMsg)
      return serverMsg;
    return `Failed to ${action} (HTTP ${err?.status || "?"}).`;
  }
  openCreate() {
    this.editMode = false;
    this.form = this.blankForm();
    this.showForm = true;
    this.successMessage = "";
    this.errorMessage = "";
  }
  edit(u) {
    this.editMode = true;
    this.form = __spreadValues({}, u);
    this.showForm = true;
    this.successMessage = "";
    this.errorMessage = "";
  }
  save() {
    if (!this.form.name || !this.form.email) {
      this.errorMessage = "Name and email are required.";
      return;
    }
    if (!this.editMode && !this.form.password) {
      this.errorMessage = "Password is required for new users.";
      return;
    }
    this.isSaving = true;
    this.errorMessage = "";
    const wasEdit = this.editMode;
    const userName = this.form.name;
    const req = this.editMode ? this.userService.updateUser(this.form.userId, this.form) : this.userService.createUser(this.form);
    req.subscribe({
      next: (savedUser) => {
        this.isSaving = false;
        this.showForm = false;
        this.successMessage = wasEdit ? `User "${userName}" updated successfully.` : `User "${userName}" created successfully.`;
        setTimeout(() => this.successMessage = "", 4e3);
        if (wasEdit && savedUser) {
          const idx = this.users.findIndex((x) => x.userId === savedUser.userId);
          if (idx > -1)
            this.users[idx] = savedUser;
        } else if (savedUser?.userId) {
          this.users.unshift(savedUser);
        } else {
          this.loadUsers();
        }
      },
      error: (err) => {
        this.isSaving = false;
        this.errorMessage = this.describeError(err, wasEdit ? "update user" : "create user");
      }
    });
  }
  toggleStatus(u) {
    const newStatus = u.status === "ACTIVE" ? "LOCKED" : "ACTIVE";
    const prev = u.status;
    u.status = newStatus;
    this.userService.updateUser(u.userId, { status: newStatus }).subscribe({
      next: (updated) => {
        u.status = updated?.status ?? newStatus;
        this.successMessage = `"${u.name}" is now ${u.status}.`;
        setTimeout(() => this.successMessage = "", 3e3);
      },
      error: (err) => {
        u.status = prev;
        this.errorMessage = this.describeError(err, newStatus === "LOCKED" ? "lock user" : "unlock user");
      }
    });
  }
  delete(id) {
    const target = this.users.find((u) => u.userId === id);
    const label = target ? `"${target.name}"` : `user #${id}`;
    if (!confirm(`Delete ${label}? This cannot be undone.`))
      return;
    this.userService.deleteUser(id).subscribe({
      next: () => {
        this.users = this.users.filter((u) => u.userId !== id);
        this.successMessage = `${label} deleted.`;
        setTimeout(() => this.successMessage = "", 3e3);
      },
      error: (err) => {
        this.errorMessage = this.describeError(err, "delete user");
      }
    });
  }
  cancel() {
    this.showForm = false;
    this.errorMessage = "";
  }
  static \u0275fac = function UserManagementComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserManagementComponent)(\u0275\u0275directiveInject(UserService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserManagementComponent, selectors: [["app-user-management"]], decls: 14, vars: 6, consts: [[1, "page-content"], [1, "page-header"], [1, "fas", "fa-users"], [1, "page-subtitle"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], ["class", "alert alert-error", 4, "ngIf"], ["class", "glass-card mb-20", "style", "max-width:480px", 4, "ngIf"], ["class", "loading-container", 4, "ngIf"], ["class", "glass-card", 4, "ngIf"], [1, "btn", "btn-primary", 3, "click"], [1, "fas", "fa-plus"], [1, "alert", "alert-success"], [1, "fas", "fa-check-circle"], [1, "alert", "alert-error"], [1, "fas", "fa-exclamation-circle"], [1, "glass-card", "mb-20", 2, "max-width", "480px"], [1, "mb-16"], [1, "form-group"], [1, "form-control", 3, "ngModelChange", "ngModel"], ["class", "form-group", 4, "ngIf"], [3, "value", 4, "ngFor", "ngForOf"], [1, "flex", "gap-8"], [1, "btn", "btn-success", 3, "click", "disabled"], [4, "ngIf"], [1, "btn", "btn-light", 3, "click", "disabled"], ["type", "password", 1, "form-control", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "fas", "fa-check"], [1, "fas", "fa-spinner", "fa-spin"], [1, "loading-container"], [1, "spinner"], [1, "glass-card"], [1, "data-table"], [4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], [1, "badge", "badge-info"], [1, "badge", 3, "ngClass"], [1, "btn", "btn-sm", "btn-secondary", 3, "click"], [1, "btn", "btn-sm", 3, "click", "ngClass"], [1, "btn", "btn-sm", "btn-danger", 3, "click"], [1, "empty-state"]], template: function UserManagementComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
      \u0275\u0275element(4, "i", 2);
      \u0275\u0275text(5, " User Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 3);
      \u0275\u0275text(7, "Manage users, roles and account status");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(8, UserManagementComponent_button_8_Template, 3, 0, "button", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275template(9, UserManagementComponent_div_9_Template, 3, 1, "div", 5)(10, UserManagementComponent_div_10_Template, 3, 1, "div", 6)(11, UserManagementComponent_div_11_Template, 27, 11, "div", 7)(12, UserManagementComponent_div_12_Template, 2, 0, "div", 8)(13, UserManagementComponent_div_13_Template, 19, 2, "div", 9);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", !ctx.showForm);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showForm);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n.btn[_ngcontent-%COMP%]    + .btn[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n/*# sourceMappingURL=user-management.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserManagementComponent, [{
    type: Component,
    args: [{ selector: "app-user-management", standalone: true, imports: [CommonModule, FormsModule], template: `
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
  `, styles: ["/* src/app/admin-portal/user-management/user-management.component.css */\n.btn + .btn {\n  margin-left: 8px;\n}\n/*# sourceMappingURL=user-management.component.css.map */\n"] }]
  }], () => [{ type: UserService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserManagementComponent, { className: "UserManagementComponent", filePath: "src/app/admin-portal/user-management/user-management.component.ts", lineNumber: 126 });
})();
export {
  UserManagementComponent
};
//# sourceMappingURL=chunk-6SJS3W7C.js.map
