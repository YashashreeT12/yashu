import { createConnection } from "mysql";
import bluebird from "bluebird";
async function readMessage() {
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

  console.log("Hellooooo", results.length);
  connection.end();

  return results;
}

async function main() {
  let results = await readMessage();
  console.log(results);
}
main();
