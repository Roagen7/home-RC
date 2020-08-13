"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var body_parser_1 = __importDefault(require("body-parser"));
function addRouters(app, con) {
    var messageRouter = express_1.Router();
    var mainRouter = express_1.Router();
    app.use(body_parser_1.default.urlencoded({ extended: false }));
    app.use(body_parser_1.default.json());
    messageRouter.post('/', function (req, res) {
        if (req.body) {
            if (con) {
                con.query("INSERT INTO msg (nick, text) VALUES (\"" + req.body.user + "\", \"" + req.body.message + "\")");
            }
        }
        res.redirect('/');
    });
    mainRouter.get('/', function (req, res) {
        if (con) {
            con.query('SELECT nick, text FROM msg', function (err, result) {
                var returnedMessage = '<div><ul>';
                for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
                    var message = result_1[_i];
                    returnedMessage += "<span>[<b>" + message.nick + "</b>] >> " + message.text + "</span><br>";
                }
                returnedMessage += " </ul></div><form action=\"/message\" method=\"POST\">\n    <label for=\"user\">username: <input id=\"user\" name=\"user\" type=\"text\"> </input> </label>\n    <label for=\"message\">message: <input id=\"message\" name=\"message\" type=\"text\"> </input> </label>\n    <label for=\"sender\"><input type=\"submit\"></input></label>\n    </form>";
                res.send(returnedMessage);
            });
        }
    });
    app.use('/message', messageRouter);
    app.use('/', mainRouter);
}
exports.default = addRouters;
