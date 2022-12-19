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
    let sql = `SELECT * FROM message`;
    connection.query(sql,(error,results) =>{
        console.log(results);
    });
    connection.end();
}

main();