"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var userInputRouter = express_1.Router();
userInputRouter.post(function (req, res) {
    if (req.body) {
        console.log(req.body);
        con.query("INSERT INTO msg (nick, text) VALUES (\"" + req.body.user + "\", \"" + req.body.message + "\")");
    }
    res.redirect('/');
});
