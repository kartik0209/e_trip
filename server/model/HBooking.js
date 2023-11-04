const { string } = require("joi");
const mongoose=require("mongoose");

const HBooking=mongoose.Schema({

    hotel:{
        type:String
    },
    troom:{
        type:String
    },
    hotelid:{
        type:String
    },
    userid:{
        type:String
    },
    Fromdate:{
        type:String
    },
    todate:{
        type:String
    },
    totalamount:{
        type:Number
    },
    totalday:{
        type:Number
    },
    payid:{
        type:String
    },
    status:{
        type:String, default:"booked"
    }


},{
    timestamps:true,
})


module.exports  = mongoose.model("Hbooking", HBooking);


