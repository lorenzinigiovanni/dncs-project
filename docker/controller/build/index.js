"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ambientSensor_1 = require("./ambientSensor");
var fs_1 = __importDefault(require("fs"));
var _ambientSensor;
var _stream = fs_1.default.createWriteStream('log.csv', { flags: 'a' });
_ambientSensor = new ambientSensor_1.AmbientSensor('room/magazzino');
_ambientSensor.on('newHumidity', function () {
    var date = new Date(Date.now());
    _stream.write(date.toLocaleString('en-US', { hour12: false, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }) + ',' + _ambientSensor.temperature + ',' + _ambientSensor.humidity + '\r\n');
});
//# sourceMappingURL=index.js.map