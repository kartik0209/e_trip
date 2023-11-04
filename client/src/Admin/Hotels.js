import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import "./Aserche.css"
//hotel lidt
const Hotels = () => {
    const [hotels, sethotels] = useState([]);
    useEffect(() => {
        gethotels();
    }, []);
    const gethotels = async () => {
        let result = await fetch("/hotels");
        result = await result.json();
        sethotels(result);
    }
    console.log(hotels);
    //serch hotel
    const shotel = async (event) => {

        let key = event.target.value;
        if (key) {
            let result = await fetch(`/serch/${key}`);
            result = await result.json();
            if (result) {
                sethotels(result);

            } console.log(result);
        } else {
            gethotels();
        }
    }
    //delete hotel
    const deletehotel = async (id) => {
        console.log(id);
        let result = await fetch(`/dhotel/${id}`, {
            method: "Delete"
        });
        result = await result.json();
        if (result) {
            gethotels();
        }
    }



    return (<>
        <div className="Hero">
            <div className="serchbox">
                <input className="Nime" placeholder="Search" type="text" onChange={shotel} />
            
            </div>




            <table id="1-tabel" className="Tabelm"  >
                <thead>
                    <tr className="Hed" >

                        <th>Hotel Name</th>
                        <th>City</th>
                        <th>Hotel Address</th>
                        <th>Hotel Rating</th>
                        <th>Suite</th>
                        <th>Dulex</th>
                        <th>suprime</th>
                        <th>Delete</th>
                        <th>update</th>
                    </tr>
                </thead>
                {hotels.map((item, index) =>


                    <tbody>

                        <tr key={item._id}>
                            <td className="hnr">{item.Hname}</td>
                            <td>{item.City}</td>
                            <td>{item.Hadress}</td>
                            <td className="hr">{item.Hrat}</td>
                            <td className="sp">{item.SRoomprice}</td>


                            <td>{item.DRoomprice}</td>

                            <td>{item.SuRoomprice}</td>


                            <td><button className="button-12" on onClick={() => deletehotel(item._id)}>delete</button>

                            </td>
                            <td> <a className="Hyper" href={"/uhotel/" + item._id}>update</a> </td>

                        </tr>


                    </tbody>

                )}
            </table>




        </div>
    </>);
}
export default Hotels