/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/MetricPlotareaBuilderPanel.ts":
/*!*******************************************!*\
  !*** ./src/MetricPlotareaBuilderPanel.ts ***!
  \*******************************************/
/***/ (function() {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var metricPlotareaFormTemplate = document.createElement("template");
metricPlotareaFormTemplate.innerHTML = "\n    <form id=\"form\">\n        <fieldset>\n            <legend>Plotarea Properties</legend>\n            <table>\n                <tr>\n                    <td>Label Color</td>\n                    <td><input id=\"bps_label_color\" type=\"text\" size=\"10\" maxlength=\"10\" value=\"red\"></td>\n                </tr>\n                <tr>\n                    <td>Number Color</td>\n                    <td><input id=\"bps_number_color\" type=\"text\" size=\"10\" maxlength=\"10\" value=\"green\"></td>\n                </tr>\n                <tr>\n                    <td>Max</td>\n                    <td><input id=\"bps_max\" type=\"number\" size=\"10\" maxlength=\"10\">Millian</td>\n                </tr>\n            </table>\n            <input type=\"submit\" style=\"display:none;\">\n        </fieldset>\n    </form>\n    <style>\n    :host {\n        display: block;\n        padding: 1em 1em 1em 1em;\n    }\n    </style>\n";
var MetricPlotareaBuilderPanel = /** @class */ (function (_super) {
    __extends(MetricPlotareaBuilderPanel, _super);
    function MetricPlotareaBuilderPanel() {
        var _this = _super.call(this) || this;
        _this._shadowRoot = _this.attachShadow({ mode: "open" });
        _this._shadowRoot.appendChild(metricPlotareaFormTemplate.content.cloneNode(true));
        _this._shadowRoot.getElementById("form").addEventListener("submit", _this._submit.bind(_this));
        _this._shadowRoot.getElementById('bps_label_color').addEventListener('change', _this._submit.bind(_this));
        _this._shadowRoot.getElementById('bps_number_color').addEventListener('change', _this._submit.bind(_this));
        _this._shadowRoot.getElementById('bps_max').addEventListener('change', _this._submit.bind(_this));
        return _this;
    }
    MetricPlotareaBuilderPanel.prototype._submit = function (e) {
        e.preventDefault();
        this.dispatchEvent(new CustomEvent("propertiesChanged", {
            detail: {
                properties: {
                    labelColor: this.labelColor,
                    numberColor: this.numberColor,
                    max: this.max,
                }
            }
        }));
    };
    Object.defineProperty(MetricPlotareaBuilderPanel.prototype, "labelColor", {
        get: function () {
            return this._shadowRoot.getElementById("bps_label_color").value;
        },
        set: function (value) {
            this._shadowRoot.getElementById("bps_label_color").value = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MetricPlotareaBuilderPanel.prototype, "numberColor", {
        get: function () {
            return this._shadowRoot.getElementById("bps_number_color").value;
        },
        set: function (value) {
            this._shadowRoot.getElementById("bps_number_color").value = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MetricPlotareaBuilderPanel.prototype, "max", {
        get: function () {
            return this._shadowRoot.getElementById("bps_max").value;
        },
        set: function (value) {
            this._shadowRoot.getElementById("bps_max").value = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MetricPlotareaBuilderPanel.prototype, "settings", {
        set: function (settings) {
            this.labelColor = (settings === null || settings === void 0 ? void 0 : settings.labelColor) || this.labelColor;
            this.numberColor = (settings === null || settings === void 0 ? void 0 : settings.numberColor) || this.numberColor;
            this.max = (settings === null || settings === void 0 ? void 0 : settings.max) || this.max;
        },
        enumerable: false,
        configurable: true
    });
    return MetricPlotareaBuilderPanel;
}(HTMLElement));
customElements.define("viz-metric-plotarea-build", MetricPlotareaBuilderPanel);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/MetricPlotareaBuilderPanel.ts"]();
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidml6LW1ldHJpYy1wbG90YXJlYS1idWlsZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGdCQUFnQixzQ0FBc0Msa0JBQWtCO0FBQ3ZGLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLGkwQkFBaTBCLCtEQUErRCx5QkFBeUIsbUNBQW1DLE9BQU87QUFDbjhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELGNBQWM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7VUVsRkE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dpZGdldC1hZGQtb24tc2FtcGxlcy8uL3NyYy9NZXRyaWNQbG90YXJlYUJ1aWxkZXJQYW5lbC50cyIsIndlYnBhY2s6Ly93aWRnZXQtYWRkLW9uLXNhbXBsZXMvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly93aWRnZXQtYWRkLW9uLXNhbXBsZXMvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3dpZGdldC1hZGQtb24tc2FtcGxlcy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBtZXRyaWNQbG90YXJlYUZvcm1UZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcbm1ldHJpY1Bsb3RhcmVhRm9ybVRlbXBsYXRlLmlubmVySFRNTCA9IFwiXFxuICAgIDxmb3JtIGlkPVxcXCJmb3JtXFxcIj5cXG4gICAgICAgIDxmaWVsZHNldD5cXG4gICAgICAgICAgICA8bGVnZW5kPlBsb3RhcmVhIFByb3BlcnRpZXM8L2xlZ2VuZD5cXG4gICAgICAgICAgICA8dGFibGU+XFxuICAgICAgICAgICAgICAgIDx0cj5cXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5MYWJlbCBDb2xvcjwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICA8dGQ+PGlucHV0IGlkPVxcXCJicHNfbGFiZWxfY29sb3JcXFwiIHR5cGU9XFxcInRleHRcXFwiIHNpemU9XFxcIjEwXFxcIiBtYXhsZW5ndGg9XFxcIjEwXFxcIiB2YWx1ZT1cXFwicmVkXFxcIj48L3RkPlxcbiAgICAgICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgICAgICAgICA8dGQ+TnVtYmVyIENvbG9yPC90ZD5cXG4gICAgICAgICAgICAgICAgICAgIDx0ZD48aW5wdXQgaWQ9XFxcImJwc19udW1iZXJfY29sb3JcXFwiIHR5cGU9XFxcInRleHRcXFwiIHNpemU9XFxcIjEwXFxcIiBtYXhsZW5ndGg9XFxcIjEwXFxcIiB2YWx1ZT1cXFwiZ3JlZW5cXFwiPjwvdGQ+XFxuICAgICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgICAgIDx0cj5cXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5NYXg8L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgPHRkPjxpbnB1dCBpZD1cXFwiYnBzX21heFxcXCIgdHlwZT1cXFwibnVtYmVyXFxcIiBzaXplPVxcXCIxMFxcXCIgbWF4bGVuZ3RoPVxcXCIxMFxcXCI+TWlsbGlhbjwvdGQ+XFxuICAgICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgPC90YWJsZT5cXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwic3VibWl0XFxcIiBzdHlsZT1cXFwiZGlzcGxheTpub25lO1xcXCI+XFxuICAgICAgICA8L2ZpZWxkc2V0PlxcbiAgICA8L2Zvcm0+XFxuICAgIDxzdHlsZT5cXG4gICAgOmhvc3Qge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBwYWRkaW5nOiAxZW0gMWVtIDFlbSAxZW07XFxuICAgIH1cXG4gICAgPC9zdHlsZT5cXG5cIjtcbnZhciBNZXRyaWNQbG90YXJlYUJ1aWxkZXJQYW5lbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTWV0cmljUGxvdGFyZWFCdWlsZGVyUGFuZWwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTWV0cmljUGxvdGFyZWFCdWlsZGVyUGFuZWwoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLl9zaGFkb3dSb290ID0gX3RoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogXCJvcGVuXCIgfSk7XG4gICAgICAgIF90aGlzLl9zaGFkb3dSb290LmFwcGVuZENoaWxkKG1ldHJpY1Bsb3RhcmVhRm9ybVRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgICAgX3RoaXMuX3NoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgX3RoaXMuX3N1Ym1pdC5iaW5kKF90aGlzKSk7XG4gICAgICAgIF90aGlzLl9zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKCdicHNfbGFiZWxfY29sb3InKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBfdGhpcy5fc3VibWl0LmJpbmQoX3RoaXMpKTtcbiAgICAgICAgX3RoaXMuX3NoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoJ2Jwc19udW1iZXJfY29sb3InKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBfdGhpcy5fc3VibWl0LmJpbmQoX3RoaXMpKTtcbiAgICAgICAgX3RoaXMuX3NoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoJ2Jwc19tYXgnKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBfdGhpcy5fc3VibWl0LmJpbmQoX3RoaXMpKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBNZXRyaWNQbG90YXJlYUJ1aWxkZXJQYW5lbC5wcm90b3R5cGUuX3N1Ym1pdCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcInByb3BlcnRpZXNDaGFuZ2VkXCIsIHtcbiAgICAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxDb2xvcjogdGhpcy5sYWJlbENvbG9yLFxuICAgICAgICAgICAgICAgICAgICBudW1iZXJDb2xvcjogdGhpcy5udW1iZXJDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgbWF4OiB0aGlzLm1heCxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNZXRyaWNQbG90YXJlYUJ1aWxkZXJQYW5lbC5wcm90b3R5cGUsIFwibGFiZWxDb2xvclwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoXCJicHNfbGFiZWxfY29sb3JcIikudmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKFwiYnBzX2xhYmVsX2NvbG9yXCIpLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTWV0cmljUGxvdGFyZWFCdWlsZGVyUGFuZWwucHJvdG90eXBlLCBcIm51bWJlckNvbG9yXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZChcImJwc19udW1iZXJfY29sb3JcIikudmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKFwiYnBzX251bWJlcl9jb2xvclwiKS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1ldHJpY1Bsb3RhcmVhQnVpbGRlclBhbmVsLnByb3RvdHlwZSwgXCJtYXhcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKFwiYnBzX21heFwiKS52YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3NoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoXCJicHNfbWF4XCIpLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTWV0cmljUGxvdGFyZWFCdWlsZGVyUGFuZWwucHJvdG90eXBlLCBcInNldHRpbmdzXCIsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoc2V0dGluZ3MpIHtcbiAgICAgICAgICAgIHRoaXMubGFiZWxDb2xvciA9IChzZXR0aW5ncyA9PT0gbnVsbCB8fCBzZXR0aW5ncyA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2V0dGluZ3MubGFiZWxDb2xvcikgfHwgdGhpcy5sYWJlbENvbG9yO1xuICAgICAgICAgICAgdGhpcy5udW1iZXJDb2xvciA9IChzZXR0aW5ncyA9PT0gbnVsbCB8fCBzZXR0aW5ncyA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2V0dGluZ3MubnVtYmVyQ29sb3IpIHx8IHRoaXMubnVtYmVyQ29sb3I7XG4gICAgICAgICAgICB0aGlzLm1heCA9IChzZXR0aW5ncyA9PT0gbnVsbCB8fCBzZXR0aW5ncyA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2V0dGluZ3MubWF4KSB8fCB0aGlzLm1heDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBNZXRyaWNQbG90YXJlYUJ1aWxkZXJQYW5lbDtcbn0oSFRNTEVsZW1lbnQpKTtcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInZpei1tZXRyaWMtcGxvdGFyZWEtYnVpbGRcIiwgTWV0cmljUGxvdGFyZWFCdWlsZGVyUGFuZWwpO1xuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSB7fTtcbl9fd2VicGFja19tb2R1bGVzX19bXCIuL3NyYy9NZXRyaWNQbG90YXJlYUJ1aWxkZXJQYW5lbC50c1wiXSgpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9