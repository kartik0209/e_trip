const dotenv = require("dotenv");
const cors = require("cors");
const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
dotenv.config({ path: "./confling.env" });
const db = process.env.database;
const user = require("./model/userschema");
const Hotel = require("./model/Hotel");
const User = require("./model/userschema");
const HBooking = require("./model/HBooking");
const strip = require("stripe")("sk_test_51ML1K3SBObLr9ewRGvLlr04MhhEpfEpAl0CJbOp246CTAz7siWx0KcfjgqA1bbFzsFtWtPtwVpZmN29Vt9LVJoBI00XxnBQa2e")
const { v4: uuidv4 } = require('uuid');
const Flight = require("./model/Flight");
const Feedback = require("./model/Feedback");
const nodemailer = require("nodemailer");
//mongodb+srv://kartik:kr020902@cluster0.dzxfhzt.mongodb.net/?retryWrites=true&w=majority
//mongodb://localhost:27017/etrip
//mongodb+srv://kr:kr020902@cluster0.ivdulfu.mongodb.net/user_master?retryWrites=true&w=majority

mongoose.connect(db).then(() => { console.log("connected"); }).catch((e) => { console.log("fail"); });
app.use(express.json());
app.use(cors());
app.use("/", require("./router/auth"));
//app.use("/api/password-reset", password);
const middleware = (req, res, next) => {

}

middleware();
app.get("/", (req, res) => {
    res.send("hello word")
});

app.get("/about", middleware, (req, res) => {
    res.send("hello about")
});

app.get("/contact", (req, res) => {
    res.send("hello word")
});
app.get("/signin", (req, res) => {
    res.send("hello word")
});
app.get("/Alogin", (req, res) => {
    res.send("hello word")
});

app.post("/signup", (req, res) => {
    res.send("hello word")
});






//hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh

//hotel create
app.post("/addhotel", async (req, res) => {
    let hotel = new Hotel(req.body);
    let result = await hotel.save();
    res.send(result);
});

//serch api hotel
app.get("/serch/:key", async (req, res) => {

    let result = await Hotel.find({
        "$or": [
            {
                "$and": [{
                    City: { $regex: req.params.key, },


                }]
            }
        ]
    });
    res.send(result);
})

//hotel list
app.get("/hotels", async (req, res) => {
    const hotels = await Hotel.find();
    if (hotels.length > 0) {
        res.send(hotels);
    } else {
        res.send({ result: "no hotel" })
    }
})
// romm
app.post("/photels/:id", async (req, res) => {
    const hotels = await Hotel.findOne({ _id: req.params.id });
    res.send(hotels);

})
//delete hotel
app.delete("/dhotel/:id", async (req, res) => {
    let result = await Hotel.deleteOne({ _id: req.params.id });
    res.send(result)
})

// update hotel
app.get("/uhotel/:id", async (req, res) => {
    let result = await Hotel.findOne({ _id: req.params.id });
    if (result) {
        res.send(result)
    } else {
        res.send({ "result": "not record found" })
    }
})

app.put("/uphotel/:id", async (req, res) => {
    let result = await Hotel.updateOne(
        { _id: req.params.id },
        { $set: req.body }
    )
    res.send(result);
})

//hbooking
app.post("/hbook", async (req, res) => {


    let hbooking = new HBooking(req.body);
    let result = await hbooking.save();
    res.send(result);
})

// hotel feed back
app.post("/Hfeedback", async (req, res) => {
    let Hfeedback = new Feedback(req.body);
    let result = await Hfeedback.save();
    res.send(result);
});
// hotel feedback display
app.get("/Hfeedback/:id", async (req, res) => {
    let result = await Feedback.find({ Hid: req.params.id });
    if (result) {
        res.send(result)
    } else {
        res.send({ "result": "not record found" })
    }
})

//uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu

// user list
app.get("/users", async (req, res) => {
    const users = await User.find();
    if (users.length > 0) {
        res.send(users);
    } else {
        res.send({ result: "no hotel" })
    }
})
// user serch
app.get("/userch/:key", async (req, res) => {
    let result = await User.find({
        "$or": [
            {
                name: { $regex: req.params.key }
            }
        ]
    });
    res.send(result);
})
// user hotel booking
app.post("/userhbooking/:id", async (req, res) => {


    const hbooking = await HBooking.find({ userid: req.params.id });
    res.send(hbooking);

})
//user cancel hotel booking

app.put("/hcbooking/:id", async (req, res) => {
    let result = await HBooking.updateOne(
        { _id: req.params.id },
        { $set: { status: "CANCLED" } }
    )
    res.send(result);
})
// user search
app.get("/userchs/:key", async (req, res) => {
    let result = await User.find({
        "$or": [
            {
                email: { $regex: req.params.key }
            }
        ]
    });
    res.send(result);
})

// delet users
app.delete("/duser/:id", async (req, res) => {
    let result = await User.deleteOne({ _id: req.params.id });
    res.send(result)
})


//fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff

//flight create
app.post("/addflight", async (req, res) => {
    let flight = new Flight(req.body);
    let result = await flight.save();
    res.send(result);
});



//flight list
app.get("/flight", async (req, res) => {
    const flight = await Flight.find();
    if (flight.length > 0) {
        res.send(flight);
    } else {
        res.send({ result: "no flight" })
    }
})
// serch flight
app.get("/fsearch/:fcity/:tocity/:tflight", async (req, res) => {
    let result = await Flight.find({
        "$or": [
            {
                "$and": [{
                    fcity: { $regex: req.params.fcity },

                    tocity: { $regex: req.params.tocity },
                    tflight: { $regex: req.params.tflight },

                }],

            },
        ]
    });
    res.send(result);
})



// flight ticket
app.post("/ticket/:id", async (req, res) => {
    const flight = await Flight.findOne({ _id: req.params.id });
    res.send(flight);
})


app.post("/email",  (req, res) => {

    const { email } = req.body;
  

    try {

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "etrip022@gmail.com",
                pass: "zisoyipzeyqupdkd"
            }
        });

        const mailOptions = {
            from:"etrip022@gmail.com",
            to: email,
            subject: "Sending Email With  React And Nodejs",
            html: '<h1>you are successful  registration</h1> <p><b>THANK YOU</b> For Registration E-TRIP </p>  '
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log("Error" + error)
            } else {
                console.log("Email sent:" + info.response);
                res.status(201).json({status:201,info})
            }
        })

    } catch (error) {
        console.log("Error" + error);
        res.status(401).json({status:401,error})
    }
});


app.post("/hemail/:useremail/:tdate/:fdate/:username",  (req, res) => {

    const { email } = req.body;
  

    try {

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "etrip022@gmail.com",
                pass: "zisoyipzeyqupdkd"
            }
        });

        const mailOptions = {
            from:"etrip022@gmail.com",
            to: req.params.useremail,
            subject: "Sending Email With  React And Nodejs",
            html: `<h1>you are Booking successful  Done</h1> <p><b>THANK YOU ${req.params.username}</b><br> your Booking date is ${req.params.tdate} to ${req.params.fdate}  </p><br><p>Esay TO Travel and Stay With E-trip</p>  `
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log("Error" + error)
            } else {
                console.log("Email sent:" + info.response);
                res.status(201).json({status:201,info})
            }
        })

    } catch (error) {
        console.log("Error" + error);
        res.status(401).json({status:401,error})
    }
});




app.listen(5000, () => {
    console.log("conection connected");
})