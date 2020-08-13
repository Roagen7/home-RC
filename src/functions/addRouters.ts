import { Router } from 'express';
import { Connection } from 'mysql';
import bodyParser from 'body-parser';

export default function addRouters(app: any, con?: Connection): void {
  const messageRouter: Router = Router();
  const mainRouter: Router = Router();
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  messageRouter.post('/', (req, res) => {
    if (req.body) {
      if (con) {
        con.query(`INSERT INTO msg (nick, text) VALUES ("${req.body.user}", "${req.body.message}")`);
      }
    }
    res.redirect('/');
  });

  mainRouter.get('/', (req, res) => {
    if (con) {
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
    }
  });

  app.use('/message', messageRouter);
  app.use('/', mainRouter);
}
