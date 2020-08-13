"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var addRouters_1 = __importDefault(require("./functions/addRouters"));
var createMysqlConnection_1 = __importDefault(require("./functions/createMysqlConnection"));
var host = 'localhost';
var port = 8080;
var app = express_1.default();
var con = createMysqlConnection_1.default();
addRouters_1.default(app, con);
app.listen(port, function () {
    console.log("listening at http://" + host + ":" + port);
});
