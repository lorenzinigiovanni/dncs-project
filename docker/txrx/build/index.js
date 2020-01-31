"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mqtt_1 = __importDefault(require("mqtt"));
var fs_1 = __importDefault(require("fs"));
var args = process.argv.slice(2);
var name = args[0];
var mqttClient = mqtt_1.default.connect('mqtt://10.0.0.1');
mqttClient.subscribe(name);
var stream = fs_1.default.createWriteStream('log.csv', { flags: 'a' });
mqttClient.on('message', function (topic, message) {
    stream.write(topic + ' ' + message + '\r\n');
});
mqttClient.publish(name, 'NakedWin');
mqttClient.publish(name, 'CiroMunnezz');
mqttClient.publish(name, 'Bucchin');
mqttClient.publish(name, 'Pe tutt e frat ingiustamente carcerat');
//# sourceMappingURL=index.js.map