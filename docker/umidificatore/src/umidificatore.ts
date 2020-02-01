export class Umidificatore {

    private delta: number = 0;
    private enable: boolean = false; //simula attivazione

    currentValue: number = 0;
    target: number = 0;
    
    constructor(_delta: number) {
        this.delta = _delta;
    }

    active(): string {
        if(this.currentValue < this.target) {
            this.currentValue =+ this.delta;
            this.enable = true;
            return "plus";
        } else if (this.currentValue > this.target) {
            this.currentValue =- this.delta;
            this.enable = true;
            return "minus";
        } else {
            this.enable = false;
            return "disabled";
        }
    }
}
