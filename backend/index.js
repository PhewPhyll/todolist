const mongoose = require("mongoose");
const express = require("express");
const todoCardRouter = require("./routers/todoCardRouter");
const cors=require('cors');
const port = 3000;
const app = express();
mongoose
  .connect("mongodb://localhost:27017/todolist")
  .then(() => console.log("Connect Success!"));

app.use(cors())
app.use(express.json());
app.use("/api", todoCardRouter);

app.listen(port, () => `Server is listening to port${port}`);
