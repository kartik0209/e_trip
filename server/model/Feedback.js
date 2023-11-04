const { time } = require("console");
const { number, string } = require("joi");
const mongoose = require("mongoose");

const Feedbackschema = new mongoose.Schema({

    Hid: {
        type: String
    },
    Rat: {
        type: String
    },
    Hr: {
        type: String
    },
    Review: {
        type: String
    },
    Rdate: {
        type: String
    },
    Uname:{
        type:String
    },
    Ar:{
        type:String
    },
    Fid:{
        type:String
    }


}, {
    timestamps: true,
});

module.exports = mongoose.model("Feedback", Feedbackschema);