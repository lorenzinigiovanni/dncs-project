import mqtt from 'mqtt';
import fs from 'fs';
import { PulsanteLuce } from './pulsanteLuce';
import { PulsanteTapparella } from './pulsanteTapparella';

export class Pulsantiera {
    private _mqttClient = mqtt.connect('mqtt://10.0.0.1');
    private _stream = fs.createWriteStream('logpulsantiera.txt', { flags: 'a' });

    private _stanze = ["cucina", "camera", "bagno"];
    private _pulsantiLuci: PulsanteLuce[] = new Array(3);
    private _pulsantiTapparelle: PulsanteTapparella[] = new Array(3);
    
    private _rand: number = 0;

    private _timer: any;
    private _up: any;

    constructor() {
        for (let i = 0; i < 2; i++) {
            this._pulsantiLuci[i] = new PulsanteLuce(this._mqttClient);
            this._pulsantiTapparelle[i] = new PulsanteTapparella(this._mqttClient);
        }
    }

    randomCommand() {
        this._rand = Math.floor(Math.random() * 2) + 0;
        this._pulsantiLuci[this._rand].call(this._stanze[this._rand], this._rand);
        this._pulsantiTapparelle[this._rand].call(this._stanze[this._rand], this._rand);
    }

    update() {
        this._timer = setInterval(() => this._up(), 60 * 1000);
        this._up = () => {
            this.randomCommand();
            this._stream.write('Pulsante luce: ' + this._pulsantiLuci[this._rand].message + ' Pulsante tapparella: ' + this._pulsantiTapparelle[this._rand].message + '\r\n')
        }
    }
}