//import { query } from 'mysql';

import express, { Router } from 'express';
import bodyParser from 'body-parser';
import mysql from 'mysql';

const host: string = 'localhost';
const port: number = 8080;

const con = mysql.createConnection({
  host,
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

const app = express();
const router: Router = express.Router();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.post('/', (req, res) => {
  if (req.body) {
    console.log(req.body);
    con.query(`INSERT INTO msg (nick, text) VALUES ("${req.body.user}", "${req.body.message}")`);
  }
  res.redirect('/');
});

app.use('/message', router);

app.get('/', (req, res) => {
  con.query('SELECT nick, text FROM msg', (err, result) => {
    let returnedMessage = '<div><ul>';

    for (const message of result) {
      returnedMessage += `<span>[<b>${message.nick}</b>] >> ${message.text}</span><br>`;
    }
    returnedMessage += ` </ul></div><form action="/message" method="POST">
  <label for="user">username: <input id="user" name="user" type="text"> </input> </label>
  <label for="message">message: <input id="message" name="message" type="text"> </input> </label>
  <label for="sender"><input type="submit"></input></label>
  </form>`;
    res.send(returnedMessage);
  });
});

app.listen(port, () => {
  console.log(`listening at http://${host}:${port}`);
});
