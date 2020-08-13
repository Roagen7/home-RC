"use strict";
//import { query } from 'mysql';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var mysql_1 = __importDefault(require("mysql"));
var host = 'localhost';
var port = 3000;
var con = mysql_1["default"].createConnection({
    host: host,
    user: 'root',
    password: '',
    database: 'messages'
});
/*
con.connect((err) => {
  if (err) throw err;
  
  con.query('CREATE DATABASE messages', (err, result) => {
    if (err) throw err;
    console.log('created database');
  });
 
  con.query('CREATE TABLE msg (nick VARCHAR(255), text VARCHAR(255))', (err, result) => {
    if (err) throw err;
    console.log('created table');
  });
  
});
*/
var app = express_1["default"]();
var router = express_1["default"].Router();
app.use(body_parser_1["default"].urlencoded({ extended: false }));
app.use(body_parser_1["default"].json());
router.post('/', function (req, res) {
    if (req.body) {
        console.log(req.body);
        con.query("INSERT INTO msg (nick, text) VALUES (\"" + req.body.user + "\", \"" + req.body.message + "\")");
    }
    res.redirect('/');
});
app.use('/message', router);
app.get('/', function (req, res) {
    con.query('SELECT nick, text FROM msg', function (err, result) {
        var returnedMessage = '<div><ul>';
        for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
            var message = result_1[_i];
            returnedMessage += "<span>[<b>" + message.nick + "</b>] >> " + message.text + "</span><br>";
        }
        returnedMessage += " </ul></div><form action=\"/message\" method=\"POST\">\n  <label for=\"user\">username: <input id=\"user\" name=\"user\" type=\"text\"> </input> </label>\n  <label for=\"message\">message: <input id=\"message\" name=\"message\" type=\"text\"> </input> </label>\n  <label for=\"sender\"><input type=\"submit\"></input></label>\n  </form>";
        res.send(returnedMessage);
    });
});
app.listen(port, function () {
    console.log("listening at http://" + host + ":" + port);
});
