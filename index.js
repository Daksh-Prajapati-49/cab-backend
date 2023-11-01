// server.js
require("dotenv").config(); //added
const express = require("express");

const connectDB = require("./config/db"); //added

const pathRouter = require("./routes/path-routes");
const cabRouter = require("./routes/cab-routes");

const app = express();

// connect database
connectDB();//added

// initialize middleware
app.use(express.json({ extended: false }));


app.use("/api/paths",pathRouter);
app.use("/api/cabs",cabRouter);
app.get("/", (req, res) => res.send("Server up and running"));

// setting up port
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});