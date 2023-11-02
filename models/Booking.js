const mongoose = require("mongoose");

const CabSchema = new mongoose.Schema({
    mail: {
        type: "String",
        required: true,
    },
    start_time:{
        type: "Date",
        required: true,
    },
    end_time: {
        type: "Date",
        required: true,
    },
    price: {
        type: "Number",
        required: true,
    },
    source:{
        type: "String",
        required: true,
    },
    destination:{
        type: "String",
        required: true,
    },
});

const Cab = mongoose.model("cab", CabSchema);

module.exports = Cab;