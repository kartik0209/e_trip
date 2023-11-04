const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt=require("jsonwebtoken");
const userschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number, 
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    

    
 
}, {
    timestamps:true,
})


// hasing password

userschema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password =await  bcrypt.hash(this.password, 12);
    }
    next();
});

userschema.methods.generateAuthToken=async function(){
    try{
        let tokenkr=jwt.sign({_id:this._id.toString()},process.env.SECRET_KEY);
            this.tokenes=this.tokenes.concat({tokenkr:tokenkr});
           await this.save();
           return tokenkr;
    }catch(e){
        console.log(e);
    }
}



const User = mongoose.model("user", userschema);

module.exports = User;

