import {createConnection} from "mysql";

function main(){
    console.log("MYSQL DEMO");
    let connectionUri = {
        host     : "localhost",
        user     : "root",
        password : "root123",
        database : "cdacdb"
    }
    let connection=createConnection(connectionUri);
    connection.connect();

    connection.end();
}

main();