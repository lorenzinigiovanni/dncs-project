export class Luce {
    private _onOff: string = "";
    private _intensita: number = 0;

    get onOff(): string {
        return this._onOff;
    }
    set onOff(value: string) {
        this._onOff = value;
    }

    get intensita(): number {
        return this._intensita;
    }
    set intensita(value: number) {
        this._intensita = value;
    }

    reset() {
        this._onOff = "";
        this._intensita = 0;
    }
}