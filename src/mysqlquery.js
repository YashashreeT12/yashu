import {createConnection} from "mysql";

function main(){
    console.log("MYSQL QUERY");

    let connectionUri = {
        host     : "localhost",
        user     : "root",
        password : "root123",
        database : "cdacdb"
    };
    
    let connection=createConnection(connectionUri);
    
    connection.connect();
    
    let sql = `INSERT INTO message (message,reply) VALUES ('Hello World',0)`;
    connection.query(sql);
    
    connection.end();

}
main();