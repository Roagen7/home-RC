// @ts-ingore
/*
import { createServer, IncomingHttpHeaders, IncomingMessage, ServerResponse } from 'http';

//import { query } from 'mysql';
import { appendFile, readFile, exists, read, fstat } from 'fs';
import { parse } from 'url';

const host: string = 'localhost';
const port: number = 3000;

//something

createServer((req: IncomingMessage, res: ServerResponse) => {
  const q: any = parse(req.url, true);
  res.writeHead(200, { 'Content-type': 'text/html' });
  if (q.pathname == '/message') {
    if (q.query['user'] && q.query['message']) {
      appendFile('messages.txt', `<br>[${q.query.user}]>>${q.query.message}`, (err) => {
        if (err) throw err;
        console.log('saved!');
      });

      res.end(`message sent <button onclick="myRedirect()">go back</button> <script> function myRedirect(){
        window.location.replace('http://${host}:${port}/');
      }</script>`);
    }
  }

  if (q.pathname == '/') {
    var chat: string;
    readFile('messages.txt', (err, data) => {
      res.write(`<div>${data}</div>
      <form action="/message" method="get">
          <label for="user">username: <input id="user" name="user" type="text"> </input> </label>
          <label for="message">message: <input id="message" name="message" type="text"> </input> </label>
          <label for="sender"><input type="submit"></input></label>
      </form>
    `);
      res.end();
    });
  }
}).listen(port, host, () => console.log(`server listening at http://${host}:${port}`));
*/
