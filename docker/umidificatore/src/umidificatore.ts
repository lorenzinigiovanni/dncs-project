export class Umidificatore {

    private delta: number = 0;

    currentValue: number = 0;
    target: number = 0;
    
    constructor(_delta: number) {
        this.delta = _delta;
    }

    active(): string {
        if(this.currentValue < this.target) {
            this.currentValue =+ this.delta;
            return "plus";
        } else if (this.currentValue > this.target) {
            this.currentValue =- this.delta;
            return "minus";
        } else {
            return "disabled";
        }
    }
}
