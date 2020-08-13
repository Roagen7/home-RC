import { Connection, createConnection } from 'mysql';

export default function createMysqlConnection(): Connection {
  return createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'messages'
  });
}
