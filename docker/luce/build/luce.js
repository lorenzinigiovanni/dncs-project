"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Luce = /** @class */ (function () {
    function Luce() {
        this._onOff = "";
        this._intensita = 0;
    }
    Object.defineProperty(Luce.prototype, "onOff", {
        get: function () {
            return this._onOff;
        },
        set: function (value) {
            this._onOff = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Luce.prototype, "intensita", {
        get: function () {
            return this._intensita;
        },
        set: function (value) {
            this._intensita = value;
        },
        enumerable: true,
        configurable: true
    });
    Luce.prototype.reset = function () {
        this._onOff = "";
        this._intensita = 0;
    };
    return Luce;
}());
exports.Luce = Luce;
//# sourceMappingURL=luce.js.map