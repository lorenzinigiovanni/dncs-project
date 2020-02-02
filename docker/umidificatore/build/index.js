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
var mqttClient = mqtt_1.default.connect('mqtt://test.mosquitto.org');
mqttClient.subscribe(name + '/umidificatore/+');
var stream = fs_1.default.createWriteStream('log.txt', { flags: 'a' });
var umidificatore = new umidificatore_1.Umidificatore(0.5);
mqttClient.on('message', function (topic, message) {
    if (topic == name + '/umidificatore/umiditaAttuale') {
        umidificatore.enable = true;
        umidificatore.currentValue = +message;
    }
    else if (topic == name + '/umidificatore/umiditaTarget') {
        umidificatore.enable = true;
        umidificatore.target = +message;
    }
});
var timer = setInterval(function () { return up(); }, 60 * 1000);
var up = function () {
    stream.write('target: ' + umidificatore.target + ' umidita attuale: ' + umidificatore.currentValue + ' active: ' + umidificatore.enable + ' funzione: ' + umidificatore.active() + '\r\n');
};
//# sourceMappingURL=index.js.map