"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var host = 'localhost';
var port = 3000;
var app = express_1["default"]();
app.get('/', function (req, res) {
    res.send('helllo');
});
app.listen(port, function () {
    console.log("listening at http://" + host + ":" + port);
});
