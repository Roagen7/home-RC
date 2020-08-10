"use strict";
exports.__esModule = true;
var http_1 = require("http");
var url_1 = require("url");
var host = "localhost";
var port = 3000;
http_1.createServer(function (req, res) {
    var q = url_1.parse(req.url, true);
    res.writeHead(200, { "Content-type": "text/html" });
    if (q.pathname == "/message") {
        if (q.query["user"] && q.query["message"]) {
            console.log(q.query);
            res.write(">>" + q.query.user + ":" + q.query.message);
        }
    }
    if (q.pathname == "/") {
        res.write("\n            <form action=\"/message\" method=\"get\">\n                <label for=\"user\">username: <input id=\"user\" name=\"user\" type=\"text\"> </input> </label>\n                <label for=\"message\">message: <input id=\"message\" name=\"message\" type=\"text\"> </input> </label>\n                <label for=\"sender\"><input type=\"submit\"></input></label>\n            </form>\n        ");
    }
    res.end();
}).listen(port, host, function () {
    return console.log("server listening at http://" + host + ":" + port);
});
