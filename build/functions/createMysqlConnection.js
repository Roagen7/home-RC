"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql_1 = require("mysql");
function createMysqlConnection() {
    return mysql_1.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'messages'
    });
}
exports.default = createMysqlConnection;
