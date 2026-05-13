import {
  CommonModule,
  Component,
  NgForOf,
  NgStyle,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-6UHLKSNQ.js";

// src/app/operations-portal/latency-charts/latency-charts.component.ts
var _c0 = (a0) => ({ "color": a0 });
var _c1 = (a0, a1) => ({ "width": a0, "background": a1 });
function LatencyChartsComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "h4", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 13);
    \u0275\u0275element(6, "div", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 15);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r1.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(5, _c0, p_r1.color));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", p_r1.value, "ms");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction2(7, _c1, p_r1.percent + "%", p_r1.color));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Target: ", p_r1.target, "ms");
  }
}
function LatencyChartsComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "span", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 18);
    \u0275\u0275element(4, "div", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 20);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ep_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ep_r2.endpoint);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction2(4, _c1, ep_r2.latency / 500 * 100 + "%", ep_r2.latency > 300 ? "#ef4444" : ep_r2.latency > 200 ? "#f59e0b" : "#10b981"));
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(7, _c0, ep_r2.latency > 300 ? "#ef4444" : "#10b981"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ep_r2.latency, "ms");
  }
}
var LatencyChartsComponent = class _LatencyChartsComponent {
  percentiles = [
    { label: "P50 (Median)", value: 120, target: 200, percent: 60, color: "#10b981" },
    { label: "P95", value: 210, target: 300, percent: 70, color: "#f59e0b" },
    { label: "P99", value: 380, target: 500, percent: 76, color: "#ef4444" }
  ];
  endpointLatency = [
    { endpoint: "/accounts", latency: 95 },
    { endpoint: "/balances", latency: 82 },
    { endpoint: "/transactions", latency: 185 },
    { endpoint: "/payments", latency: 240 },
    { endpoint: "/funds-check", latency: 110 },
    { endpoint: "/consents", latency: 68 }
  ];
  static \u0275fac = function LatencyChartsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LatencyChartsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LatencyChartsComponent, selectors: [["app-latency-charts"]], decls: 15, vars: 2, consts: [[1, "page-content"], [1, "page-header"], [1, "fas", "fa-chart-line"], [1, "page-subtitle"], [1, "grid-3", "mb-20"], ["class", "glass-card", "style", "text-align:center", 4, "ngFor", "ngForOf"], [1, "glass-card"], [1, "mb-16"], [1, "endpoint-bars"], ["class", "bar-row", 4, "ngFor", "ngForOf"], [1, "glass-card", 2, "text-align", "center"], [1, "text-muted"], [1, "latency-value", "mt-8", 3, "ngStyle"], [1, "gauge-bar", "mt-12"], [1, "gauge-fill", 3, "ngStyle"], [1, "text-sm", "text-muted", "mt-8"], [1, "bar-row"], [1, "bar-endpoint", "font-mono", "text-sm"], [1, "bar-track"], [1, "bar-fill", 3, "ngStyle"], [1, "bar-ms", "text-sm", 3, "ngStyle"]], template: function LatencyChartsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
      \u0275\u0275element(4, "i", 2);
      \u0275\u0275text(5, " Latency Distribution");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 3);
      \u0275\u0275text(7, "P50 / P95 / P99 response time analysis");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "div", 4);
      \u0275\u0275template(9, LatencyChartsComponent_div_9_Template, 9, 10, "div", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 6)(11, "h3", 7);
      \u0275\u0275text(12, "Latency by Endpoint");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 8);
      \u0275\u0275template(14, LatencyChartsComponent_div_14_Template, 7, 9, "div", 9);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("ngForOf", ctx.percentiles);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", ctx.endpointLatency);
    }
  }, dependencies: [CommonModule, NgForOf, NgStyle], styles: ["\n.latency-value[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 800;\n}\n.gauge-bar[_ngcontent-%COMP%] {\n  height: 8px;\n  background: rgba(0, 0, 0, 0.06);\n  border-radius: 4px;\n  overflow: hidden;\n}\n.gauge-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 4px;\n  transition: width 1s ease;\n}\n.endpoint-bars[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.bar-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 160px 1fr 60px;\n  align-items: center;\n  gap: 12px;\n}\n.bar-track[_ngcontent-%COMP%] {\n  height: 20px;\n  background: rgba(0, 0, 0, 0.04);\n  border-radius: 4px;\n  overflow: hidden;\n}\n.bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 4px;\n  transition: width 0.8s ease;\n}\n/*# sourceMappingURL=latency-charts.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LatencyChartsComponent, [{
    type: Component,
    args: [{ selector: "app-latency-charts", standalone: true, imports: [CommonModule], template: `
    <div class="page-content">
      <div class="page-header"><div><h1><i class="fas fa-chart-line"></i> Latency Distribution</h1>
        <p class="page-subtitle">P50 / P95 / P99 response time analysis</p></div>
      </div>
      <div class="grid-3 mb-20">
        <div *ngFor="let p of percentiles" class="glass-card" style="text-align:center">
          <h4 class="text-muted">{{ p.label }}</h4>
          <div class="latency-value mt-8" [ngStyle]="{ 'color': p.color }">{{ p.value }}ms</div>
          <div class="gauge-bar mt-12">
            <div class="gauge-fill" [ngStyle]="{ 'width': p.percent + '%', 'background': p.color }"></div>
          </div>
          <span class="text-sm text-muted mt-8">Target: {{ p.target }}ms</span>
        </div>
      </div>

      <!-- Endpoint breakdown -->
      <div class="glass-card">
        <h3 class="mb-16">Latency by Endpoint</h3>
        <div class="endpoint-bars">
          <div *ngFor="let ep of endpointLatency" class="bar-row">
            <span class="bar-endpoint font-mono text-sm">{{ ep.endpoint }}</span>
            <div class="bar-track">
              <div class="bar-fill" [ngStyle]="{ 'width': (ep.latency / 500 * 100) + '%', 'background': ep.latency > 300 ? '#ef4444' : ep.latency > 200 ? '#f59e0b' : '#10b981' }"></div>
            </div>
            <span class="bar-ms text-sm" [ngStyle]="{ 'color': ep.latency > 300 ? '#ef4444' : '#10b981' }">{{ ep.latency }}ms</span>
          </div>
        </div>
      </div>
    </div>
  `, styles: ["/* src/app/operations-portal/latency-charts/latency-charts.component.css */\n.latency-value {\n  font-size: 2rem;\n  font-weight: 800;\n}\n.gauge-bar {\n  height: 8px;\n  background: rgba(0, 0, 0, 0.06);\n  border-radius: 4px;\n  overflow: hidden;\n}\n.gauge-fill {\n  height: 100%;\n  border-radius: 4px;\n  transition: width 1s ease;\n}\n.endpoint-bars {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.bar-row {\n  display: grid;\n  grid-template-columns: 160px 1fr 60px;\n  align-items: center;\n  gap: 12px;\n}\n.bar-track {\n  height: 20px;\n  background: rgba(0, 0, 0, 0.04);\n  border-radius: 4px;\n  overflow: hidden;\n}\n.bar-fill {\n  height: 100%;\n  border-radius: 4px;\n  transition: width 0.8s ease;\n}\n/*# sourceMappingURL=latency-charts.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LatencyChartsComponent, { className: "LatencyChartsComponent", filePath: "src/app/operations-portal/latency-charts/latency-charts.component.ts", lineNumber: 41 });
})();
export {
  LatencyChartsComponent
};
//# sourceMappingURL=chunk-Z524VXH7.js.map
