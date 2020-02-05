"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mqtt_1 = __importDefault(require("mqtt"));
var pulsanteLuce_1 = require("./pulsanteLuce");
var pulsanteTapparella_1 = require("./pulsanteTapparella");
var Pulsantiera = /** @class */ (function () {
    function Pulsantiera() {
        this._mqttClient = mqtt_1.default.connect('mqtt://10.0.0.1');
        this._stanze = ["cucina", "camera", "bagno"];
        this._pulsantiLuci = new Array(3);
        this._pulsantiTapparelle = new Array(3);
        this._rand = 0;
        for (var i = 0; i < 2; i++) {
            this._pulsantiLuci[i] = new pulsanteLuce_1.PulsanteLuce(this._mqttClient);
            this._pulsantiTapparelle[i] = new pulsanteTapparella_1.PulsanteTapparella(this._mqttClient);
        }
    }
    Pulsantiera.prototype.randomCommand = function () {
        this._rand = Math.floor(Math.random() * 2) + 0;
        this._pulsantiLuci[this._rand].call(this._stanze[this._rand], this._rand);
        this._pulsantiTapparelle[this._rand].call(this._stanze[this._rand], this._rand);
    };
    Pulsantiera.prototype.update = function () {
        var _this = this;
        this._timer = setInterval(function () { return _this._up(); }, 60 * 1000);
        this._up = function () {
            _this.randomCommand();
        };
    };
    return Pulsantiera;
}());
exports.Pulsantiera = Pulsantiera;
//# sourceMappingURL=pulsantiera.js.map