"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mqtt_1 = __importDefault(require("mqtt"));
var fs_1 = __importDefault(require("fs"));
var PID_1 = require("./PID");
var args = process.argv.slice(2);
var name = args[0];
//let mqttClient = mqtt.connect('mqtt://10.0.0.1');
var mqttClient = mqtt_1.default.connect('mqtt://test.mosquitto.org');
mqttClient.subscribe(name + '/valvola/+');
var stream = fs_1.default.createWriteStream('log.txt', { flags: 'a' });
var pid = new PID_1.PID();
pid.kP = 1;
pid.kI = 0.5;
pid.kD = 0.1;
mqttClient.on('message', function (topic, message) {
    if (topic == name + '/valvola/temperaturaAttuale') {
        pid.currentValue = +message;
    }
    else if (topic == name + '/valvola/temperaturaTarget') {
        pid.target = +message;
    }
});
var timer = setInterval(function () { return up(); }, 1000);
var up = function () {
    stream.write('target: ' + pid.target + ' output: ' + pid.update() + '\r\n');
};
//# sourceMappingURL=index.js.map