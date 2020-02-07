"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mqtt_1 = __importDefault(require("mqtt"));
var fs_1 = __importDefault(require("fs"));
var Applicazione = /** @class */ (function () {
    function Applicazione() {
        this._mqttClient = mqtt_1.default.connect('mqtt://10.0.0.1');
        this._stream = fs_1.default.createWriteStream('logapplicazione.txt', { flags: 'a' });
        this._stanze = ['cucina', 'bagno', 'camera'];
        this._topics = ['temperaturaTarget', 'umiditaTarget', 'luce/on', 'luce/off', 'luce/intensita', 'split/on', 'split/off', 'split/velocitaVentola', 'tapparella/up', 'tapparella/down', 'tapparella/percentuale', 'umidificatore/on', 'umidificatore/off', 'valvola/on', 'valvola/off'];
        this._message = '';
    }
    Applicazione.prototype.randomCommand = function () {
        var room = getRandomInt(0, 2);
        var topic = this._stanze[room] + '/';
        var a = getRandomInt(0, 14);
        topic += this._topics[a];
        if (a == 0) {
            this._message = getRandomInt(18, 28).toString();
        }
        else if (a == 1) {
            this._message = getRandomInt(40, 60).toString();
        }
        else if (a == 4) {
            this._message = getRandomInt(0, 100).toString();
        }
        else if (a == 7) {
            this._message = getRandomInt(1, 5).toString();
        }
        else if (a == 10) {
            this._message = getRandomInt(0, 100).toString();
        }
        this._mqttClient.publish(topic, this._message);
    };
    Applicazione.prototype.update = function () {
        var _this = this;
        this._timer = setInterval(function () { return _this._up(); }, 60 * 1000);
        this._up = function () {
            _this.randomCommand();
            _this._stream.write(_this._message + '\r\n');
        };
    };
    return Applicazione;
}());
exports.Applicazione = Applicazione;
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//# sourceMappingURL=applicazione.js.map