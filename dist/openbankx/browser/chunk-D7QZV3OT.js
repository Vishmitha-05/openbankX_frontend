import {
  ConsentService
} from "./chunk-OJYWRIMV.js";
import {
  FormsModule
} from "./chunk-IBGG5UE3.js";
import {
  AuthService
} from "./chunk-WCVDOMTU.js";
import {
  Router,
  RouterLink,
  RouterModule
} from "./chunk-QS26HGQT.js";
import "./chunk-TX3HFKHN.js";
import "./chunk-5C4TBQN6.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Component,
  DatePipe,
  NgClass,
  NgForOf,
  NgIf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵpureFunction3,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-6UHLKSNQ.js";

// src/app/customer-portal/my-consents/my-consents.component.ts
var _c0 = (a0, a1, a2) => ({ "badge-active": a0, "badge-revoked": a1, "badge-expired": a2 });
var _c1 = (a0) => ["/customer/consents", a0];
function MyConsentsComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "div", 11);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Loading consents...");
    \u0275\u0275elementEnd()();
  }
}
function MyConsentsComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "i", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.successMessage, " ");
  }
}
function MyConsentsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "i", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function MyConsentsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "i", 2);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "No consents found. Browse apps to grant access.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 17);
    \u0275\u0275listener("click", function MyConsentsComponent_div_11_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToBrowseApps());
    });
    \u0275\u0275element(5, "i", 18);
    \u0275\u0275text(6, " Go to My Apps ");
    \u0275\u0275elementEnd()();
  }
}
function MyConsentsComponent_section_12_div_7_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275element(1, "i", 43);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const scope_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.getScopeLabel(scope_r4));
  }
}
function MyConsentsComponent_section_12_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 26)(2, "div", 27);
    \u0275\u0275element(3, "i", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "h4");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 29);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 30);
    \u0275\u0275text(10, "AWAITING SCA");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "div", 31);
    \u0275\u0275elementStart(12, "h5", 32);
    \u0275\u0275text(13, "Requested permissions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 33);
    \u0275\u0275template(15, MyConsentsComponent_section_12_div_7_div_15_Template, 4, 1, "div", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "div", 31);
    \u0275\u0275elementStart(17, "div", 35)(18, "span", 36);
    \u0275\u0275text(19, "Consent ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 35)(23, "span", 36);
    \u0275\u0275text(24, "Expires");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 37)(29, "button", 38);
    \u0275\u0275listener("click", function MyConsentsComponent_section_12_div_7_Template_button_click_29_listener() {
      const consent_r5 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.goToSca(consent_r5));
    });
    \u0275\u0275element(30, "i", 39);
    \u0275\u0275text(31, " Approve & verify (SCA) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 40);
    \u0275\u0275listener("click", function MyConsentsComponent_section_12_div_7_Template_button_click_32_listener() {
      const consent_r5 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.deny(consent_r5));
    });
    \u0275\u0275element(33, "i", 41);
    \u0275\u0275text(34, " Deny ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const consent_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate((consent_r5.tppApp == null ? null : consent_r5.tppApp.appName) || "App");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((consent_r5.tppApp == null ? null : consent_r5.tppApp.tpp == null ? null : consent_r5.tppApp.tpp.legalName) || "");
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r0.parseJson(consent_r5.scopeJSON));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("#", consent_r5.consentId);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(27, 5, consent_r5.expiryDate, "mediumDate"));
  }
}
function MyConsentsComponent_section_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 19)(1, "h3", 20);
    \u0275\u0275element(2, "i", 21);
    \u0275\u0275text(3, " Awaiting your review ");
    \u0275\u0275elementStart(4, "span", 22);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 23);
    \u0275\u0275template(7, MyConsentsComponent_section_12_div_7_Template, 35, 8, "div", 24);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.pendingConsents.length);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.pendingConsents);
  }
}
function MyConsentsComponent_section_13_div_7_ng_container_10_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 61);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const scope_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getScopeLabel(scope_r6), " ");
  }
}
function MyConsentsComponent_section_13_div_7_ng_container_10_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 62);
    \u0275\u0275listener("click", function MyConsentsComponent_section_13_div_7_ng_container_10_button_23_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const consent_r8 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.startEdit(consent_r8));
    });
    \u0275\u0275element(1, "i", 63);
    \u0275\u0275text(2, " Edit permissions ");
    \u0275\u0275elementEnd();
  }
}
function MyConsentsComponent_section_13_div_7_ng_container_10_button_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 40);
    \u0275\u0275listener("click", function MyConsentsComponent_section_13_div_7_ng_container_10_button_24_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const consent_r8 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.revoke(consent_r8));
    });
    \u0275\u0275element(1, "i", 41);
    \u0275\u0275text(2, " Revoke ");
    \u0275\u0275elementEnd();
  }
}
function MyConsentsComponent_section_13_div_7_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 52)(2, "label", 29);
    \u0275\u0275text(3, "Permissions granted");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 53);
    \u0275\u0275template(5, MyConsentsComponent_section_13_div_7_ng_container_10_span_5_Template, 2, 1, "span", 54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 55)(7, "div")(8, "span", 29);
    \u0275\u0275text(9, "Created:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 56);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div")(14, "span", 29);
    \u0275\u0275text(15, "Expires:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 56);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 37)(20, "a", 57);
    \u0275\u0275element(21, "i", 58);
    \u0275\u0275text(22, " Details ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, MyConsentsComponent_section_13_div_7_ng_container_10_button_23_Template, 3, 0, "button", 59)(24, MyConsentsComponent_section_13_div_7_ng_container_10_button_24_Template, 3, 0, "button", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const consent_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r0.parseJson(consent_r8.scopeJSON));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 6, consent_r8.createdDate, "mediumDate"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 9, consent_r8.expiryDate, "mediumDate"));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(12, _c1, consent_r8.consentId));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", consent_r8.status === "ACTIVE");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", consent_r8.status === "ACTIVE");
  }
}
function MyConsentsComponent_section_13_div_7_ng_container_11_label_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 68)(1, "input", 69);
    \u0275\u0275listener("change", function MyConsentsComponent_section_13_div_7_ng_container_11_label_5_Template_input_change_1_listener() {
      const scope_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.toggleEditScope(scope_r12));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 61);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const scope_r12 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r0.editingSelected.includes(scope_r12));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getScopeLabel(scope_r12));
  }
}
function MyConsentsComponent_section_13_div_7_ng_container_11_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 70);
    \u0275\u0275text(2, " Save changes");
    \u0275\u0275elementEnd();
  }
}
function MyConsentsComponent_section_13_div_7_ng_container_11_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 71);
    \u0275\u0275text(2, " Saving...");
    \u0275\u0275elementEnd();
  }
}
function MyConsentsComponent_section_13_div_7_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 52)(2, "label", 29);
    \u0275\u0275text(3, " Toggle the permissions you want to keep. Unchecking all is the same as revoking the consent. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 64);
    \u0275\u0275template(5, MyConsentsComponent_section_13_div_7_ng_container_11_label_5_Template, 4, 2, "label", 65);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 37)(7, "button", 66);
    \u0275\u0275listener("click", function MyConsentsComponent_section_13_div_7_ng_container_11_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r10);
      const consent_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.saveEdit(consent_r8));
    });
    \u0275\u0275template(8, MyConsentsComponent_section_13_div_7_ng_container_11_span_8_Template, 3, 0, "span", 9)(9, MyConsentsComponent_section_13_div_7_ng_container_11_span_9_Template, 3, 0, "span", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 67);
    \u0275\u0275listener("click", function MyConsentsComponent_section_13_div_7_ng_container_11_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.cancelEdit());
    });
    \u0275\u0275text(11, " Cancel ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const consent_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r0.editableScopes(consent_r8));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.isSavingEdit);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isSavingEdit);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isSavingEdit);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.isSavingEdit);
  }
}
function MyConsentsComponent_section_13_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "div", 49)(2, "span", 50);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 29);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "h4");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 51);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, MyConsentsComponent_section_13_div_7_ng_container_10_Template, 25, 14, "ng-container", 9)(11, MyConsentsComponent_section_13_div_7_ng_container_11_Template, 12, 5, "ng-container", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const consent_r8 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(7, _c0, consent_r8.status === "ACTIVE", consent_r8.status === "REVOKED", consent_r8.status === "EXPIRED"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(consent_r8.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#", consent_r8.consentId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((consent_r8.tppApp == null ? null : consent_r8.tppApp.appName) || "TPP App");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((consent_r8.tppApp == null ? null : consent_r8.tppApp.tpp == null ? null : consent_r8.tppApp.tpp.legalName) || "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.editingId !== consent_r8.consentId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.editingId === consent_r8.consentId);
  }
}
function MyConsentsComponent_section_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section")(1, "h3", 20);
    \u0275\u0275element(2, "i", 44);
    \u0275\u0275text(3, " My consents ");
    \u0275\u0275elementStart(4, "span", 45);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 46);
    \u0275\u0275template(7, MyConsentsComponent_section_13_div_7_Template, 12, 11, "div", 47);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.otherConsents.length);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.otherConsents);
  }
}
var MyConsentsComponent = class _MyConsentsComponent {
  consentService;
  authService;
  router;
  cdr;
  consents = [];
  isLoading = true;
  errorMessage = "";
  successMessage = "";
  /** Consent currently being edited (id), and the in-progress scope selection. */
  editingId = null;
  editingSelected = [];
  /** Full list of scopes the app *originally* requested — used to allow
   *  re-adding a previously-withdrawn permission in the editor. */
  editingAllScopes = [];
  isSavingEdit = false;
  /** All scopes a customer can grant — fallback when the app request list
   *  doesn't include something the customer previously had. */
  KNOWN_SCOPES = ["accounts", "balances", "payments", "funds-confirmations"];
  constructor(consentService, authService, router, cdr) {
    this.consentService = consentService;
    this.authService = authService;
    this.router = router;
    this.cdr = cdr;
  }
  ngOnInit() {
    this.loadConsents();
  }
  loadConsents() {
    const userId = this.authService.getUserId();
    this.isLoading = true;
    this.consentService.getConsentsByUser(userId).subscribe({
      next: (d) => {
        this.consents = d || [];
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.errorMessage = "Unable to load consents.";
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }
  get pendingConsents() {
    return this.consents.filter((c) => c.status === "AWAITING_SCA");
  }
  get otherConsents() {
    return this.consents.filter((c) => c.status !== "AWAITING_SCA");
  }
  parseJson(str) {
    try {
      return JSON.parse(str) || [];
    } catch {
      return [];
    }
  }
  getScopeLabel(scope) {
    const map = {
      "accounts": "View accounts",
      "balances": "View balances",
      "payments": "Initiate payments",
      "funds-confirmations": "Confirm funds availability",
      "accounts:read": "View account information",
      "balances:read": "View account balances",
      "payments:write": "Initiate payments",
      "funds:read": "Check funds availability"
    };
    return map[scope] || scope;
  }
  goToBrowseApps() {
    this.router.navigate(["/customer/apps"]);
  }
  goToSca(consent) {
    this.router.navigate(["/customer/sca"], {
      queryParams: { consentId: consent.consentId, method: "OTP" }
    });
  }
  /* ---------- Edit permissions ---------- */
  startEdit(consent) {
    this.editingId = consent.consentId;
    this.editingSelected = [...this.parseJson(consent.scopeJSON)];
    const requested = this.parseJson(consent.tppApp?.scopesRequested || "[]");
    const combined = /* @__PURE__ */ new Set([
      ...this.editingSelected,
      ...requested,
      ...this.KNOWN_SCOPES.filter((s) => this.editingSelected.includes(s))
    ]);
    this.editingAllScopes = Array.from(combined);
    this.errorMessage = "";
    this.successMessage = "";
  }
  editableScopes(_consent) {
    return this.editingAllScopes;
  }
  toggleEditScope(scope) {
    this.editingSelected = this.editingSelected.includes(scope) ? this.editingSelected.filter((s) => s !== scope) : [...this.editingSelected, scope];
  }
  cancelEdit() {
    this.editingId = null;
    this.editingSelected = [];
    this.editingAllScopes = [];
  }
  saveEdit(consent) {
    this.errorMessage = "";
    this.isSavingEdit = true;
    this.consentService.updateScopes(consent.consentId, this.editingSelected).subscribe({
      next: (updated) => {
        this.isSavingEdit = false;
        consent.scopeJSON = updated.scopeJSON;
        if (updated.status)
          consent.status = updated.status;
        this.successMessage = this.editingSelected.length === 0 ? `All permissions withdrawn \u2014 consent #${consent.consentId} revoked.` : `Permissions updated for consent #${consent.consentId}.`;
        setTimeout(() => this.successMessage = "", 3500);
        this.cancelEdit();
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.isSavingEdit = false;
        this.errorMessage = err?.error?.message || "Failed to update permissions.";
      }
    });
  }
  /* ---------- Deny / Revoke ---------- */
  deny(consent) {
    if (!confirm(`Deny the consent request from "${consent.tppApp?.appName || "this app"}"?`))
      return;
    this.consentService.revokeConsent(consent.consentId).subscribe({
      next: () => {
        consent.status = "REVOKED";
        this.successMessage = `Consent request denied.`;
        setTimeout(() => this.successMessage = "", 3e3);
        this.cdr.detectChanges();
      },
      error: () => {
        this.errorMessage = "Failed to deny consent. Please try again.";
      }
    });
  }
  revoke(consent) {
    if (!confirm("Revoke this consent? The app will lose access immediately."))
      return;
    this.consentService.revokeConsent(consent.consentId).subscribe({
      next: () => {
        consent.status = "REVOKED";
        this.successMessage = `Consent #${consent.consentId} revoked.`;
        setTimeout(() => this.successMessage = "", 3e3);
        this.cdr.detectChanges();
      }
    });
  }
  static \u0275fac = function MyConsentsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MyConsentsComponent)(\u0275\u0275directiveInject(ConsentService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyConsentsComponent, selectors: [["app-my-consents"]], decls: 14, vars: 6, consts: [[1, "page-content"], [1, "page-header"], [1, "fas", "fa-handshake"], [1, "page-subtitle"], ["class", "loading-container", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], ["class", "alert alert-error", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "mb-24", 4, "ngIf"], [4, "ngIf"], [1, "loading-container"], [1, "spinner"], [1, "alert", "alert-success"], [1, "fas", "fa-check-circle"], [1, "alert", "alert-error"], [1, "fas", "fa-exclamation-circle"], [1, "empty-state"], [1, "btn", "btn-primary", "mt-12", 3, "click"], [1, "fas", "fa-store"], [1, "mb-24"], [1, "section-title"], [1, "fas", "fa-clipboard-check"], [1, "badge", "badge-pending"], [1, "grid-2"], ["class", "glass-card review-card", 4, "ngFor", "ngForOf"], [1, "glass-card", "review-card"], [1, "review-header"], [1, "review-app-icon"], [1, "fas", "fa-cube"], [1, "text-sm", "text-muted"], [1, "badge", "badge-pending", 2, "margin-left", "auto"], [1, "section-divider"], [1, "mb-8"], [1, "scope-list"], ["class", "scope-item", 4, "ngFor", "ngForOf"], [1, "detail-row"], [1, "text-muted"], [1, "flex", "gap-8", "mt-16"], [1, "btn", "btn-success", "btn-sm", 3, "click"], [1, "fas", "fa-shield-alt"], [1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "fas", "fa-times"], [1, "scope-item"], [1, "fas", "fa-check-circle", "text-success"], [1, "fas", "fa-list"], [1, "badge", "badge-info"], [1, "grid-3"], ["class", "glass-card consent-card", 4, "ngFor", "ngForOf"], [1, "glass-card", "consent-card"], [1, "flex", "items-center", "justify-between", "mb-12"], [1, "badge", 3, "ngClass"], [1, "text-sm", "text-muted", "mt-4"], [1, "mt-12"], [1, "mt-4"], ["class", "scope-pill", 4, "ngFor", "ngForOf"], [1, "consent-dates", "mt-12"], [1, "text-sm"], [1, "btn", "btn-secondary", "btn-sm", 3, "routerLink"], [1, "fas", "fa-eye"], ["class", "btn btn-light btn-sm", 3, "click", 4, "ngIf"], ["class", "btn btn-danger btn-sm", 3, "click", 4, "ngIf"], [1, "scope-pill"], [1, "btn", "btn-light", "btn-sm", 3, "click"], [1, "fas", "fa-pen"], [1, "scope-checkboxes", "mt-8"], ["class", "scope-check-item", 4, "ngFor", "ngForOf"], [1, "btn", "btn-success", "btn-sm", 3, "click", "disabled"], [1, "btn", "btn-light", "btn-sm", 3, "click", "disabled"], [1, "scope-check-item"], ["type", "checkbox", 3, "change", "checked"], [1, "fas", "fa-check"], [1, "fas", "fa-spinner", "fa-spin"]], template: function MyConsentsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
      \u0275\u0275element(4, "i", 2);
      \u0275\u0275text(5, " My Consents");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 3);
      \u0275\u0275text(7, "Review pending requests and manage your data-sharing permissions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(8, MyConsentsComponent_div_8_Template, 4, 0, "div", 4)(9, MyConsentsComponent_div_9_Template, 3, 1, "div", 5)(10, MyConsentsComponent_div_10_Template, 3, 1, "div", 6)(11, MyConsentsComponent_div_11_Template, 7, 0, "div", 7)(12, MyConsentsComponent_section_12_Template, 8, 2, "section", 8)(13, MyConsentsComponent_section_13_Template, 8, 2, "section", 9);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.consents.length === 0 && !ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.pendingConsents.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.otherConsents.length > 0);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, RouterModule, RouterLink, DatePipe], styles: ["\n.consent-dates[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.consent-card[_ngcontent-%COMP%] {\n  animation: fadeInUp 0.4s ease both;\n}\n.section-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1rem;\n  color: var(--accent-navy);\n  margin-bottom: 14px;\n}\n.section-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--accent-blue);\n}\n.section-title[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.mb-24[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.review-card[_ngcontent-%COMP%] {\n  border-left: 4px solid var(--accent-gold);\n  animation: fadeInUp 0.3s ease both;\n}\n.review-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.review-app-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: #eff6ff;\n  color: var(--accent-blue);\n  border: 1px solid #bfdbfe;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.scope-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.scope-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.85rem;\n}\n.scope-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--status-active);\n}\n.detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 4px 0;\n  font-size: 0.85rem;\n}\n/*# sourceMappingURL=my-consents.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyConsentsComponent, [{
    type: Component,
    args: [{ selector: "app-my-consents", standalone: true, imports: [CommonModule, FormsModule, RouterModule], template: `
    <div class="page-content">
      <div class="page-header">
        <div>
          <h1><i class="fas fa-handshake"></i> My Consents</h1>
          <p class="page-subtitle">Review pending requests and manage your data-sharing permissions</p>
        </div>
      </div>

      <div class="loading-container" *ngIf="isLoading">
        <div class="spinner"></div><span>Loading consents...</span>
      </div>

      <div class="alert alert-success" *ngIf="successMessage">
        <i class="fas fa-check-circle"></i> {{ successMessage }}
      </div>
      <div class="alert alert-error" *ngIf="errorMessage">
        <i class="fas fa-exclamation-circle"></i> {{ errorMessage }}
      </div>

      <div class="empty-state" *ngIf="!isLoading && consents.length === 0 && !errorMessage">
        <i class="fas fa-handshake"></i>
        <p>No consents found. Browse apps to grant access.</p>
        <button class="btn btn-primary mt-12" (click)="goToBrowseApps()">
          <i class="fas fa-store"></i> Go to My Apps
        </button>
      </div>

      <!-- ============================================================
           AWAITING REVIEW (was the old "Review Consent" page)
           ============================================================ -->
      <section *ngIf="!isLoading && pendingConsents.length > 0" class="mb-24">
        <h3 class="section-title">
          <i class="fas fa-clipboard-check"></i> Awaiting your review
          <span class="badge badge-pending">{{ pendingConsents.length }}</span>
        </h3>

        <div class="grid-2">
          <div *ngFor="let consent of pendingConsents" class="glass-card review-card">

            <div class="review-header">
              <div class="review-app-icon"><i class="fas fa-cube"></i></div>
              <div>
                <h4>{{ consent.tppApp?.appName || 'App' }}</h4>
                <p class="text-sm text-muted">{{ consent.tppApp?.tpp?.legalName || '' }}</p>
              </div>
              <span class="badge badge-pending" style="margin-left:auto">AWAITING SCA</span>
            </div>

            <div class="section-divider"></div>

            <h5 class="mb-8">Requested permissions</h5>
            <div class="scope-list">
              <div *ngFor="let scope of parseJson(consent.scopeJSON)" class="scope-item">
                <i class="fas fa-check-circle text-success"></i>
                <span>{{ getScopeLabel(scope) }}</span>
              </div>
            </div>

            <div class="section-divider"></div>

            <div class="detail-row">
              <span class="text-muted">Consent ID</span>
              <span>#{{ consent.consentId }}</span>
            </div>
            <div class="detail-row">
              <span class="text-muted">Expires</span>
              <span>{{ consent.expiryDate | date:'mediumDate' }}</span>
            </div>

            <div class="flex gap-8 mt-16">
              <button class="btn btn-success btn-sm" (click)="goToSca(consent)">
                <i class="fas fa-shield-alt"></i> Approve &amp; verify (SCA)
              </button>
              <button class="btn btn-danger btn-sm" (click)="deny(consent)">
                <i class="fas fa-times"></i> Deny
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- ============================================================
           ACTIVE / EXPIRED / REVOKED consents
           ============================================================ -->
      <section *ngIf="!isLoading && otherConsents.length > 0">
        <h3 class="section-title">
          <i class="fas fa-list"></i> My consents
          <span class="badge badge-info">{{ otherConsents.length }}</span>
        </h3>

        <div class="grid-3">
          <div *ngFor="let consent of otherConsents" class="glass-card consent-card">
            <div class="flex items-center justify-between mb-12">
              <span class="badge"
                    [ngClass]="{
                      'badge-active':  consent.status === 'ACTIVE',
                      'badge-revoked': consent.status === 'REVOKED',
                      'badge-expired': consent.status === 'EXPIRED'
                    }">{{ consent.status }}</span>
              <span class="text-sm text-muted">#{{ consent.consentId }}</span>
            </div>

            <h4>{{ consent.tppApp?.appName || 'TPP App' }}</h4>
            <p class="text-sm text-muted mt-4">{{ consent.tppApp?.tpp?.legalName || '' }}</p>

            <!-- ===== View mode ===== -->
            <ng-container *ngIf="editingId !== consent.consentId">
              <div class="mt-12">
                <label class="text-sm text-muted">Permissions granted</label>
                <div class="mt-4">
                  <span *ngFor="let scope of parseJson(consent.scopeJSON)" class="scope-pill">
                    {{ getScopeLabel(scope) }}
                  </span>
                </div>
              </div>

              <div class="consent-dates mt-12">
                <div>
                  <span class="text-sm text-muted">Created:</span>
                  <span class="text-sm">{{ consent.createdDate | date:'mediumDate' }}</span>
                </div>
                <div>
                  <span class="text-sm text-muted">Expires:</span>
                  <span class="text-sm">{{ consent.expiryDate | date:'mediumDate' }}</span>
                </div>
              </div>

              <div class="flex gap-8 mt-16">
                <a [routerLink]="['/customer/consents', consent.consentId]"
                   class="btn btn-secondary btn-sm">
                  <i class="fas fa-eye"></i> Details
                </a>
                <button *ngIf="consent.status === 'ACTIVE'"
                        class="btn btn-light btn-sm"
                        (click)="startEdit(consent)">
                  <i class="fas fa-pen"></i> Edit permissions
                </button>
                <button *ngIf="consent.status === 'ACTIVE'"
                        class="btn btn-danger btn-sm"
                        (click)="revoke(consent)">
                  <i class="fas fa-times"></i> Revoke
                </button>
              </div>
            </ng-container>

            <!-- ===== Edit mode ===== -->
            <ng-container *ngIf="editingId === consent.consentId">
              <div class="mt-12">
                <label class="text-sm text-muted">
                  Toggle the permissions you want to keep.
                  Unchecking all is the same as revoking the consent.
                </label>

                <div class="scope-checkboxes mt-8">
                  <label *ngFor="let scope of editableScopes(consent)" class="scope-check-item">
                    <input type="checkbox"
                           [checked]="editingSelected.includes(scope)"
                           (change)="toggleEditScope(scope)">
                    <span class="scope-pill">{{ getScopeLabel(scope) }}</span>
                  </label>
                </div>
              </div>

              <div class="flex gap-8 mt-16">
                <button class="btn btn-success btn-sm" (click)="saveEdit(consent)" [disabled]="isSavingEdit">
                  <span *ngIf="!isSavingEdit"><i class="fas fa-check"></i> Save changes</span>
                  <span *ngIf="isSavingEdit"><i class="fas fa-spinner fa-spin"></i> Saving...</span>
                </button>
                <button class="btn btn-light btn-sm" (click)="cancelEdit()" [disabled]="isSavingEdit">
                  Cancel
                </button>
              </div>
            </ng-container>
          </div>
        </div>
      </section>
    </div>
  `, styles: ["/* src/app/customer-portal/my-consents/my-consents.component.css */\n.consent-dates {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.consent-card {\n  animation: fadeInUp 0.4s ease both;\n}\n.section-title {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1rem;\n  color: var(--accent-navy);\n  margin-bottom: 14px;\n}\n.section-title i {\n  color: var(--accent-blue);\n}\n.section-title .badge {\n  margin-left: auto;\n}\n.mb-24 {\n  margin-bottom: 24px;\n}\n.review-card {\n  border-left: 4px solid var(--accent-gold);\n  animation: fadeInUp 0.3s ease both;\n}\n.review-header {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.review-app-icon {\n  width: 40px;\n  height: 40px;\n  background: #eff6ff;\n  color: var(--accent-blue);\n  border: 1px solid #bfdbfe;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.scope-list {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.scope-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.85rem;\n}\n.scope-item i {\n  color: var(--status-active);\n}\n.detail-row {\n  display: flex;\n  justify-content: space-between;\n  padding: 4px 0;\n  font-size: 0.85rem;\n}\n/*# sourceMappingURL=my-consents.component.css.map */\n"] }]
  }], () => [{ type: ConsentService }, { type: AuthService }, { type: Router }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyConsentsComponent, { className: "MyConsentsComponent", filePath: "src/app/customer-portal/my-consents/my-consents.component.ts", lineNumber: 194 });
})();
export {
  MyConsentsComponent
};
//# sourceMappingURL=chunk-D7QZV3OT.js.map
