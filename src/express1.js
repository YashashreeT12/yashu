import express from "express";
const app = express();

app.get("/", (req, res) => res.send("Hello Yashu"));
app.get("/explore", (req, res) => {
  res.send("Hello Yashu 2");
});
app.listen(3000);
