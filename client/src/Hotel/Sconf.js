import ro from "date-fns/esm/locale/ro/index.js";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Tabs } from 'antd';
import { useParams } from "react-router-dom";
import StripeCheckout from 'react-stripe-checkout';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import axios from "axios"
import "./scon.css"
const TabPane = Tabs.TabPane;

const Sconf = () => {

    const [loading, setloading] = useState(true);
    const [error, seterror] = useState();
    const [value, setValue] = useState()

    const params = useParams()
    useEffect(() => {


        console.log(params.roomid)
    }, [params])
    //prev page data
    const nroom = params.nroom;
    const nadult = params.nadult;
    const nchild = params.nchild;
    const tdate = params.tdate;
    const fdate = params.fdate;
    const username = JSON.parse(localStorage.getItem("currentuser")).name;

    const useremail = JSON.parse(localStorage.getItem("currentuser")).email; console.log(useremail);
    // diffrence days
    function getNumberOfDays(start, end) {
        const date1 = new Date(start);
        const date2 = new Date(end);

        const oneDay = 1000 * 60 * 60 * 24;
        const diffInTime = date2.getTime() - date1.getTime();
        const diffInDays = Math.round(diffInTime / oneDay);

        return diffInDays;
    }

    const totaldays = getNumberOfDays(fdate, tdate);

    const [rooms, setrooms] = useState();
    useEffect(async () => {
        try {
            setloading(true);
            let result = await fetch(`/photels/${params.roomid}`, {
                method: "POST"
            });
            result = await result.json();
            setrooms(result);
            console.log(result);
            setloading(false);

        } catch (eroor) {
            seterror(true);
            seterror(false);
        }
    }, []);

    const tax = 890;

    const hbook = async () => {

        let result = await fetch("/hbook", {
            method: "post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ hotel: rooms.Hname, troom: "super", hotelid: rooms._id, userid: JSON.parse(localStorage.getItem("currentuser"))._id, Fromdate: fdate, todate: tdate, totalamount: rooms.SRoomprice * totaldays + tax, totalday: totaldays, status: "booked" })

        });
        const data = await result.json();
        console.log("...", data);
    }
    const onToken = async (token) => {
    }

    const [cupon, scupon] = useState("");
    console.log(cupon);

    if (!JSON.parse(localStorage.getItem("currentuser"))) {
        window.alert("please login")
        window.location.href = "/login"
    }
    const uname = JSON.parse(localStorage.getItem("currentuser")).name;
    const uphone = JSON.parse(localStorage.getItem("currentuser")).phone;
    const uemail = JSON.parse(localStorage.getItem("currentuser")).email;

    const header = {
        headers: {
            Authorization: "Bearer EAAjp5E2DOBQBABghBHt9rIZAZBF7sBu5U1wzbyAcMqOHtVCmO0S2b0YFylS2tQFSR8HspLzXdC7gyU51MNlCnSgak2IksZBVv16oTO68SZATn7SZBIYRJIg1IIMaykDdlXZAI4x5oiA9u3ZBuF2lDSP6bf4HEmhCVg5X4NEuevci4jNQuCwv8EO",
            Accept: "application/json"
        }
    }
    // send msg on wtsp
    // const smsg = () => {
    //     const body =
    //     {
    //         "messaging_product": "whatsapp",
    //         "to": "91" + uphone,
    //         "type": "template",
    //         "template": {
    //             "name": "hello_world",
    //             "language": {
    //                 "code": "en_US"
    //             }
    //         }
    //     }

    //     axios.post("https://graph.facebook.com/v15.0/105461859121830/messages", body, header)
    //         .then((res) => {
    //             console.log("send")
    //         })
    //         .catch((res) => {
    //             console.log("not")
    //         })
    // }
    const smsg = async () => {
        let result = await fetch(`/hemail/${useremail}/${tdate}/${fdate}/${username}`, {
            method: "POST"
        });
        result = await result.json();
    }

    return (<>

        {loading ? (<h1>loading</h1>) : error ? (<h2>eroor</h2>) : (<><h1>rooms</h1>
            <div className="p290">
                <div>
                    <div className="Box65">
                        <div className="Textcontainer">
                            <div className="Containe03">
                                <h3>{rooms.Hname}</h3>
                                <div className="ratingbutton">{rooms.Hrat}</div>
                                <p>{rooms.Hadress}</p>
                                <p>{rooms.City}</p>

                            </div>
                            <div className="container04">
                                <h2><img src={rooms.SRoomurl} alt="" height="90px" width="90px" /></h2>
                            </div>


                        </div>
                    </div>
                    <div className="Formstrick">
                        <Tabs defaultActiveKey="1" >
                            <TabPane tab="Myself" key="1">
                                <div>
                                    <div>
                                        <div className="Box45">
                                            <div className="Inputtitel">
                                                <p>Full Name</p>
                                                <input type="text" className="Inptboxerro" placeholder="FIRSTNAME" defaultValue={uname} />
                                            </div>
                                            <div className="Inputtitel">
                                                <p>Last Name</p>
                                                <input type="text" placeholder="LASTNAME" className="Inptboxerro01" />
                                            </div>
                                        </div>
                                        <div className="Inputharryuop">
                                            <div>
                                                <p>Mobile NO</p>
                                                <PhoneInput
                                                    placeholder="Enter phone number"
                                                    value={value}
                                                    className="Inputoklio"
                                                    onChange={setValue} defaultValue={uphone} />
                                            </div>
                                            <div>
                                                <p>Email Address</p>
                                                <input type="email" className="INPUTREWQ" name="user_email" placeholder="E-MAIL" defaultValue={uemail} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPane>

                            <TabPane tab="Someone else" key="2"><div>
                                <div><div>
                                    <div className="Box45">
                                        <div className="Inputtitel">
                                            <p>Full Name</p>
                                            <input type="text" className="Inptboxerro" placeholder="FIRSTNAME" defaultValue={uname} />
                                        </div>
                                        <div className="Inputtitel">
                                            <p>Last Name</p>
                                            <input type="text" placeholder="LASTNAME" className="Inptboxerro01" />
                                        </div>
                                    </div>
                                    <div className="Inputharryuop">
                                        <div>
                                            <p>Mobile NO</p>
                                            <PhoneInput
                                                placeholder="Enter phone number"
                                                value={value}
                                                className="Inputoklio"
                                                onChange={setValue} defaultValue={uphone} />
                                        </div>
                                        <div>
                                            <p>Email Address</p>
                                            <input type="email" className="INPUTREWQ" name="user_email" placeholder="E-MAIL" defaultValue={uemail} />
                                        </div>
                                    </div>

                                </div>
                                </div></div></TabPane>

                        </Tabs>
                    </div>
                </div>
                <div className="Perent209">
                    <div className="TYUIOPLKJ">
                        <div className="Datedesgine">

                            <div className="checkindated">
                                <span className="Spanchackin">CHECK IN</span>
                                <span className="Datetexts_uio">{fdate}</span>
                            </div>
                            <div className="Chack___slash">

                                <span>TO</span>
                            </div>
                            <div className="checkindated">
                                <span className="Spanchackin">CHECK OUT</span>
                                <span className="Datetexts_uio">{tdate}</span>
                            </div>
                        </div>
                        <h3>Price Breakup</h3>
                        <div className="PriceFdi">
                            <div>
                                <span>{nadult} <span>Adult</span></span> X <span>{nroom} <span>Romms</span></span>
                            </div>
                            <div className="OPKL_IO">
                                <h5>{rooms.SRoomprice}</h5>
                            </div>
                        </div>

                        <div className="U-90">
                            <p>{nchild} child</p>

                            <p> {totaldays} days</p>
                        </div>
                        <div className="Q-70">
                            <span>Enter the cupon code</span>
                            <div className="OP9">
                                <input type="text" onChange={(e) => scupon(e.target.value)} />
                            </div>
                        </div>
                        <div className="TAxingvalues">
                           <div> <span>
                                Total Tax</span></div>
                                 <div className="YUIOP8"><h3>{tax}</h3></div>
                                 </div>
                        {(cupon == "E-TRIP10") ? (<>
                            <h3>save money 2000</h3>
                                <div className="Fistelse"><h4 >{(rooms.SRoomprice * totaldays) + tax - 2000} </h4></div></>)
                            :
                            (<> <div className="Secondelse"><span className="ioyhujkilo"> Total Amount</span> <h4 className="UIOp">{(rooms.SRoomprice * totaldays) + tax}</h4> </div></>)}



                   


                        <a onClick={hbook}>

                            <StripeCheckout
                                amount={((rooms.SRoomprice * totaldays) + tax) * 100}
                                token={onToken}
                                currency="INR"
                                stripeKey="pk_test_51ML1K3SBObLr9ewR2Zt8IlmxF7TqZgALmlUNqtQkxXJ1SjEhYgWk53kSRA8cVra5CXPcifkLAxT3lZ6jBWcb4mfM00Ec7mcPDj"
                            >
                                <button className="Op45butoon" onClick={smsg}>paynow</button>
                            </StripeCheckout>
                        </a>
                    </div>
                </div>
            </div>
        </>)

        }

    </>)
}
export default Sconf;