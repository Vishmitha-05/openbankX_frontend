import {
  MonitoringService
} from "./chunk-WTLHAO6Q.js";
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
  ɵɵpureFunction3,
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

// src/app/operations-portal/incident-management/incident-management.component.ts
var _c0 = (a0) => ({ "background": a0 });
var _c1 = (a0, a1, a2) => ({ "badge-open": a0, "badge-mitigated": a1, "badge-closed": a2 });
function IncidentManagementComponent_div_9_option_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r3 = ctx.$implicit;
    \u0275\u0275property("value", cat_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r3);
  }
}
function IncidentManagementComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "h3", 10);
    \u0275\u0275text(2, "Report New Incident");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 11)(4, "label");
    \u0275\u0275text(5, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "select", 12);
    \u0275\u0275twoWayListener("ngModelChange", function IncidentManagementComponent_div_9_Template_select_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newIncident.category, $event) || (ctx_r1.newIncident.category = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(7, IncidentManagementComponent_div_9_option_7_Template, 2, 2, "option", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 11)(9, "label");
    \u0275\u0275text(10, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "textarea", 14);
    \u0275\u0275twoWayListener("ngModelChange", function IncidentManagementComponent_div_9_Template_textarea_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newIncident.description, $event) || (ctx_r1.newIncident.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "button", 15);
    \u0275\u0275listener("click", function IncidentManagementComponent_div_9_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.createIncident());
    });
    \u0275\u0275element(13, "i", 16);
    \u0275\u0275text(14, " Submit");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newIncident.category);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.categories);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newIncident.description);
  }
}
function IncidentManagementComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "div", 19);
    \u0275\u0275elementEnd();
  }
}
function IncidentManagementComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "i", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMessage);
  }
}
function IncidentManagementComponent_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25)(2, "div", 26)(3, "div", 27);
    \u0275\u0275element(4, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "h4");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 28);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 29)(12, "span", 30);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 30);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const inc_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(12, _c0, ctx_r1.getCatColor(inc_r4.category)));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getCatIcon(inc_r4.category));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(inc_r4.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 9, inc_r4.detectedDate, "medium"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(14, _c1, inc_r4.status === "OPEN", inc_r4.status === "MITIGATED", inc_r4.status === "CLOSED"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(inc_r4.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "badge-" + inc_r4.category.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(inc_r4.category);
  }
}
function IncidentManagementComponent_div_12_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275element(1, "i", 32);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "No incidents");
    \u0275\u0275elementEnd()();
  }
}
function IncidentManagementComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, IncidentManagementComponent_div_12_div_1_Template, 16, 18, "div", 22)(2, IncidentManagementComponent_div_12_div_2_Template, 4, 0, "div", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.incidents);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.incidents.length === 0 && !ctx_r1.errorMessage);
  }
}
var IncidentManagementComponent = class _IncidentManagementComponent {
  monitoringService;
  incidents = [];
  isLoading = true;
  showForm = false;
  errorMessage = "";
  categories = ["OUTAGE", "LATENCY", "SECURITY"];
  newIncident = { category: "LATENCY", description: "" };
  constructor(monitoringService) {
    this.monitoringService = monitoringService;
  }
  ngOnInit() {
    this.monitoringService.getIncidents().subscribe({
      next: (d) => {
        this.incidents = d || [];
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = "Unable to load incidents.";
        this.isLoading = false;
      }
    });
  }
  createIncident() {
    this.monitoringService.createIncident(this.newIncident).subscribe({
      next: (d) => {
        this.incidents.unshift(d);
        this.showForm = false;
        this.newIncident.description = "";
      },
      error: () => {
        this.errorMessage = "Failed to create incident.";
      }
    });
  }
  getCatIcon(cat) {
    return cat === "OUTAGE" ? "fas fa-power-off" : cat === "LATENCY" ? "fas fa-clock" : "fas fa-shield-alt";
  }
  getCatColor(cat) {
    return cat === "OUTAGE" ? "linear-gradient(135deg,#ef4444,#dc2626)" : cat === "LATENCY" ? "linear-gradient(135deg,#f59e0b,#d97706)" : "linear-gradient(135deg,#667eea,#764ba2)";
  }
  static \u0275fac = function IncidentManagementComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IncidentManagementComponent)(\u0275\u0275directiveInject(MonitoringService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IncidentManagementComponent, selectors: [["app-incident-management"]], decls: 13, vars: 4, consts: [[1, "page-content"], [1, "page-header"], [1, "fas", "fa-exclamation-triangle"], [1, "btn", "btn-primary", 3, "click"], [1, "fas", "fa-plus"], ["class", "glass-card mb-20", "style", "max-width:560px", 4, "ngIf"], ["class", "loading-container", 4, "ngIf"], ["class", "alert alert-error", 4, "ngIf"], [4, "ngIf"], [1, "glass-card", "mb-20", 2, "max-width", "560px"], [1, "mb-16"], [1, "form-group"], [1, "form-control", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["rows", "3", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-success", 3, "click"], [1, "fas", "fa-check"], [3, "value"], [1, "loading-container"], [1, "spinner"], [1, "alert", "alert-error"], [1, "fas", "fa-exclamation-circle"], ["class", "glass-card mb-12", 4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], [1, "glass-card", "mb-12"], [1, "flex", "items-center", "justify-between"], [1, "flex", "items-center", "gap-12"], [1, "inc-icon", 3, "ngStyle"], [1, "text-sm", "text-muted"], [1, "flex", "items-center", "gap-8"], [1, "badge", 3, "ngClass"], [1, "empty-state"], [1, "fas", "fa-check-circle"]], template: function IncidentManagementComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
      \u0275\u0275element(4, "i", 2);
      \u0275\u0275text(5, " Incident Management");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "button", 3);
      \u0275\u0275listener("click", function IncidentManagementComponent_Template_button_click_6_listener() {
        return ctx.showForm = !ctx.showForm;
      });
      \u0275\u0275element(7, "i", 4);
      \u0275\u0275text(8, " New Incident");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(9, IncidentManagementComponent_div_9_Template, 15, 3, "div", 5)(10, IncidentManagementComponent_div_10_Template, 2, 0, "div", 6)(11, IncidentManagementComponent_div_11_Template, 3, 1, "div", 7)(12, IncidentManagementComponent_div_12_Template, 3, 2, "div", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", ctx.showForm);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, NgStyle, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, DatePipe], styles: ["\n.inc-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 1rem;\n}\n/*# sourceMappingURL=incident-management.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IncidentManagementComponent, [{
    type: Component,
    args: [{ selector: "app-incident-management", standalone: true, imports: [CommonModule, FormsModule], template: `
    <div class="page-content">
      <div class="page-header">
        <div><h1><i class="fas fa-exclamation-triangle"></i> Incident Management</h1></div>
        <button class="btn btn-primary" (click)="showForm = !showForm"><i class="fas fa-plus"></i> New Incident</button>
      </div>
      <div class="glass-card mb-20" *ngIf="showForm" style="max-width:560px">
        <h3 class="mb-16">Report New Incident</h3>
        <div class="form-group"><label>Category</label>
          <select class="form-control" [(ngModel)]="newIncident.category">
            <option *ngFor="let cat of categories" [value]="cat">{{ cat }}</option>
          </select></div>
        <div class="form-group"><label>Description</label>
          <textarea class="form-control" [(ngModel)]="newIncident.description" rows="3"></textarea></div>
        <button class="btn btn-success" (click)="createIncident()"><i class="fas fa-check"></i> Submit</button>
      </div>
      <div class="loading-container" *ngIf="isLoading"><div class="spinner"></div></div>
      <div class="alert alert-error" *ngIf="errorMessage"><i class="fas fa-exclamation-circle"></i> {{ errorMessage }}</div>
      <div *ngIf="!isLoading">
        <div *ngFor="let inc of incidents" class="glass-card mb-12">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-12">
              <div class="inc-icon" [ngStyle]="{ 'background': getCatColor(inc.category) }"><i [class]="getCatIcon(inc.category)"></i></div>
              <div><h4>{{ inc.description }}</h4><span class="text-sm text-muted">{{ inc.detectedDate | date:'medium' }}</span></div>
            </div>
            <div class="flex items-center gap-8">
              <span class="badge" [ngClass]="{'badge-open': inc.status === 'OPEN','badge-mitigated': inc.status === 'MITIGATED','badge-closed': inc.status === 'CLOSED'}">{{ inc.status }}</span>
              <span class="badge" [ngClass]="'badge-' + inc.category.toLowerCase()">{{ inc.category }}</span>
            </div>
          </div>
        </div>
        <div class="empty-state" *ngIf="incidents.length === 0 && !errorMessage"><i class="fas fa-check-circle"></i><p>No incidents</p></div>
      </div>
    </div>
  `, styles: ["/* src/app/operations-portal/incident-management/incident-management.component.css */\n.inc-icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 1rem;\n}\n/*# sourceMappingURL=incident-management.component.css.map */\n"] }]
  }], () => [{ type: MonitoringService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IncidentManagementComponent, { className: "IncidentManagementComponent", filePath: "src/app/operations-portal/incident-management/incident-management.component.ts", lineNumber: 48 });
})();
export {
  IncidentManagementComponent
};
//# sourceMappingURL=chunk-SWH7LSAL.js.map
