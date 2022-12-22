import { createConnection } from "mysql";
function main(){
console.log("insert query");
let connectionUri={
    host     : "localhost",
        user     : "root",
        password : "root123",
        database : "cdacdb"
};
let connection=createConnection(connectionUri);
connection.connect();
let message="hello yashu";
let sql=`Insert into message (message,reply) values ('${message}',0)`;
connection.query(sql);
connection.end();
}
main();