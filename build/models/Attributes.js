"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Attributes = /** @class */ (function () {
    function Attributes(data) {
        var _this = this;
        this.data = data;
        this.get = function (key) {
            return _this.data[key];
        };
    }
    Attributes.prototype.set = function (update) {
        Object.assign(this.data, update);
    };
    return Attributes;
}());
exports.Attributes = Attributes;
