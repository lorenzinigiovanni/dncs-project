import mqtt from 'mqtt';
import fs from 'fs';

let mqttClient = mqtt.connect('mqtt://test.mosquitto.org');

mqttClient.publish('bagno/umidificatore/umiditaAttuale', "23");
mqttClient.publish('bagno/umidificatore/umiditaTarget', "20");
