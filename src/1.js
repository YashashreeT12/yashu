import {createConnection} from "mysql";

function main(){
    console.log("SELECT QUERY");

    let connectionUri={
        host     : "localhost",
        user     : "root",
        password : "root123",
        database : "cdacdb"
    };
    let connection=createConnection(connectionUri);
    connection.connect();
    let sql = `CREATE TABLE STUD (id int, name varchar(10))`;
   connection.query(sql);
    connection.end();
}

main();