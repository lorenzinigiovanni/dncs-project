"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PulsanteLuce = /** @class */ (function () {
    function PulsanteLuce(mqttClient) {
        this._message = "";
        this._mqttClient = mqttClient;
    }
    Object.defineProperty(PulsanteLuce.prototype, "message", {
        get: function () {
            return this._message;
        },
        enumerable: true,
        configurable: true
    });
    PulsanteLuce.prototype.call = function (stanza, action) {
        if (action == 0) {
            this.on(stanza);
        }
        else if (action == 1) {
            this.off(stanza);
        }
        else if (action == 2) {
            this.intensity(stanza, Math.floor(Math.random() * 100) + 0);
        }
    };
    PulsanteLuce.prototype.on = function (stanza) {
        this._mqttClient.publish(stanza + '/luce/on', this._message);
    };
    PulsanteLuce.prototype.off = function (stanza) {
        this._mqttClient.publish(stanza + '/luce/off', this._message);
    };
    PulsanteLuce.prototype.intensity = function (stanza, intensita) {
        this._message = intensita.toString();
        this._mqttClient.publish(stanza + '/luce/intensita', this._message);
    };
    return PulsanteLuce;
}());
exports.PulsanteLuce = PulsanteLuce;
//# sourceMappingURL=pulsanteLuce.js.map