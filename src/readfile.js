import {readFile} from "node:fs/promises"; 


async function main(){
    console.log("read file demo");

    let filepath="C:\\Users\\yasha\\OneDrive\\Desktop\\cdac\\for_nodejs.txt";
    let output= await readFile(filepath,{encoding: "utf8"});
    console.log(output);
}

main();