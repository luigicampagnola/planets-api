const express = require("express");


//const planetControllers = require("./planets.controller") destructored:
const { getAllPlanets } = require("./planets.controller");
const planetRouters = express.Router();

planetRouters.get("/", getAllPlanets);

module.exports = planetRouters;
