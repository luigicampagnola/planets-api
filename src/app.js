// this is where all the express code lives
// app dependencies
const express = require("express");
const cors = require("cors");

const planetRouters = require("./routes/planets/planets.router");

//App setup
const app = express();

//middlewares
app.use(
  cors({
    origin: "http://localhost:3000", // we pass as an object our origin white list to accept req
  })
);
app.use(express.json());
app.use("/planets", planetRouters);

module.exports = app;
 