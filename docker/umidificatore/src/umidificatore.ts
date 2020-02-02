export class Umidificatore {

    private _delta: number = 0;
    private _enable: boolean = false;

    private _currentValue: number = 0;
    private _target: number = 0;
    
    constructor(delta: number) {
        this._delta = delta;
    }

    get currentValue(): number {
        return this._currentValue;
    }
    set currentValue(value: number) {
        this._currentValue = value;
    }

    get target(): number {
        return this._target;
    }
    set target(value: number) {
        this._target = value;
    }

    get enable(): boolean {
        return this._enable;
    }
    set enable(value: boolean) {
        this._enable = value;
    }

    active(): string {
        if(this._enable) {
            if (this.currentValue < this.target) {
                this.currentValue += this._delta;
                return "plus";
            } else if (this.currentValue > this.target) {
                this.currentValue -= this._delta;
                return "minus";
            } else {
                this._enable = false;
                return "disabled";
            }
        }
        return "disabled";        
    }
}
