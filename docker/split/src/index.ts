import mqtt from 'mqtt';
import fs from 'fs';
import { Split } from './split';

let args = process.argv.slice(2);
let name = args[0];

let mqttClient = mqtt.connect('mqtt://10.0.0.1');
mqttClient.subscribe(name + '/split/+');

let stream = fs.createWriteStream('log.txt', { flags: 'a' });

let split = new Split();

mqttClient.on('message', (topic: string, message: Buffer) => {
    if (topic == name + '/split/tempAttuale') {
        split.tempCurrent = +message;
    }
    else if (topic == name + '/split/tempTarget') {
        split.tempTarget = +message;
    }
});

let timer = setInterval(() => up(), 60 * 1000);

let up = () => {
    stream.write('temp target: ' + split.tempTarget + ' temp attuale: ' + split.tempCurrent  + '\r\n');
}
