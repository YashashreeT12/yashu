import express from "express";
const app = express();

app.get("/", (req, res) => res.send("Hello Yashu"));

app.listen(3000);
