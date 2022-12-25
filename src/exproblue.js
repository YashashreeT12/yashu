import express from "express";
import { createConnection } from "mysql";
import bluebird from "bluebird";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
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
  let sql = `Select * from message`;
  let results = await connection.queryAsync(sql);
  await connection.endAsync();
  res.json(results);
});
app.post("/insertindb", async (req, res) => {
  let ConnectionUri = {
    host: "localhost",
    user: "root",
    password: "root123",
    database: "cdacdb",
  };
  let connection = createConnection(ConnectionUri);
  bluebird.promisifyAll(connection);
  await connection.connectAsync();

  let message = "Hello...2023";
  let reply = 0;

  let sql = `Insert into message (message, reply) values ('${message}',${reply})`;
  await connection.queryAsync(sql);
  connection.endAsync();
  res.json({ message: "true" });
});
app.listen(3000);
