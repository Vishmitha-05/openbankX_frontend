import {
  ConsentService
} from "./chunk-OJYWRIMV.js";
import {
  ActivatedRoute
} from "./chunk-QS26HGQT.js";
import "./chunk-TX3HFKHN.js";
import "./chunk-5C4TBQN6.js";
import {
  CommonModule,
  Component,
  DatePipe,
  JsonPipe,
  NgClass,
  NgForOf,
  NgIf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-6UHLKSNQ.js";

// src/app/customer-portal/consent-detail/consent-detail.component.ts
function ConsentDetailComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "div", 6);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Loading...");
    \u0275\u0275elementEnd()();
  }
}
function ConsentDetailComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "i", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage);
  }
}
function ConsentDetailComponent_div_7_span_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r2);
  }
}
function ConsentDetailComponent_div_7_div_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "button", 21);
    \u0275\u0275listener("click", function ConsentDetailComponent_div_7_div_39_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.revoke());
    });
    \u0275\u0275element(2, "i", 22);
    \u0275\u0275text(3, " Revoke Consent");
    \u0275\u0275elementEnd()();
  }
}
function ConsentDetailComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "span", 11);
    \u0275\u0275text(3, "Consent ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 10)(7, "span", 11);
    \u0275\u0275text(8, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 12);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 10)(12, "span", 11);
    \u0275\u0275text(13, "TPP App");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 10)(17, "span", 11);
    \u0275\u0275text(18, "Created");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 10)(23, "span", 11);
    \u0275\u0275text(24, "Expires");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(28, "div", 13);
    \u0275\u0275elementStart(29, "h4", 14);
    \u0275\u0275text(30, "Scopes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 15);
    \u0275\u0275template(32, ConsentDetailComponent_div_7_span_32_Template, 2, 1, "span", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "div", 13);
    \u0275\u0275elementStart(34, "h4", 14);
    \u0275\u0275text(35, "Resource Filter");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "pre", 17);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "json");
    \u0275\u0275elementEnd();
    \u0275\u0275template(39, ConsentDetailComponent_div_7_div_39_Template, 4, 0, "div", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("#", ctx_r0.consent.consentId);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", "badge-" + ctx_r0.consent.status.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.consent.status);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.consent.tppApp == null ? null : ctx_r0.consent.tppApp.appName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(21, 9, ctx_r0.consent.createdDate, "medium"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(27, 12, ctx_r0.consent.expiryDate, "medium"));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r0.parseJson(ctx_r0.consent.scopeJSON));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 15, ctx_r0.consent.resourceFilterJSON));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.consent.status === "ACTIVE");
  }
}
var ConsentDetailComponent = class _ConsentDetailComponent {
  route;
  consentService;
  consent = null;
  isLoading = true;
  errorMessage = "";
  constructor(route, consentService) {
    this.route = route;
    this.consentService = consentService;
  }
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.consentService.getConsentById(id).subscribe({
      next: (d) => {
        this.consent = d;
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = "Unable to load consent details.";
        this.isLoading = false;
      }
    });
  }
  parseJson(s) {
    try {
      return JSON.parse(s);
    } catch {
      return [];
    }
  }
  revoke() {
    if (this.consent && confirm("Revoke this consent?")) {
      this.consentService.revokeConsent(this.consent.consentId).subscribe({ next: () => {
        this.consent.status = "REVOKED";
      } });
    }
  }
  static \u0275fac = function ConsentDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConsentDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ConsentService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConsentDetailComponent, selectors: [["app-consent-detail"]], decls: 8, vars: 3, consts: [[1, "page-content"], [1, "page-header"], ["class", "loading-container", 4, "ngIf"], ["class", "alert alert-error", 4, "ngIf"], ["class", "glass-card", "style", "max-width:640px", 4, "ngIf"], [1, "loading-container"], [1, "spinner"], [1, "alert", "alert-error"], [1, "fas", "fa-exclamation-circle"], [1, "glass-card", 2, "max-width", "640px"], [1, "detail-row"], [1, "detail-label"], [1, "badge", 3, "ngClass"], [1, "section-divider"], [1, "mb-8"], [1, "flex", "gap-8", 2, "flex-wrap", "wrap"], ["class", "scope-pill", 4, "ngFor", "ngForOf"], [1, "font-mono", "text-sm", 2, "color", "var(--text-secondary)"], ["class", "mt-24", 4, "ngIf"], [1, "scope-pill"], [1, "mt-24"], [1, "btn", "btn-danger", 3, "click"], [1, "fas", "fa-times"]], template: function ConsentDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
      \u0275\u0275text(4, "Consent Details");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(5, ConsentDetailComponent_div_5_Template, 4, 0, "div", 2)(6, ConsentDetailComponent_div_6_Template, 3, 1, "div", 3)(7, ConsentDetailComponent_div_7_Template, 40, 17, "div", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.consent);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, JsonPipe, DatePipe], styles: ["\n.detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.04);\n}\n.detail-label[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 0.85rem;\n}\n/*# sourceMappingURL=consent-detail.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConsentDetailComponent, [{
    type: Component,
    args: [{ selector: "app-consent-detail", standalone: true, imports: [CommonModule], template: `
    <div class="page-content">
      <div class="page-header"><div><h1>Consent Details</h1></div></div>
      <div class="loading-container" *ngIf="isLoading"><div class="spinner"></div><span>Loading...</span></div>
      <div class="alert alert-error" *ngIf="errorMessage"><i class="fas fa-exclamation-circle"></i> {{ errorMessage }}</div>
      <div class="glass-card" *ngIf="!isLoading && consent" style="max-width:640px">
        <div class="detail-row"><span class="detail-label">Consent ID</span><span>#{{ consent.consentId }}</span></div>
        <div class="detail-row"><span class="detail-label">Status</span>
          <span class="badge" [ngClass]="'badge-' + consent.status.toLowerCase()">{{ consent.status }}</span>
        </div>
        <div class="detail-row"><span class="detail-label">TPP App</span><span>{{ consent.tppApp?.appName }}</span></div>
        <div class="detail-row"><span class="detail-label">Created</span><span>{{ consent.createdDate | date:'medium' }}</span></div>
        <div class="detail-row"><span class="detail-label">Expires</span><span>{{ consent.expiryDate | date:'medium' }}</span></div>
        <div class="section-divider"></div>
        <h4 class="mb-8">Scopes</h4>
        <div class="flex gap-8" style="flex-wrap:wrap">
          <span *ngFor="let s of parseJson(consent.scopeJSON)" class="scope-pill">{{ s }}</span>
        </div>
        <div class="section-divider"></div>
        <h4 class="mb-8">Resource Filter</h4>
        <pre class="font-mono text-sm" style="color:var(--text-secondary)">{{ consent.resourceFilterJSON | json }}</pre>
        <div class="mt-24" *ngIf="consent.status === 'ACTIVE'">
          <button class="btn btn-danger" (click)="revoke()"><i class="fas fa-times"></i> Revoke Consent</button>
        </div>
      </div>
    </div>
  `, styles: ["/* src/app/customer-portal/consent-detail/consent-detail.component.css */\n.detail-row {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.04);\n}\n.detail-label {\n  color: var(--text-secondary);\n  font-size: 0.85rem;\n}\n/*# sourceMappingURL=consent-detail.component.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: ConsentService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConsentDetailComponent, { className: "ConsentDetailComponent", filePath: "src/app/customer-portal/consent-detail/consent-detail.component.ts", lineNumber: 40 });
})();
export {
  ConsentDetailComponent
};
//# sourceMappingURL=chunk-G5HTXYPA.js.map
