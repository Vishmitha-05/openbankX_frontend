import {
  ActivatedRoute,
  RouterLink,
  RouterModule
} from "./chunk-QS26HGQT.js";
import "./chunk-5C4TBQN6.js";
import {
  CommonModule,
  Component,
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
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-6UHLKSNQ.js";

// src/app/shared/error-page/error-page.component.ts
var _c0 = (a0) => ({ "color": a0 });
var ErrorPageComponent = class _ErrorPageComponent {
  route;
  code = "404";
  constructor(route) {
    this.route = route;
    this.route.queryParams.subscribe((params) => {
      this.code = params["code"] || "404";
    });
  }
  getTitle() {
    switch (this.code) {
      case "401":
        return "Unauthorized";
      case "403":
        return "Access Forbidden";
      case "429":
        return "Too Many Requests";
      case "500":
        return "Server Error";
      default:
        return "Page Not Found";
    }
  }
  getDescription() {
    switch (this.code) {
      case "401":
        return "Your session has expired or your credentials are invalid. Please log in again.";
      case "403":
        return "You do not have permission to access this resource. Contact your administrator.";
      case "429":
        return "You have exceeded the API rate limit. Please wait before making more requests.";
      case "500":
        return "An unexpected error occurred on the server. Our team has been notified.";
      default:
        return "The page you are looking for does not exist or has been moved.";
    }
  }
  getIcon() {
    switch (this.code) {
      case "401":
        return "fas fa-lock";
      case "403":
        return "fas fa-ban";
      case "429":
        return "fas fa-tachometer-alt";
      case "500":
        return "fas fa-server";
      default:
        return "fas fa-search";
    }
  }
  getColor() {
    switch (this.code) {
      case "401":
        return "#f59e0b";
      case "403":
        return "#ef4444";
      case "429":
        return "#8b5cf6";
      case "500":
        return "#dc2626";
      default:
        return "#667eea";
    }
  }
  static \u0275fac = function ErrorPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ErrorPageComponent)(\u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ErrorPageComponent, selectors: [["app-error-page"]], decls: 13, vars: 11, consts: [[1, "error-wrapper"], [1, "error-card"], [1, "error-code", 3, "ngStyle"], [1, "error-desc"], [1, "error-icon"], [3, "ngStyle"], ["routerLink", "/login", 1, "btn", "btn-primary"], [1, "fas", "fa-home"]], template: function ErrorPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "h2");
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 3);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 4);
      \u0275\u0275element(9, "i", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "a", 6);
      \u0275\u0275element(11, "i", 7);
      \u0275\u0275text(12, " Return to Login");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(7, _c0, ctx.getColor()));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.code);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.getTitle());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.getDescription());
      \u0275\u0275advance(2);
      \u0275\u0275classMap(ctx.getIcon());
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(9, _c0, ctx.getColor()));
    }
  }, dependencies: [CommonModule, NgStyle, RouterModule, RouterLink], styles: ["\n.error-wrapper[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #e8ecff 0%,\n      #f0f4ff 100%);\n}\n.error-card[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 40px;\n  max-width: 480px;\n  background: rgba(255, 255, 255, 0.85);\n  border-radius: 20px;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.error-code[_ngcontent-%COMP%] {\n  font-size: 6rem;\n  font-weight: 800;\n  line-height: 1;\n  margin-bottom: 8px;\n}\n.error-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n  font-size: 1.5rem;\n}\n.error-desc[_ngcontent-%COMP%] {\n  color: #6b7280;\n  margin: 0 0 30px;\n  line-height: 1.6;\n}\n.error-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 30px;\n}\n/*# sourceMappingURL=error-page.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ErrorPageComponent, [{
    type: Component,
    args: [{ selector: "app-error-page", standalone: true, imports: [CommonModule, RouterModule], template: `
    <div class="error-wrapper">
      <div class="error-card">
        <div class="error-code" [ngStyle]="{ 'color': getColor() }">{{ code }}</div>
        <h2>{{ getTitle() }}</h2>
        <p class="error-desc">{{ getDescription() }}</p>
        <div class="error-icon">
          <i [class]="getIcon()" [ngStyle]="{ 'color': getColor() }"></i>
        </div>
        <a routerLink="/login" class="btn btn-primary"><i class="fas fa-home"></i> Return to Login</a>
      </div>
    </div>
  `, styles: ["/* src/app/shared/error-page/error-page.component.css */\n.error-wrapper {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #e8ecff 0%,\n      #f0f4ff 100%);\n}\n.error-card {\n  text-align: center;\n  padding: 60px 40px;\n  max-width: 480px;\n  background: rgba(255, 255, 255, 0.85);\n  border-radius: 20px;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.error-code {\n  font-size: 6rem;\n  font-weight: 800;\n  line-height: 1;\n  margin-bottom: 8px;\n}\n.error-card h2 {\n  margin: 0 0 12px;\n  font-size: 1.5rem;\n}\n.error-desc {\n  color: #6b7280;\n  margin: 0 0 30px;\n  line-height: 1.6;\n}\n.error-icon {\n  font-size: 3rem;\n  margin-bottom: 30px;\n}\n/*# sourceMappingURL=error-page.component.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ErrorPageComponent, { className: "ErrorPageComponent", filePath: "src/app/shared/error-page/error-page.component.ts", lineNumber: 24 });
})();
export {
  ErrorPageComponent
};
//# sourceMappingURL=chunk-TEVRZMU2.js.map
