export class PulsanteTapparella {
    call(mqttClient: any, stanza: string, action: number) {
        if (action == 0) {
            this.up(mqttClient, stanza);
        } else if (action == 1) {
            this.down(mqttClient, stanza);
        } else if (action == 2) {
            this.percent(mqttClient, stanza);
        }
    }

    up(mqttClient: any, stanza: string) {

    }

    down(mqttClient: any, stanza: string) {

    }

    percent(mqttClient: any, stanza: string) {

    } 

}