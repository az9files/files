/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/PlotareaBuilderPanel.ts":
/*!*************************************!*\
  !*** ./src/PlotareaBuilderPanel.ts ***!
  \*************************************/
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
var plotareaFormTemplate = document.createElement("template");
plotareaFormTemplate.innerHTML = "\n    <form id=\"form\">\n        <fieldset>\n            <legend>Plotarea Properties</legend>\n            <table>\n                <tr>\n                    <td>Rounded Marker</td>\n                    <td><input id=\"bps_rounded\" type=\"checkbox\" checked></td>\n                </tr>\n                <tr>\n                    <td>Increate Size</td>\n                    <td><input id=\"bps_size_increment\" type=\"number\" value=\"0\">%</td>\n                </tr>\n                <tr>\n                    <td>Axis Label Color</td>\n                    <td><input id=\"bps_axis_label_color\" type=\"text\" size=\"10\" maxlength=\"10\" value=\"#333\"></td>\n                </tr>\n            </table>\n            <input type=\"submit\" style=\"display:none;\">\n        </fieldset>\n    </form>\n    <style>\n    :host {\n        display: block;\n        padding: 1em 1em 1em 1em;\n    }\n    </style>\n";
var VizPlotareaBuilderPanel = /** @class */ (function (_super) {
    __extends(VizPlotareaBuilderPanel, _super);
    function VizPlotareaBuilderPanel() {
        var _this = _super.call(this) || this;
        _this._shadowRoot = _this.attachShadow({ mode: "open" });
        _this._shadowRoot.appendChild(plotareaFormTemplate.content.cloneNode(true));
        _this._shadowRoot.getElementById('bps_rounded').addEventListener('change', _this._submit.bind(_this));
        _this._shadowRoot.getElementById('bps_size_increment').addEventListener('change', _this._submit.bind(_this));
        _this._shadowRoot.getElementById('bps_axis_label_color').addEventListener('change', _this._submit.bind(_this));
        return _this;
    }
    VizPlotareaBuilderPanel.prototype._submit = function (e) {
        e.preventDefault();
        this.dispatchEvent(new CustomEvent("propertiesChanged", {
            detail: {
                properties: {
                    rounded: this.rounded,
                    sizeIncrement: this.sizeIncrement,
                    axisLabelColor: this.axisLabelColor,
                }
            }
        }));
    };
    Object.defineProperty(VizPlotareaBuilderPanel.prototype, "rounded", {
        get: function () {
            return this._shadowRoot.getElementById("bps_rounded").checked;
        },
        set: function (value) {
            this._shadowRoot.getElementById("bps_rounded").checked = !!value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VizPlotareaBuilderPanel.prototype, "sizeIncrement", {
        get: function () {
            return this._shadowRoot.getElementById("bps_size_increment").value;
        },
        set: function (value) {
            this._shadowRoot.getElementById("bps_size_increment").value = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VizPlotareaBuilderPanel.prototype, "axisLabelColor", {
        get: function () {
            return this._shadowRoot.getElementById("bps_axis_label_color").value;
        },
        set: function (value) {
            this._shadowRoot.getElementById("bps_axis_label_color").value = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VizPlotareaBuilderPanel.prototype, "settings", {
        set: function (settings) {
            this.rounded = (settings === null || settings === void 0 ? void 0 : settings.rounded) || this.rounded;
            this.sizeIncrement = (settings === null || settings === void 0 ? void 0 : settings.sizeIncrement) || this.sizeIncrement;
            this.axisLabelColor = (settings === null || settings === void 0 ? void 0 : settings.axisLabelColor) || this.axisLabelColor;
        },
        enumerable: false,
        configurable: true
    });
    return VizPlotareaBuilderPanel;
}(HTMLElement));
customElements.define("az9-plotarea-build", VizPlotareaBuilderPanel);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/PlotareaBuilderPanel.ts"]();
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXo5LXBsb3RhcmVhLWJ1aWxkZXItcGFuZWwuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxnQkFBZ0Isc0NBQXNDLGtCQUFrQjtBQUN2Riw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxneUJBQWd5QiwrREFBK0QseUJBQXlCLG1DQUFtQyxPQUFPO0FBQ2w2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxjQUFjO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7OztVRWpGQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2lkZ2V0LWFkZC1vbi1zYW1wbGVzLy4vc3JjL1Bsb3RhcmVhQnVpbGRlclBhbmVsLnRzIiwid2VicGFjazovL3dpZGdldC1hZGQtb24tc2FtcGxlcy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3dpZGdldC1hZGQtb24tc2FtcGxlcy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2lkZ2V0LWFkZC1vbi1zYW1wbGVzL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxudmFyIHBsb3RhcmVhRm9ybVRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xyXG5wbG90YXJlYUZvcm1UZW1wbGF0ZS5pbm5lckhUTUwgPSBcIlxcbiAgICA8Zm9ybSBpZD1cXFwiZm9ybVxcXCI+XFxuICAgICAgICA8ZmllbGRzZXQ+XFxuICAgICAgICAgICAgPGxlZ2VuZD5QbG90YXJlYSBQcm9wZXJ0aWVzPC9sZWdlbmQ+XFxuICAgICAgICAgICAgPHRhYmxlPlxcbiAgICAgICAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgICAgICAgICA8dGQ+Um91bmRlZCBNYXJrZXI8L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgPHRkPjxpbnB1dCBpZD1cXFwiYnBzX3JvdW5kZWRcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIiBjaGVja2VkPjwvdGQ+XFxuICAgICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgICAgIDx0cj5cXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5JbmNyZWF0ZSBTaXplPC90ZD5cXG4gICAgICAgICAgICAgICAgICAgIDx0ZD48aW5wdXQgaWQ9XFxcImJwc19zaXplX2luY3JlbWVudFxcXCIgdHlwZT1cXFwibnVtYmVyXFxcIiB2YWx1ZT1cXFwiMFxcXCI+JTwvdGQ+XFxuICAgICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgICAgIDx0cj5cXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5BeGlzIExhYmVsIENvbG9yPC90ZD5cXG4gICAgICAgICAgICAgICAgICAgIDx0ZD48aW5wdXQgaWQ9XFxcImJwc19heGlzX2xhYmVsX2NvbG9yXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBzaXplPVxcXCIxMFxcXCIgbWF4bGVuZ3RoPVxcXCIxMFxcXCIgdmFsdWU9XFxcIiMzMzNcXFwiPjwvdGQ+XFxuICAgICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgPC90YWJsZT5cXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwic3VibWl0XFxcIiBzdHlsZT1cXFwiZGlzcGxheTpub25lO1xcXCI+XFxuICAgICAgICA8L2ZpZWxkc2V0PlxcbiAgICA8L2Zvcm0+XFxuICAgIDxzdHlsZT5cXG4gICAgOmhvc3Qge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBwYWRkaW5nOiAxZW0gMWVtIDFlbSAxZW07XFxuICAgIH1cXG4gICAgPC9zdHlsZT5cXG5cIjtcclxudmFyIFZpelBsb3RhcmVhQnVpbGRlclBhbmVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFZpelBsb3RhcmVhQnVpbGRlclBhbmVsLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gVml6UGxvdGFyZWFCdWlsZGVyUGFuZWwoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5fc2hhZG93Um9vdCA9IF90aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6IFwib3BlblwiIH0pO1xyXG4gICAgICAgIF90aGlzLl9zaGFkb3dSb290LmFwcGVuZENoaWxkKHBsb3RhcmVhRm9ybVRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpKTtcclxuICAgICAgICBfdGhpcy5fc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZCgnYnBzX3JvdW5kZWQnKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBfdGhpcy5fc3VibWl0LmJpbmQoX3RoaXMpKTtcclxuICAgICAgICBfdGhpcy5fc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZCgnYnBzX3NpemVfaW5jcmVtZW50JykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgX3RoaXMuX3N1Ym1pdC5iaW5kKF90aGlzKSk7XHJcbiAgICAgICAgX3RoaXMuX3NoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoJ2Jwc19heGlzX2xhYmVsX2NvbG9yJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgX3RoaXMuX3N1Ym1pdC5iaW5kKF90aGlzKSk7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgVml6UGxvdGFyZWFCdWlsZGVyUGFuZWwucHJvdG90eXBlLl9zdWJtaXQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwicHJvcGVydGllc0NoYW5nZWRcIiwge1xyXG4gICAgICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICByb3VuZGVkOiB0aGlzLnJvdW5kZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZUluY3JlbWVudDogdGhpcy5zaXplSW5jcmVtZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIGF4aXNMYWJlbENvbG9yOiB0aGlzLmF4aXNMYWJlbENvbG9yLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkpO1xyXG4gICAgfTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWaXpQbG90YXJlYUJ1aWxkZXJQYW5lbC5wcm90b3R5cGUsIFwicm91bmRlZFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKFwiYnBzX3JvdW5kZWRcIikuY2hlY2tlZDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoXCJicHNfcm91bmRlZFwiKS5jaGVja2VkID0gISF2YWx1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVml6UGxvdGFyZWFCdWlsZGVyUGFuZWwucHJvdG90eXBlLCBcInNpemVJbmNyZW1lbnRcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZChcImJwc19zaXplX2luY3JlbWVudFwiKS52YWx1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoXCJicHNfc2l6ZV9pbmNyZW1lbnRcIikudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVml6UGxvdGFyZWFCdWlsZGVyUGFuZWwucHJvdG90eXBlLCBcImF4aXNMYWJlbENvbG9yXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoXCJicHNfYXhpc19sYWJlbF9jb2xvclwiKS52YWx1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoXCJicHNfYXhpc19sYWJlbF9jb2xvclwiKS52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWaXpQbG90YXJlYUJ1aWxkZXJQYW5lbC5wcm90b3R5cGUsIFwic2V0dGluZ3NcIiwge1xyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHNldHRpbmdzKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm91bmRlZCA9IChzZXR0aW5ncyA9PT0gbnVsbCB8fCBzZXR0aW5ncyA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2V0dGluZ3Mucm91bmRlZCkgfHwgdGhpcy5yb3VuZGVkO1xyXG4gICAgICAgICAgICB0aGlzLnNpemVJbmNyZW1lbnQgPSAoc2V0dGluZ3MgPT09IG51bGwgfHwgc2V0dGluZ3MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNldHRpbmdzLnNpemVJbmNyZW1lbnQpIHx8IHRoaXMuc2l6ZUluY3JlbWVudDtcclxuICAgICAgICAgICAgdGhpcy5heGlzTGFiZWxDb2xvciA9IChzZXR0aW5ncyA9PT0gbnVsbCB8fCBzZXR0aW5ncyA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2V0dGluZ3MuYXhpc0xhYmVsQ29sb3IpIHx8IHRoaXMuYXhpc0xhYmVsQ29sb3I7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIFZpelBsb3RhcmVhQnVpbGRlclBhbmVsO1xyXG59KEhUTUxFbGVtZW50KSk7XHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImF6OS1wbG90YXJlYS1idWlsZFwiLCBWaXpQbG90YXJlYUJ1aWxkZXJQYW5lbCk7XHJcbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0ge307XG5fX3dlYnBhY2tfbW9kdWxlc19fW1wiLi9zcmMvUGxvdGFyZWFCdWlsZGVyUGFuZWwudHNcIl0oKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==