import mqtt from 'mqtt';
import fs from 'fs';

let mqttClient = mqtt.connect('mqtt://10.0.0.1');

mqttClient.publish('bagno/luce/onOff', "on");
mqttClient.publish('bagno/luce/intensita', "70");
