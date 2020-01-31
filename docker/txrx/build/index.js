"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mqtt_1 = __importDefault(require("mqtt"));
var fs_1 = __importDefault(require("fs"));
var mqttClient = mqtt_1.default.connect('mqtt://10.0.0.1');
mqttClient.subscribe('ciro');
var stream = fs_1.default.createWriteStream('log.csv', { flags: 'a' });
mqttClient.on('message', function (topic, message) {
    stream.write(topic + ' ' + message + '\r\n');
});
mqttClient.publish('ciro', 'NakedWin');
mqttClient.publish('ciro', 'CiroMunnezz');
mqttClient.publish('ciro', 'Bucchin');
mqttClient.publish('ciro', 'Pe tutt e frat ingiustamente carcerat');
//# sourceMappingURL=index.js.map
