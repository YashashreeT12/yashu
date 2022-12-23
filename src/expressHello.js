import express from "express";
const app = express();

app.get("/", (req, res) => res.send("Hello"));
app.get("/explore", (req, res) => {
  let message = { id: 1, message: "Hi", messageTime: new Date() };
  res.json(message);
});
app.get("/cdac", (req, res) => {
  let list = [];
  list.push({ id: 1, message: "how are you?", messageTime: new Date() });
  list.push({ id: 2, message: "I'm fine", messageTime: new Date() });
  res.json(list);
});
app.listen(3000);
