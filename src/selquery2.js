import { createConnection } from "mysql";
function insertMessage(message, reply = 0) {
  let ConnectionUri = {
    host: "localhost",
    user: "root",
    password: "root123",
    database: "cdacdb",
  };
  let connection = createConnection(ConnectionUri);
  connection.connect();

  let sql = `Insert into message(message, reply) values ('${message}',${reply})`;
  connection.query(sql);
  connection.end();
}
function readMessage() {
  let ConnectionUri = {
    host: "localhost",
    user: "root",
    password: "root123",
    database: "cdacdb",
  };
  let connection = createConnection(ConnectionUri);
  connection.connect();
  let sql = `Select * from message`;
  connection.query(sql, (error, results) => {
    //console.log(results);
    return results;
  });
  connection.end();
}
function main() {
  insertMessage("Yashashree");
  let results = readMessage();
  console.log(results);
}
main();
