import { Router } from 'express';
import { Connection } from 'mysql';
import bodyParser from 'body-parser';

import createHtmlTemplates from './createHtmlTemplates';

export default function addRouters(app: any, con?: Connection): void {
  const messageRouter: Router = Router();
  const accountRouter: Router = Router();
  const mainRouter: Router = Router();
  const templates = createHtmlTemplates();
  let login: boolean = false;
  let username: string;

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  accountRouter.get('/', (req, res) => {
    res.send(templates.accountButtons);
  });
  accountRouter.get('/register', (req, res) => {
    res.send(templates.registerForm);
  });

  accountRouter.get('/login', (req, res) => {
    res.send(templates.loginForm);
  });

  accountRouter.post('/login', (req, res) => {
    if (req.body.passwd && req.body.user && con) {
      con.query(
        `SELECT nick FROM users WHERE nick="${req.body.user}" AND password="${req.body.passwd}"`,
        (err, result) => {
          console.log(result);
          if (result[0].nick) {
            login = true;
            username = result[0].nick;
            res.redirect('/');
          } else {
            res.redirect('/account/login');
          }
        }
      );
    } else {
      res.redirect('/account/login');
    }
  });

  accountRouter.post('/register', (req, res) => {
    if (req.body.passwd && req.body.user && con) {
      con.query(`INSERT INTO users (nick, password) VALUES ("${req.body.user}", "${req.body.passwd}")`);
      login = true;
      res.redirect('/');
      username = req.body.user;
    } else {
      res.redirect('/account/register');
    }
  });

  messageRouter.post('/', (req, res) => {
    if (req.body && con) {
      con.query(`INSERT INTO msg (nick, text) VALUES ("${username}", "${req.body.message}")`);
    }
    res.redirect('/');
  });

  mainRouter.get('/', (req, res) => {
    if (con && login) {
      con.query('SELECT nick, text FROM msg', (err, result) => {
        let returnedMessage = '<div>';

        for (const message of result) {
          returnedMessage += `<span>[<b>${message.nick}</b>] >> ${message.text}</span><br>`;
        }
        returnedMessage += '</div>' + templates.messageForm;
        res.send(returnedMessage);
      });
    } else if (con) {
      res.redirect('/account');
    }
  });

  app.use('/message', messageRouter);
  app.use('/account', accountRouter);
  app.use('/', mainRouter);
}
