"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Umidificatore = /** @class */ (function () {
    function Umidificatore(_delta) {
        this.delta = 0;
        this.enable = false; //simula attivazione
        this.currentValue = 0;
        this.target = 0;
        this.delta = _delta;
    }
    Umidificatore.prototype.active = function () {
        if (this.currentValue < this.target) {
            this.currentValue = +this.delta;
            this.enable = true;
            return "plus";
        }
        else if (this.currentValue > this.target) {
            this.currentValue = -this.delta;
            this.enable = true;
            return "minus";
        }
        else {
            this.enable = false;
            return "disabled";
        }
    };
    return Umidificatore;
}());
exports.Umidificatore = Umidificatore;
//# sourceMappingURL=umidificatore.js.map