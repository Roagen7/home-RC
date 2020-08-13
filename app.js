"use strict";
//import { query } from 'mysql';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var host = 'localhost';
var port = 3000;
var app = express_1["default"]();
var router = express_1["default"].Router();
app.use(body_parser_1["default"].urlencoded({ extended: false }));
app.use(body_parser_1["default"].json());
router.post('/', function (req, res) {
    console.log(req.body);
});
app.use('/message', router);
app.get('/', function (req, res) {
    res.send(" <form action=\"/message\" method=\"POST\">\n  <label for=\"user\">username: <input id=\"user\" name=\"user\" type=\"text\"> </input> </label>\n  <label for=\"message\">message: <input id=\"message\" name=\"message\" type=\"text\"> </input> </label>\n  <label for=\"sender\"><input type=\"submit\"></input></label>\n</form>");
});
app.listen(port, function () {
    console.log("listening at http://" + host + ":" + port);
});
