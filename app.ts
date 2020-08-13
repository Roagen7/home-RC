import { createServer, IncomingHttpHeaders, IncomingMessage, ServerResponse } from 'http';
//import { query } from 'mysql';
import { appendFile, readFile, exists, read, fstat } from 'fs';
import { parse } from 'url';
import express from 'express';

const host: string = 'localhost';
const port: number = 3000;

const app = express();
app.get('/', (req, res) => {
  res.send('helllo');
});
app.listen(port, () => {
  console.log(`listening at http://${host}:${port}`);
});
