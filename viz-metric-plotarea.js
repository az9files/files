/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/MetricPlotarea.ts":
/*!*******************************!*\
  !*** ./src/MetricPlotarea.ts ***!
  \*******************************/
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
var MetricOverlayContainerTemplate = document.createElement('template');
MetricOverlayContainerTemplate.innerHTML = "\n    <style>\n        .metric-overlay-container {\n            position: relative;\n            pointer-events: none;\n            overflow: inherit;\n        }\n        .label-container {\n            position: absolute;\n            display: flex;\n            height: 18px;\n            flex-flow: row nowrap;\n            align-items: center;\n            justify-content: flex-start;\n            background-color: transparent;\n        }\n        .label {\n            text-overflow: ellipsis;\n        }\n        .label-icon {\n            padding-left: 4px;\n        }\n        .common-label {\n            position: absolute;\n            display: flex;\n            flex-flow: row nowrap;\n            align-items: center;\n        }\n        .metric-number-row {\n            position: absolute;\n            display: flex;\n            min-height: 30px;\n            flex-flow: row nowrap;\n            align-items: center;\n            justify-content: flex-start;\n            background-color: transparent;\n        }\n\n        .metric-number-label {\n            display: flex;\n            flex-flow: column nowrap;\n            flex: auto;\n        }\n\n        .metric-number-label progress {\n            height: 6px;\n            width: 100%;\n            border-radius: 0;\n        }\n\n        .metric-number-label progress::-webkit-progress-bar {\n            color: lightblue;\n            background-color: #eee;\n        }\n\n        .metric-number-label progress::-webkit-progress-value {\n            background-color: red;\n        }\n\n        .metric-number-label:not(:last-of-type) {\n            border-bottom: solid 1px #e6e7e8;\n        }\n\n        .metric-number {\n            display: inline-block;\n            flex: auto;\n            vertical-align: middle;\n        }\n    </style>\n    <div class=\"metric-overlay-container\"/>\n";
var LabelTemplate = document.createElement('template');
LabelTemplate.innerHTML = "\n    <span class=\"label-container\">\n        <span class=\"label\"></span>\n        <img class=\"label-icon\"\n            width=\"16\"\n            height=\"16\"\n        >\n    </span>\n";
var numberTemplate = document.createElement('template');
numberTemplate.innerHTML = "\n    <div class=\"metric-number-row\">\n        <div class=\"metric-number-label\">\n            <span class=\"metric-number\"></span>\n        </div>\n    </div>\n";
var metricIconMap = {
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
    'Price (fixed)': 'https://cdn-icons-png.flaticon.com/128/919/919790.png',
};
var MetricOverlayComponent = /** @class */ (function (_super) {
    __extends(MetricOverlayComponent, _super);
    function MetricOverlayComponent() {
        var _this = _super.call(this) || this;
        _this._labelColor = 'red';
        _this._numberColor = 'green';
        _this._max = 100;
        _this.shadowRoot = _this.attachShadow({ mode: 'open' });
        var container = MetricOverlayContainerTemplate.content.cloneNode(true);
        _this._containerElement = container.querySelector('.metric-overlay-container');
        _this.shadowRoot.appendChild(container);
        return _this;
    }
    MetricOverlayComponent.prototype.render = function () {
        this._containerElement.innerHTML = '';
        var supportedChartTypes = [
            'metric',
        ];
        if (!supportedChartTypes.includes(this._chartType)) {
            return;
        }
        this.renderMetric();
    };
    MetricOverlayComponent.prototype.renderMetric = function () {
        var _this = this;
        var _a = this._size, chartWidth = _a.width, chartHeight = _a.height;
        this._containerElement.setAttribute('style', "position: relative; pointer-events: none; overflow: inherit; width: ".concat(chartWidth, "px; height: ").concat(chartHeight, "px;"));
        if (this._primaryRows && Array.isArray(this._primaryRows)) {
            this._primaryRows.forEach(function (row) { return _this.renderLabel(row.label); });
            this._primaryRows.forEach(function (row) { return _this.renderNumber(row.number); });
        }
        if (this._secondaryRows && Array.isArray(this._secondaryRows)) {
            this._secondaryRows.forEach(function (row) { return _this.renderLabel(row.label); });
            this._secondaryRows.forEach(function (row) { return _this.renderSecondaryNumber(row.number); });
        }
        if (this._numberColor) {
            var percentageColorReg = /progress::\-webkit\-progress\-value\s+\{\s+background-color:\s+[#a-z0-9]+\s?;\s+}/;
            var styleElement = this.shadowRoot.querySelector('style');
            var styleContent = styleElement.textContent.replace(percentageColorReg, "progress::-webkit-progress-value { background-color: ".concat(this._numberColor, "; }"));
            styleElement.innerHTML = styleContent;
        }
    };
    MetricOverlayComponent.prototype.renderLabel = function (label) {
        if (!label) {
            return;
        }
        var x = label.x, y = label.y, width = label.width, height = label.height, pointValue = label.pointValue, formattedValue = label.formattedValue, fontSize = label.fontSize;
        var labelEl = LabelTemplate.content.cloneNode(true);
        var labelContainer = labelEl.querySelector('.label-container');
        var bgColor = 'transparent';
        labelContainer.setAttribute('style', "background-color: ".concat(bgColor, "; width: 100%; left: ").concat(x, "px; top: ").concat(y, "px; font-size: ").concat(fontSize, ";"));
        this._containerElement.appendChild(labelEl);
        var labelSpan = labelContainer.querySelector('.label');
        var _labelColor = this._labelColor;
        labelSpan.setAttribute('style', "color: ".concat(_labelColor));
        labelSpan.innerHTML = formattedValue;
        var iconImg = labelContainer.querySelector('img');
        iconImg.setAttribute('src', metricIconMap[pointValue] || metricIconMap.City || metricIconMap.Info);
    };
    MetricOverlayComponent.prototype.renderNumber = function (num) {
        if (!num) {
            return;
        }
        var x = num.x, y = num.y, width = num.width, height = num.height, pointValue = num.pointValue, formattedValue = num.formattedValue, fontSize = num.fontSize;
        var numEl = numberTemplate.content.cloneNode(true);
        var numContainer = numEl.querySelector('.metric-number-row');
        var numLabelEl = numEl.querySelector('.metric-number');
        var bgColor = 'transparent';
        numContainer.setAttribute('style', "background-color: ".concat(bgColor, "; width: 100%; left: ").concat(x, "px; top: ").concat(y, "px; font-size: 20px;"));
        numLabelEl.textContent = formattedValue;
        this._containerElement.appendChild(numEl);
        var percentageBar = document.createElement('progress');
        percentageBar.value = pointValue;
        percentageBar.max = this._max * 10000000;
        var rowLabelDiv = numContainer.querySelector('.metric-number-label');
        rowLabelDiv.appendChild(percentageBar);
    };
    MetricOverlayComponent.prototype.renderSecondaryNumber = function (num) {
        if (!num) {
            return;
        }
        var x = num.x, y = num.y, width = num.width, height = num.height, pointValue = num.pointValue, formattedValue = num.formattedValue, fontSize = num.fontSize;
        var numEl = numberTemplate.content.cloneNode(true);
        var numContainer = numEl.querySelector('.metric-number-row');
        var numLabelEl = numEl.querySelector('.metric-number');
        var bgColor = 'transparent';
        numContainer.setAttribute('style', "background-color: ".concat(bgColor, "; width: ").concat(width + 50, "px; left: ").concat(x - 50, "px; top: ").concat(y, "px; font-size: ").concat(fontSize, "; min-height: 16px;"));
        numLabelEl.textContent = formattedValue;
        this._containerElement.appendChild(numEl);
        var percentageBar = document.createElement('progress');
        percentageBar.value = pointValue;
        percentageBar.max = this._max * 10000000;
        percentageBar.setAttribute('style', "width: 50px;");
        var rowLabelDiv = numContainer.querySelector('.metric-number-label');
        rowLabelDiv.appendChild(percentageBar);
        rowLabelDiv.setAttribute('style', "flex-flow: row nowrap; align-items: center;");
    };
    MetricOverlayComponent.prototype.setExtensionData = function (extensionData) {
        var chartSize = extensionData.chartSize, chartType = extensionData.chartType, primaryRows = extensionData.primaryRows, secondaryRows = extensionData.secondaryRows;
        this._size = chartSize;
        this._chartType = chartType;
        this._primaryRows = primaryRows;
        this._secondaryRows = secondaryRows;
        this.render();
    };
    Object.defineProperty(MetricOverlayComponent.prototype, "labelColor", {
        set: function (value) {
            this._labelColor = value;
            this.render();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MetricOverlayComponent.prototype, "numberColor", {
        set: function (value) {
            this._numberColor = value;
            this.render();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MetricOverlayComponent.prototype, "max", {
        set: function (value) {
            this._max = value;
            this.render();
        },
        enumerable: false,
        configurable: true
    });
    return MetricOverlayComponent;
}(HTMLElement));
customElements.define('viz-metric-plotarea', MetricOverlayComponent);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/MetricPlotarea.ts"]();
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidml6LW1ldHJpYy1wbG90YXJlYS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGdCQUFnQixzQ0FBc0Msa0JBQWtCO0FBQ3ZGLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDhGQUE4RixpQ0FBaUMsbUNBQW1DLGdDQUFnQyxXQUFXLDRCQUE0QixpQ0FBaUMsNEJBQTRCLDJCQUEyQixvQ0FBb0Msa0NBQWtDLDBDQUEwQyw0Q0FBNEMsV0FBVyxrQkFBa0Isc0NBQXNDLFdBQVcsdUJBQXVCLGdDQUFnQyxXQUFXLHlCQUF5QixpQ0FBaUMsNEJBQTRCLG9DQUFvQyxrQ0FBa0MsV0FBVyw4QkFBOEIsaUNBQWlDLDRCQUE0QiwrQkFBK0Isb0NBQW9DLGtDQUFrQywwQ0FBMEMsNENBQTRDLFdBQVcsa0NBQWtDLDRCQUE0Qix1Q0FBdUMseUJBQXlCLFdBQVcsMkNBQTJDLDBCQUEwQiwwQkFBMEIsK0JBQStCLFdBQVcsaUVBQWlFLCtCQUErQixxQ0FBcUMsV0FBVyxtRUFBbUUsb0NBQW9DLFdBQVcscURBQXFELCtDQUErQyxXQUFXLDRCQUE0QixvQ0FBb0MseUJBQXlCLHFDQUFxQyxXQUFXO0FBQ2owRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELGNBQWM7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEVBQTBFLHNCQUFzQixtQkFBbUIsaUNBQWlDLG1DQUFtQztBQUN2TDtBQUNBLHVEQUF1RCxzQ0FBc0M7QUFDN0YsdURBQXVELHdDQUF3QztBQUMvRjtBQUNBO0FBQ0EseURBQXlELHNDQUFzQztBQUMvRix5REFBeUQsaURBQWlEO0FBQzFHO0FBQ0E7QUFDQSw4RUFBOEUscUNBQXFDLElBQUk7QUFDdkg7QUFDQSx3SEFBd0gsa0RBQWtEO0FBQzFLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRkFBcUYsYUFBYSx3QkFBd0IsdUJBQXVCLGlDQUFpQztBQUNsTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUZBQW1GLGFBQWEsd0JBQXdCLHVCQUF1QixnQkFBZ0I7QUFDL0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1GQUFtRixrQ0FBa0MsNkJBQTZCLHVCQUF1QixrQ0FBa0MsaUJBQWlCO0FBQzVOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBLGtFQUFrRSxvQkFBb0I7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7O1VFdktBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aWRnZXQtYWRkLW9uLXNhbXBsZXMvLi9zcmMvTWV0cmljUGxvdGFyZWEudHMiLCJ3ZWJwYWNrOi8vd2lkZ2V0LWFkZC1vbi1zYW1wbGVzL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2lkZ2V0LWFkZC1vbi1zYW1wbGVzL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly93aWRnZXQtYWRkLW9uLXNhbXBsZXMvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgTWV0cmljT3ZlcmxheUNvbnRhaW5lclRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbk1ldHJpY092ZXJsYXlDb250YWluZXJUZW1wbGF0ZS5pbm5lckhUTUwgPSBcIlxcbiAgICA8c3R5bGU+XFxuICAgICAgICAubWV0cmljLW92ZXJsYXktY29udGFpbmVyIHtcXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgICAgICAgICAgb3ZlcmZsb3c6IGluaGVyaXQ7XFxuICAgICAgICB9XFxuICAgICAgICAubGFiZWwtY29udGFpbmVyIHtcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBoZWlnaHQ6IDE4cHg7XFxuICAgICAgICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgfVxcbiAgICAgICAgLmxhYmVsIHtcXG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgICAgIH1cXG4gICAgICAgIC5sYWJlbC1pY29uIHtcXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDRweDtcXG4gICAgICAgIH1cXG4gICAgICAgIC5jb21tb24tbGFiZWwge1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgfVxcbiAgICAgICAgLm1ldHJpYy1udW1iZXItcm93IHtcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAzMHB4O1xcbiAgICAgICAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5tZXRyaWMtbnVtYmVyLWxhYmVsIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gICAgICAgICAgICBmbGV4OiBhdXRvO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLm1ldHJpYy1udW1iZXItbGFiZWwgcHJvZ3Jlc3Mge1xcbiAgICAgICAgICAgIGhlaWdodDogNnB4O1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAubWV0cmljLW51bWJlci1sYWJlbCBwcm9ncmVzczo6LXdlYmtpdC1wcm9ncmVzcy1iYXIge1xcbiAgICAgICAgICAgIGNvbG9yOiBsaWdodGJsdWU7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5tZXRyaWMtbnVtYmVyLWxhYmVsIHByb2dyZXNzOjotd2Via2l0LXByb2dyZXNzLXZhbHVlIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAubWV0cmljLW51bWJlci1sYWJlbDpub3QoOmxhc3Qtb2YtdHlwZSkge1xcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZTZlN2U4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLm1ldHJpYy1udW1iZXIge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgICAgICBmbGV4OiBhdXRvO1xcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgICAgICB9XFxuICAgIDwvc3R5bGU+XFxuICAgIDxkaXYgY2xhc3M9XFxcIm1ldHJpYy1vdmVybGF5LWNvbnRhaW5lclxcXCIvPlxcblwiO1xudmFyIExhYmVsVGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuTGFiZWxUZW1wbGF0ZS5pbm5lckhUTUwgPSBcIlxcbiAgICA8c3BhbiBjbGFzcz1cXFwibGFiZWwtY29udGFpbmVyXFxcIj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJsYWJlbFxcXCI+PC9zcGFuPlxcbiAgICAgICAgPGltZyBjbGFzcz1cXFwibGFiZWwtaWNvblxcXCJcXG4gICAgICAgICAgICB3aWR0aD1cXFwiMTZcXFwiXFxuICAgICAgICAgICAgaGVpZ2h0PVxcXCIxNlxcXCJcXG4gICAgICAgID5cXG4gICAgPC9zcGFuPlxcblwiO1xudmFyIG51bWJlclRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbm51bWJlclRlbXBsYXRlLmlubmVySFRNTCA9IFwiXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1ldHJpYy1udW1iZXItcm93XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm1ldHJpYy1udW1iZXItbGFiZWxcXFwiPlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJtZXRyaWMtbnVtYmVyXFxcIj48L3NwYW4+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuXCI7XG52YXIgbWV0cmljSWNvbk1hcCA9IHtcbiAgICAnQ2FsaWZvcm5pYSc6ICdodHRwczovL2Nkbi1pY29ucy1wbmcuZmxhdGljb24uY29tLzEyOC83OTA2Lzc5MDY0NTUucG5nJyxcbiAgICAnTmV2YWRhJzogJ2h0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vMTI4Lzc5MDYvNzkwNjYwNi5wbmcnLFxuICAgICdPcmVnb24nOiAnaHR0cHM6Ly9jZG4taWNvbnMtcG5nLmZsYXRpY29uLmNvbS8xMjgvNzkwNi83OTA2NzI5LnBuZycsXG4gICAgJ0NhcmJvbmF0ZWQgRHJpbmtzJzogJ2h0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vMTI4LzQzMjkvNDMyOTU0Mi5wbmcnLFxuICAgICdKdWljZXMnOiAnaHR0cHM6Ly9jZG4taWNvbnMtcG5nLmZsYXRpY29uLmNvbS8xMjgvMzE2NS8zMTY1NTg5LnBuZycsXG4gICAgJ0FsY29ob2wnOiAnaHR0cHM6Ly9jZG4taWNvbnMtcG5nLmZsYXRpY29uLmNvbS8xMjgvMzE3NC8zMTc0NTM1LnBuZycsXG4gICAgJ090aGVycyc6ICdodHRwczovL2Nkbi1pY29ucy1wbmcuZmxhdGljb24uY29tLzEyOC8yNTIxLzI1MjExMjIucG5nJyxcbiAgICAnR3Jvc3MgTWFyZ2luJzogJ2h0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vMTI4LzUwNDcvNTA0NzcxMy5wbmcnLFxuICAgICdEaXNjb3VudCc6ICdodHRwczovL2Nkbi1pY29ucy1wbmcuZmxhdGljb24uY29tLzEyOC83MjYvNzI2NDc2LnBuZycsXG4gICAgJ09yaWdpbmFsIFNhbGVzIFByaWNlJzogJ2h0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vMTI4LzY4OTUvNjg5NTE2OC5wbmcnLFxuICAgICdDaXR5JzogJ2h0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vMTI4LzE3MTkvMTcxOTY2Ni5wbmcnLFxuICAgICdJbmZvJzogJ2h0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vMTI4Lzk3MjMvOTcyMzMxNi5wbmcnLFxuICAgICdQcmljZSAoZml4ZWQpJzogJ2h0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vMTI4LzkxOS85MTk3OTAucG5nJyxcbn07XG52YXIgTWV0cmljT3ZlcmxheUNvbXBvbmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTWV0cmljT3ZlcmxheUNvbXBvbmVudCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNZXRyaWNPdmVybGF5Q29tcG9uZW50KCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5fbGFiZWxDb2xvciA9ICdyZWQnO1xuICAgICAgICBfdGhpcy5fbnVtYmVyQ29sb3IgPSAnZ3JlZW4nO1xuICAgICAgICBfdGhpcy5fbWF4ID0gMTAwO1xuICAgICAgICBfdGhpcy5zaGFkb3dSb290ID0gX3RoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICAgICAgICB2YXIgY29udGFpbmVyID0gTWV0cmljT3ZlcmxheUNvbnRhaW5lclRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBfdGhpcy5fY29udGFpbmVyRWxlbWVudCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubWV0cmljLW92ZXJsYXktY29udGFpbmVyJyk7XG4gICAgICAgIF90aGlzLnNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBNZXRyaWNPdmVybGF5Q29tcG9uZW50LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHZhciBzdXBwb3J0ZWRDaGFydFR5cGVzID0gW1xuICAgICAgICAgICAgJ21ldHJpYycsXG4gICAgICAgIF07XG4gICAgICAgIGlmICghc3VwcG9ydGVkQ2hhcnRUeXBlcy5pbmNsdWRlcyh0aGlzLl9jaGFydFR5cGUpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW5kZXJNZXRyaWMoKTtcbiAgICB9O1xuICAgIE1ldHJpY092ZXJsYXlDb21wb25lbnQucHJvdG90eXBlLnJlbmRlck1ldHJpYyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIF9hID0gdGhpcy5fc2l6ZSwgY2hhcnRXaWR0aCA9IF9hLndpZHRoLCBjaGFydEhlaWdodCA9IF9hLmhlaWdodDtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgXCJwb3NpdGlvbjogcmVsYXRpdmU7IHBvaW50ZXItZXZlbnRzOiBub25lOyBvdmVyZmxvdzogaW5oZXJpdDsgd2lkdGg6IFwiLmNvbmNhdChjaGFydFdpZHRoLCBcInB4OyBoZWlnaHQ6IFwiKS5jb25jYXQoY2hhcnRIZWlnaHQsIFwicHg7XCIpKTtcbiAgICAgICAgaWYgKHRoaXMuX3ByaW1hcnlSb3dzICYmIEFycmF5LmlzQXJyYXkodGhpcy5fcHJpbWFyeVJvd3MpKSB7XG4gICAgICAgICAgICB0aGlzLl9wcmltYXJ5Um93cy5mb3JFYWNoKGZ1bmN0aW9uIChyb3cpIHsgcmV0dXJuIF90aGlzLnJlbmRlckxhYmVsKHJvdy5sYWJlbCk7IH0pO1xuICAgICAgICAgICAgdGhpcy5fcHJpbWFyeVJvd3MuZm9yRWFjaChmdW5jdGlvbiAocm93KSB7IHJldHVybiBfdGhpcy5yZW5kZXJOdW1iZXIocm93Lm51bWJlcik7IH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9zZWNvbmRhcnlSb3dzICYmIEFycmF5LmlzQXJyYXkodGhpcy5fc2Vjb25kYXJ5Um93cykpIHtcbiAgICAgICAgICAgIHRoaXMuX3NlY29uZGFyeVJvd3MuZm9yRWFjaChmdW5jdGlvbiAocm93KSB7IHJldHVybiBfdGhpcy5yZW5kZXJMYWJlbChyb3cubGFiZWwpOyB9KTtcbiAgICAgICAgICAgIHRoaXMuX3NlY29uZGFyeVJvd3MuZm9yRWFjaChmdW5jdGlvbiAocm93KSB7IHJldHVybiBfdGhpcy5yZW5kZXJTZWNvbmRhcnlOdW1iZXIocm93Lm51bWJlcik7IH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9udW1iZXJDb2xvcikge1xuICAgICAgICAgICAgdmFyIHBlcmNlbnRhZ2VDb2xvclJlZyA9IC9wcm9ncmVzczo6XFwtd2Via2l0XFwtcHJvZ3Jlc3NcXC12YWx1ZVxccytcXHtcXHMrYmFja2dyb3VuZC1jb2xvcjpcXHMrWyNhLXowLTldK1xccz87XFxzK30vO1xuICAgICAgICAgICAgdmFyIHN0eWxlRWxlbWVudCA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCdzdHlsZScpO1xuICAgICAgICAgICAgdmFyIHN0eWxlQ29udGVudCA9IHN0eWxlRWxlbWVudC50ZXh0Q29udGVudC5yZXBsYWNlKHBlcmNlbnRhZ2VDb2xvclJlZywgXCJwcm9ncmVzczo6LXdlYmtpdC1wcm9ncmVzcy12YWx1ZSB7IGJhY2tncm91bmQtY29sb3I6IFwiLmNvbmNhdCh0aGlzLl9udW1iZXJDb2xvciwgXCI7IH1cIikpO1xuICAgICAgICAgICAgc3R5bGVFbGVtZW50LmlubmVySFRNTCA9IHN0eWxlQ29udGVudDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTWV0cmljT3ZlcmxheUNvbXBvbmVudC5wcm90b3R5cGUucmVuZGVyTGFiZWwgPSBmdW5jdGlvbiAobGFiZWwpIHtcbiAgICAgICAgaWYgKCFsYWJlbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciB4ID0gbGFiZWwueCwgeSA9IGxhYmVsLnksIHdpZHRoID0gbGFiZWwud2lkdGgsIGhlaWdodCA9IGxhYmVsLmhlaWdodCwgcG9pbnRWYWx1ZSA9IGxhYmVsLnBvaW50VmFsdWUsIGZvcm1hdHRlZFZhbHVlID0gbGFiZWwuZm9ybWF0dGVkVmFsdWUsIGZvbnRTaXplID0gbGFiZWwuZm9udFNpemU7XG4gICAgICAgIHZhciBsYWJlbEVsID0gTGFiZWxUZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgdmFyIGxhYmVsQ29udGFpbmVyID0gbGFiZWxFbC5xdWVyeVNlbGVjdG9yKCcubGFiZWwtY29udGFpbmVyJyk7XG4gICAgICAgIHZhciBiZ0NvbG9yID0gJ3RyYW5zcGFyZW50JztcbiAgICAgICAgbGFiZWxDb250YWluZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsIFwiYmFja2dyb3VuZC1jb2xvcjogXCIuY29uY2F0KGJnQ29sb3IsIFwiOyB3aWR0aDogMTAwJTsgbGVmdDogXCIpLmNvbmNhdCh4LCBcInB4OyB0b3A6IFwiKS5jb25jYXQoeSwgXCJweDsgZm9udC1zaXplOiBcIikuY29uY2F0KGZvbnRTaXplLCBcIjtcIikpO1xuICAgICAgICB0aGlzLl9jb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKGxhYmVsRWwpO1xuICAgICAgICB2YXIgbGFiZWxTcGFuID0gbGFiZWxDb250YWluZXIucXVlcnlTZWxlY3RvcignLmxhYmVsJyk7XG4gICAgICAgIHZhciBfbGFiZWxDb2xvciA9IHRoaXMuX2xhYmVsQ29sb3I7XG4gICAgICAgIGxhYmVsU3Bhbi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgXCJjb2xvcjogXCIuY29uY2F0KF9sYWJlbENvbG9yKSk7XG4gICAgICAgIGxhYmVsU3Bhbi5pbm5lckhUTUwgPSBmb3JtYXR0ZWRWYWx1ZTtcbiAgICAgICAgdmFyIGljb25JbWcgPSBsYWJlbENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcbiAgICAgICAgaWNvbkltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIG1ldHJpY0ljb25NYXBbcG9pbnRWYWx1ZV0gfHwgbWV0cmljSWNvbk1hcC5DaXR5IHx8IG1ldHJpY0ljb25NYXAuSW5mbyk7XG4gICAgfTtcbiAgICBNZXRyaWNPdmVybGF5Q29tcG9uZW50LnByb3RvdHlwZS5yZW5kZXJOdW1iZXIgPSBmdW5jdGlvbiAobnVtKSB7XG4gICAgICAgIGlmICghbnVtKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHggPSBudW0ueCwgeSA9IG51bS55LCB3aWR0aCA9IG51bS53aWR0aCwgaGVpZ2h0ID0gbnVtLmhlaWdodCwgcG9pbnRWYWx1ZSA9IG51bS5wb2ludFZhbHVlLCBmb3JtYXR0ZWRWYWx1ZSA9IG51bS5mb3JtYXR0ZWRWYWx1ZSwgZm9udFNpemUgPSBudW0uZm9udFNpemU7XG4gICAgICAgIHZhciBudW1FbCA9IG51bWJlclRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICB2YXIgbnVtQ29udGFpbmVyID0gbnVtRWwucXVlcnlTZWxlY3RvcignLm1ldHJpYy1udW1iZXItcm93Jyk7XG4gICAgICAgIHZhciBudW1MYWJlbEVsID0gbnVtRWwucXVlcnlTZWxlY3RvcignLm1ldHJpYy1udW1iZXInKTtcbiAgICAgICAgdmFyIGJnQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xuICAgICAgICBudW1Db250YWluZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsIFwiYmFja2dyb3VuZC1jb2xvcjogXCIuY29uY2F0KGJnQ29sb3IsIFwiOyB3aWR0aDogMTAwJTsgbGVmdDogXCIpLmNvbmNhdCh4LCBcInB4OyB0b3A6IFwiKS5jb25jYXQoeSwgXCJweDsgZm9udC1zaXplOiAyMHB4O1wiKSk7XG4gICAgICAgIG51bUxhYmVsRWwudGV4dENvbnRlbnQgPSBmb3JtYXR0ZWRWYWx1ZTtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChudW1FbCk7XG4gICAgICAgIHZhciBwZXJjZW50YWdlQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncHJvZ3Jlc3MnKTtcbiAgICAgICAgcGVyY2VudGFnZUJhci52YWx1ZSA9IHBvaW50VmFsdWU7XG4gICAgICAgIHBlcmNlbnRhZ2VCYXIubWF4ID0gdGhpcy5fbWF4ICogMTAwMDAwMDA7XG4gICAgICAgIHZhciByb3dMYWJlbERpdiA9IG51bUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubWV0cmljLW51bWJlci1sYWJlbCcpO1xuICAgICAgICByb3dMYWJlbERpdi5hcHBlbmRDaGlsZChwZXJjZW50YWdlQmFyKTtcbiAgICB9O1xuICAgIE1ldHJpY092ZXJsYXlDb21wb25lbnQucHJvdG90eXBlLnJlbmRlclNlY29uZGFyeU51bWJlciA9IGZ1bmN0aW9uIChudW0pIHtcbiAgICAgICAgaWYgKCFudW0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgeCA9IG51bS54LCB5ID0gbnVtLnksIHdpZHRoID0gbnVtLndpZHRoLCBoZWlnaHQgPSBudW0uaGVpZ2h0LCBwb2ludFZhbHVlID0gbnVtLnBvaW50VmFsdWUsIGZvcm1hdHRlZFZhbHVlID0gbnVtLmZvcm1hdHRlZFZhbHVlLCBmb250U2l6ZSA9IG51bS5mb250U2l6ZTtcbiAgICAgICAgdmFyIG51bUVsID0gbnVtYmVyVGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIHZhciBudW1Db250YWluZXIgPSBudW1FbC5xdWVyeVNlbGVjdG9yKCcubWV0cmljLW51bWJlci1yb3cnKTtcbiAgICAgICAgdmFyIG51bUxhYmVsRWwgPSBudW1FbC5xdWVyeVNlbGVjdG9yKCcubWV0cmljLW51bWJlcicpO1xuICAgICAgICB2YXIgYmdDb2xvciA9ICd0cmFuc3BhcmVudCc7XG4gICAgICAgIG51bUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgXCJiYWNrZ3JvdW5kLWNvbG9yOiBcIi5jb25jYXQoYmdDb2xvciwgXCI7IHdpZHRoOiBcIikuY29uY2F0KHdpZHRoICsgNTAsIFwicHg7IGxlZnQ6IFwiKS5jb25jYXQoeCAtIDUwLCBcInB4OyB0b3A6IFwiKS5jb25jYXQoeSwgXCJweDsgZm9udC1zaXplOiBcIikuY29uY2F0KGZvbnRTaXplLCBcIjsgbWluLWhlaWdodDogMTZweDtcIikpO1xuICAgICAgICBudW1MYWJlbEVsLnRleHRDb250ZW50ID0gZm9ybWF0dGVkVmFsdWU7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQobnVtRWwpO1xuICAgICAgICB2YXIgcGVyY2VudGFnZUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Byb2dyZXNzJyk7XG4gICAgICAgIHBlcmNlbnRhZ2VCYXIudmFsdWUgPSBwb2ludFZhbHVlO1xuICAgICAgICBwZXJjZW50YWdlQmFyLm1heCA9IHRoaXMuX21heCAqIDEwMDAwMDAwO1xuICAgICAgICBwZXJjZW50YWdlQmFyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBcIndpZHRoOiA1MHB4O1wiKTtcbiAgICAgICAgdmFyIHJvd0xhYmVsRGl2ID0gbnVtQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5tZXRyaWMtbnVtYmVyLWxhYmVsJyk7XG4gICAgICAgIHJvd0xhYmVsRGl2LmFwcGVuZENoaWxkKHBlcmNlbnRhZ2VCYXIpO1xuICAgICAgICByb3dMYWJlbERpdi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgXCJmbGV4LWZsb3c6IHJvdyBub3dyYXA7IGFsaWduLWl0ZW1zOiBjZW50ZXI7XCIpO1xuICAgIH07XG4gICAgTWV0cmljT3ZlcmxheUNvbXBvbmVudC5wcm90b3R5cGUuc2V0RXh0ZW5zaW9uRGF0YSA9IGZ1bmN0aW9uIChleHRlbnNpb25EYXRhKSB7XG4gICAgICAgIHZhciBjaGFydFNpemUgPSBleHRlbnNpb25EYXRhLmNoYXJ0U2l6ZSwgY2hhcnRUeXBlID0gZXh0ZW5zaW9uRGF0YS5jaGFydFR5cGUsIHByaW1hcnlSb3dzID0gZXh0ZW5zaW9uRGF0YS5wcmltYXJ5Um93cywgc2Vjb25kYXJ5Um93cyA9IGV4dGVuc2lvbkRhdGEuc2Vjb25kYXJ5Um93cztcbiAgICAgICAgdGhpcy5fc2l6ZSA9IGNoYXJ0U2l6ZTtcbiAgICAgICAgdGhpcy5fY2hhcnRUeXBlID0gY2hhcnRUeXBlO1xuICAgICAgICB0aGlzLl9wcmltYXJ5Um93cyA9IHByaW1hcnlSb3dzO1xuICAgICAgICB0aGlzLl9zZWNvbmRhcnlSb3dzID0gc2Vjb25kYXJ5Um93cztcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNZXRyaWNPdmVybGF5Q29tcG9uZW50LnByb3RvdHlwZSwgXCJsYWJlbENvbG9yXCIsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2xhYmVsQ29sb3IgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTWV0cmljT3ZlcmxheUNvbXBvbmVudC5wcm90b3R5cGUsIFwibnVtYmVyQ29sb3JcIiwge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fbnVtYmVyQ29sb3IgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTWV0cmljT3ZlcmxheUNvbXBvbmVudC5wcm90b3R5cGUsIFwibWF4XCIsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX21heCA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBNZXRyaWNPdmVybGF5Q29tcG9uZW50O1xufShIVE1MRWxlbWVudCkpO1xuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCd2aXotbWV0cmljLXBsb3RhcmVhJywgTWV0cmljT3ZlcmxheUNvbXBvbmVudCk7XG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IHt9O1xuX193ZWJwYWNrX21vZHVsZXNfX1tcIi4vc3JjL01ldHJpY1Bsb3RhcmVhLnRzXCJdKCk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=