import React, { Component, useState } from 'react'
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes, useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Anavbar from "../Admin/Anavbar";
import axios from 'axios';
import "./Login.css"
const Login = () => {


  const history = useNavigate();
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState();

  // const loginuser = async (e) => {
  //   e.preventDefault();


  //   const res = await fetch('/signin', {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({
  //       email, password
  //     })
  //   });
  //   const data = await res.json();
  //   localStorage.setItem("currentuser",JSON.stringify(res))


  //   console.log(res)

  //   if (res.status == 422 || !data) {
  //     window.alert("not");
  //   } else if (email == "admin1@gmail.com" && password == "admin123") {
  //     history("/Admin")
  //   } else {
  //     window.alert("login");
  //      // history(`/${uu}`);
  //   }
  // }

  const loginuser = async () => {
    const user = {
      email,
      password,
    }
    try {
      setloading(true);
      const result = (await axios.post("/signin", user)).data
      setloading(false);
      localStorage.setItem("currentuser", JSON.stringify(result));
      if (result.status == 422) {
        window.alert("not");
      } else if (email == "admin02@gmail.com" && password == "admin123") {
        history("/Admin")
      } else {
        window.alert("login");
        // history(`/${uu}`);
      }

      window.location.href = "/"
    } catch (error) {

      console.log(error)
      setloading(false);
      seterror(true);
    }
    console.log(user)


  }



  return (
    <>

      <div>
        {loading && (<><h1>loading</h1></>)}

        {error && (<><h1> errorr</h1></>)}



        <main>
          <div class="row">

            <div class="colm-form">
              <div class="form-container">
                <input type="text" placeholder="Email address or phone number" autoComplete='off' value={email} onChange={(event) => setemail(event.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(event) => setpassword(event.target.value)} />
                <button className="btn-login" onClick={loginuser}>Login</button>
                <a href="#">Forgotten password?</a>
                <Link to="/signup" ><button class="btn-new">Create new Account</button></Link>
              </div>
             
            </div>
          </div>
        </main>
      </div
      ></>
  )
}

export default Login