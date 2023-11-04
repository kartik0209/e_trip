import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import TabPane from "antd/es/tabs/TabPane";
import { Tabs } from "antd"
import { Link, useParams } from "react-router-dom";
import StripeCheckout from 'react-stripe-checkout';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import './finaltick.css'
import '../Hotel/scon.css'
const Ticket = () => {


    const [loading, setloading] = useState(true);
    const [error, seterror] = useState();
    const [value, setValue] = useState();
    const params = useParams()
    useEffect(() => {

        console.log(params.fid)
    }, [params])


    const [flight, setflight] = useState();
    const [price, setprice] = useState();
    const [fclass, setfclass] = useState();
    const tax = 899
    const totalamt = price + tax;
    console.log(tax)
    useEffect(async () => {
        try {
            setloading(true);
            let result = await fetch(`/ticket/${params.fid}`, {
                method: "POST"
            });
            result = await result.json();
            setflight(result);
            setprice(result.price)
            setfclass(result.tflight)
            console.log(result);
            setloading(false);

        } catch (eroor) {
            seterror(true);
            seterror(false);
        }
    }, []);


    const uname = JSON.parse(localStorage.getItem("currentuser")).name;
    const uphone = JSON.parse(localStorage.getItem("currentuser")).phone;
    const uemail = JSON.parse(localStorage.getItem("currentuser")).email;

    return (<>
        {loading ? (<><h1>loading</h1></>) : error ? (<><h1>error</h1></>) : (<>

            <div className="PerentBg">
                <div className="Marginghoio">
                    <div className="Hero_dev">
                        <div className="LogoNamecompany">
                            <img src={flight.airlineimg} alt="" />
                            <h4>{flight.airlinename}</h4>

                        </div>
                        <div>
                            <div className="Heropiuo">
                                <span>Flight Name</span><h4>{flight.fname}</h4>
                            </div>
                            <div className="Heropiuo">
                                <span>Flight class</span><h4>{flight.tflight}</h4>



                            </div>
                            <div className="Heropiuo">
                                <span>Date</span>
                                <h4>{flight.depdate}</h4>
                            </div>
                            <div className="intnearby">
                                <div className="Protectorting">
                                    <div className="Circlepointiong">
                                        <span className="Fonsizeing">{flight.deptime}</span>
                                        <span className="Lovecircle"></span>
                                    </div>
                                    <div>
                                        <span>{flight.fcity}</span>
                                    </div>

                                </div>
                                <div className="Postions">
                                    <span></span>
                                </div>

                                <div className="Protectorting01">
                                    <div>
                                        <span className="Fonsizeing">{flight.arivtime}</span>
                                        <span className="Lovecircle"></span>
                                    </div>
                                    <div>
                                        <span>{flight.tocity}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Form_texing">
                        <Tabs defaultActiveKey="1" >
                            <TabPane tab="MY self" key="1">
                                <div>
                                    <div className="Box45">
                                        <div className="Inputtitel">
                                            <p>Full Name</p>
                                            <input type="text" className="Inptboxerro" placeholder="FIRSTNAME" defaultValue={uname} />
                                        </div>
                                        <div className="Inputtitel">
                                            <p>Last Name</p>
                                            <input type="text" className="Inptboxerro01" placeholder="LASTNAME" />
                                        </div>
                                    </div>
                                    <div className="Inputharryuop">
                                        <div>
                                        <p>Mobile No</p>
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
                                    <Link to={`/seat`}><button className="Op45butoon">continue</button></Link>
                                </div>
                            </TabPane>


                        </Tabs>

                    </div>
                </div>
                <section>
                    <div className="price_tickitem">
                        <div className="picolop">
                            <p>Fare Summary</p>
                        </div>
                        <div className="Fairprice">
                            <div className="Fairrow">
                                <div className="Fairrowtext">
                                    <span className="Appandicons">
                                        <img src="https://jsak.mmtcdn.com/flights/assets/media/ic_expand.68dc8068.png" alt="" />
                                    </span>
                                    <span className="Fontyio">Base price</span>
                                </div>
                                <div>
                                    <span className="Fontyio">{flight.price}</span>
                                </div>
                            </div>

                        </div>
                        <div className="Fairprice">
                            <div className="Fairrow">
                                <div className="Fairrowtext">
                                    <span className="Appandicons">
                                        <img src="https://jsak.mmtcdn.com/flights/assets/media/ic_expand.68dc8068.png" alt="" />
                                    </span>
                                    <span className="Fontyio">Tax</span>
                                </div>
                                <div>
                                    <span className="Fontyio">{tax}</span>
                                </div>
                            </div>
                        </div>
                        <div className="Fairprice">
                            <div className="Fairrow">
                                <div className="Fairrowtext">
                                    <span className="Appandicons">
                                        <img src="https://jsak.mmtcdn.com/flights/assets/media/ic_expand.68dc8068.png" alt="" />
                                    </span>
                                    <span className="Fontyio">Total Amount</span>
                                </div>
                                <div>
                                    <span className="Fontyio">{totalamt}</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                
            </div>
        </>)}

    </>)
}
export default Ticket;
