import React, { useEffect, useState } from 'react';
// 👇️ import Routes instead of Switch 👇️
import { BrowserRouter as Router, Route, Link, Routes, json } from 'react-router-dom';
import About from './About';
import Home from "./Home";
import Usflight from '../Flight/Usflight';
import Ushotels from '../Hotel/Ushotel';
import Signup from "./Signup";
import Contact from './Contact';
import Login from "./Login";
import Anavbar from "../Admin/Anavbar";
import Uhotel from "../Admin/Uhotel";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import "./Navbar.css"
import e1 from "./e4.png"

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*========+++++++++++++++++===========+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=*/


const Navbar = () => {

  const logout = () => {
    localStorage.removeItem("currentuser");
    window.location.href = "/"
  }

  const users = JSON.parse(localStorage.getItem("currentuser"));
  console.log(users);

  return (
    <div className='first'>
      <nav className='navi'>
        <ul className='Unorder'>
          <h3 className='Logo'><a href="/">E-TRIP</a></h3>
          <div className='p1'>

            {(users == null) ? (<>
              <li className='List'><a href="./Login">Login</a></li>
              <li className='List'><a href="./Signup">Register</a></li>
            </>)
              :
              (<>
                <div class="dropdown">
                <li className='List'><a  className="dropbtn">{users.name}</a></li>
                <div className="dropdown-content">
                <div className='Dropdown_logout'>
                <a href="" onClick={logout}>logout</a>
                <a href='/profile'> profile</a>
                </div>
                </div>
                </div>
               

               
              </>)}

            <li className='List'><a href="./Ushotel">hotel</a></li>
            <li className='List'><a href="./Usflight">Flight</a></li>
            
          </div>
        </ul>

      </nav>
      {/* <div className='Box1'>
        <input type="text" placeholder='Enter city' />
        <input type="Date" placeholder='Check-IN' />
        <input type="Date" placeholder='Check-Out' />

      </div> */}
      {/* 👇️ Wrap your Route components in a Routes component */}
      {/* <Router>
        <Routes>
          <Route path="/" element={<Ushotels />} />
          <Route path='/Login' element={<Login />} />
          <Route path="/Ushotel" element={<Ushotels />} />
          <Route path="/Usflight" element={<Usflight />} />
          <Route path="*" element={<Error />} />
          <Route path="/Admin" element={<Anavbar />} />
        </Routes>
      </Router> */}

    </div>

  );
}




export default Navbar;


