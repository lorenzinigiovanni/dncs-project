"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mqtt_1 = __importDefault(require("mqtt"));
var mqttClient = mqtt_1.default.connect('mqtt://10.0.0.1');
mqttClient.publish('bagno/umidificatore/umiditaAttuale', "23");
mqttClient.publish('bagno/umidificatore/umiditaTarget', "20");
//# sourceMappingURL=index.js.map