"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Split = /** @class */ (function () {
    function Split() {
        this._tempCurrent = 0;
        this._tempTarget = 0;
    }
    Object.defineProperty(Split.prototype, "tempCurrent", {
        get: function () {
            return this._tempCurrent;
        },
        set: function (value) {
            this._tempCurrent = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Split.prototype, "tempTarget", {
        get: function () {
            return this._tempTarget;
        },
        set: function (value) {
            this._tempTarget = value;
        },
        enumerable: true,
        configurable: true
    });
    Split.prototype.reset = function () {
        this._tempCurrent = 0;
        this._tempTarget = 0;
    };
    return Split;
}());
exports.Split = Split;
//# sourceMappingURL=split.js.map