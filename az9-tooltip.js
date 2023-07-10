/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/VizTooltip.ts":
/*!***************************!*\
  !*** ./src/VizTooltip.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var rowTemplate = document.createElement('template');
rowTemplate.innerHTML = "\n    <div class=\"tooltip-row\">\n        <img class=\"entry-icon\"\n            width=\"20\"\n            height=\"20\"\n        >\n        <div class=\"tooltip-row-label\">\n            <span class=\"entry-label\"></span>\n        </div>\n    </div>\n";
var containerTemplate = document.createElement('template');
containerTemplate.innerHTML = "\n    <style>\n        :host {\n            display: block;\n            min-width: 80px;\n            max-width: 250px;\n            min-height: 24px;\n        }\n\n        .tooltip-container {\n            padding: 12px;\n            display: flex;\n            min-width: 80px;\n            min-height: 24px;\n            flex-flow: column nowrap;\n        }\n\n        .price::before {\n            font-family: SAP-icons;\n            content: \"\\E026\";\n        }\n\n        .manager::before {\n            font-family: SAP-icons;\n            content: \"\\E036\";\n        }\n\n        .product::before {\n            font-family: SAP-icons;\n            content \"\\E16D\";\n        }\n\n        .location::before {\n            font-family: SAP-icons;\n            content \"\\E021\";\n        }\n\n        .store::before {\n            font-family: SAP-icons;\n            content \"\\E00F\";\n        }\n\n        .tooltip-row {\n            display: flex;\n            min-height: 30px;\n            flex-flow: row nowrap;\n            align-items: center;\n        }\n\n        .tooltip-row-label {\n            display: flex;\n            flex-flow: column nowrap;\n            flex: auto;\n        }\n\n        .tooltip-row-label progress {\n            height: 6px;\n            width: 100%;\n            border-radius: 0;\n        }\n\n        .tooltip-row-label progress::-webkit-progress-bar {\n            color: lightblue;\n            background-color: #eee;\n        }\n\n        .tooltip-row-label progress::-webkit-progress-value {\n            background-color: red;\n        }\n\n        .tooltip-row:not(:last-of-type) {\n            border-bottom: solid 1px #e6e7e8;\n        }\n\n        .entry-icon {\n            display: inline-block;\n            width: 20px;\n            padding-right: 12px;\n        }\n\n        .entry-label {\n            display: inline-block;\n            flex: auto;\n            vertical-align: middle;\n        }\n    </style>\n    <div class=\"tooltip-container\">\n    </div>\n\n";
var iconMap = {
    'Location': 'https://cdn-icons-png.flaticon.com/128/684/684908.png',
    'Product': 'https://cdn-icons-png.flaticon.com/128/1312/1312091.png',
    'Sales Manager': 'https://cdn-icons-png.flaticon.com/128/4205/4205906.png',
    'Date': 'https://cdn-icons-png.flaticon.com/128/425/425868.png',
    'Store': 'https://cdn-icons-png.flaticon.com/128/9977/9977589.png',
    'Category': 'https://cdn-icons-png.flaticon.com/128/10008/10008517.png',
    'Price (fixed)': 'https://cdn-icons-png.flaticon.com/128/919/919790.png',
    'Quantity Sold': 'https://cdn-icons-png.flaticon.com/128/3338/3338632.png',
    'California': 'https://cdn-icons-png.flaticon.com/128/7906/7906455.png',
    'Nevada': 'https://cdn-icons-png.flaticon.com/128/7906/7906606.png',
    'Oregon': 'https://cdn-icons-png.flaticon.com/128/7906/7906729.png',
    'Carbonated Drinks': 'https://cdn-icons-png.flaticon.com/128/4329/4329542.png',
    'Juices': 'https://cdn-icons-png.flaticon.com/128/3165/3165589.png',
    'Alcohol': 'https://cdn-icons-png.flaticon.com/128/3174/3174535.png',
    'Others': 'https://cdn-icons-png.flaticon.com/128/2521/2521122.png',
    'Gross Margin': 'https://cdn-icons-png.flaticon.com/128/5047/5047713.png',
    'Discount': 'https://cdn-icons-png.flaticon.com/128/726/726476.png',
    'Original Sales Price': 'https://cdn-icons-png.flaticon.com/128/6895/6895168.png',
    'City': 'https://cdn-icons-png.flaticon.com/128/1719/1719666.png',
    'Info': 'https://cdn-icons-png.flaticon.com/128/9723/9723316.png',
};
var tooltipEntryToRow = function (entry, withPercentageBar, max) {
    if (withPercentageBar === void 0) { withPercentageBar = false; }
    if (max === void 0) { max = 100; }
    var rowElement = rowTemplate.content.cloneNode(true);
    var iconEl = rowElement.querySelector('.entry-icon');
    var labelEl = rowElement.querySelector('.entry-label');
    iconEl.setAttribute('src', iconMap[entry.value] || iconMap[entry.title] || iconMap['Info']);
    iconEl.setAttribute('title', entry.title);
    labelEl.textContent = entry.value;
    if (withPercentageBar) {
        var numberRegexp = /[.0-9]+/;
        if (numberRegexp.test(entry.value)) {
            var percentageBar = document.createElement('progress');
            percentageBar.value = Number(/[.0-9]+/.exec(entry.value)[0]);
            percentageBar.max = max;
            var rowLabelDiv = rowElement.querySelector('.tooltip-row-label');
            // (percentageBar as HTMLElement).style['width'] = '100%';
            rowLabelDiv.appendChild(percentageBar);
        }
    }
    return rowElement;
};
var VizTooltip = /** @class */ (function (_super) {
    __extends(VizTooltip, _super);
    function VizTooltip() {
        var _this = _super.call(this) || this;
        _this._max = 100;
        _this._color = 'lightblue';
        _this._shadowRoot = _this.attachShadow({ mode: 'open' });
        _this._shadowRoot.appendChild(containerTemplate.content.cloneNode(true));
        _this._tooltipContainer = _this._shadowRoot.querySelector('.tooltip-container');
        _this._props = {};
        _this.render();
        return _this;
    }
    VizTooltip.prototype.render = function () {
        var _this = this;
        var _a;
        this._tooltipContainer.innerHTML = '';
        if (this._props.header) {
            this._tooltipContainer.appendChild(tooltipEntryToRow(this._props.header, true, this._max));
        }
        if (this._props.details) {
            (_a = this._props.details) === null || _a === void 0 ? void 0 : _a.forEach(function (detailsRow) {
                _this._tooltipContainer.appendChild(tooltipEntryToRow(detailsRow));
            });
        }
        if (this._color) {
            var percentageColorReg = /progress::\-webkit\-progress\-value\s+\{\s+background-color:\s+[#a-z0-9]+\s?;\s+}/;
            var styleElement = this._shadowRoot.querySelector('style');
            var styleContent = styleElement.textContent.replace(percentageColorReg, "progress::-webkit-progress-value { background-color: ".concat(this._color, "; }"));
            styleElement.innerHTML = styleContent;
        }
    };
    VizTooltip.prototype.setExtensionData = function (value) {
        this._props = value;
        this.render();
    };
    Object.defineProperty(VizTooltip.prototype, "max", {
        set: function (value) {
            this._max = value;
            this.render();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VizTooltip.prototype, "color", {
        set: function (value) {
            this._color = value;
            this.render();
        },
        enumerable: false,
        configurable: true
    });
    return VizTooltip;
}(HTMLElement));
customElements.define('az9-tooltip', VizTooltip);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/VizTooltip.ts"](0, __webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXo5LXRvb2x0aXAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsZUFBZSxnQkFBZ0Isc0NBQXNDLGtCQUFrQjtBQUN2Riw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCw2QkFBNkIsOEJBQThCLCtCQUErQiwrQkFBK0IsV0FBVyxnQ0FBZ0MsNEJBQTRCLDRCQUE0Qiw4QkFBOEIsK0JBQStCLHVDQUF1QyxXQUFXLDRCQUE0QixxQ0FBcUMsa0NBQWtDLFdBQVcsOEJBQThCLHFDQUFxQyxrQ0FBa0MsV0FBVyw4QkFBOEIscUNBQXFDLGlDQUFpQyxXQUFXLCtCQUErQixxQ0FBcUMsaUNBQWlDLFdBQVcsNEJBQTRCLHFDQUFxQyxpQ0FBaUMsV0FBVywwQkFBMEIsNEJBQTRCLCtCQUErQixvQ0FBb0Msa0NBQWtDLFdBQVcsZ0NBQWdDLDRCQUE0Qix1Q0FBdUMseUJBQXlCLFdBQVcseUNBQXlDLDBCQUEwQiwwQkFBMEIsK0JBQStCLFdBQVcsK0RBQStELCtCQUErQixxQ0FBcUMsV0FBVyxpRUFBaUUsb0NBQW9DLFdBQVcsNkNBQTZDLCtDQUErQyxXQUFXLHlCQUF5QixvQ0FBb0MsMEJBQTBCLGtDQUFrQyxXQUFXLDBCQUEwQixvQ0FBb0MseUJBQXlCLHFDQUFxQyxXQUFXO0FBQ3Q5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxjQUFjO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSw4RUFBOEUscUNBQXFDLElBQUk7QUFDdkg7QUFDQSx3SEFBd0gsNENBQTRDO0FBQ3BLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7OztVRXZIQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2lkZ2V0LWFkZC1vbi1zYW1wbGVzLy4vc3JjL1ZpelRvb2x0aXAudHMiLCJ3ZWJwYWNrOi8vd2lkZ2V0LWFkZC1vbi1zYW1wbGVzL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2lkZ2V0LWFkZC1vbi1zYW1wbGVzL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly93aWRnZXQtYWRkLW9uLXNhbXBsZXMvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgcm93VGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xyXG5yb3dUZW1wbGF0ZS5pbm5lckhUTUwgPSBcIlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0b29sdGlwLXJvd1xcXCI+XFxuICAgICAgICA8aW1nIGNsYXNzPVxcXCJlbnRyeS1pY29uXFxcIlxcbiAgICAgICAgICAgIHdpZHRoPVxcXCIyMFxcXCJcXG4gICAgICAgICAgICBoZWlnaHQ9XFxcIjIwXFxcIlxcbiAgICAgICAgPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9vbHRpcC1yb3ctbGFiZWxcXFwiPlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJlbnRyeS1sYWJlbFxcXCI+PC9zcGFuPlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcblwiO1xyXG52YXIgY29udGFpbmVyVGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xyXG5jb250YWluZXJUZW1wbGF0ZS5pbm5lckhUTUwgPSBcIlxcbiAgICA8c3R5bGU+XFxuICAgICAgICA6aG9zdCB7XFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgbWluLXdpZHRoOiA4MHB4O1xcbiAgICAgICAgICAgIG1heC13aWR0aDogMjUwcHg7XFxuICAgICAgICAgICAgbWluLWhlaWdodDogMjRweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC50b29sdGlwLWNvbnRhaW5lciB7XFxuICAgICAgICAgICAgcGFkZGluZzogMTJweDtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIG1pbi13aWR0aDogODBweDtcXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAyNHB4O1xcbiAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5wcmljZTo6YmVmb3JlIHtcXG4gICAgICAgICAgICBmb250LWZhbWlseTogU0FQLWljb25zO1xcbiAgICAgICAgICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTAyNlxcXCI7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAubWFuYWdlcjo6YmVmb3JlIHtcXG4gICAgICAgICAgICBmb250LWZhbWlseTogU0FQLWljb25zO1xcbiAgICAgICAgICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTAzNlxcXCI7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAucHJvZHVjdDo6YmVmb3JlIHtcXG4gICAgICAgICAgICBmb250LWZhbWlseTogU0FQLWljb25zO1xcbiAgICAgICAgICAgIGNvbnRlbnQgXFxcIlxcXFxFMTZEXFxcIjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5sb2NhdGlvbjo6YmVmb3JlIHtcXG4gICAgICAgICAgICBmb250LWZhbWlseTogU0FQLWljb25zO1xcbiAgICAgICAgICAgIGNvbnRlbnQgXFxcIlxcXFxFMDIxXFxcIjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5zdG9yZTo6YmVmb3JlIHtcXG4gICAgICAgICAgICBmb250LWZhbWlseTogU0FQLWljb25zO1xcbiAgICAgICAgICAgIGNvbnRlbnQgXFxcIlxcXFxFMDBGXFxcIjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC50b29sdGlwLXJvdyB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAzMHB4O1xcbiAgICAgICAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnRvb2x0aXAtcm93LWxhYmVsIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gICAgICAgICAgICBmbGV4OiBhdXRvO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnRvb2x0aXAtcm93LWxhYmVsIHByb2dyZXNzIHtcXG4gICAgICAgICAgICBoZWlnaHQ6IDZweDtcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnRvb2x0aXAtcm93LWxhYmVsIHByb2dyZXNzOjotd2Via2l0LXByb2dyZXNzLWJhciB7XFxuICAgICAgICAgICAgY29sb3I6IGxpZ2h0Ymx1ZTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnRvb2x0aXAtcm93LWxhYmVsIHByb2dyZXNzOjotd2Via2l0LXByb2dyZXNzLXZhbHVlIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudG9vbHRpcC1yb3c6bm90KDpsYXN0LW9mLXR5cGUpIHtcXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2U2ZTdlODtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5lbnRyeS1pY29uIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XFxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTJweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5lbnRyeS1sYWJlbCB7XFxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgICAgIGZsZXg6IGF1dG87XFxuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgICAgIH1cXG4gICAgPC9zdHlsZT5cXG4gICAgPGRpdiBjbGFzcz1cXFwidG9vbHRpcC1jb250YWluZXJcXFwiPlxcbiAgICA8L2Rpdj5cXG5cXG5cIjtcclxudmFyIGljb25NYXAgPSB7XHJcbiAgICAnTG9jYXRpb24nOiAnaHR0cHM6Ly9jZG4taWNvbnMtcG5nLmZsYXRpY29uLmNvbS8xMjgvNjg0LzY4NDkwOC5wbmcnLFxyXG4gICAgJ1Byb2R1Y3QnOiAnaHR0cHM6Ly9jZG4taWNvbnMtcG5nLmZsYXRpY29uLmNvbS8xMjgvMTMxMi8xMzEyMDkxLnBuZycsXHJcbiAgICAnU2FsZXMgTWFuYWdlcic6ICdodHRwczovL2Nkbi1pY29ucy1wbmcuZmxhdGljb24uY29tLzEyOC80MjA1LzQyMDU5MDYucG5nJyxcclxuICAgICdEYXRlJzogJ2h0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vMTI4LzQyNS80MjU4NjgucG5nJyxcclxuICAgICdTdG9yZSc6ICdodHRwczovL2Nkbi1pY29ucy1wbmcuZmxhdGljb24uY29tLzEyOC85OTc3Lzk5Nzc1ODkucG5nJyxcclxuICAgICdDYXRlZ29yeSc6ICdodHRwczovL2Nkbi1pY29ucy1wbmcuZmxhdGljb24uY29tLzEyOC8xMDAwOC8xMDAwODUxNy5wbmcnLFxyXG4gICAgJ1ByaWNlIChmaXhlZCknOiAnaHR0cHM6Ly9jZG4taWNvbnMtcG5nLmZsYXRpY29uLmNvbS8xMjgvOTE5LzkxOTc5MC5wbmcnLFxyXG4gICAgJ1F1YW50aXR5IFNvbGQnOiAnaHR0cHM6Ly9jZG4taWNvbnMtcG5nLmZsYXRpY29uLmNvbS8xMjgvMzMzOC8zMzM4NjMyLnBuZycsXHJcbiAgICAnQ2FsaWZvcm5pYSc6ICdodHRwczovL2Nkbi1pY29ucy1wbmcuZmxhdGljb24uY29tLzEyOC83OTA2Lzc5MDY0NTUucG5nJyxcclxuICAgICdOZXZhZGEnOiAnaHR0cHM6Ly9jZG4taWNvbnMtcG5nLmZsYXRpY29uLmNvbS8xMjgvNzkwNi83OTA2NjA2LnBuZycsXHJcbiAgICAnT3JlZ29uJzogJ2h0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vMTI4Lzc5MDYvNzkwNjcyOS5wbmcnLFxyXG4gICAgJ0NhcmJvbmF0ZWQgRHJpbmtzJzogJ2h0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vMTI4LzQzMjkvNDMyOTU0Mi5wbmcnLFxyXG4gICAgJ0p1aWNlcyc6ICdodHRwczovL2Nkbi1pY29ucy1wbmcuZmxhdGljb24uY29tLzEyOC8zMTY1LzMxNjU1ODkucG5nJyxcclxuICAgICdBbGNvaG9sJzogJ2h0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vMTI4LzMxNzQvMzE3NDUzNS5wbmcnLFxyXG4gICAgJ090aGVycyc6ICdodHRwczovL2Nkbi1pY29ucy1wbmcuZmxhdGljb24uY29tLzEyOC8yNTIxLzI1MjExMjIucG5nJyxcclxuICAgICdHcm9zcyBNYXJnaW4nOiAnaHR0cHM6Ly9jZG4taWNvbnMtcG5nLmZsYXRpY29uLmNvbS8xMjgvNTA0Ny81MDQ3NzEzLnBuZycsXHJcbiAgICAnRGlzY291bnQnOiAnaHR0cHM6Ly9jZG4taWNvbnMtcG5nLmZsYXRpY29uLmNvbS8xMjgvNzI2LzcyNjQ3Ni5wbmcnLFxyXG4gICAgJ09yaWdpbmFsIFNhbGVzIFByaWNlJzogJ2h0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vMTI4LzY4OTUvNjg5NTE2OC5wbmcnLFxyXG4gICAgJ0NpdHknOiAnaHR0cHM6Ly9jZG4taWNvbnMtcG5nLmZsYXRpY29uLmNvbS8xMjgvMTcxOS8xNzE5NjY2LnBuZycsXHJcbiAgICAnSW5mbyc6ICdodHRwczovL2Nkbi1pY29ucy1wbmcuZmxhdGljb24uY29tLzEyOC85NzIzLzk3MjMzMTYucG5nJyxcclxufTtcclxudmFyIHRvb2x0aXBFbnRyeVRvUm93ID0gZnVuY3Rpb24gKGVudHJ5LCB3aXRoUGVyY2VudGFnZUJhciwgbWF4KSB7XHJcbiAgICBpZiAod2l0aFBlcmNlbnRhZ2VCYXIgPT09IHZvaWQgMCkgeyB3aXRoUGVyY2VudGFnZUJhciA9IGZhbHNlOyB9XHJcbiAgICBpZiAobWF4ID09PSB2b2lkIDApIHsgbWF4ID0gMTAwOyB9XHJcbiAgICB2YXIgcm93RWxlbWVudCA9IHJvd1RlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgdmFyIGljb25FbCA9IHJvd0VsZW1lbnQucXVlcnlTZWxlY3RvcignLmVudHJ5LWljb24nKTtcclxuICAgIHZhciBsYWJlbEVsID0gcm93RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZW50cnktbGFiZWwnKTtcclxuICAgIGljb25FbC5zZXRBdHRyaWJ1dGUoJ3NyYycsIGljb25NYXBbZW50cnkudmFsdWVdIHx8IGljb25NYXBbZW50cnkudGl0bGVdIHx8IGljb25NYXBbJ0luZm8nXSk7XHJcbiAgICBpY29uRWwuc2V0QXR0cmlidXRlKCd0aXRsZScsIGVudHJ5LnRpdGxlKTtcclxuICAgIGxhYmVsRWwudGV4dENvbnRlbnQgPSBlbnRyeS52YWx1ZTtcclxuICAgIGlmICh3aXRoUGVyY2VudGFnZUJhcikge1xyXG4gICAgICAgIHZhciBudW1iZXJSZWdleHAgPSAvWy4wLTldKy87XHJcbiAgICAgICAgaWYgKG51bWJlclJlZ2V4cC50ZXN0KGVudHJ5LnZhbHVlKSkge1xyXG4gICAgICAgICAgICB2YXIgcGVyY2VudGFnZUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Byb2dyZXNzJyk7XHJcbiAgICAgICAgICAgIHBlcmNlbnRhZ2VCYXIudmFsdWUgPSBOdW1iZXIoL1suMC05XSsvLmV4ZWMoZW50cnkudmFsdWUpWzBdKTtcclxuICAgICAgICAgICAgcGVyY2VudGFnZUJhci5tYXggPSBtYXg7XHJcbiAgICAgICAgICAgIHZhciByb3dMYWJlbERpdiA9IHJvd0VsZW1lbnQucXVlcnlTZWxlY3RvcignLnRvb2x0aXAtcm93LWxhYmVsJyk7XHJcbiAgICAgICAgICAgIC8vIChwZXJjZW50YWdlQmFyIGFzIEhUTUxFbGVtZW50KS5zdHlsZVsnd2lkdGgnXSA9ICcxMDAlJztcclxuICAgICAgICAgICAgcm93TGFiZWxEaXYuYXBwZW5kQ2hpbGQocGVyY2VudGFnZUJhcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJvd0VsZW1lbnQ7XHJcbn07XHJcbnZhciBWaXpUb29sdGlwID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFZpelRvb2x0aXAsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBWaXpUb29sdGlwKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuX21heCA9IDEwMDtcclxuICAgICAgICBfdGhpcy5fY29sb3IgPSAnbGlnaHRibHVlJztcclxuICAgICAgICBfdGhpcy5fc2hhZG93Um9vdCA9IF90aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcclxuICAgICAgICBfdGhpcy5fc2hhZG93Um9vdC5hcHBlbmRDaGlsZChjb250YWluZXJUZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKSk7XHJcbiAgICAgICAgX3RoaXMuX3Rvb2x0aXBDb250YWluZXIgPSBfdGhpcy5fc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcudG9vbHRpcC1jb250YWluZXInKTtcclxuICAgICAgICBfdGhpcy5fcHJvcHMgPSB7fTtcclxuICAgICAgICBfdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBWaXpUb29sdGlwLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgdGhpcy5fdG9vbHRpcENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICBpZiAodGhpcy5fcHJvcHMuaGVhZGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Rvb2x0aXBDb250YWluZXIuYXBwZW5kQ2hpbGQodG9vbHRpcEVudHJ5VG9Sb3codGhpcy5fcHJvcHMuaGVhZGVyLCB0cnVlLCB0aGlzLl9tYXgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX3Byb3BzLmRldGFpbHMpIHtcclxuICAgICAgICAgICAgKF9hID0gdGhpcy5fcHJvcHMuZGV0YWlscykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmZvckVhY2goZnVuY3Rpb24gKGRldGFpbHNSb3cpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLl90b29sdGlwQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvb2x0aXBFbnRyeVRvUm93KGRldGFpbHNSb3cpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9jb2xvcikge1xyXG4gICAgICAgICAgICB2YXIgcGVyY2VudGFnZUNvbG9yUmVnID0gL3Byb2dyZXNzOjpcXC13ZWJraXRcXC1wcm9ncmVzc1xcLXZhbHVlXFxzK1xce1xccytiYWNrZ3JvdW5kLWNvbG9yOlxccytbI2EtejAtOV0rXFxzPztcXHMrfS87XHJcbiAgICAgICAgICAgIHZhciBzdHlsZUVsZW1lbnQgPSB0aGlzLl9zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlJyk7XHJcbiAgICAgICAgICAgIHZhciBzdHlsZUNvbnRlbnQgPSBzdHlsZUVsZW1lbnQudGV4dENvbnRlbnQucmVwbGFjZShwZXJjZW50YWdlQ29sb3JSZWcsIFwicHJvZ3Jlc3M6Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWUgeyBiYWNrZ3JvdW5kLWNvbG9yOiBcIi5jb25jYXQodGhpcy5fY29sb3IsIFwiOyB9XCIpKTtcclxuICAgICAgICAgICAgc3R5bGVFbGVtZW50LmlubmVySFRNTCA9IHN0eWxlQ29udGVudDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgVml6VG9vbHRpcC5wcm90b3R5cGUuc2V0RXh0ZW5zaW9uRGF0YSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX3Byb3BzID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVml6VG9vbHRpcC5wcm90b3R5cGUsIFwibWF4XCIsIHtcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9tYXggPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVml6VG9vbHRpcC5wcm90b3R5cGUsIFwiY29sb3JcIiwge1xyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbG9yID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIFZpelRvb2x0aXA7XHJcbn0oSFRNTEVsZW1lbnQpKTtcclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhejktdG9vbHRpcCcsIFZpelRvb2x0aXApO1xyXG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IHt9O1xuX193ZWJwYWNrX21vZHVsZXNfX1tcIi4vc3JjL1ZpelRvb2x0aXAudHNcIl0oMCwgX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=