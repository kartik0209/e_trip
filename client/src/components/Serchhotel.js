import React, { useState,useEffect } from "react";

const Serchhotel=()=>
{
    const [hotels,sethotels]=useState([]);
    useEffect(()=>{
        gethotels();
    },[]);
    const gethotels= async()=>{
        let result= await fetch("/hotels");
        result=await result.json();
        sethotels(result);
    }

    
    const shotel=async(e)=>{
        let key=e.target.value;
        let result=fetch(`/serch/${key}`);
        result=await result.json()
        console.log(result);
        if(result){
            sethotels(result);
            console.log(result);
        }
    }
    return(<>
    <input type="text" placeholder="serch" />
    <button onClick={shotel}>serch</button>
    </>);
}
export default Serchhotel;