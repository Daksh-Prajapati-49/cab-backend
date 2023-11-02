const mongoose = require("mongoose");
const Book = require("../models/Booking");

const getAllBookings = (req, res) => {
    Book.find()
        .then((todo) => {
            res.status(200).json(todo);
        })
        .catch((err) =>
            res
                .status(404)
                .json({ message: "Bookings not found", error: err.message })
        );
}

const postCreateBookinkgs = (req, res) => {
    Cab.create(req.body)
        .then((data) => res.json({ message: "Booking added successfully", data }))
        .catch((err) =>
            res
                .status(400)
                .json({ message: "Failed to add Booking details", error: err.message })
        );
};


// const putUpdateCabs = (req, res) => {
//     Cab.findByIdAndUpdate(req.params.id, req.body)
//         .then((data) => res.json({ message: "updated successfully", data }))
//         .catch((err) =>
//             res
//                 .status(400)
//                 .json({ message: "Failed to update Cab details", error: err.message })
//         );
// };


module.exports = { getAllBookings: getAllBookings, postCreateBookinkgs : postCreateBookinkgs} ;