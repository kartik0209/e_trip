import React from "react";
import { Tabs } from 'antd';
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { tr } from "date-fns/locale";
import './Profile.css'
const TabPane = Tabs.TabPane;

const Profile = () => {

  const users = JSON.parse(localStorage.getItem("currentuser"));
  useEffect(() => {
    if (!users) {
      window.location.href = "/signin"
    }
  })
  return (<>

    <Tabs defaultActiveKey="1" >
      <TabPane tab="MY profile" key="1">
        <div className="Cardiovhi">
          <div className="Cardboxing">
            <div className="Iformaitioning">
              <div className="apoxi">
                <span>Name:</span><h5>{users.name}</h5>
              </div>
              <div className="apoxi">
                <span>email:</span><h5>{users.email}</h5>
              </div>
              <div className="apoxi">
                <span>phone:</span><h5>{users.phone}</h5>
              </div>
            </div>
          </div>
        </div></TabPane>
      <TabPane tab="hotel booking" key="2"><Hotelbooking /></TabPane>
      <TabPane tab="flight booking" key="3">Content of Tab Pane 3</TabPane>
    </Tabs>


  </>)
}
export default Profile;

export function Hotelbooking() {
  const [hbook, sethbook] = useState();
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState();

  const usersid = JSON.parse(localStorage.getItem("currentuser"))._id;

  useEffect(async () => {
    try {
      setloading(true);
      const room = await (await (axios.post(`/userhbooking/${usersid}`))).data;
      setloading(false)
      sethbook(room)
      console.log(room);
    } catch (error) {
      setloading(false)
      seterror(true)
      console.log(error);
    }
  }, []);
  console.log(hbook)

  const hcbooking = async (id) => {
    console.log(id)
    try {

      const room = await (await (axios.put(`/hcbooking/${id}`))).data;

      sethbook(room)
      window.location.reload();
      console.log(room);
    } catch (error) {
      console.log(error);
    }
  }

  return (<>
    {loading ? (<>loading</>) : (<><h1>{
      hbook && (hbook.map(hbook => {
        return <div className="Ioptyu">
          <div className="HistoryBookingcard">
            <div className="IOphJKlY">
              <span>Hotel Name</span>
              <h5>{hbook.hotel}</h5>
            </div>
            <div className="IOphJKlY">
              <span>type of room</span><h5>{hbook.troom}</h5>
            </div>
            <div className="IOphJKlY">
              <span>From date</span><h5>{hbook.Fromdate}</h5>
            </div>
            <div className="IOphJKlY">
              <span>To date</span><h5>{hbook.todate}</h5>
            </div>
            <div className="IOphJKlY">
              <span>Total Amount</span><h5>{hbook.totalamount}</h5>
            </div>
            <div className="IOphJKlY">
              <span>Total Days</span><h5>{hbook.totalday}</h5>
            </div>
            <div className="IOphJKlY">
              <span >status</span><h5 className="Bnannc">{hbook.status == "booked" ? "Confermed" : "Canceled"}</h5>
            </div>
            {hbook.status != "CANCLED" && (<div><button className="Op45butoon" onClick={() => hcbooking(hbook._id)}>Cancel Booking</button></div>)}
          </div>


        </div>
      }))
    }
    </h1></>)}
  </>)
}