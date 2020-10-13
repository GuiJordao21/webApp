"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Eventing_1 = require("./Eventing");
var Sync_1 = require("./Sync");
var Attributes_1 = require("./Attributes");
var rootUrl = "http://localhost:3000/users";
var User = /** @class */ (function () {
    function User(attrs) {
        this.events = new Eventing_1.Eventing();
        this.sync = new Sync_1.Sync(rootUrl);
        this.attributes = new Attributes_1.Attributes(attrs);
    }
    Object.defineProperty(User.prototype, "on", {
        get: function () {
            return this.events.on;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "trigger", {
        get: function () {
            return this.events.trigger;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "get", {
        get: function () {
            return this.attributes.get;
        },
        enumerable: true,
        configurable: true
    });
    User.prototype.set = function (update) {
        this.attributes.set(update);
        this.trigger("change");
    };
    User.prototype.fetch = function () {
        var _this = this;
        var id = this.attributes.get("id");
        console.log(id);
        if (typeof id !== "number") {
            throw new Error("Cannot fetch without an id");
        }
        this.sync.fetch(id).then(function (response) {
            _this.set(response.data);
        });
    };
    return User;
}());
exports.User = User;
