const express = require("express")
const pathRouter = express.Router();
const { getAllPaths , getShortestPath, putUpdatePath } = require("../controller/Path-controller");
pathRouter.get("/",getAllPaths);
pathRouter.get("/shortest_path/",getShortestPath);
pathRouter.put("/:id", putUpdatePath);

module.exports = pathRouter ;