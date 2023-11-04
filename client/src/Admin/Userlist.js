import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import "./Updatehotel.css"
//user list
const Userlist = () => {
    const [users, setusers] = useState([]);
    useEffect(() => {
        getusers();
    }, []);
    const getusers = async () => {
        let result = await fetch("/users");
        result = await result.json();
        setusers(result);
    }
    console.log(users);
    //serch user
    const susers = async (event) => {

        let key = event.target.value;
        if (key) {
            let result = await fetch(`/userch/${key}`);
            result = await result.json();
            if (result) {
                setusers(result);

            } console.log(result);
        } else {
            getusers();
        }
    }
    //delete user
    const deleteuser = async (id) => {
        console.log(id);
        let result = await fetch(`/duser/${id}`, {
            method: "Delete"
        });
        result = await result.json();
        if (result) {
            getusers();
        }

    }


    return (<>
     <div className="Hero">
     <div className="serchbox">
        <input type="text" placeholder="serch" onChange={susers} />
        
        </div>

        <table  className="Tabelm2"  >
        <thead>
                    <tr className="Hed" >

                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Dob</th>
                        <th>HelthInjuries</th>
                        <th>Profession</th>
                        </tr>
                        </thead>

        {users.map((item, index) =>

            <tbody> 
            <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>




                <td><button className="button-12" on onClick={() => deleteuser(item._id)}>delete</button>
                </td>
            </tr>
            </tbody>
        )

        }
        </table>
        </div>
    </>);
}
export default Userlist;