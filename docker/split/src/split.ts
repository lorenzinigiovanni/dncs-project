export class Split {
    private _tempCurrent: number = 0;
    private _tempTarget: number = 0;    

    get tempCurrent(): number {
        return this._tempCurrent;
    }
    set tempCurrent(value: number) {
        this._tempCurrent = value;
    }

    get tempTarget(): number {
        return this._tempTarget;
    }
    set tempTarget(value: number) {
        this._tempTarget = value;
    }

    reset() {
        this._tempCurrent = 0;
        this._tempTarget = 0;
    }
}