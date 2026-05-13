import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-IBGG5UE3.js";
import {
  TppService
} from "./chunk-KSBPVTDW.js";
import {
  ActivatedRoute,
  RouterLink,
  RouterModule
} from "./chunk-QS26HGQT.js";
import "./chunk-TX3HFKHN.js";
import "./chunk-5C4TBQN6.js";
import {
  CommonModule,
  Component,
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

// src/app/developer-portal/keys-upload/keys-upload.component.ts
function KeysUploadComponent_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
    \u0275\u0275text(1, "Managing keys for: ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.app.appName);
  }
}
function KeysUploadComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "div", 13);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Loading app details...");
    \u0275\u0275elementEnd()();
  }
}
function KeysUploadComponent_div_11_Template(rf, ctx) {
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
function KeysUploadComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "i", 17);
    \u0275\u0275text(2, " Keys updated successfully. ");
    \u0275\u0275elementEnd();
  }
}
function KeysUploadComponent_div_13_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 24);
    \u0275\u0275text(2, " Update Keys");
    \u0275\u0275elementEnd();
  }
}
function KeysUploadComponent_div_13_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 25);
    \u0275\u0275text(2, " Saving...");
    \u0275\u0275elementEnd();
  }
}
function KeysUploadComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19)(2, "label");
    \u0275\u0275text(3, "JWK Set (JSON)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "textarea", 20);
    \u0275\u0275twoWayListener("ngModelChange", function KeysUploadComponent_div_13_Template_textarea_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.jwkSet, $event) || (ctx_r0.jwkSet = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 19)(6, "label");
    \u0275\u0275text(7, "Redirect URIs (JSON array)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "textarea", 21);
    \u0275\u0275twoWayListener("ngModelChange", function KeysUploadComponent_div_13_Template_textarea_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.redirectURIs, $event) || (ctx_r0.redirectURIs = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 22);
    \u0275\u0275listener("click", function KeysUploadComponent_div_13_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveKeys());
    });
    \u0275\u0275template(10, KeysUploadComponent_div_13_span_10_Template, 3, 0, "span", 23)(11, KeysUploadComponent_div_13_span_11_Template, 3, 0, "span", 23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.jwkSet);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.redirectURIs);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isSaving);
  }
}
function KeysUploadComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275element(1, "i", 2);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "No app found.");
    \u0275\u0275elementEnd()();
  }
}
var KeysUploadComponent = class _KeysUploadComponent {
  route;
  tppService;
  app = null;
  jwkSet = "";
  redirectURIs = "";
  isLoading = true;
  isSaving = false;
  saved = false;
  errorMessage = "";
  appId = 0;
  constructor(route, tppService) {
    this.route = route;
    this.tppService = tppService;
  }
  ngOnInit() {
    this.appId = Number(this.route.snapshot.paramMap.get("id"));
    if (!this.appId) {
      this.isLoading = false;
      this.errorMessage = "Invalid app id.";
      return;
    }
    this.tppService.getAppById(this.appId).subscribe({
      next: (d) => {
        this.app = d;
        this.jwkSet = d?.publicKeysJWKSet || "";
        this.redirectURIs = d?.redirectURIs || "";
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this.errorMessage = "Unable to load app details.";
      }
    });
  }
  saveKeys() {
    if (this.isSaving)
      return;
    this.isSaving = true;
    this.saved = false;
    this.errorMessage = "";
    this.tppService.updateApp(this.appId, {
      publicKeysJWKSet: this.jwkSet,
      redirectURIs: this.redirectURIs
    }).subscribe({
      next: () => {
        this.isSaving = false;
        this.saved = true;
        setTimeout(() => this.saved = false, 3500);
      },
      error: () => {
        this.isSaving = false;
        this.errorMessage = "Failed to update keys.";
      }
    });
  }
  static \u0275fac = function KeysUploadComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _KeysUploadComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(TppService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _KeysUploadComponent, selectors: [["app-keys-upload"]], decls: 15, vars: 6, consts: [[1, "page-content"], [1, "page-header"], [1, "fas", "fa-key"], ["class", "page-subtitle", 4, "ngIf"], ["routerLink", "/developer/apps", 1, "btn", "btn-light"], [1, "fas", "fa-arrow-left"], ["class", "loading-container", 4, "ngIf"], ["class", "alert alert-error", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], ["class", "glass-card", "style", "max-width:680px", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "page-subtitle"], [1, "loading-container"], [1, "spinner"], [1, "alert", "alert-error"], [1, "fas", "fa-exclamation-circle"], [1, "alert", "alert-success"], [1, "fas", "fa-check-circle"], [1, "glass-card", 2, "max-width", "680px"], [1, "form-group"], ["rows", "8", "placeholder", '{"keys":[{"kty":"RSA","kid":"key-1"}]}', 1, "form-control", "font-mono", 3, "ngModelChange", "ngModel"], ["rows", "3", "placeholder", '["https://myapp.com/callback"]', 1, "form-control", "font-mono", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-primary", 3, "click", "disabled"], [4, "ngIf"], [1, "fas", "fa-save"], [1, "fas", "fa-spinner", "fa-spin"], [1, "empty-state"]], template: function KeysUploadComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
      \u0275\u0275element(4, "i", 2);
      \u0275\u0275text(5, " Keys & JWK Set");
      \u0275\u0275elementEnd();
      \u0275\u0275template(6, KeysUploadComponent_p_6_Template, 4, 1, "p", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "a", 4);
      \u0275\u0275element(8, "i", 5);
      \u0275\u0275text(9, " Back to Apps ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(10, KeysUploadComponent_div_10_Template, 4, 0, "div", 6)(11, KeysUploadComponent_div_11_Template, 3, 1, "div", 7)(12, KeysUploadComponent_div_12_Template, 3, 0, "div", 8)(13, KeysUploadComponent_div_13_Template, 12, 5, "div", 9)(14, KeysUploadComponent_div_14_Template, 4, 0, "div", 10);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.app);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.saved);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.app);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && !ctx.app && !ctx.errorMessage);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterModule, RouterLink], styles: ['\n.font-mono[_ngcontent-%COMP%] {\n  font-family:\n    "Courier New",\n    Courier,\n    monospace;\n}\n/*# sourceMappingURL=keys-upload.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KeysUploadComponent, [{
    type: Component,
    args: [{ selector: "app-keys-upload", standalone: true, imports: [CommonModule, FormsModule, RouterModule], template: `
    <div class="page-content">
      <div class="page-header">
        <div>
          <h1><i class="fas fa-key"></i> Keys &amp; JWK Set</h1>
          <p class="page-subtitle" *ngIf="app">Managing keys for: <strong>{{ app.appName }}</strong></p>
        </div>
        <a routerLink="/developer/apps" class="btn btn-light">
          <i class="fas fa-arrow-left"></i> Back to Apps
        </a>
      </div>

      <div class="loading-container" *ngIf="isLoading">
        <div class="spinner"></div>
        <span>Loading app details...</span>
      </div>

      <div class="alert alert-error" *ngIf="errorMessage">
        <i class="fas fa-exclamation-circle"></i> {{ errorMessage }}
      </div>
      <div class="alert alert-success" *ngIf="saved">
        <i class="fas fa-check-circle"></i> Keys updated successfully.
      </div>

      <div class="glass-card" *ngIf="!isLoading && app" style="max-width:680px">
        <div class="form-group">
          <label>JWK Set (JSON)</label>
          <textarea class="form-control font-mono" [(ngModel)]="jwkSet" rows="8"
                    placeholder='{"keys":[{"kty":"RSA","kid":"key-1"}]}'></textarea>
        </div>

        <div class="form-group">
          <label>Redirect URIs (JSON array)</label>
          <textarea class="form-control font-mono" [(ngModel)]="redirectURIs" rows="3"
                    placeholder='["https://myapp.com/callback"]'></textarea>
        </div>

        <button class="btn btn-primary" (click)="saveKeys()" [disabled]="isSaving">
          <span *ngIf="!isSaving"><i class="fas fa-save"></i> Update Keys</span>
          <span *ngIf="isSaving"><i class="fas fa-spinner fa-spin"></i> Saving...</span>
        </button>
      </div>

      <div class="empty-state" *ngIf="!isLoading && !app && !errorMessage">
        <i class="fas fa-key"></i>
        <p>No app found.</p>
      </div>
    </div>
  `, styles: ['/* src/app/developer-portal/keys-upload/keys-upload.component.css */\n.font-mono {\n  font-family:\n    "Courier New",\n    Courier,\n    monospace;\n}\n/*# sourceMappingURL=keys-upload.component.css.map */\n'] }]
  }], () => [{ type: ActivatedRoute }, { type: TppService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(KeysUploadComponent, { className: "KeysUploadComponent", filePath: "src/app/developer-portal/keys-upload/keys-upload.component.ts", lineNumber: 63 });
})();
export {
  KeysUploadComponent
};
//# sourceMappingURL=chunk-5YNE6AWI.js.map
