"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("./models/User");
var user = new User_1.User({ id: 3 });
console.log(user);
user.fetch();
user.on("change", function () {
    console.log(user);
});
