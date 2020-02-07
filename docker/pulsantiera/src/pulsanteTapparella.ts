export class PulsanteTapparella {
    private _mqttClient: any;
    private _message: string = "";

    constructor(mqttClient: any) {
        this._mqttClient = mqttClient;
    }
    
    get message(): string {
        return this._message;
    }

    call(stanza: string, action: number) {
        if (action == 0) {
            this.up(stanza);
        } else if (action == 1) {
            this.down(stanza);
        } else if (action == 2) {
            this.percent(stanza, Math.floor(Math.random() * 100) + 0);
        }
    }

    up(stanza: string) {
        this._mqttClient.publish(stanza + '/tapparella/up', this._message);
    }

    down(stanza: string) {
        this._mqttClient.publish(stanza + '/tapparella/down', this._message);
    }

    percent(stanza: string, percDown: number) {
        this._message = percDown.toString();
        this._mqttClient.publish(stanza + '/tapparella/percentuale', this._message);
    } 

}