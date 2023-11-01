const express = require("express")
const pathRouter = express.Router();
const { getAllPaths } = require("../controller/Path-controller");
pathRouter.get("/",getAllPaths);
module.exports = pathRouter ;