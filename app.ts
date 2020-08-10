import {
  createServer,
  IncomingHttpHeaders,
  IncomingMessage,
  ServerResponse,
} from "http";
import { query } from "mysql";
import { parse } from "url";

const host: string = "localhost";
const port: number = 3000;

createServer((req: IncomingMessage, res: ServerResponse) => {
  const q: any = parse(req.url, true);
  res.writeHead(200, { "Content-type": "text/html" });
  if (q.pathname == "/message") {
    if (q.query["user"] && q.query["message"]) {
      res.write(`[${q.query.user}]>>${q.query.message}`);
    }
  }

  if (q.pathname == "/") {
    res.write(`
            <form action="/message" method="get">
                <label for="user">username: <input id="user" name="user" type="text"> </input> </label>
                <label for="message">message: <input id="message" name="message" type="text"> </input> </label>
                <label for="sender"><input type="submit"></input></label>
            </form>
        `);
  }

  res.end();
}).listen(port, host, () =>
  console.log(`server listening at http://${host}:${port}`)
);
