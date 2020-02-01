"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Umidificatore = /** @class */ (function () {
    function Umidificatore(_delta) {
        this.delta = 0;
        this.currentValue = 0;
        this.target = 0;
        this.delta = _delta;
    }
    Umidificatore.prototype.active = function () {
        if (this.currentValue < this.target) {
            this.currentValue = +this.delta;
            return "plus";
        }
        else if (this.currentValue > this.target) {
            this.currentValue = -this.delta;
            return "minus";
        }
        else {
            return "disabled";
        }
    };
    return Umidificatore;
}());
exports.Umidificatore = Umidificatore;
//# sourceMappingURL=umidificatore.js.map