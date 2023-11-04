import React from 'react';
import About from './components/About';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Anavbar from './Admin/Anavbar';
import Login from './components/Login';
import Ushotels from './Hotel/Ushotel';
import Error from './components/Error';
import Signup from './components/Signup';

import Contact from './components/Contact';
import Userlist from './Admin/Userlist';
import Hotels from './Admin/Hotels';
import Uhotel from './Admin/Uhotel';
import Footer from './components/Footer';
import Addhotel from './Admin/Addhotel';
import Rooms from './Hotel/Rooms';
import Sconf from './Hotel/Sconf';
import Suconf from './Hotel/Suconf';
import Dconf from './Hotel/Dconf';
import Profile from './User/Profile';
import Usflight from './Flight/Usflight';
import Flight from './Flight/Flights';
import Ticket from './Flight/Ticket';
import Seat from './Flight/Seat';
import AdSlider from './Hotel/AdSlider';
import FAdSlider from './Hotel/FAdSlider';
import LOcationArt from './Hotel/ImageSlider';




function App() {
  

  return (
    <>
<Navbar/>
    
      <Router>
        <Routes>
        

          <Route path="/" element={<Ushotels />} />
          <Route path='/Login' element={<Login />} />
          <Route path="/Ushotel" element={<Ushotels />} />

          <Route path="*" element={<Error />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          {/* //hotel */}
          <Route path='/rooms/:roomid' element={<Rooms />} />
          <Route path='/rooms/:roomid/:nroom/:nadult/:nchild/:fdate/:tdate' element={<Rooms />} />
          <Route path='/rooms/:roomid/:nroom/:nadult/:nchild/:fdate/:tdate/ushotel' element={<Ushotels />} />

          <Route path='/Sconf/:roomid' element={<Sconf />} />
          <Route path='/Sconf/:roomid/:nroom/:nadult/:nchild/:fdate/:tdate' element={<Sconf />} />
          <Route path='/Dconf/:roomid' element={<Dconf />} />
          <Route path='/Dconf/:roomid/:nroom/:nadult/:nchild/:fdate/:tdate' element={<Dconf />} />
          <Route path='/Suconf/:roomid' element={<Suconf />} />
          <Route path='/Suconf/:roomid/:nroom/:nadult/:nchild/:fdate/:tdate' element={<Suconf />} />



          {/* admin */}
          <Route path="/Admin" element={<Anavbar />} />
          <Route path="/addhotel" element={<Addhotel />} />
          <Route path="/Userlist" element={<Userlist />} />
          <Route path="/Hotels" element={<Hotels />} />
          <Route path="/uhotel/:id" exact={true} element={<Uhotel />} />
          {/* flight */}
          <Route path="/usflight" element={<Usflight/>} />
          {/* Usflight  */}
          <Route path="/flights/:fcity/:tocity/:tflight" exact={true} element={<Flight />} />
          <Route path="/ticket/:fid" exact={true} element={<Ticket />} />
          <Route path="/seat" element={<Seat />} />
        </Routes>
      </Router>
     
<Footer/>
    </>
  );
}

export default App;
