//import { query } from 'mysql';

import express from 'express';
import bodyParser from 'body-parser';

const host: string = 'localhost';
const port: number = 3000;

const app = express();
const router = express.Router();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.post('/', (req, res) => {});

app.use('/message', router);

app.get('/', (req, res) => {
  res.send(` <form action="/message" method="POST">
  <label for="user">username: <input id="user" name="user" type="text"> </input> </label>
  <label for="message">message: <input id="message" name="message" type="text"> </input> </label>
  <label for="sender"><input type="submit"></input></label>
</form>`);
});

app.listen(port, () => {
  console.log(`listening at http://${host}:${port}`);
});
