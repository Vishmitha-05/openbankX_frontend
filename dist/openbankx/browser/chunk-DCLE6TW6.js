import {
  AuditService
} from "./chunk-2OSPU4CJ.js";
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

// src/app/compliance-portal/audit-trail/audit-trail.component.ts
function AuditTrailComponent_option_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r1 = ctx.$implicit;
    \u0275\u0275property("value", a_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r1);
  }
}
function AuditTrailComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "div", 16);
    \u0275\u0275elementEnd();
  }
}
function AuditTrailComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "i", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMessage);
  }
}
function AuditTrailComponent_div_19_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 23);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 24);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td")(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td", 23);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "span", 25);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const trail_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 5, trail_r3.timestamp, "medium"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(trail_r3.actorId);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(trail_r3.action);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(trail_r3.resource);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(trail_r3.actorType);
  }
}
function AuditTrailComponent_div_19_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "p");
    \u0275\u0275text(2, "No audit records found");
    \u0275\u0275elementEnd()();
  }
}
function AuditTrailComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "table", 20)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Timestamp");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Actor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Resource");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Type");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275template(15, AuditTrailComponent_div_19_tr_15_Template, 14, 8, "tr", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(16, AuditTrailComponent_div_19_div_16_Template, 3, 0, "div", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275property("ngForOf", ctx_r1.filteredTrails);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredTrails.length === 0 && !ctx_r1.errorMessage);
  }
}
var AuditTrailComponent = class _AuditTrailComponent {
  auditService;
  trails = [];
  searchTerm = "";
  actorFilter = "";
  isLoading = true;
  errorMessage = "";
  actorTypes = ["USER", "TPP", "SYSTEM"];
  constructor(auditService) {
    this.auditService = auditService;
  }
  ngOnInit() {
    this.auditService.getAuditTrails().subscribe({
      next: (d) => {
        this.trails = d || [];
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = "Unable to load audit trails.";
        this.isLoading = false;
      }
    });
  }
  get filteredTrails() {
    return this.trails.filter((t) => {
      const matchSearch = !this.searchTerm || t.action.toLowerCase().includes(this.searchTerm.toLowerCase()) || t.resource.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchActor = !this.actorFilter || t.actorType === this.actorFilter;
      return matchSearch && matchActor;
    });
  }
  static \u0275fac = function AuditTrailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuditTrailComponent)(\u0275\u0275directiveInject(AuditService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuditTrailComponent, selectors: [["app-audit-trail"]], decls: 20, vars: 6, consts: [[1, "page-content"], [1, "page-header"], [1, "fas", "fa-search"], [1, "page-subtitle"], [1, "glass-card", "mb-20"], [1, "flex", "gap-12", 2, "flex-wrap", "wrap"], [1, "search-bar", 2, "flex", "1", "min-width", "200px"], ["type", "text", "placeholder", "Search by action, resource...", 1, "form-control", 2, "padding-left", "40px", 3, "ngModelChange", "ngModel"], [1, "form-control", 2, "width", "140px", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "loading-container", 4, "ngIf"], ["class", "alert alert-error", 4, "ngIf"], ["class", "glass-card", 4, "ngIf"], [3, "value"], [1, "loading-container"], [1, "spinner"], [1, "alert", "alert-error"], [1, "fas", "fa-exclamation-circle"], [1, "glass-card"], [1, "data-table"], [4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], [1, "text-sm"], [1, "font-mono", "text-sm"], [1, "badge", "badge-info"], [1, "empty-state"]], template: function AuditTrailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
      \u0275\u0275element(4, "i", 2);
      \u0275\u0275text(5, " Audit Trail");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 3);
      \u0275\u0275text(7, "Immutable record of all system actions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "div", 4)(9, "div", 5)(10, "div", 6);
      \u0275\u0275element(11, "i", 2);
      \u0275\u0275elementStart(12, "input", 7);
      \u0275\u0275twoWayListener("ngModelChange", function AuditTrailComponent_Template_input_ngModelChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "select", 8);
      \u0275\u0275twoWayListener("ngModelChange", function AuditTrailComponent_Template_select_ngModelChange_13_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.actorFilter, $event) || (ctx.actorFilter = $event);
        return $event;
      });
      \u0275\u0275elementStart(14, "option", 9);
      \u0275\u0275text(15, "All Actors");
      \u0275\u0275elementEnd();
      \u0275\u0275template(16, AuditTrailComponent_option_16_Template, 2, 2, "option", 10);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(17, AuditTrailComponent_div_17_Template, 2, 0, "div", 11)(18, AuditTrailComponent_div_18_Template, 3, 1, "div", 12)(19, AuditTrailComponent_div_19_Template, 17, 2, "div", 13);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.actorFilter);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.actorTypes);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, DatePipe], styles: ["\n/*# sourceMappingURL=audit-trail.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuditTrailComponent, [{
    type: Component,
    args: [{ selector: "app-audit-trail", standalone: true, imports: [CommonModule, FormsModule], template: `
    <div class="page-content">
      <div class="page-header"><div><h1><i class="fas fa-search"></i> Audit Trail</h1>
        <p class="page-subtitle">Immutable record of all system actions</p></div>
      </div>
      <div class="glass-card mb-20">
        <div class="flex gap-12" style="flex-wrap:wrap">
          <div class="search-bar" style="flex:1;min-width:200px"><i class="fas fa-search"></i>
            <input type="text" class="form-control" [(ngModel)]="searchTerm" placeholder="Search by action, resource..." style="padding-left:40px">
          </div>
          <select class="form-control" [(ngModel)]="actorFilter" style="width:140px">
            <option value="">All Actors</option>
            <option *ngFor="let a of actorTypes" [value]="a">{{ a }}</option>
          </select>
        </div>
      </div>
      <div class="loading-container" *ngIf="isLoading"><div class="spinner"></div></div>
      <div class="alert alert-error" *ngIf="errorMessage"><i class="fas fa-exclamation-circle"></i> {{ errorMessage }}</div>
      <div class="glass-card" *ngIf="!isLoading">
        <table class="data-table">
          <thead><tr><th>Timestamp</th><th>Actor</th><th>Action</th><th>Resource</th><th>Type</th></tr></thead>
          <tbody>
            <tr *ngFor="let trail of filteredTrails">
              <td class="text-sm">{{ trail.timestamp | date:'medium' }}</td>
              <td class="font-mono text-sm">{{ trail.actorId }}</td>
              <td><strong>{{ trail.action }}</strong></td>
              <td class="text-sm">{{ trail.resource }}</td>
              <td><span class="badge badge-info">{{ trail.actorType }}</span></td>
            </tr>
          </tbody>
        </table>
        <div class="empty-state" *ngIf="filteredTrails.length === 0 && !errorMessage"><p>No audit records found</p></div>
      </div>
    </div>
  `, styles: ["/* src/app/compliance-portal/audit-trail/audit-trail.component.css */\n/*# sourceMappingURL=audit-trail.component.css.map */\n"] }]
  }], () => [{ type: AuditService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuditTrailComponent, { className: "AuditTrailComponent", filePath: "src/app/compliance-portal/audit-trail/audit-trail.component.ts", lineNumber: 48 });
})();
export {
  AuditTrailComponent
};
//# sourceMappingURL=chunk-DCLE6TW6.js.map
