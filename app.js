"use strict";
exports.__esModule = true;
var http_1 = require("http");
//import { query } from 'mysql';
var fs_1 = require("fs");
var url_1 = require("url");
var host = 'localhost';
var port = 3000;
//something
http_1.createServer(function (req, res) {
    var q = url_1.parse(req.url, true);
    res.writeHead(200, { 'Content-type': 'text/html' });
    if (q.pathname == '/message') {
        if (q.query['user'] && q.query['message']) {
            fs_1.appendFile('messages.txt', "<br>[" + q.query.user + "]>>" + q.query.message, function (err) {
                if (err)
                    throw err;
                console.log('saved!');
            });
            res.end("message sent <button onclick=\"myRedirect()\">go back</button> <script> function myRedirect(){\n        window.location.replace('http://" + host + ":" + port + "/');\n      }</script>");
        }
    }
    if (q.pathname == '/') {
        var chat;
        fs_1.readFile('messages.txt', function (err, data) {
            res.write("<div>" + data + "</div>\n      <form action=\"/message\" method=\"get\">\n          <label for=\"user\">username: <input id=\"user\" name=\"user\" type=\"text\"> </input> </label>\n          <label for=\"message\">message: <input id=\"message\" name=\"message\" type=\"text\"> </input> </label>\n          <label for=\"sender\"><input type=\"submit\"></input></label>\n      </form>\n    ");
            res.end();
        });
    }
}).listen(port, host, function () { return console.log("server listening at http://" + host + ":" + port); });
