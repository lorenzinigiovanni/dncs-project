"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PulsanteTapparella = /** @class */ (function () {
    function PulsanteTapparella(mqttClient) {
        this._message = "";
        this._mqttClient = mqttClient;
    }
    Object.defineProperty(PulsanteTapparella.prototype, "message", {
        get: function () {
            return this._message;
        },
        enumerable: true,
        configurable: true
    });
    PulsanteTapparella.prototype.call = function (stanza, action) {
        if (action == 0) {
            this.up(stanza);
        }
        else if (action == 1) {
            this.down(stanza);
        }
        else if (action == 2) {
            this.percent(stanza, Math.floor(Math.random() * 100) + 0);
        }
    };
    PulsanteTapparella.prototype.up = function (stanza) {
        this._mqttClient.publish(stanza + '/tapparella/up', this._message);
    };
    PulsanteTapparella.prototype.down = function (stanza) {
        this._mqttClient.publish(stanza + '/tapparella/down', this._message);
    };
    PulsanteTapparella.prototype.percent = function (stanza, percDown) {
        this._message = percDown.toString();
        this._mqttClient.publish(stanza + '/tapparella/percentuale', this._message);
    };
    return PulsanteTapparella;
}());
exports.PulsanteTapparella = PulsanteTapparella;
//# sourceMappingURL=pulsanteTapparella.js.map