import express from "express";
import { createConnection } from "mysql";
import bluebird from "bluebird";
const app = express();
app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/explore", (req, res) => {
  let message = { id: 1, message: "How are you?", messageTime: new Date() };
  res.json(message);
});

app.get("/cdac", async (req, res) => {
  let ConnectionUri = {
    host: "localhost",
    user: "root",
    password: "root123",
    database: "cdacdb",
  };
  let connection = createConnection(ConnectionUri);
  bluebird.promisifyAll(connection);
  await connection.connectAsync();
  let sql = "Select * from message";
  let results = await connection.queryAsync(sql);
  await connection.endAsync();
  res.json(results);
});
app.post("/message", async (req, res) => {
  let ConnectionUri = {
    host: "localhost",
    user: "root",
    password: "root123",
    database: "cdacdb",
  };
  let connection = createConnection(ConnectionUri);
  bluebird.promisifyAll(connection);
  await connection.connectAsync();
  let sql = `insert into message (message, reply) values ('${message}', ${reply})`;
  connection.end();
});
app.listen(3000);
