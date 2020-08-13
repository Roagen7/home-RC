import express from 'express';

import addRouters from './functions/addRouters';
import createMysqlConnection from './functions/createMysqlConnection';

const host: string = 'localhost';
const port: number = 8080;
const app = express();
const con = createMysqlConnection();
addRouters(app, con);

app.listen(port, () => {
  console.log(`listening at http://${host}:${port}`);
});
