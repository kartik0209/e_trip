import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import "./Addhotel.css"
const Uhotel = () => {
    const [Hname, setname] = useState("");
    const [City, setcity] = useState("");
    const [Hadress, setadress] = useState("");
    const [Hrat, sethrat] = useState("");
    const [Sroomprice, setsroomprice] = useState("");
    const [Sroomurl, setsroomurl] = useState("");
    const [DRoomprice, setdroomprice] = useState("");
    const [DRoomurl, setdroomurl] = useState("");
    const [Suroomprice, setsuroomprice] = useState("");
    const [SuRoomurl, setsuroomurl] = useState("");
    const params=useParams();

    useEffect(()=>{
        gethoteldetails();
    },[])
    const gethoteldetails=async()=>{
     console.log("kkkk"+params);
        // let result=await fetch(`/uhotel/${params._id}`);
        // result=await result.json();

        // console.log(result)
    }

         const updatehotel= async(id)=>{
              console.log(id);
        //         let result=await fetch(`/uphotel/${id}`,{
        //             method:"put",
        //             headers:{
        //                 "content-type":"application/json"
        //             },
        //             body:JSON.stringify({Hname,City,Hadress,Hrat,Sroomprice,Sroomurl,DRoomprice,DRoomurl,Suroomprice,SuRoomurl})
                    
        //         });
        //         const data=await result.json();
        //         console.log(data);
         }
    
      
    return (<>
    <div className="background">
        <center>
        <div className="Box09">
            <form action="Submit">
        
        <input type="text" id="Hname" name="Hname" placeholder="Enter hotel name" value={Hname} onChange={(e)=>{setname(e.target.value)}} />
        <input type="text" id="city" name="City" placeholder="Enter city" value={City} onChange={(e)=>{setcity(e.target.value)}}/>
        <input type="text" id="Hadress" name="Hadress" placeholder="Enter hotel Address" value={Hadress} onChange={(e)=>{setadress(e.target.value)}}/>
        <input type="text" id="Hrat" name="Hrat" placeholder="Enter Hotal Rating" value={Hrat} onChange={(e)=>{sethrat(e.target.value)}}/>
        <input type="text" id="Sroomprice" name="Sroomprice" placeholder="Enter super price" value={Sroomprice} onChange={(e)=>{setsroomprice(e.target.value)}} />
        <input type="text" id="Sroomurl" name="Sroomurl" placeholder="Enter super url" value={Sroomurl} onChange={(e)=>{setsroomurl(e.target.value)}}/>
        <input type="text" id="Droomprice" name="Droomprice" placeholder="Enter dulexroom price" value={DRoomprice} onChange={(e)=>{setdroomprice(e.target.value)}}/>
        <input type="text" id="Droomurl" name="Droomurl" placeholder="Enter dulexroom url" value={DRoomurl} onChange={(e)=>{setdroomurl(e.target.value)}}/>
        <input type="text" id="Suroomprice" name="Suroomprice" placeholder="Enter suiteroom url" value={Suroomprice} onChange={(e)=>{setsuroomprice(e.target.value)}}/>
        <input type="text" id="Suroomurl" name="Suroomurl" placeholder="Enter suiteroom url" value={SuRoomurl} onChange={(e)=>{setsuroomurl(e.target.value)}}/>
        <button onClick={updatehotel} >update  hotel</button>
        </form>
        </div>
        </center>
        </div>

    </>);
    }
export default Uhotel;