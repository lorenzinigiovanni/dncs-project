export class PulsanteLuce {
   call(mqttClient: any, stanza: string, action: number) {
      if(action ==  0) {
         this.on(mqttClient, stanza);
      } else if (action == 1) {
         this.off(mqttClient, stanza);
      } else if (action == 2) {
         this.intensity(mqttClient, stanza);
      }
   }

   on(mqttClient: any, stanza: string) {
   } 

   off(mqttClient: any, stanza: string) {

   } 
   
   intensity(mqttClient: any, stanza: string) {

   } 
}