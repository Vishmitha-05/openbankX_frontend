import {
  NavbarComponent,
  SidebarComponent
} from "./chunk-BZJ3JBQG.js";
import "./chunk-L7ZLHMBC.js";
import "./chunk-WCVDOMTU.js";
import {
  RouterModule,
  RouterOutlet
} from "./chunk-QS26HGQT.js";
import "./chunk-TX3HFKHN.js";
import "./chunk-5C4TBQN6.js";
import {
  CommonModule,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty
} from "./chunk-6UHLKSNQ.js";

// src/app/customer-portal/customer-portal.component.ts
var CustomerPortalComponent = class _CustomerPortalComponent {
  static \u0275fac = function CustomerPortalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CustomerPortalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomerPortalComponent, selectors: [["app-customer-portal"]], decls: 6, vars: 1, consts: [[1, "portal-layout"], [1, "portal-main"], [3, "pageTitle"], [1, "portal-content"]], template: function CustomerPortalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-sidebar");
      \u0275\u0275elementStart(2, "div", 1);
      \u0275\u0275element(3, "app-navbar", 2);
      \u0275\u0275elementStart(4, "div", 3);
      \u0275\u0275element(5, "router-outlet");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("pageTitle", "Customer Portal");
    }
  }, dependencies: [CommonModule, RouterModule, RouterOutlet, SidebarComponent, NavbarComponent], styles: ["\n.portal-layout[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n}\n.portal-main[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-left: 240px;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  transition: margin-left 0.2s ease;\n}\n.portal-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  background-color: var(--bg-primary);\n}\n@media (max-width: 992px) {\n  .portal-main[_ngcontent-%COMP%] {\n    margin-left: 72px;\n  }\n}\n/*# sourceMappingURL=customer-portal.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomerPortalComponent, [{
    type: Component,
    args: [{ selector: "app-customer-portal", standalone: true, imports: [CommonModule, RouterModule, SidebarComponent, NavbarComponent], template: `
    <div class="portal-layout">
      <app-sidebar></app-sidebar>
      <div class="portal-main">
        <app-navbar [pageTitle]="'Customer Portal'"></app-navbar>
        <div class="portal-content"><router-outlet></router-outlet></div>
      </div>
    </div>
  `, styles: ["/* src/app/customer-portal/customer-portal.component.css */\n.portal-layout {\n  display: flex;\n  min-height: 100vh;\n}\n.portal-main {\n  flex: 1;\n  margin-left: 240px;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  transition: margin-left 0.2s ease;\n}\n.portal-content {\n  flex: 1;\n  overflow-y: auto;\n  background-color: var(--bg-primary);\n}\n@media (max-width: 992px) {\n  .portal-main {\n    margin-left: 72px;\n  }\n}\n/*# sourceMappingURL=customer-portal.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomerPortalComponent, { className: "CustomerPortalComponent", filePath: "src/app/customer-portal/customer-portal.component.ts", lineNumber: 22 });
})();
export {
  CustomerPortalComponent
};
//# sourceMappingURL=chunk-IRCWKUO4.js.map
