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

// src/app/developer-portal/sandbox-explorer/sandbox-explorer.component.ts
function SandboxExplorerComponent_option_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r1 = ctx.$implicit;
    \u0275\u0275property("value", m_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r1);
  }
}
function SandboxExplorerComponent_option_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ep_r2 = ctx.$implicit;
    \u0275\u0275property("value", ep_r2.path);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ep_r2.label);
  }
}
function SandboxExplorerComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "label");
    \u0275\u0275text(2, "Request Body (JSON)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "textarea", 19);
    \u0275\u0275twoWayListener("ngModelChange", function SandboxExplorerComponent_div_22_Template_textarea_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.requestBody, $event) || (ctx_r3.requestBody = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.requestBody);
  }
}
function SandboxExplorerComponent_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 20);
    \u0275\u0275text(2, " Send Request");
    \u0275\u0275elementEnd();
  }
}
function SandboxExplorerComponent_span_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 21);
    \u0275\u0275text(2, " Sending...");
    \u0275\u0275elementEnd();
  }
}
function SandboxExplorerComponent_span_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r3.statusCode < 400 ? "badge-active" : "badge-revoked");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.statusCode, " ");
  }
}
function SandboxExplorerComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275element(1, "i", 24);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Send a request to see the response");
    \u0275\u0275elementEnd()();
  }
}
function SandboxExplorerComponent_pre_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "pre", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.responseData);
  }
}
function SandboxExplorerComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275element(1, "i", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.responseError, " ");
  }
}
var SandboxExplorerComponent = class _SandboxExplorerComponent {
  http;
  method = "GET";
  endpoint = "/aisp/accounts?userId=1";
  requestBody = "";
  responseData = "";
  responseError = "";
  statusCode = null;
  isSending = false;
  methods = ["GET", "POST", "PUT", "DELETE"];
  endpoints = [
    { label: "GET /aisp/accounts?userId=1", path: "/aisp/accounts?userId=1" },
    { label: "GET /aisp/accounts/1/txns", path: "/aisp/accounts/1/txns" },
    { label: "GET /apps", path: "/apps" },
    { label: "GET /apps/1/stats", path: "/apps/1/stats" },
    { label: "GET /consents", path: "/consents" },
    { label: "POST /pisp/payments", path: "/pisp/payments" },
    { label: "POST /cbpii/funds-check", path: "/cbpii/funds-check" },
    { label: "GET /monitoring/incidents", path: "/monitoring/incidents" },
    { label: "GET /notifications", path: "/notifications" },
    { label: "GET /users", path: "/users" }
  ];
  constructor(http) {
    this.http = http;
  }
  sendRequest() {
    this.isSending = true;
    this.responseData = "";
    this.responseError = "";
    this.statusCode = null;
    const url = environment.apiBaseUrl + this.endpoint;
    const req = this.method === "POST" || this.method === "PUT" ? this.http.request(this.method, url, { body: this.parseBody(), observe: "response" }) : this.http.request(this.method, url, { observe: "response" });
    req.subscribe({
      next: (res) => {
        this.statusCode = res.status;
        this.responseData = JSON.stringify(res.body, null, 2);
        this.isSending = false;
      },
      error: (err) => {
        this.statusCode = err.status || 0;
        this.responseError = err.message || "Request failed";
        this.responseData = JSON.stringify(err.error, null, 2);
        this.isSending = false;
      }
    });
  }
  parseBody() {
    try {
      return JSON.parse(this.requestBody);
    } catch {
      return {};
    }
  }
  static \u0275fac = function SandboxExplorerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SandboxExplorerComponent)(\u0275\u0275directiveInject(HttpClient));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SandboxExplorerComponent, selectors: [["app-sandbox-explorer"]], decls: 34, vars: 12, consts: [[1, "page-content"], [1, "page-header"], [1, "fas", "fa-flask"], [1, "page-subtitle"], [1, "grid-2"], [1, "glass-card"], [1, "mb-16"], [1, "form-group"], [1, "form-control", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "form-group", 4, "ngIf"], [1, "btn", "btn-primary", 3, "click", "disabled"], [4, "ngIf"], [1, "flex", "items-center", "justify-between", "mb-16"], ["class", "badge", 3, "ngClass", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "response-pre font-mono", 4, "ngIf"], ["class", "alert alert-error mt-12", 4, "ngIf"], [3, "value"], ["rows", "6", 1, "form-control", "font-mono", 3, "ngModelChange", "ngModel"], [1, "fas", "fa-paper-plane"], [1, "fas", "fa-spinner", "fa-spin"], [1, "badge", 3, "ngClass"], [1, "empty-state"], [1, "fas", "fa-arrow-left"], [1, "response-pre", "font-mono"], [1, "alert", "alert-error", "mt-12"], [1, "fas", "fa-times-circle"]], template: function SandboxExplorerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
      \u0275\u0275element(4, "i", 2);
      \u0275\u0275text(5, " Sandbox Explorer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 3);
      \u0275\u0275text(7, "Test Open Banking APIs with live requests");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "div", 4)(9, "div", 5)(10, "h3", 6);
      \u0275\u0275text(11, "Request");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 7)(13, "label");
      \u0275\u0275text(14, "HTTP Method");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "select", 8);
      \u0275\u0275twoWayListener("ngModelChange", function SandboxExplorerComponent_Template_select_ngModelChange_15_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.method, $event) || (ctx.method = $event);
        return $event;
      });
      \u0275\u0275template(16, SandboxExplorerComponent_option_16_Template, 2, 2, "option", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 7)(18, "label");
      \u0275\u0275text(19, "Endpoint");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "select", 8);
      \u0275\u0275twoWayListener("ngModelChange", function SandboxExplorerComponent_Template_select_ngModelChange_20_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.endpoint, $event) || (ctx.endpoint = $event);
        return $event;
      });
      \u0275\u0275template(21, SandboxExplorerComponent_option_21_Template, 2, 2, "option", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(22, SandboxExplorerComponent_div_22_Template, 4, 1, "div", 10);
      \u0275\u0275elementStart(23, "button", 11);
      \u0275\u0275listener("click", function SandboxExplorerComponent_Template_button_click_23_listener() {
        return ctx.sendRequest();
      });
      \u0275\u0275template(24, SandboxExplorerComponent_span_24_Template, 3, 0, "span", 12)(25, SandboxExplorerComponent_span_25_Template, 3, 0, "span", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 5)(27, "div", 13)(28, "h3");
      \u0275\u0275text(29, "Response");
      \u0275\u0275elementEnd();
      \u0275\u0275template(30, SandboxExplorerComponent_span_30_Template, 2, 2, "span", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275template(31, SandboxExplorerComponent_div_31_Template, 4, 0, "div", 15)(32, SandboxExplorerComponent_pre_32_Template, 2, 1, "pre", 16)(33, SandboxExplorerComponent_div_33_Template, 3, 1, "div", 17);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(15);
      \u0275\u0275twoWayProperty("ngModel", ctx.method);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.methods);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.endpoint);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.endpoints);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.method === "POST");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isSending);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isSending);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isSending);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.statusCode);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.responseData);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.responseData);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.responseError);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n.response-pre[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 16px;\n  font-size: 0.8rem;\n  color: #0f172a;\n  overflow-x: auto;\n  max-height: 400px;\n  white-space: pre-wrap;\n  word-break: break-all;\n}\n/*# sourceMappingURL=sandbox-explorer.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SandboxExplorerComponent, [{
    type: Component,
    args: [{ selector: "app-sandbox-explorer", standalone: true, imports: [CommonModule, FormsModule], template: `
    <div class="page-content">
      <div class="page-header">
        <div>
          <h1><i class="fas fa-flask"></i> Sandbox Explorer</h1>
          <p class="page-subtitle">Test Open Banking APIs with live requests</p>
        </div>
      </div>

      <div class="grid-2">
        <!-- Request Panel -->
        <div class="glass-card">
          <h3 class="mb-16">Request</h3>
          <div class="form-group">
            <label>HTTP Method</label>
            <select class="form-control" [(ngModel)]="method">
              <option *ngFor="let m of methods" [value]="m">{{ m }}</option>
            </select>
          </div>
          <div class="form-group">
            <label>Endpoint</label>
            <select class="form-control" [(ngModel)]="endpoint">
              <option *ngFor="let ep of endpoints" [value]="ep.path">{{ ep.label }}</option>
            </select>
          </div>
          <div class="form-group" *ngIf="method === 'POST'">
            <label>Request Body (JSON)</label>
            <textarea class="form-control font-mono" [(ngModel)]="requestBody" rows="6"></textarea>
          </div>
          <button class="btn btn-primary" (click)="sendRequest()" [disabled]="isSending">
            <span *ngIf="!isSending"><i class="fas fa-paper-plane"></i> Send Request</span>
            <span *ngIf="isSending"><i class="fas fa-spinner fa-spin"></i> Sending...</span>
          </button>
        </div>

        <!-- Response Panel -->
        <div class="glass-card">
          <div class="flex items-center justify-between mb-16">
            <h3>Response</h3>
            <span *ngIf="statusCode" class="badge" [ngClass]="statusCode < 400 ? 'badge-active' : 'badge-revoked'">
              {{ statusCode }}
            </span>
          </div>
          <div *ngIf="!responseData" class="empty-state">
            <i class="fas fa-arrow-left"></i>
            <p>Send a request to see the response</p>
          </div>
          <pre *ngIf="responseData" class="response-pre font-mono">{{ responseData }}</pre>
          <div class="alert alert-error mt-12" *ngIf="responseError">
            <i class="fas fa-times-circle"></i> {{ responseError }}
          </div>
        </div>
      </div>
    </div>
  `, styles: ["/* src/app/developer-portal/sandbox-explorer/sandbox-explorer.component.css */\n.response-pre {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 16px;\n  font-size: 0.8rem;\n  color: #0f172a;\n  overflow-x: auto;\n  max-height: 400px;\n  white-space: pre-wrap;\n  word-break: break-all;\n}\n/*# sourceMappingURL=sandbox-explorer.component.css.map */\n"] }]
  }], () => [{ type: HttpClient }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SandboxExplorerComponent, { className: "SandboxExplorerComponent", filePath: "src/app/developer-portal/sandbox-explorer/sandbox-explorer.component.ts", lineNumber: 68 });
})();
export {
  SandboxExplorerComponent
};
//# sourceMappingURL=chunk-B4XCK34C.js.map
