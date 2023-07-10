/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/PlotareaOverlay.ts":
/*!********************************!*\
  !*** ./src/PlotareaOverlay.ts ***!
  \********************************/
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
var OverlayContainerTemplate = document.createElement('template');
OverlayContainerTemplate.innerHTML = "\n    <style>\n        .chart-overlay-container {\n            position: relative;\n            pointer-events: none;\n            overflow: hidden;\n        }\n        .series-bar-column-container {\n            background-color: transparent;\n        }\n        .series-bar-column {\n            width: 100%;\n            height: 100%;\n        }\n        .axis-label-container {\n            position: absolute;\n            display: flex;\n            height: 18px;\n            flex-flow: row nowrap;\n            align-items: center;\n            justify-content: flex-end;\n            background-color: transparent;\n        }\n        .axis-label {\n            text-overflow: ellipsis;\n        }\n        .axis-label-icon {\n            padding-left: 4px;\n        }\n        .common-label {\n            position: absolute;\n            display: flex;\n            flex-flow: row nowrap;\n            align-items: center;\n        }\n    </style>\n    <div class=\"chart-overlay-container\"/>\n";
var BarColumnTemplate = document.createElement('template');
BarColumnTemplate.innerHTML = "<div class=\"series-bar-column-container\">\n</div>";
var AxisLabelTemplate = document.createElement('template');
AxisLabelTemplate.innerHTML = "\n    <span class=\"axis-label-container\">\n        <span class=\"axis-label\"></span>\n        <img class=\"axis-label-icon\"\n            width=\"16\"\n            height=\"16\"\n        >\n    </span>\n";
var iconMap = {
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
// For PoC
var ChartOverlayComponent = /** @class */ (function (_super) {
    __extends(ChartOverlayComponent, _super);
    function ChartOverlayComponent() {
        var _this = _super.call(this) || this;
        _this._rounded = true;
        _this._sizeIncrement = 0;
        _this._axisLabelColor = '#333';
        _this.shadowRoot = _this.attachShadow({ mode: 'open' });
        var container = OverlayContainerTemplate.content.cloneNode(true);
        _this._containerElement = container.querySelector('.chart-overlay-container');
        _this.shadowRoot.appendChild(container);
        return _this;
    }
    ChartOverlayComponent.prototype.render = function () {
        var _this = this;
        this._containerElement.innerHTML = '';
        var supportedChartTypes = [
            'barcolumn',
            'stackedbar',
            'line',
            'area',
        ];
        if (!supportedChartTypes.includes(this._chartType)) {
            return;
        }
        var _a = this._size, chartWidth = _a.width, chartHeight = _a.height;
        var _b = this._clipPath, clipPathY = _b.y, clipPathHeight = _b.height;
        this._containerElement.setAttribute('style', "position: relative; pointer-events: none; overflow: hidden; width: ".concat(chartWidth, "px; height: ").concat(chartHeight, "px; clip-path: inset(").concat(clipPathY, "px 0 ").concat(chartHeight - clipPathY - clipPathHeight, "px 0);"));
        this._series.forEach(function (singleSeries, index) {
            var options = {
                color: singleSeries.color,
                isLast: index === 0,
            };
            _this.renderASeries(singleSeries, options);
        });
        this.renderAxisLabels(this._xAxisLabels);
        this.renderAxisLabels(this._yAxisLabels);
        this.renderAxisStackLabels(this._xAxisStackLabels);
        this.renderAxisStackLabels(this._yAxisStackLabels);
    };
    ChartOverlayComponent.prototype.renderASeries = function (singleSeries, options) {
        var _this = this;
        singleSeries.dataPoints.forEach(function (dataPoint) {
            var dataInfo = dataPoint.dataInfo, labelInfo = dataPoint.labelInfo;
            _this.renderData(dataInfo, options);
            _this.renderLabel(labelInfo, options);
        });
    };
    ChartOverlayComponent.prototype.renderData = function (dataInfo, options) {
        if (!dataInfo) {
            return;
        }
        var x = dataInfo.x, y = dataInfo.y, width = dataInfo.width, height = dataInfo.height;
        var dataElement = BarColumnTemplate.content.cloneNode(true);
        var barColumnContainer = dataElement.querySelector('.series-bar-column-container');
        var increment = this._sizeIncrement / 100;
        var roundedStyle = '';
        switch (this._chartType) {
            case 'barcolumn':
            case 'stackedbar':
                if (this._isHorizontal) {
                    height = height * (1 + increment);
                    y = y - height * increment / 2;
                    if (this._chartType === 'stackedbar' && !options.isLast) {
                        break;
                    }
                    roundedStyle = "border-radius: 0 ".concat(height / 2, "px ").concat(height / 2, "px 0;");
                }
                else {
                    width = width * (1 + increment);
                    x = x - width * increment / 2;
                    if (this._chartType === 'stackedbar' && !options.isLast) {
                        break;
                    }
                    roundedStyle = "border-radius: ".concat(width / 2, "px ").concat(width / 2, "px 0 0;");
                }
                break;
            case 'line':
            case 'area':
                width = width * (1 + increment);
                height = height * (1 + increment);
                x = x - width * increment / 2;
                y = y - height * increment / 2;
                roundedStyle = "border-radius: ".concat(height / 2, "px;");
                break;
        }
        var color = dataInfo.color || options.color;
        var barStyle = this._rounded ?
            "background-color: ".concat(color, "; ").concat(roundedStyle) :
            "background-color: ".concat(color, ";");
        barColumnContainer.setAttribute('style', "".concat(barStyle, " position: absolute; top: ").concat(y, "px; left: ").concat(x, "px; width: ").concat(width, "px; height: ").concat(height, "px;").concat(dataInfo.opacity !== undefined ? "opacity: ".concat(dataInfo.opacity, ";") : ''));
        this._containerElement.appendChild(dataElement);
    };
    ChartOverlayComponent.prototype.renderLabel = function (labelInfo, options) {
        var _this = this;
        if (!labelInfo) {
            return;
        }
        if (Array.isArray(labelInfo)) {
            labelInfo.forEach(function (label) {
                _this.renderLabel(label, options);
            });
            return;
        }
        var x = labelInfo.x, y = labelInfo.y, width = labelInfo.width, height = labelInfo.height, varianceLabelType = labelInfo.varianceLabelType, color = labelInfo.color, fontSize = labelInfo.fontSize;
        var labelSpan = document.createElement('span');
        var bgColor = 'transparent';
        var labelColor = this._chartType.startsWith('stacked') ? '#666' : options.color;
        if (varianceLabelType !== undefined) {
            labelColor = color;
        }
        labelSpan.classList.add('common-label');
        labelSpan.setAttribute('style', "background-color: ".concat(bgColor, "; position: absolute; top: ").concat(y, "px; left: ").concat(x, "px; width: ").concat(width, "px; height: ").concat(height, "px; color: ").concat(labelColor, "; font-size: ").concat(fontSize, ";"));
        labelSpan.innerHTML = labelInfo.formattedValue;
        this._containerElement.appendChild(labelSpan);
    };
    ChartOverlayComponent.prototype._renderAxisLabel = function (label) {
        if (!label) {
            return;
        }
        var x = label.x, y = label.y, width = label.width, height = label.height, pointValue = label.pointValue, formattedValue = label.formattedValue, fontSize = label.fontSize;
        var labelEl = AxisLabelTemplate.content.cloneNode(true);
        var labelContainer = labelEl.querySelector('.axis-label-container');
        var bgColor = 'transparent';
        labelContainer.setAttribute('style', "background-color: ".concat(bgColor, "; width: ").concat(width + 36, "px; left: ").concat(x - 30, "px; top: ").concat(y - 2, "px; font-size: ").concat(fontSize, ";"));
        this._containerElement.appendChild(labelEl);
        var labelSpan = labelContainer.querySelector('.axis-label');
        var _axisLabelColor = this._axisLabelColor;
        labelSpan.setAttribute('style', "color: ".concat(_axisLabelColor));
        labelSpan.innerHTML = formattedValue;
        var iconImg = labelContainer.querySelector('img');
        iconImg.setAttribute('src', iconMap[pointValue] || iconMap.City || iconMap.Info);
    };
    ;
    ChartOverlayComponent.prototype.renderAxisLabels = function (axisLabels) {
        var _this = this;
        if (axisLabels && !Array.isArray(axisLabels)) {
            this._renderAxisLabel(axisLabels);
        }
        else {
            axisLabels.forEach(function (labels) { return _this.renderAxisLabels(labels); });
        }
    };
    ChartOverlayComponent.prototype.renderAxisStackLabel = function (stackLabelInfo) {
        if (!stackLabelInfo) {
            return;
        }
        var stackLabelSpan = document.createElement('span');
        stackLabelSpan.classList.add('common-label');
        var axisLabelColor = this._axisLabelColor;
        var bgColor = 'transparent';
        var x = stackLabelInfo.x, y = stackLabelInfo.y, width = stackLabelInfo.width, height = stackLabelInfo.height, formattedValue = stackLabelInfo.formattedValue, fontSize = stackLabelInfo.fontSize;
        stackLabelSpan.setAttribute('style', "background-color: ".concat(bgColor, "; color: ").concat(axisLabelColor, "; top: ").concat(y, "px; left: ").concat(x, "px; width: ").concat(width, "px; height: ").concat(height, "px; font-size: ").concat(fontSize, ";"));
        stackLabelSpan.textContent = formattedValue;
        this._containerElement.appendChild(stackLabelSpan);
    };
    ChartOverlayComponent.prototype.renderAxisStackLabels = function (axisStackLabels) {
        var _this = this;
        if (!axisStackLabels) {
            return;
        }
        if (axisStackLabels && !Array.isArray(axisStackLabels)) {
            this.renderAxisStackLabel(axisStackLabels);
        }
        else {
            axisStackLabels.forEach(function (stackLabels) {
                _this.renderAxisStackLabels(stackLabels);
            });
        }
    };
    ChartOverlayComponent.prototype.setExtensionData = function (extensionData) {
        var chartType = extensionData.chartType, isHorizontal = extensionData.isHorizontal, chartSize = extensionData.chartSize, clipPath = extensionData.clipPath, series = extensionData.series, xAxisLabels = extensionData.xAxisLabels, xAxisStackLabels = extensionData.xAxisStackLabels, yAxisLabels = extensionData.yAxisLabels, yAxisStackLabels = extensionData.yAxisStackLabels;
        this._size = chartSize;
        this._clipPath = clipPath;
        this._series = series;
        this._xAxisLabels = xAxisLabels;
        this._yAxisLabels = yAxisLabels;
        this._xAxisStackLabels = xAxisStackLabels;
        this._yAxisStackLabels = yAxisStackLabels;
        this._chartType = chartType;
        this._isHorizontal = isHorizontal;
        this.render();
    };
    Object.defineProperty(ChartOverlayComponent.prototype, "rounded", {
        set: function (value) {
            this._rounded = value;
            this.render();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChartOverlayComponent.prototype, "sizeIncrement", {
        set: function (value) {
            this._sizeIncrement = value;
            this.render();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChartOverlayComponent.prototype, "axisLabelColor", {
        set: function (value) {
            this._axisLabelColor = value;
            this.render();
        },
        enumerable: false,
        configurable: true
    });
    return ChartOverlayComponent;
}(HTMLElement));
customElements.define('az9-overlay', ChartOverlayComponent);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/PlotareaOverlay.ts"]();
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7O1VFclBBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aWRnZXQtYWRkLW9uLXNhbXBsZXMvLi9zcmMvUGxvdGFyZWFPdmVybGF5LnRzIiwid2VicGFjazovL3dpZGdldC1hZGQtb24tc2FtcGxlcy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3dpZGdldC1hZGQtb24tc2FtcGxlcy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2lkZ2V0LWFkZC1vbi1zYW1wbGVzL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxudmFyIE92ZXJsYXlDb250YWluZXJUZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XHJcbk92ZXJsYXlDb250YWluZXJUZW1wbGF0ZS5pbm5lckhUTUwgPSBcIlxcbiAgICA8c3R5bGU+XFxuICAgICAgICAuY2hhcnQtb3ZlcmxheS1jb250YWluZXIge1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgfVxcbiAgICAgICAgLnNlcmllcy1iYXItY29sdW1uLWNvbnRhaW5lciB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICB9XFxuICAgICAgICAuc2VyaWVzLWJhci1jb2x1bW4ge1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIH1cXG4gICAgICAgIC5heGlzLWxhYmVsLWNvbnRhaW5lciB7XFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgaGVpZ2h0OiAxOHB4O1xcbiAgICAgICAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICB9XFxuICAgICAgICAuYXhpcy1sYWJlbCB7XFxuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgICAgICB9XFxuICAgICAgICAuYXhpcy1sYWJlbC1pY29uIHtcXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDRweDtcXG4gICAgICAgIH1cXG4gICAgICAgIC5jb21tb24tbGFiZWwge1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgfVxcbiAgICA8L3N0eWxlPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjaGFydC1vdmVybGF5LWNvbnRhaW5lclxcXCIvPlxcblwiO1xyXG52YXIgQmFyQ29sdW1uVGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xyXG5CYXJDb2x1bW5UZW1wbGF0ZS5pbm5lckhUTUwgPSBcIjxkaXYgY2xhc3M9XFxcInNlcmllcy1iYXItY29sdW1uLWNvbnRhaW5lclxcXCI+XFxuPC9kaXY+XCI7XHJcbnZhciBBeGlzTGFiZWxUZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XHJcbkF4aXNMYWJlbFRlbXBsYXRlLmlubmVySFRNTCA9IFwiXFxuICAgIDxzcGFuIGNsYXNzPVxcXCJheGlzLWxhYmVsLWNvbnRhaW5lclxcXCI+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiYXhpcy1sYWJlbFxcXCI+PC9zcGFuPlxcbiAgICAgICAgPGltZyBjbGFzcz1cXFwiYXhpcy1sYWJlbC1pY29uXFxcIlxcbiAgICAgICAgICAgIHdpZHRoPVxcXCIxNlxcXCJcXG4gICAgICAgICAgICBoZWlnaHQ9XFxcIjE2XFxcIlxcbiAgICAgICAgPlxcbiAgICA8L3NwYW4+XFxuXCI7XHJcbnZhciBpY29uTWFwID0ge1xyXG4gICAgJ0NhbGlmb3JuaWEnOiAnaHR0cHM6Ly9jZG4taWNvbnMtcG5nLmZsYXRpY29uLmNvbS8xMjgvNzkwNi83OTA2NDU1LnBuZycsXHJcbiAgICAnTmV2YWRhJzogJ2h0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vMTI4Lzc5MDYvNzkwNjYwNi5wbmcnLFxyXG4gICAgJ09yZWdvbic6ICdodHRwczovL2Nkbi1pY29ucy1wbmcuZmxhdGljb24uY29tLzEyOC83OTA2Lzc5MDY3MjkucG5nJyxcclxuICAgICdDYXJib25hdGVkIERyaW5rcyc6ICdodHRwczovL2Nkbi1pY29ucy1wbmcuZmxhdGljb24uY29tLzEyOC80MzI5LzQzMjk1NDIucG5nJyxcclxuICAgICdKdWljZXMnOiAnaHR0cHM6Ly9jZG4taWNvbnMtcG5nLmZsYXRpY29uLmNvbS8xMjgvMzE2NS8zMTY1NTg5LnBuZycsXHJcbiAgICAnQWxjb2hvbCc6ICdodHRwczovL2Nkbi1pY29ucy1wbmcuZmxhdGljb24uY29tLzEyOC8zMTc0LzMxNzQ1MzUucG5nJyxcclxuICAgICdPdGhlcnMnOiAnaHR0cHM6Ly9jZG4taWNvbnMtcG5nLmZsYXRpY29uLmNvbS8xMjgvMjUyMS8yNTIxMTIyLnBuZycsXHJcbiAgICAnR3Jvc3MgTWFyZ2luJzogJ2h0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vMTI4LzUwNDcvNTA0NzcxMy5wbmcnLFxyXG4gICAgJ0Rpc2NvdW50JzogJ2h0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vMTI4LzcyNi83MjY0NzYucG5nJyxcclxuICAgICdPcmlnaW5hbCBTYWxlcyBQcmljZSc6ICdodHRwczovL2Nkbi1pY29ucy1wbmcuZmxhdGljb24uY29tLzEyOC82ODk1LzY4OTUxNjgucG5nJyxcclxuICAgICdDaXR5JzogJ2h0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vMTI4LzE3MTkvMTcxOTY2Ni5wbmcnLFxyXG4gICAgJ0luZm8nOiAnaHR0cHM6Ly9jZG4taWNvbnMtcG5nLmZsYXRpY29uLmNvbS8xMjgvOTcyMy85NzIzMzE2LnBuZycsXHJcbn07XHJcbi8vIEZvciBQb0NcclxudmFyIENoYXJ0T3ZlcmxheUNvbXBvbmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhDaGFydE92ZXJsYXlDb21wb25lbnQsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBDaGFydE92ZXJsYXlDb21wb25lbnQoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5fcm91bmRlZCA9IHRydWU7XHJcbiAgICAgICAgX3RoaXMuX3NpemVJbmNyZW1lbnQgPSAwO1xyXG4gICAgICAgIF90aGlzLl9heGlzTGFiZWxDb2xvciA9ICcjMzMzJztcclxuICAgICAgICBfdGhpcy5zaGFkb3dSb290ID0gX3RoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xyXG4gICAgICAgIHZhciBjb250YWluZXIgPSBPdmVybGF5Q29udGFpbmVyVGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgICAgX3RoaXMuX2NvbnRhaW5lckVsZW1lbnQgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmNoYXJ0LW92ZXJsYXktY29udGFpbmVyJyk7XHJcbiAgICAgICAgX3RoaXMuc2hhZG93Um9vdC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIENoYXJ0T3ZlcmxheUNvbXBvbmVudC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5fY29udGFpbmVyRWxlbWVudC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICB2YXIgc3VwcG9ydGVkQ2hhcnRUeXBlcyA9IFtcclxuICAgICAgICAgICAgJ2JhcmNvbHVtbicsXHJcbiAgICAgICAgICAgICdzdGFja2VkYmFyJyxcclxuICAgICAgICAgICAgJ2xpbmUnLFxyXG4gICAgICAgICAgICAnYXJlYScsXHJcbiAgICAgICAgXTtcclxuICAgICAgICBpZiAoIXN1cHBvcnRlZENoYXJ0VHlwZXMuaW5jbHVkZXModGhpcy5fY2hhcnRUeXBlKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBfYSA9IHRoaXMuX3NpemUsIGNoYXJ0V2lkdGggPSBfYS53aWR0aCwgY2hhcnRIZWlnaHQgPSBfYS5oZWlnaHQ7XHJcbiAgICAgICAgdmFyIF9iID0gdGhpcy5fY2xpcFBhdGgsIGNsaXBQYXRoWSA9IF9iLnksIGNsaXBQYXRoSGVpZ2h0ID0gX2IuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQuc2V0QXR0cmlidXRlKCdzdHlsZScsIFwicG9zaXRpb246IHJlbGF0aXZlOyBwb2ludGVyLWV2ZW50czogbm9uZTsgb3ZlcmZsb3c6IGhpZGRlbjsgd2lkdGg6IFwiLmNvbmNhdChjaGFydFdpZHRoLCBcInB4OyBoZWlnaHQ6IFwiKS5jb25jYXQoY2hhcnRIZWlnaHQsIFwicHg7IGNsaXAtcGF0aDogaW5zZXQoXCIpLmNvbmNhdChjbGlwUGF0aFksIFwicHggMCBcIikuY29uY2F0KGNoYXJ0SGVpZ2h0IC0gY2xpcFBhdGhZIC0gY2xpcFBhdGhIZWlnaHQsIFwicHggMCk7XCIpKTtcclxuICAgICAgICB0aGlzLl9zZXJpZXMuZm9yRWFjaChmdW5jdGlvbiAoc2luZ2xlU2VyaWVzLCBpbmRleCkge1xyXG4gICAgICAgICAgICB2YXIgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBzaW5nbGVTZXJpZXMuY29sb3IsXHJcbiAgICAgICAgICAgICAgICBpc0xhc3Q6IGluZGV4ID09PSAwLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBfdGhpcy5yZW5kZXJBU2VyaWVzKHNpbmdsZVNlcmllcywgb3B0aW9ucyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJBeGlzTGFiZWxzKHRoaXMuX3hBeGlzTGFiZWxzKTtcclxuICAgICAgICB0aGlzLnJlbmRlckF4aXNMYWJlbHModGhpcy5feUF4aXNMYWJlbHMpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyQXhpc1N0YWNrTGFiZWxzKHRoaXMuX3hBeGlzU3RhY2tMYWJlbHMpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyQXhpc1N0YWNrTGFiZWxzKHRoaXMuX3lBeGlzU3RhY2tMYWJlbHMpO1xyXG4gICAgfTtcclxuICAgIENoYXJ0T3ZlcmxheUNvbXBvbmVudC5wcm90b3R5cGUucmVuZGVyQVNlcmllcyA9IGZ1bmN0aW9uIChzaW5nbGVTZXJpZXMsIG9wdGlvbnMpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHNpbmdsZVNlcmllcy5kYXRhUG9pbnRzLmZvckVhY2goZnVuY3Rpb24gKGRhdGFQb2ludCkge1xyXG4gICAgICAgICAgICB2YXIgZGF0YUluZm8gPSBkYXRhUG9pbnQuZGF0YUluZm8sIGxhYmVsSW5mbyA9IGRhdGFQb2ludC5sYWJlbEluZm87XHJcbiAgICAgICAgICAgIF90aGlzLnJlbmRlckRhdGEoZGF0YUluZm8sIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICBfdGhpcy5yZW5kZXJMYWJlbChsYWJlbEluZm8sIG9wdGlvbnMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIENoYXJ0T3ZlcmxheUNvbXBvbmVudC5wcm90b3R5cGUucmVuZGVyRGF0YSA9IGZ1bmN0aW9uIChkYXRhSW5mbywgb3B0aW9ucykge1xyXG4gICAgICAgIGlmICghZGF0YUluZm8pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgeCA9IGRhdGFJbmZvLngsIHkgPSBkYXRhSW5mby55LCB3aWR0aCA9IGRhdGFJbmZvLndpZHRoLCBoZWlnaHQgPSBkYXRhSW5mby5oZWlnaHQ7XHJcbiAgICAgICAgdmFyIGRhdGFFbGVtZW50ID0gQmFyQ29sdW1uVGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgICAgdmFyIGJhckNvbHVtbkNvbnRhaW5lciA9IGRhdGFFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXJpZXMtYmFyLWNvbHVtbi1jb250YWluZXInKTtcclxuICAgICAgICB2YXIgaW5jcmVtZW50ID0gdGhpcy5fc2l6ZUluY3JlbWVudCAvIDEwMDtcclxuICAgICAgICB2YXIgcm91bmRlZFN0eWxlID0gJyc7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLl9jaGFydFR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAnYmFyY29sdW1uJzpcclxuICAgICAgICAgICAgY2FzZSAnc3RhY2tlZGJhcic6XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5faXNIb3Jpem9udGFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ID0gaGVpZ2h0ICogKDEgKyBpbmNyZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHkgPSB5IC0gaGVpZ2h0ICogaW5jcmVtZW50IC8gMjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fY2hhcnRUeXBlID09PSAnc3RhY2tlZGJhcicgJiYgIW9wdGlvbnMuaXNMYXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByb3VuZGVkU3R5bGUgPSBcImJvcmRlci1yYWRpdXM6IDAgXCIuY29uY2F0KGhlaWdodCAvIDIsIFwicHggXCIpLmNvbmNhdChoZWlnaHQgLyAyLCBcInB4IDA7XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGggPSB3aWR0aCAqICgxICsgaW5jcmVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB4ID0geCAtIHdpZHRoICogaW5jcmVtZW50IC8gMjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fY2hhcnRUeXBlID09PSAnc3RhY2tlZGJhcicgJiYgIW9wdGlvbnMuaXNMYXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByb3VuZGVkU3R5bGUgPSBcImJvcmRlci1yYWRpdXM6IFwiLmNvbmNhdCh3aWR0aCAvIDIsIFwicHggXCIpLmNvbmNhdCh3aWR0aCAvIDIsIFwicHggMCAwO1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdsaW5lJzpcclxuICAgICAgICAgICAgY2FzZSAnYXJlYSc6XHJcbiAgICAgICAgICAgICAgICB3aWR0aCA9IHdpZHRoICogKDEgKyBpbmNyZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0ID0gaGVpZ2h0ICogKDEgKyBpbmNyZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgeCA9IHggLSB3aWR0aCAqIGluY3JlbWVudCAvIDI7XHJcbiAgICAgICAgICAgICAgICB5ID0geSAtIGhlaWdodCAqIGluY3JlbWVudCAvIDI7XHJcbiAgICAgICAgICAgICAgICByb3VuZGVkU3R5bGUgPSBcImJvcmRlci1yYWRpdXM6IFwiLmNvbmNhdChoZWlnaHQgLyAyLCBcInB4O1wiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgY29sb3IgPSBkYXRhSW5mby5jb2xvciB8fCBvcHRpb25zLmNvbG9yO1xyXG4gICAgICAgIHZhciBiYXJTdHlsZSA9IHRoaXMuX3JvdW5kZWQgP1xyXG4gICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3I6IFwiLmNvbmNhdChjb2xvciwgXCI7IFwiKS5jb25jYXQocm91bmRlZFN0eWxlKSA6XHJcbiAgICAgICAgICAgIFwiYmFja2dyb3VuZC1jb2xvcjogXCIuY29uY2F0KGNvbG9yLCBcIjtcIik7XHJcbiAgICAgICAgYmFyQ29sdW1uQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBcIlwiLmNvbmNhdChiYXJTdHlsZSwgXCIgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IFwiKS5jb25jYXQoeSwgXCJweDsgbGVmdDogXCIpLmNvbmNhdCh4LCBcInB4OyB3aWR0aDogXCIpLmNvbmNhdCh3aWR0aCwgXCJweDsgaGVpZ2h0OiBcIikuY29uY2F0KGhlaWdodCwgXCJweDtcIikuY29uY2F0KGRhdGFJbmZvLm9wYWNpdHkgIT09IHVuZGVmaW5lZCA/IFwib3BhY2l0eTogXCIuY29uY2F0KGRhdGFJbmZvLm9wYWNpdHksIFwiO1wiKSA6ICcnKSk7XHJcbiAgICAgICAgdGhpcy5fY29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChkYXRhRWxlbWVudCk7XHJcbiAgICB9O1xyXG4gICAgQ2hhcnRPdmVybGF5Q29tcG9uZW50LnByb3RvdHlwZS5yZW5kZXJMYWJlbCA9IGZ1bmN0aW9uIChsYWJlbEluZm8sIG9wdGlvbnMpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGlmICghbGFiZWxJbmZvKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobGFiZWxJbmZvKSkge1xyXG4gICAgICAgICAgICBsYWJlbEluZm8uZm9yRWFjaChmdW5jdGlvbiAobGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLnJlbmRlckxhYmVsKGxhYmVsLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHggPSBsYWJlbEluZm8ueCwgeSA9IGxhYmVsSW5mby55LCB3aWR0aCA9IGxhYmVsSW5mby53aWR0aCwgaGVpZ2h0ID0gbGFiZWxJbmZvLmhlaWdodCwgdmFyaWFuY2VMYWJlbFR5cGUgPSBsYWJlbEluZm8udmFyaWFuY2VMYWJlbFR5cGUsIGNvbG9yID0gbGFiZWxJbmZvLmNvbG9yLCBmb250U2l6ZSA9IGxhYmVsSW5mby5mb250U2l6ZTtcclxuICAgICAgICB2YXIgbGFiZWxTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIHZhciBiZ0NvbG9yID0gJ3RyYW5zcGFyZW50JztcclxuICAgICAgICB2YXIgbGFiZWxDb2xvciA9IHRoaXMuX2NoYXJ0VHlwZS5zdGFydHNXaXRoKCdzdGFja2VkJykgPyAnIzY2NicgOiBvcHRpb25zLmNvbG9yO1xyXG4gICAgICAgIGlmICh2YXJpYW5jZUxhYmVsVHlwZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGxhYmVsQ29sb3IgPSBjb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGFiZWxTcGFuLmNsYXNzTGlzdC5hZGQoJ2NvbW1vbi1sYWJlbCcpO1xyXG4gICAgICAgIGxhYmVsU3Bhbi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgXCJiYWNrZ3JvdW5kLWNvbG9yOiBcIi5jb25jYXQoYmdDb2xvciwgXCI7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiBcIikuY29uY2F0KHksIFwicHg7IGxlZnQ6IFwiKS5jb25jYXQoeCwgXCJweDsgd2lkdGg6IFwiKS5jb25jYXQod2lkdGgsIFwicHg7IGhlaWdodDogXCIpLmNvbmNhdChoZWlnaHQsIFwicHg7IGNvbG9yOiBcIikuY29uY2F0KGxhYmVsQ29sb3IsIFwiOyBmb250LXNpemU6IFwiKS5jb25jYXQoZm9udFNpemUsIFwiO1wiKSk7XHJcbiAgICAgICAgbGFiZWxTcGFuLmlubmVySFRNTCA9IGxhYmVsSW5mby5mb3JtYXR0ZWRWYWx1ZTtcclxuICAgICAgICB0aGlzLl9jb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKGxhYmVsU3Bhbik7XHJcbiAgICB9O1xyXG4gICAgQ2hhcnRPdmVybGF5Q29tcG9uZW50LnByb3RvdHlwZS5fcmVuZGVyQXhpc0xhYmVsID0gZnVuY3Rpb24gKGxhYmVsKSB7XHJcbiAgICAgICAgaWYgKCFsYWJlbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB4ID0gbGFiZWwueCwgeSA9IGxhYmVsLnksIHdpZHRoID0gbGFiZWwud2lkdGgsIGhlaWdodCA9IGxhYmVsLmhlaWdodCwgcG9pbnRWYWx1ZSA9IGxhYmVsLnBvaW50VmFsdWUsIGZvcm1hdHRlZFZhbHVlID0gbGFiZWwuZm9ybWF0dGVkVmFsdWUsIGZvbnRTaXplID0gbGFiZWwuZm9udFNpemU7XHJcbiAgICAgICAgdmFyIGxhYmVsRWwgPSBBeGlzTGFiZWxUZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgICB2YXIgbGFiZWxDb250YWluZXIgPSBsYWJlbEVsLnF1ZXJ5U2VsZWN0b3IoJy5heGlzLWxhYmVsLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIHZhciBiZ0NvbG9yID0gJ3RyYW5zcGFyZW50JztcclxuICAgICAgICBsYWJlbENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgXCJiYWNrZ3JvdW5kLWNvbG9yOiBcIi5jb25jYXQoYmdDb2xvciwgXCI7IHdpZHRoOiBcIikuY29uY2F0KHdpZHRoICsgMzYsIFwicHg7IGxlZnQ6IFwiKS5jb25jYXQoeCAtIDMwLCBcInB4OyB0b3A6IFwiKS5jb25jYXQoeSAtIDIsIFwicHg7IGZvbnQtc2l6ZTogXCIpLmNvbmNhdChmb250U2l6ZSwgXCI7XCIpKTtcclxuICAgICAgICB0aGlzLl9jb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKGxhYmVsRWwpO1xyXG4gICAgICAgIHZhciBsYWJlbFNwYW4gPSBsYWJlbENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuYXhpcy1sYWJlbCcpO1xyXG4gICAgICAgIHZhciBfYXhpc0xhYmVsQ29sb3IgPSB0aGlzLl9heGlzTGFiZWxDb2xvcjtcclxuICAgICAgICBsYWJlbFNwYW4uc2V0QXR0cmlidXRlKCdzdHlsZScsIFwiY29sb3I6IFwiLmNvbmNhdChfYXhpc0xhYmVsQ29sb3IpKTtcclxuICAgICAgICBsYWJlbFNwYW4uaW5uZXJIVE1MID0gZm9ybWF0dGVkVmFsdWU7XHJcbiAgICAgICAgdmFyIGljb25JbWcgPSBsYWJlbENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcclxuICAgICAgICBpY29uSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgaWNvbk1hcFtwb2ludFZhbHVlXSB8fCBpY29uTWFwLkNpdHkgfHwgaWNvbk1hcC5JbmZvKTtcclxuICAgIH07XHJcbiAgICA7XHJcbiAgICBDaGFydE92ZXJsYXlDb21wb25lbnQucHJvdG90eXBlLnJlbmRlckF4aXNMYWJlbHMgPSBmdW5jdGlvbiAoYXhpc0xhYmVscykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKGF4aXNMYWJlbHMgJiYgIUFycmF5LmlzQXJyYXkoYXhpc0xhYmVscykpIHtcclxuICAgICAgICAgICAgdGhpcy5fcmVuZGVyQXhpc0xhYmVsKGF4aXNMYWJlbHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgYXhpc0xhYmVscy5mb3JFYWNoKGZ1bmN0aW9uIChsYWJlbHMpIHsgcmV0dXJuIF90aGlzLnJlbmRlckF4aXNMYWJlbHMobGFiZWxzKTsgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIENoYXJ0T3ZlcmxheUNvbXBvbmVudC5wcm90b3R5cGUucmVuZGVyQXhpc1N0YWNrTGFiZWwgPSBmdW5jdGlvbiAoc3RhY2tMYWJlbEluZm8pIHtcclxuICAgICAgICBpZiAoIXN0YWNrTGFiZWxJbmZvKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHN0YWNrTGFiZWxTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIHN0YWNrTGFiZWxTcGFuLmNsYXNzTGlzdC5hZGQoJ2NvbW1vbi1sYWJlbCcpO1xyXG4gICAgICAgIHZhciBheGlzTGFiZWxDb2xvciA9IHRoaXMuX2F4aXNMYWJlbENvbG9yO1xyXG4gICAgICAgIHZhciBiZ0NvbG9yID0gJ3RyYW5zcGFyZW50JztcclxuICAgICAgICB2YXIgeCA9IHN0YWNrTGFiZWxJbmZvLngsIHkgPSBzdGFja0xhYmVsSW5mby55LCB3aWR0aCA9IHN0YWNrTGFiZWxJbmZvLndpZHRoLCBoZWlnaHQgPSBzdGFja0xhYmVsSW5mby5oZWlnaHQsIGZvcm1hdHRlZFZhbHVlID0gc3RhY2tMYWJlbEluZm8uZm9ybWF0dGVkVmFsdWUsIGZvbnRTaXplID0gc3RhY2tMYWJlbEluZm8uZm9udFNpemU7XHJcbiAgICAgICAgc3RhY2tMYWJlbFNwYW4uc2V0QXR0cmlidXRlKCdzdHlsZScsIFwiYmFja2dyb3VuZC1jb2xvcjogXCIuY29uY2F0KGJnQ29sb3IsIFwiOyBjb2xvcjogXCIpLmNvbmNhdChheGlzTGFiZWxDb2xvciwgXCI7IHRvcDogXCIpLmNvbmNhdCh5LCBcInB4OyBsZWZ0OiBcIikuY29uY2F0KHgsIFwicHg7IHdpZHRoOiBcIikuY29uY2F0KHdpZHRoLCBcInB4OyBoZWlnaHQ6IFwiKS5jb25jYXQoaGVpZ2h0LCBcInB4OyBmb250LXNpemU6IFwiKS5jb25jYXQoZm9udFNpemUsIFwiO1wiKSk7XHJcbiAgICAgICAgc3RhY2tMYWJlbFNwYW4udGV4dENvbnRlbnQgPSBmb3JtYXR0ZWRWYWx1ZTtcclxuICAgICAgICB0aGlzLl9jb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKHN0YWNrTGFiZWxTcGFuKTtcclxuICAgIH07XHJcbiAgICBDaGFydE92ZXJsYXlDb21wb25lbnQucHJvdG90eXBlLnJlbmRlckF4aXNTdGFja0xhYmVscyA9IGZ1bmN0aW9uIChheGlzU3RhY2tMYWJlbHMpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGlmICghYXhpc1N0YWNrTGFiZWxzKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGF4aXNTdGFja0xhYmVscyAmJiAhQXJyYXkuaXNBcnJheShheGlzU3RhY2tMYWJlbHMpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyQXhpc1N0YWNrTGFiZWwoYXhpc1N0YWNrTGFiZWxzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGF4aXNTdGFja0xhYmVscy5mb3JFYWNoKGZ1bmN0aW9uIChzdGFja0xhYmVscykge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMucmVuZGVyQXhpc1N0YWNrTGFiZWxzKHN0YWNrTGFiZWxzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIENoYXJ0T3ZlcmxheUNvbXBvbmVudC5wcm90b3R5cGUuc2V0RXh0ZW5zaW9uRGF0YSA9IGZ1bmN0aW9uIChleHRlbnNpb25EYXRhKSB7XHJcbiAgICAgICAgdmFyIGNoYXJ0VHlwZSA9IGV4dGVuc2lvbkRhdGEuY2hhcnRUeXBlLCBpc0hvcml6b250YWwgPSBleHRlbnNpb25EYXRhLmlzSG9yaXpvbnRhbCwgY2hhcnRTaXplID0gZXh0ZW5zaW9uRGF0YS5jaGFydFNpemUsIGNsaXBQYXRoID0gZXh0ZW5zaW9uRGF0YS5jbGlwUGF0aCwgc2VyaWVzID0gZXh0ZW5zaW9uRGF0YS5zZXJpZXMsIHhBeGlzTGFiZWxzID0gZXh0ZW5zaW9uRGF0YS54QXhpc0xhYmVscywgeEF4aXNTdGFja0xhYmVscyA9IGV4dGVuc2lvbkRhdGEueEF4aXNTdGFja0xhYmVscywgeUF4aXNMYWJlbHMgPSBleHRlbnNpb25EYXRhLnlBeGlzTGFiZWxzLCB5QXhpc1N0YWNrTGFiZWxzID0gZXh0ZW5zaW9uRGF0YS55QXhpc1N0YWNrTGFiZWxzO1xyXG4gICAgICAgIHRoaXMuX3NpemUgPSBjaGFydFNpemU7XHJcbiAgICAgICAgdGhpcy5fY2xpcFBhdGggPSBjbGlwUGF0aDtcclxuICAgICAgICB0aGlzLl9zZXJpZXMgPSBzZXJpZXM7XHJcbiAgICAgICAgdGhpcy5feEF4aXNMYWJlbHMgPSB4QXhpc0xhYmVscztcclxuICAgICAgICB0aGlzLl95QXhpc0xhYmVscyA9IHlBeGlzTGFiZWxzO1xyXG4gICAgICAgIHRoaXMuX3hBeGlzU3RhY2tMYWJlbHMgPSB4QXhpc1N0YWNrTGFiZWxzO1xyXG4gICAgICAgIHRoaXMuX3lBeGlzU3RhY2tMYWJlbHMgPSB5QXhpc1N0YWNrTGFiZWxzO1xyXG4gICAgICAgIHRoaXMuX2NoYXJ0VHlwZSA9IGNoYXJ0VHlwZTtcclxuICAgICAgICB0aGlzLl9pc0hvcml6b250YWwgPSBpc0hvcml6b250YWw7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ2hhcnRPdmVybGF5Q29tcG9uZW50LnByb3RvdHlwZSwgXCJyb3VuZGVkXCIsIHtcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9yb3VuZGVkID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENoYXJ0T3ZlcmxheUNvbXBvbmVudC5wcm90b3R5cGUsIFwic2l6ZUluY3JlbWVudFwiLCB7XHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2l6ZUluY3JlbWVudCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDaGFydE92ZXJsYXlDb21wb25lbnQucHJvdG90eXBlLCBcImF4aXNMYWJlbENvbG9yXCIsIHtcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9heGlzTGFiZWxDb2xvciA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBDaGFydE92ZXJsYXlDb21wb25lbnQ7XHJcbn0oSFRNTEVsZW1lbnQpKTtcclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhejktb3ZlcmxheScsIENoYXJ0T3ZlcmxheUNvbXBvbmVudCk7XHJcbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0ge307XG5fX3dlYnBhY2tfbW9kdWxlc19fW1wiLi9zcmMvUGxvdGFyZWFPdmVybGF5LnRzXCJdKCk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=