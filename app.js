require("dotenv").config();
const express = require("express");

const app = express();
const port = process.env.port;
const tasksRouter = require("./routes/tasksRouter");
const coonectDb = require("./dataBase/dbConnect");
require("dotenv").config();

app.use(express.static("./public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home Page");
  res.end();
});

app.use("/api/v1/tasks", tasksRouter);

const startServer = async () => {
  try {
    await coonectDb(process.env.dbConnectUrl);
    app.listen(port, () => {
      console.log(`App is listening to port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
startServer();
