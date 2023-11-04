const jwt = require("jsonwebtoken");
const dotenv = require("dotenv")
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const router = express.Router();
const User = require("../model/userschema");
dotenv.config({ path: "./confling.env" });
const db = process.env.database;



mongoose.connect(db).then(() => { console.log("connected db "); }).catch((e) => { console.log("fail"); });

router.get("/", (req, res) => {
    res.send("hello word router")
});

router.post("/register", async (req, res) => {
    //res.json({message:req.body});
    const { name, email, phone, password } = req.body;


    if (!name || !email || !phone || !password) {
        return res.status(422).json({ error: "plz fiil the filled" });
    }
    try {

        const userexit = await User.findOne({ email: email });

        if (userexit) {
            return res.status(422).json({ error: "user already" });
        }

        const user = new User({ name, email, phone, password });


        await user.save();

        return res.status(201).json({ message: "user registerd" });
    }
    catch (err) {
        console.log(err);
    }
});

// login router


 router.post("/signin", async (req, res) => {
   
    try {
        const { email, password } = req.body;
        
    const userlogin = await User.findOne({ email: email });
        console.log(userlogin);
        if (userlogin) {
            const ismatch = await bcrypt.compare(password, userlogin.password);
            if (!ismatch) {
                res.status(422).json({ error: "user invalid password" });
            }
            else { 
                const temp={
                    name:userlogin.name,
                    email:userlogin.email,
                    phone:userlogin.phone,
                    isAdmin:userlogin.isAdmin,
                    _id:userlogin._id,
                }
                res.send(temp)
                res.json({ message: "user login" });
            }
        } else {
            res.json({ error: "invalid" });
        }

        if (!userlogin) {
            res.json({ error: "user error" });
        }
        else {
            res.json({ message: "user login" });
        }
    } catch (err) {
        console.log(err);
    }
 });


// router.post("/signin", async (req, res) => {
//     const { email, password } = req.body;
//     try {
//         const user = await User.findOne({ email: email, password: password })
//         if (user) {
//             res.send(user)
//         }
//         else {
//             return res.status(400).json({ message: "not login" });
//         }

//     }
//     catch (error) {
//         return res.status(400).json({ error });
//     }
// })

module.exports = router;