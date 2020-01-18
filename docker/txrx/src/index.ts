import mqtt from 'mqtt';
import fs from 'fs';

let mqttClient = mqtt.connect('mqtt://10.0.0.1');
mqttClient.subscribe('ciro');

let stream = fs.createWriteStream('log.csv', { flags: 'a' });

mqttClient.on('message', (topic: string, message: Buffer) => {
    stream.write(topic + ' ' + message + '\r\n');
});

mqttClient.publish('ciro', 'NakedWin');

mqttClient.publish('ciro', 'CiroMunnezz');

mqttClient.publish('ciro', 'Bucchin');

mqttClient.publish('ciro', 'Pe tutt e frat ingiustamente carcerat');
