import React from 'react';
// 👇️ import Routes instead of Switch 👇️
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import About from '../components/About';
import Home from "../components/Home";
import Signup from "../components/Signup";
import Contact from '../components/Contact';
import Login from "../components/Login";
import Uhotel from "../Admin/Uhotel";
import "./Admincss.css"
import Hotels from './Hotels';
import Userlist from './Userlist';

export default function Anavbar() {
  if(!JSON.parse(localStorage.getItem("currentuser")).isAdmin){
    window.alert("you are not allowed")
    window.location.href="/"
  }

  return (
    // <Router>
    
      <div>
        <div className='navbar'>
          <div className="subnav">
            <button className="subnavbtn">Hotel <i className="fa fa-caret-down"></i></button>
            <div className="subnav-content">
              <span className='P_J'>
                <a href="./Hotels" className='Links_V' > Hotel List</a></span>


              <a href="/addhotel" className='Links_V' >Add Hotel</a>

              <a href="/Uhotel/:id" className='Links_V' >Update Hotel</a>

            </div>
          </div>
          <div className="subnav">
            <button className="subnavbtn">Flight <i className="fa fa-caret-down"></i></button>
            <div className="subnav-content">
              <a href="/flightlist" className='Links_V' >Flight list</a>

              <a href="/contact" className='Links_V' >Add Flight</a>

              <a href="/Uhotel/:id" className='Links_V' >Update Flight</a>
              <br />
            </div>
          </div>
          <div className="subnav">
            <button className="subnavbtn">Manage User<i className="fa fa-caret-down"></i></button>
            <div className="subnav-content">


              <a href="/Userlist" className='Links_V' >Ulist</a>
              <br />


            </div>
          </div>
        </div>

        {/* 👇️ Wrap your Route components in a Routes component */}
        {/* <Routes>
          <Route path="/" element={<Hotels />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Userlist" element={<Userlist />} />
          <Route path="/Hotels" element={<Hotels />} />
          <Route path="/uhotel/:id" exact={true} element={<Uhotel />} />
        </Routes> */}


      </div>

    // </Router>
  );
}






