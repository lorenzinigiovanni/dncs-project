import mqtt from 'mqtt';
import fs from 'fs';
import { Umidificatore } from './umidificatore';

let args = process.argv.slice(2);
let name = args[0];

let mqttClient = mqtt.connect('mqtt://test.mosquitto.org');
mqttClient.subscribe(name + '/umidificatore/+');

let stream = fs.createWriteStream('log.txt', { flags: 'a' });

let umidificatore = new Umidificatore(0.5);

mqttClient.on('message', (topic: string, message: Buffer) => {
    if (topic == name + '/umidificatore/umiditaAttuale') {
        umidificatore.enable = true;
        umidificatore.currentValue = +message;       
    }
    else if (topic == name + '/umidificatore/umiditaTarget') {
        umidificatore.enable = true;
        umidificatore.target = +message;
    }
});

let timer = setInterval(() => up(), 60 * 1000);

let up = () => {
    stream.write('target: ' + umidificatore.target + ' umidita attuale: ' + umidificatore.currentValue + ' active: ' + umidificatore.enable + ' funzione: ' + umidificatore.active() + '\r\n');
}
