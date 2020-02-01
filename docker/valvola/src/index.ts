import mqtt from 'mqtt';
import fs from 'fs';
import { PID } from './PID';

let args = process.argv.slice(2);
let name = args[0];

let mqttClient = mqtt.connect('mqtt://10.0.0.1');
mqttClient.subscribe(name + '/valvola/+');

let stream = fs.createWriteStream('log.txt', { flags: 'a' });

let pid = new PID();
pid.kP = 1;
pid.kI = 0.5;
pid.kD = 0.1;

mqttClient.on('message', (topic: string, message: Buffer) => {
    if (topic == name + '/valvola/temperaturaAttuale') {
        pid.currentValue = +message;
    }
    else if (topic == name + '/valvola/temperaturaTarget') {
        pid.target = +message;
    }
});

let timer = setInterval(() => up(), 60 * 1000);

let up = () => {
    stream.write('target: ' + pid.target + ' output: ' + pid.update() + '\r\n');
}
