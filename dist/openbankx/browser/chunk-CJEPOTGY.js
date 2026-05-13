import {
  AccountService
} from "./chunk-J35VJXPN.js";
import {
  ConsentService
} from "./chunk-OJYWRIMV.js";
import {
  AuthService
} from "./chunk-WCVDOMTU.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-QS26HGQT.js";
import "./chunk-TX3HFKHN.js";
import "./chunk-5C4TBQN6.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  NgClass,
  NgForOf,
  NgIf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-6UHLKSNQ.js";

// src/app/customer-portal/my-accounts/my-accounts.component.ts
function MyAccountsComponent_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 9);
    \u0275\u0275text(1, " Shared with ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.tppAppName);
  }
}
function MyAccountsComponent_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 9);
    \u0275\u0275text(1, " Open this page through an app that has the ");
    \u0275\u0275elementStart(2, "em");
    \u0275\u0275text(3, "View accounts");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " permission ");
    \u0275\u0275elementEnd();
  }
}
function MyAccountsComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "div", 11);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Loading...");
    \u0275\u0275elementEnd()();
  }
}
function MyAccountsComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function MyAccountsComponent_div_10_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function MyAccountsComponent_div_10_button_7_Template_button_click_0_listener() {
      const c_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openThroughApp(c_r3));
    });
    \u0275\u0275elementStart(1, "div", 20);
    \u0275\u0275element(2, "i", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 22)(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 23);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "i", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(c_r3.tppApp == null ? null : c_r3.tppApp.appName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((c_r3.tppApp == null ? null : c_r3.tppApp.tpp == null ? null : c_r3.tppApp.tpp.legalName) || "");
  }
}
function MyAccountsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "h3", 14);
    \u0275\u0275element(2, "i", 15);
    \u0275\u0275text(3, " Open through an app");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 16);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 17);
    \u0275\u0275template(7, MyAccountsComponent_div_10_button_7_Template, 9, 2, "button", 18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" You've granted account access to ", ctx_r0.appsWithAccountAccess.length, " app", ctx_r0.appsWithAccountAccess.length === 1 ? "" : "s", ". Pick one to view your accounts as that app would. ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.appsWithAccountAccess);
  }
}
function MyAccountsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "i", 26);
    \u0275\u0275elementStart(2, "h3");
    \u0275\u0275text(3, "No active consents yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 27);
    \u0275\u0275text(5, " You haven't granted any app access to your accounts. Go to ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7, "My Apps");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " to get started. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 28);
    \u0275\u0275listener("click", function MyAccountsComponent_div_11_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToBrowseApps());
    });
    \u0275\u0275element(10, "i", 29);
    \u0275\u0275text(11, " Open My Apps ");
    \u0275\u0275elementEnd()();
  }
}
function MyAccountsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "i", 26);
    \u0275\u0275elementStart(2, "h3");
    \u0275\u0275text(3, "No app has account access yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 27);
    \u0275\u0275text(5, " None of your active consents include the ");
    \u0275\u0275elementStart(6, "em");
    \u0275\u0275text(7, "View accounts");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " permission. Grant that permission to an app from ");
    \u0275\u0275elementStart(9, "strong");
    \u0275\u0275text(10, "My Apps");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " first. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 28);
    \u0275\u0275listener("click", function MyAccountsComponent_div_12_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToBrowseApps());
    });
    \u0275\u0275element(13, "i", 29);
    \u0275\u0275text(14, " Open My Apps ");
    \u0275\u0275elementEnd()();
  }
}
function MyAccountsComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "i", 26);
    \u0275\u0275elementStart(2, "h3");
    \u0275\u0275text(3, "This app doesn't have account access");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 27);
    \u0275\u0275text(5, " Your consent for ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " doesn't include the ");
    \u0275\u0275elementStart(9, "em");
    \u0275\u0275text(10, "View accounts");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " permission. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 28);
    \u0275\u0275listener("click", function MyAccountsComponent_div_13_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToBrowseApps());
    });
    \u0275\u0275element(13, "i", 29);
    \u0275\u0275text(14, " Open another app ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.tppAppName || "this app");
  }
}
function MyAccountsComponent_div_14_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275listener("click", function MyAccountsComponent_div_14_div_2_Template_div_click_0_listener() {
      const acc_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.loadTransactions(acc_r8));
    });
    \u0275\u0275elementStart(1, "div", 33)(2, "h4", 34);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 35);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 36);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 37)(9, "strong");
    \u0275\u0275text(10, "Balance:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const acc_r8 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected-account", (ctx_r0.selectedAccount == null ? null : ctx_r0.selectedAccount.accountId) === acc_r8.accountId);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(acc_r8.accountNumberMasked);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", acc_r8.status === "ACTIVE" ? "badge-active" : "badge-locked");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", acc_r8.status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", acc_r8.type, " \u2022 ", acc_r8.currency, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", acc_r8.currency, " ", \u0275\u0275pipeBind2(12, 9, acc_r8.balance, "1.2-2"), " ");
  }
}
function MyAccountsComponent_div_14_div_3_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "div", 11);
    \u0275\u0275elementEnd();
  }
}
function MyAccountsComponent_div_14_div_3_table_9_tr_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 47);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td")(7, "span", 35);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td", 48);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const txn_r10 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 11, txn_r10.txnDate, "medium"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(txn_r10.narrative || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", txn_r10.txnType === "CREDIT" ? "badge-active" : "badge-revoked");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", txn_r10.txnType, " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("text-success", txn_r10.txnType === "CREDIT")("text-error", txn_r10.txnType === "DEBIT");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", txn_r10.txnType === "DEBIT" ? "-" : "+", " ", ctx_r0.selectedAccount.currency, " ", \u0275\u0275pipeBind2(11, 14, txn_r10.amount, "1.2-2"), " ");
  }
}
function MyAccountsComponent_div_14_div_3_table_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 44)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 45);
    \u0275\u0275text(10, "Amount");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "tbody");
    \u0275\u0275template(12, MyAccountsComponent_div_14_div_3_table_9_tr_12_Template, 12, 17, "tr", 46);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(12);
    \u0275\u0275property("ngForOf", ctx_r0.transactions);
  }
}
function MyAccountsComponent_div_14_div_3_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275element(1, "i", 39);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "No transactions on this account yet.");
    \u0275\u0275elementEnd()();
  }
}
function MyAccountsComponent_div_14_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 38)(2, "h3");
    \u0275\u0275element(3, "i", 39);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 40);
    \u0275\u0275listener("click", function MyAccountsComponent_div_14_div_3_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.refreshTransactions());
    });
    \u0275\u0275element(6, "i", 41);
    \u0275\u0275text(7, " Refresh ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, MyAccountsComponent_div_14_div_3_div_8_Template, 2, 0, "div", 4)(9, MyAccountsComponent_div_14_div_3_table_9_Template, 13, 1, "table", 42)(10, MyAccountsComponent_div_14_div_3_div_10_Template, 4, 0, "div", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" Transaction history \u2014 ", ctx_r0.selectedAccount.accountNumberMasked, " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.txnLoading);
    \u0275\u0275advance();
    \u0275\u0275classProp("fa-spin", ctx_r0.txnLoading);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.txnLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.txnLoading && ctx_r0.transactions.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.txnLoading && ctx_r0.transactions.length === 0);
  }
}
function MyAccountsComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 30);
    \u0275\u0275template(2, MyAccountsComponent_div_14_div_2_Template, 13, 12, "div", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, MyAccountsComponent_div_14_div_3_Template, 11, 7, "div", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.accounts);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedAccount);
  }
}
var MyAccountsComponent = class _MyAccountsComponent {
  accountService;
  authService;
  consentService;
  route;
  router;
  cdr;
  accounts = [];
  transactions = [];
  selectedAccount = null;
  isLoading = true;
  txnLoading = false;
  errorMessage = "";
  hasAccountAccess = false;
  tppAppName = "";
  tppAppId = null;
  /** Apps the user has consented to that include 'accounts'. */
  appsWithAccountAccess = [];
  /** True only if the user has no ACTIVE consents at all. */
  noConsentsAtAll = false;
  constructor(accountService, authService, consentService, route, router, cdr) {
    this.accountService = accountService;
    this.authService = authService;
    this.consentService = consentService;
    this.route = route;
    this.router = router;
    this.cdr = cdr;
  }
  ngOnInit() {
    const userId = this.authService.getUserId();
    const qpId = Number(this.route.snapshot.queryParamMap.get("tppAppId"));
    this.tppAppId = qpId > 0 ? qpId : null;
    this.consentService.getConsentsByUser(userId).subscribe({
      next: (consents) => {
        const active = (consents || []).filter((c) => c.status === "ACTIVE");
        this.noConsentsAtAll = active.length === 0;
        this.appsWithAccountAccess = active.filter((c) => this.hasScope(c, "accounts"));
        if (this.tppAppId) {
          const consent = active.find((c) => c.tppApp?.tppAppId === this.tppAppId);
          if (consent) {
            this.tppAppName = consent.tppApp.appName;
            this.hasAccountAccess = this.hasScope(consent, "accounts");
            if (this.hasAccountAccess) {
              this.loadAccounts(userId);
              return;
            }
          }
        }
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.errorMessage = "Unable to check consent permissions.";
        this.isLoading = false;
      }
    });
  }
  hasScope(consent, scope) {
    try {
      const scopes = JSON.parse(consent.scopeJSON);
      return scopes.includes(scope);
    } catch {
      return false;
    }
  }
  loadAccounts(userId) {
    this.accountService.getAccounts(userId, this.tppAppId).subscribe({
      next: (accs) => {
        this.accounts = accs || [];
        this.isLoading = false;
        const focusId = Number(this.route.snapshot.queryParamMap.get("focus"));
        const focused = focusId > 0 ? this.accounts.find((a) => a.accountId === focusId) : void 0;
        const target = focused || this.accounts[0];
        if (target) {
          this.loadTransactions(target);
        } else {
          this.cdr.detectChanges();
        }
      },
      error: () => {
        this.errorMessage = "Unable to load accounts.";
        this.isLoading = false;
      }
    });
  }
  refreshTransactions() {
    if (this.selectedAccount)
      this.loadTransactions(this.selectedAccount);
  }
  loadTransactions(acc) {
    this.selectedAccount = acc;
    this.txnLoading = true;
    this.accountService.getTransactions(acc.accountId, this.tppAppId).subscribe({
      next: (txns) => {
        this.transactions = txns || [];
        this.txnLoading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.txnLoading = false;
      }
    });
  }
  openThroughApp(consent) {
    this.router.navigate(["/customer/accounts"], {
      queryParams: { tppAppId: consent.tppApp?.tppAppId }
    }).then(() => window.location.reload());
  }
  goToBrowseApps() {
    this.router.navigate(["/customer/apps"]);
  }
  static \u0275fac = function MyAccountsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MyAccountsComponent)(\u0275\u0275directiveInject(AccountService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ConsentService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyAccountsComponent, selectors: [["app-my-accounts"]], decls: 15, vars: 9, consts: [[1, "page-content"], [1, "page-header"], [1, "fas", "fa-wallet"], ["class", "page-subtitle", 4, "ngIf"], ["class", "loading-container", 4, "ngIf"], ["class", "alert alert-error", 4, "ngIf"], ["class", "glass-card", 4, "ngIf"], ["class", "glass-card no-consent-card", 4, "ngIf"], [4, "ngIf"], [1, "page-subtitle"], [1, "loading-container"], [1, "spinner"], [1, "alert", "alert-error"], [1, "glass-card"], [1, "mb-12"], [1, "fas", "fa-hand-pointer"], [1, "text-muted", "mb-16"], [1, "app-picker"], ["class", "app-picker-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "app-picker-item", 3, "click"], [1, "app-picker-icon"], [1, "fas", "fa-cube"], [1, "app-picker-meta"], [1, "text-sm", "text-muted"], [1, "fas", "fa-chevron-right", "text-muted"], [1, "glass-card", "no-consent-card"], [1, "fas", "fa-lock", "no-consent-icon"], [1, "text-muted"], [1, "btn", "btn-primary", "mt-12", 3, "click"], [1, "fas", "fa-store"], [1, "grid-2", "mb-20"], ["class", "glass-card account-card", 3, "selected-account", "click", 4, "ngFor", "ngForOf"], [1, "glass-card", "account-card", 3, "click"], [1, "flex", "items-center", "justify-between"], [1, "font-mono"], [1, "badge", 3, "ngClass"], [1, "mt-4", "text-sm", "text-muted"], [1, "mt-8", "font-mono"], [1, "flex", "items-center", "justify-between", "mb-12"], [1, "fas", "fa-receipt"], [1, "btn", "btn-light", "btn-sm", 3, "click", "disabled"], [1, "fas", "fa-sync"], ["class", "data-table", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "data-table"], [1, "text-right"], [4, "ngFor", "ngForOf"], [1, "text-sm"], [1, "text-right", "font-mono"], [1, "empty-state"]], template: function MyAccountsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
      \u0275\u0275element(4, "i", 2);
      \u0275\u0275text(5, " My Accounts");
      \u0275\u0275elementEnd();
      \u0275\u0275template(6, MyAccountsComponent_p_6_Template, 4, 1, "p", 3)(7, MyAccountsComponent_p_7_Template, 5, 0, "p", 3);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(8, MyAccountsComponent_div_8_Template, 4, 0, "div", 4)(9, MyAccountsComponent_div_9_Template, 2, 1, "div", 5)(10, MyAccountsComponent_div_10_Template, 8, 3, "div", 6)(11, MyAccountsComponent_div_11_Template, 12, 0, "div", 7)(12, MyAccountsComponent_div_12_Template, 15, 0, "div", 7)(13, MyAccountsComponent_div_13_Template, 15, 1, "div", 7)(14, MyAccountsComponent_div_14_Template, 4, 2, "div", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.tppAppName);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.tppAppName);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && !ctx.tppAppId && ctx.appsWithAccountAccess.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && !ctx.tppAppId && ctx.appsWithAccountAccess.length === 0 && ctx.noConsentsAtAll);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && !ctx.tppAppId && ctx.appsWithAccountAccess.length === 0 && !ctx.noConsentsAtAll);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.tppAppId && !ctx.hasAccountAccess);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.tppAppId && ctx.hasAccountAccess);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DecimalPipe, DatePipe], styles: ["\n.account-card[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.account-card.selected-account[_ngcontent-%COMP%] {\n  border-color: var(--accent-blue);\n  box-shadow: var(--shadow-glow);\n}\n.acc-icon[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 1.1rem;\n}\n.app-picker[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.app-picker-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  width: 100%;\n  padding: 12px 14px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  font-family: inherit;\n  text-align: left;\n}\n.app-picker-item[_ngcontent-%COMP%]:hover {\n  background: #eff6ff;\n  border-color: #bfdbfe;\n}\n.app-picker-icon[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  background: #0a2540;\n  color: #c79a2a;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.app-picker-meta[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.no-consent-card[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 24px;\n}\n.no-consent-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  color: #d97706;\n  margin-bottom: 12px;\n}\n/*# sourceMappingURL=my-accounts.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyAccountsComponent, [{
    type: Component,
    args: [{ selector: "app-my-accounts", standalone: true, imports: [CommonModule], template: `
    <div class="page-content">

      <div class="page-header">
        <div>
          <h1><i class="fas fa-wallet"></i> My Accounts</h1>
          <p class="page-subtitle" *ngIf="tppAppName">
            Shared with <strong>{{ tppAppName }}</strong>
          </p>
          <p class="page-subtitle" *ngIf="!tppAppName">
            Open this page through an app that has the <em>View accounts</em> permission
          </p>
        </div>
      </div>

      <!-- LOADING -->
      <div class="loading-container" *ngIf="isLoading">
        <div class="spinner"></div>
        <span>Loading...</span>
      </div>

      <!-- ERROR -->
      <div class="alert alert-error" *ngIf="errorMessage">
        {{ errorMessage }}
      </div>

      <!-- ============================================================
           DIRECT NAVIGATION (no tppAppId in URL)
           Show only the app picker / guidance \u2014 never the raw accounts.
           ============================================================ -->
      <div *ngIf="!isLoading && !tppAppId && appsWithAccountAccess.length > 0"
           class="glass-card">
        <h3 class="mb-12"><i class="fas fa-hand-pointer"></i> Open through an app</h3>
        <p class="text-muted mb-16">
          You've granted account access to {{ appsWithAccountAccess.length }}
          app{{ appsWithAccountAccess.length === 1 ? '' : 's' }}.
          Pick one to view your accounts as that app would.
        </p>
        <div class="app-picker">
          <button *ngFor="let c of appsWithAccountAccess"
                  class="app-picker-item"
                  (click)="openThroughApp(c)">
            <div class="app-picker-icon"><i class="fas fa-cube"></i></div>
            <div class="app-picker-meta">
              <strong>{{ c.tppApp?.appName }}</strong>
              <span class="text-sm text-muted">{{ c.tppApp?.tpp?.legalName || '' }}</span>
            </div>
            <i class="fas fa-chevron-right text-muted"></i>
          </button>
        </div>
      </div>

      <!-- NO ACTIVE CONSENT AT ALL -->
      <div *ngIf="!isLoading && !tppAppId && appsWithAccountAccess.length === 0 && noConsentsAtAll"
           class="glass-card no-consent-card">
        <i class="fas fa-lock no-consent-icon"></i>
        <h3>No active consents yet</h3>
        <p class="text-muted">
          You haven't granted any app access to your accounts. Go to <strong>My Apps</strong> to get started.
        </p>
        <button class="btn btn-primary mt-12" (click)="goToBrowseApps()">
          <i class="fas fa-store"></i> Open My Apps
        </button>
      </div>

      <!-- HAS CONSENTS BUT NONE WITH 'accounts' SCOPE -->
      <div *ngIf="!isLoading && !tppAppId && appsWithAccountAccess.length === 0 && !noConsentsAtAll"
           class="glass-card no-consent-card">
        <i class="fas fa-lock no-consent-icon"></i>
        <h3>No app has account access yet</h3>
        <p class="text-muted">
          None of your active consents include the <em>View accounts</em> permission.
          Grant that permission to an app from <strong>My Apps</strong> first.
        </p>
        <button class="btn btn-primary mt-12" (click)="goToBrowseApps()">
          <i class="fas fa-store"></i> Open My Apps
        </button>
      </div>

      <!-- ============================================================
           OPENED VIA AN APP, BUT THAT APP HAS NO accounts SCOPE
           ============================================================ -->
      <div *ngIf="!isLoading && tppAppId && !hasAccountAccess"
           class="glass-card no-consent-card">
        <i class="fas fa-lock no-consent-icon"></i>
        <h3>This app doesn't have account access</h3>
        <p class="text-muted">
          Your consent for <strong>{{ tppAppName || 'this app' }}</strong> doesn't include the
          <em>View accounts</em> permission.
        </p>
        <button class="btn btn-primary mt-12" (click)="goToBrowseApps()">
          <i class="fas fa-store"></i> Open another app
        </button>
      </div>

      <!-- ============================================================
           ACCOUNTS \u2014 only when tppAppId is set AND consent has 'accounts'
           ============================================================ -->
      <div *ngIf="!isLoading && tppAppId && hasAccountAccess">
        <div class="grid-2 mb-20">
          <div *ngFor="let acc of accounts"
               class="glass-card account-card"
               [class.selected-account]="selectedAccount?.accountId === acc.accountId"
               (click)="loadTransactions(acc)">
            <div class="flex items-center justify-between">
              <h4 class="font-mono">{{ acc.accountNumberMasked }}</h4>
              <span class="badge"
                    [ngClass]="acc.status === 'ACTIVE' ? 'badge-active' : 'badge-locked'">
                {{ acc.status }}
              </span>
            </div>
            <div class="mt-4 text-sm text-muted">
              {{ acc.type }} \u2022 {{ acc.currency }}
            </div>
            <div class="mt-8 font-mono">
              <strong>Balance:</strong>
              {{ acc.currency }} {{ acc.balance | number:'1.2-2' }}
            </div>
          </div>
        </div>

        <!-- TRANSACTIONS -->
        <div class="glass-card" *ngIf="selectedAccount">
          <div class="flex items-center justify-between mb-12">
            <h3>
              <i class="fas fa-receipt"></i>
              Transaction history \u2014 {{ selectedAccount.accountNumberMasked }}
            </h3>
            <button class="btn btn-light btn-sm" (click)="refreshTransactions()"
                    [disabled]="txnLoading">
              <i class="fas fa-sync" [class.fa-spin]="txnLoading"></i> Refresh
            </button>
          </div>

          <div *ngIf="txnLoading" class="loading-container">
            <div class="spinner"></div>
          </div>

          <table class="data-table" *ngIf="!txnLoading && transactions.length > 0">
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Type</th>
                <th class="text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let txn of transactions">
                <td class="text-sm">{{ txn.txnDate | date:'medium' }}</td>
                <td>{{ txn.narrative || '\u2014' }}</td>
                <td>
                  <span class="badge"
                        [ngClass]="txn.txnType === 'CREDIT' ? 'badge-active' : 'badge-revoked'">
                    {{ txn.txnType }}
                  </span>
                </td>
                <td class="text-right font-mono"
                    [class.text-success]="txn.txnType === 'CREDIT'"
                    [class.text-error]="txn.txnType === 'DEBIT'">
                  {{ txn.txnType === 'DEBIT' ? '-' : '+' }}
                  {{ selectedAccount.currency }} {{ txn.amount | number:'1.2-2' }}
                </td>
              </tr>
            </tbody>
          </table>

          <div class="empty-state" *ngIf="!txnLoading && transactions.length === 0">
            <i class="fas fa-receipt"></i>
            <p>No transactions on this account yet.</p>
          </div>
        </div>
      </div>

    </div>
  `, styles: ["/* src/app/customer-portal/my-accounts/my-accounts.component.css */\n.account-card {\n  cursor: pointer;\n}\n.account-card.selected-account {\n  border-color: var(--accent-blue);\n  box-shadow: var(--shadow-glow);\n}\n.acc-icon {\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 1.1rem;\n}\n.app-picker {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.app-picker-item {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  width: 100%;\n  padding: 12px 14px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  font-family: inherit;\n  text-align: left;\n}\n.app-picker-item:hover {\n  background: #eff6ff;\n  border-color: #bfdbfe;\n}\n.app-picker-icon {\n  width: 38px;\n  height: 38px;\n  background: #0a2540;\n  color: #c79a2a;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.app-picker-meta {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.no-consent-card {\n  text-align: center;\n  padding: 40px 24px;\n}\n.no-consent-icon {\n  font-size: 2.5rem;\n  color: #d97706;\n  margin-bottom: 12px;\n}\n/*# sourceMappingURL=my-accounts.component.css.map */\n"] }]
  }], () => [{ type: AccountService }, { type: AuthService }, { type: ConsentService }, { type: ActivatedRoute }, { type: Router }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyAccountsComponent, { className: "MyAccountsComponent", filePath: "src/app/customer-portal/my-accounts/my-accounts.component.ts", lineNumber: 191 });
})();
export {
  MyAccountsComponent
};
//# sourceMappingURL=chunk-CJEPOTGY.js.map
