"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Umidificatore = /** @class */ (function () {
    function Umidificatore(delta) {
        this._delta = 0;
        this._enable = false;
        this._currentValue = 0;
        this._target = 0;
        this._delta = delta;
    }
    Object.defineProperty(Umidificatore.prototype, "currentValue", {
        get: function () {
            return this._currentValue;
        },
        set: function (value) {
            this._currentValue = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Umidificatore.prototype, "target", {
        get: function () {
            return this._target;
        },
        set: function (value) {
            this._target = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Umidificatore.prototype, "enable", {
        get: function () {
            return this._enable;
        },
        set: function (value) {
            this._enable = value;
        },
        enumerable: true,
        configurable: true
    });
    Umidificatore.prototype.active = function () {
        if (this._enable) {
            if (this.currentValue < this.target) {
                this.currentValue += this._delta;
                return "plus";
            }
            else if (this.currentValue > this.target) {
                this.currentValue -= this._delta;
                return "minus";
            }
            else {
                this._enable = false;
                return "disabled";
            }
        }
        return "disabled";
    };
    return Umidificatore;
}());
exports.Umidificatore = Umidificatore;
//# sourceMappingURL=umidificatore.js.map