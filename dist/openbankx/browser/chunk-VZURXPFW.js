import {
  ConsentService
} from "./chunk-OJYWRIMV.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-IBGG5UE3.js";
import "./chunk-TX3HFKHN.js";
import "./chunk-5C4TBQN6.js";
import {
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-6UHLKSNQ.js";

// src/app/compliance-portal/consent-registry/consent-registry.component.ts
function ConsentRegistryComponent_option_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    \u0275\u0275property("value", s_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r1);
  }
}
function ConsentRegistryComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "div", 17);
    \u0275\u0275elementEnd();
  }
}
function ConsentRegistryComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "i", 19);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMessage);
  }
}
function ConsentRegistryComponent_div_19_tr_19_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r3);
  }
}
function ConsentRegistryComponent_div_19_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 24);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275template(8, ConsentRegistryComponent_div_19_tr_19_span_8_Template, 2, 1, "span", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 26);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 26);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td")(16, "span", 27);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#", c_r4.consentId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((c_r4.user == null ? null : c_r4.user.name) || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((c_r4.tppApp == null ? null : c_r4.tppApp.appName) || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.parseJson(c_r4.scopeJSON));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 8, c_r4.createdDate, "mediumDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 11, c_r4.expiryDate, "mediumDate"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", "badge-" + c_r4.status.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r4.status);
  }
}
function ConsentRegistryComponent_div_19_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "p");
    \u0275\u0275text(2, "No matching consents");
    \u0275\u0275elementEnd()();
  }
}
function ConsentRegistryComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "table", 21)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "User");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "TPP App");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Scopes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Created");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Expires");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275template(19, ConsentRegistryComponent_div_19_tr_19_Template, 18, 14, "tr", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(20, ConsentRegistryComponent_div_19_div_20_Template, 3, 0, "div", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(19);
    \u0275\u0275property("ngForOf", ctx_r1.filteredConsents);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredConsents.length === 0 && !ctx_r1.errorMessage);
  }
}
var ConsentRegistryComponent = class _ConsentRegistryComponent {
  consentService;
  consents = [];
  searchTerm = "";
  statusFilter = "";
  isLoading = true;
  errorMessage = "";
  statuses = ["ACTIVE", "REVOKED", "EXPIRED"];
  constructor(consentService) {
    this.consentService = consentService;
  }
  ngOnInit() {
    this.consentService.getConsents().subscribe({
      next: (d) => {
        this.consents = d || [];
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = "Unable to load consents.";
        this.isLoading = false;
      }
    });
  }
  get filteredConsents() {
    return this.consents.filter((c) => {
      const matchSearch = !this.searchTerm || (c.tppApp?.appName || "").toLowerCase().includes(this.searchTerm.toLowerCase()) || (c.user?.name || "").toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchStatus = !this.statusFilter || c.status === this.statusFilter;
      return matchSearch && matchStatus;
    });
  }
  parseJson(s) {
    try {
      return JSON.parse(s);
    } catch {
      return [];
    }
  }
  static \u0275fac = function ConsentRegistryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConsentRegistryComponent)(\u0275\u0275directiveInject(ConsentService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConsentRegistryComponent, selectors: [["app-consent-registry"]], decls: 20, vars: 6, consts: [[1, "page-content"], [1, "page-header"], [1, "fas", "fa-file-contract"], [1, "page-subtitle"], [1, "glass-card", "mb-20"], [1, "flex", "gap-12", 2, "flex-wrap", "wrap"], [1, "search-bar", 2, "flex", "1", "min-width", "200px"], [1, "fas", "fa-search"], ["type", "text", "placeholder", "Search by app name, user...", 1, "form-control", 2, "padding-left", "40px", 3, "ngModelChange", "ngModel"], [1, "form-control", 2, "width", "160px", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "loading-container", 4, "ngIf"], ["class", "alert alert-error", 4, "ngIf"], ["class", "glass-card", 4, "ngIf"], [3, "value"], [1, "loading-container"], [1, "spinner"], [1, "alert", "alert-error"], [1, "fas", "fa-exclamation-circle"], [1, "glass-card"], [1, "data-table"], [4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], [1, "font-mono", "text-sm"], ["class", "scope-pill", 4, "ngFor", "ngForOf"], [1, "text-sm"], [1, "badge", 3, "ngClass"], [1, "scope-pill"], [1, "empty-state"]], template: function ConsentRegistryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
      \u0275\u0275element(4, "i", 2);
      \u0275\u0275text(5, " Consent Registry");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 3);
      \u0275\u0275text(7, "Search and review all consents across the platform");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "div", 4)(9, "div", 5)(10, "div", 6);
      \u0275\u0275element(11, "i", 7);
      \u0275\u0275elementStart(12, "input", 8);
      \u0275\u0275twoWayListener("ngModelChange", function ConsentRegistryComponent_Template_input_ngModelChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "select", 9);
      \u0275\u0275twoWayListener("ngModelChange", function ConsentRegistryComponent_Template_select_ngModelChange_13_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.statusFilter, $event) || (ctx.statusFilter = $event);
        return $event;
      });
      \u0275\u0275elementStart(14, "option", 10);
      \u0275\u0275text(15, "All Statuses");
      \u0275\u0275elementEnd();
      \u0275\u0275template(16, ConsentRegistryComponent_option_16_Template, 2, 2, "option", 11);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(17, ConsentRegistryComponent_div_17_Template, 2, 0, "div", 12)(18, ConsentRegistryComponent_div_18_Template, 3, 1, "div", 13)(19, ConsentRegistryComponent_div_19_Template, 21, 2, "div", 14);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.statusFilter);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.statuses);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, DatePipe], styles: ["\n/*# sourceMappingURL=consent-registry.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConsentRegistryComponent, [{
    type: Component,
    args: [{ selector: "app-consent-registry", standalone: true, imports: [CommonModule, FormsModule], template: `
    <div class="page-content">
      <div class="page-header"><div><h1><i class="fas fa-file-contract"></i> Consent Registry</h1>
        <p class="page-subtitle">Search and review all consents across the platform</p></div>
      </div>
      <div class="glass-card mb-20">
        <div class="flex gap-12" style="flex-wrap:wrap">
          <div class="search-bar" style="flex:1;min-width:200px"><i class="fas fa-search"></i>
            <input type="text" class="form-control" [(ngModel)]="searchTerm" placeholder="Search by app name, user..." style="padding-left:40px">
          </div>
          <select class="form-control" [(ngModel)]="statusFilter" style="width:160px">
            <option value="">All Statuses</option>
            <option *ngFor="let s of statuses" [value]="s">{{ s }}</option>
          </select>
        </div>
      </div>
      <div class="loading-container" *ngIf="isLoading"><div class="spinner"></div></div>
      <div class="alert alert-error" *ngIf="errorMessage"><i class="fas fa-exclamation-circle"></i> {{ errorMessage }}</div>
      <div class="glass-card" *ngIf="!isLoading">
        <table class="data-table">
          <thead><tr><th>ID</th><th>User</th><th>TPP App</th><th>Scopes</th><th>Created</th><th>Expires</th><th>Status</th></tr></thead>
          <tbody>
            <tr *ngFor="let c of filteredConsents">
              <td class="font-mono text-sm">#{{ c.consentId }}</td>
              <td>{{ c.user?.name || 'N/A' }}</td>
              <td>{{ c.tppApp?.appName || 'N/A' }}</td>
              <td><span *ngFor="let s of parseJson(c.scopeJSON)" class="scope-pill">{{ s }}</span></td>
              <td class="text-sm">{{ c.createdDate | date:'mediumDate' }}</td>
              <td class="text-sm">{{ c.expiryDate | date:'mediumDate' }}</td>
              <td><span class="badge" [ngClass]="'badge-' + c.status.toLowerCase()">{{ c.status }}</span></td>
            </tr>
          </tbody>
        </table>
        <div class="empty-state" *ngIf="filteredConsents.length === 0 && !errorMessage"><p>No matching consents</p></div>
      </div>
    </div>
  `, styles: ["/* src/app/compliance-portal/consent-registry/consent-registry.component.css */\n/*# sourceMappingURL=consent-registry.component.css.map */\n"] }]
  }], () => [{ type: ConsentService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConsentRegistryComponent, { className: "ConsentRegistryComponent", filePath: "src/app/compliance-portal/consent-registry/consent-registry.component.ts", lineNumber: 50 });
})();
export {
  ConsentRegistryComponent
};
//# sourceMappingURL=chunk-VZURXPFW.js.map
