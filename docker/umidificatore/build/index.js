"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mqtt_1 = __importDefault(require("mqtt"));
var fs_1 = __importDefault(require("fs"));
var umidificatore_1 = require("./umidificatore");
var args = process.argv.slice(2);
var name = args[0];
var mqttClient = mqtt_1.default.connect('mqtt://10.0.0.1');
mqttClient.subscribe(name + '/umidificatore/+');
var stream = fs_1.default.createWriteStream('log.txt', { flags: 'a' });
var umidificatore = new umidificatore_1.Umidificatore(0.5);
mqttClient.on('message', function (topic, message) {
    if (topic == name + '/umidificatore/umiditaAttuale') {
        umidificatore.currentValue = +message;
    }
    else if (topic == name + '/umidificatore/umiditaTarget') {
        umidificatore.target = +message;
    }
});
var timer = setInterval(function () { return up(); }, 60 * 1000);
var up = function () {
    stream.write('target: ' + umidificatore.target + ' active: ' + umidificatore.active() + ' new value: ' + umidificatore.currentValue + '\r\n');
};
//# sourceMappingURL=index.js.map