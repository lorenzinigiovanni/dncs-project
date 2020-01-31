import mqtt from 'mqtt';
import fs from 'fs';

let args = process.argv.slice(2);
let name = args[0];

let mqttClient = mqtt.connect('mqtt://10.0.0.1');
mqttClient.subscribe(name);

let stream = fs.createWriteStream('log.csv', { flags: 'a' });

mqttClient.on('message', (topic: string, message: Buffer) => {
    stream.write(topic + ' ' + message + '\r\n');
});

mqttClient.publish(name, 'NakedWin');

mqttClient.publish(name, 'CiroMunnezz');

mqttClient.publish(name, 'Bucchin');

mqttClient.publish(name, 'Pe tutt e frat ingiustamente carcerat');
