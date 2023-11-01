const express = require("express")
const cabRouter = express.Router();
const { getAllCabs, putUpdateCabs } = require("../controller/Cab-controller");
cabRouter.get("/",getAllCabs);
cabRouter.put("/:id",putUpdateCabs);
module.exports = cabRouter ;