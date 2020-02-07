export class PulsanteLuce {
   private _mqttClient: any;
   private _message: string = "";

   constructor(mqttClient: any) {
      this._mqttClient = mqttClient;
   }

   get message(): string {
      return this._message;
   }

   call(stanza: string, action: number) {
      if(action ==  0) {
         this.on(stanza);
      } else if (action == 1) {
         this.off(stanza);
      } else if (action == 2) {
         this.intensity(stanza, Math.floor(Math.random() * 100) + 0);
      }
   }

   on(stanza: string) {
      this._mqttClient.publish(stanza + '/luce/on', this._message);
   } 

   off(stanza: string) {
      this._mqttClient.publish(stanza + '/luce/off', this._message);
   } 
   
   intensity(stanza: string, intensita: number) {
      this._message = intensita.toString();
      this._mqttClient.publish(stanza + '/luce/intensita', this._message);
   } 
}