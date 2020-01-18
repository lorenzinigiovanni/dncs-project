"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var events_1 = require("events");
var mqtt_1 = __importDefault(require("mqtt"));
var AmbientSensor = /** @class */ (function (_super) {
    __extends(AmbientSensor, _super);
    function AmbientSensor(topic) {
        var _this = _super.call(this) || this;
        _this._temperature = 0.0;
        _this._humidity = 0.0;
        _this._mqttClient = mqtt_1.default.connect('mqtt://10.0.0.1');
        _this._topic = topic + '/ambientsensor';
        _this._mqttClient.subscribe(_this._topic + '/temperature');
        _this._mqttClient.subscribe(_this._topic + '/humidity');
        _this._mqttClient.on('message', function (topic, message) {
            if (topic == _this._topic + '/temperature') {
                _this._temperature = +message.toString();
                _this.emit('newTemperature', _this._temperature);
            }
            else if (topic == _this._topic + '/humidity') {
                _this._humidity = +message.toString();
                _this.emit('newHumidity', _this._humidity);
            }
        });
        return _this;
    }
    Object.defineProperty(AmbientSensor.prototype, "temperature", {
        get: function () {
            return this._temperature;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AmbientSensor.prototype, "humidity", {
        get: function () {
            return this._humidity;
        },
        enumerable: true,
        configurable: true
    });
    return AmbientSensor;
}(events_1.EventEmitter));
exports.AmbientSensor = AmbientSensor;
//# sourceMappingURL=ambientSensor.js.map
