import mqtt from 'mqtt';
import fs from 'fs';

let mqttClient = mqtt.connect('mqtt://10.0.0.1');

mqttClient.publish('bagno/umidificatore/umiditaAttuale', "23");
mqttClient.publish('bagno/umidificatore/umiditaTarget', "20");
