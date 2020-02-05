import mqtt from 'mqtt';
import { PulsanteLuce } from './pulsanteLuce';
import { PulsanteTapparella } from './pulsanteTapparella';

let rand: number;
let mqttClient = mqtt.connect('mqtt://10.0.0.1');
let stanze = ["cucina", "camera", "bagno"];
let pulsantiLuci: PulsanteLuce[] = new Array(3);
let pulsantiTapparelle: PulsanteTapparella[] = new Array(3);
for(let i=0; i<2; i++) {
    pulsantiLuci[i] = new PulsanteLuce();
    pulsantiTapparelle[i] = new PulsanteTapparella();
}

let timer = setInterval(() => up(), 60 * 1000);

let up = () => {
    rand = Math.floor(Math.random() * 2) + 0;
    pulsantiLuci[rand].call(mqttClient, stanze[rand], rand);
    pulsantiTapparelle[rand].call(mqttClient, stanze[rand], rand);
}
