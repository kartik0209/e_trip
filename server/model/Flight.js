const { time } = require("console");
const { number, string } = require("joi");
const mongoose = require("mongoose");

const FlightSchema = new mongoose.Schema({
    airlinename: {
        type: String
    },
    airlineimg:{
        type:String
    },
    fname: {
        type: String
    },
    tflight: {
        type: String
    },
    fcity:
    {
        type: String
    },
    tocity:
    {
        type: String
    },
    depdate:
    {
        type: Date
    },
    deptime:
    {
        type:String
    },
    arivtime:
    {
        type: String
    },
    price:{
type:Number
    }





},{
    timestamps:true,
});

module.exports = mongoose.model("Flight", FlightSchema);