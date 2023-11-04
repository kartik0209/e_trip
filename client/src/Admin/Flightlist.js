import Item from "antd/es/list/Item";
import React, { useEffect, useState } from "react";
const Flightlist = () => {
    const [flight, setflight] = useState([]);
    useEffect(() => {
        getflight();
    }, []);
    const getflight = async () => {
        let result = await fetch("/flight");
        result = await result.json();
        setflight(result);
    }
    console.log("WW", flight[0].airlinename);
    return (<>
        <h1>flight</h1>
  
       

    </>)
}
export default Flightlist;