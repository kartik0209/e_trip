import Item from "antd/es/list/Item";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./flight.css";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
const Flights = () => {
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState();
  const [flights, setflight] = useState();

  const params = useParams()
  useEffect(() => {
    console.log(params.fcity)
  }, [params])

  const fcity = params.fcity;
  const tocity = params.tocity;
  const tflight = params.tflight;


  useEffect(async () => {
    try {
      setloading(true);
      let result = await fetch(`/fsearch/${fcity}/${tocity}/${tflight}`, {
        method: "GET"
      });
      result = await result.json();
      setflight(result);
      console.log(result);
      setloading(false);

    } catch (eroor) {
      seterror(true);
      seterror(false);
    }
  }, []);
  const goback = () => {
    window.location.href = "/usflight"
  }
  return (<>
    {loading ? (<><h1>loading</h1></>) : error ? (<><h1>eroor</h1></>) : (<>
      {
        flights.length > 0 ? flights.map((item, index) =>

          <ul key={item._id}>
            <div className="Flightmenue">
              <div className="Second_flightmenu">
                <div className="First-flexdiv">
                  <span className="Airloneimg">
                    <img src={item.airlineimg} alt="" />
                  </span>
                  <div className="Airlinenametxt">
                    <h5>{item.airlinename}</h5>
                    <span>{item.fname}</span>
                  </div>
                </div>
                <div className="second-flexdiv">
                  {/* <span>{item.depdate}</span> */}
                  <div className="Datedivpo">
                  <div className="iuyimnbv">
                  <h3>{item.deptime}</h3>
                  <span>{item.fcity}</span>
                  </div>
                  <div className="Secondate90">
                  <h3>{item.arivtime}</h3>
                  <span>{item.tocity}</span>
                  </div>
                  </div>
                </div>
                {/* <h2>{item.tflight}</h2> */}
                <div className="thierd-flexdiv">
                  <h2>₹{item.price}</h2>
              
                <Link to={`/ticket/${item._id}`}><button className="Op45butoon">booked now</button></Link>
                </div>
              </div>
            </div>
          </ul>
        ) : (<><h2>not flight</h2>
          <button className="Op45butoon" onClick={goback}>goback</button></>)


      }
    </>)}



  </>)
}
export default Flights;