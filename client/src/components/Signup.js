import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { NavLink } from 'react-router-dom'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
//import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./singUP.css"


const Signup = () => {
  const history = useNavigate();


  const [user, setuser] = useState({
    name: "", email: "", phone: "", password: ""
  });

  let name, value;
  const handleinput = (event) => {
    name = event.target.name;
    value = event.target.value;
    setuser({ ...user, [name]: value });
  }

  const postdata = async (e) => {
    e.preventDefault();

    const { name, email, phone, password } = user;

    if (name == "") {
      alert("enter name")
    } else if (email == "") {
      alert("enter email")
    } else if (phone == "") {
      alert("enter phone")
    } else if (password == "") {
      alert("enter password")
    } else if (!email.includes("@")) {
      alert("enter valid email")
    } else if (phone.length < 10) {
      alert("enter valid phone")
    }
    else {
      const res = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name, email, phone, password
        })
      });

      const data = await res.json();
      console.log(data);
      let result = await fetch(`/email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email
        })
      });
      result = await result.json();
      if (res.status === 422 || !data) {
        window.alert("invalid registered");

      } else {

        window.alert("successful");


        //  history("/login");
      }
    }

  }

  return (

    <>
      <dir>
      
        <main>
          <div className='Rowing'>
            <div className='Coulamefroming'>
              <div className='Form_container'>
                <form method='POST'>
                  <input type="text" name='name' id='name' autoComplete='off' value={user.name} onChange={handleinput} placeholder='your name' />
                  <input type="text" name='email' id='email' autoComplete='off' value={user.email} onChange={handleinput} placeholder='your e-mail' />
                  <input type="text" name='phone' id='phone' autoComplete='off' value={user.phone} onChange={handleinput} placeholder='your phone' />
                  <input type="password" name='password' id='password' autoComplete='off' value={user.password} onChange={handleinput} placeholder='your password' />
                  <button className="btn-login" type="submit" name="signup" id='signup' value="register" onClick={postdata} >Create Account</button>
                  <Link to="/Login" ><button class="btn-new">Alreday Logged??</button></Link>
                </form>
              </div>
            </div>
          </div>
        </main>
      </dir>
      
    </>
  )

}

export default Signup;

