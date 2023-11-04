import React from 'react'
import './Tickite.css'
function Tickit() {
  return (
    <>
    
    <div class="box">
  <ul class="left">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>

  <ul class="right">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
  <div class="ticket">
    <span class="airline">Lufthansa</span>
    <span class="airline airlineslip">Lufthansa</span>
    <span class="boarding">Boarding pass</span>
    <div class="content">
      <span class="jfk">JFK</span>
      <span class="plane">
        <svg clip-rule="evenodd" fill-rule="evenodd" height="60" width="60" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
          <g stroke="#222">
            <line fill="none" stroke-linecap="round" stroke-width="30" x1="300" x2="55" y1="390" y2="390" />
           
          </g>
        </svg>
      </span>
      <span class="sfo">SFO</span>

      <span class="jfk jfkslip">JFK</span>
      <span class="plane planeslip">
      <svg clip-rule="evenodd" fill-rule="evenodd" height="50" width="50" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
          <g stroke="#222">
            <line fill="none" stroke-linecap="round" stroke-width="30" x1="300" x2="55" y1="390" y2="390" />
         
          </g>
        </svg>
      </span>
      <span class="sfo sfoslip">SFO</span>
      <div class="sub-content">
        <span class="watermark">Lufthansa</span>
        <span class="name">PASSENGER NAME<br/><span>Rex, Anonasaurus</span></span>
        <span class="flight">FLIGHT N&deg;<br/><span>X3-65C3</span></span>
        <span class="gate">GATE<br/><span>11B</span></span>
        <span class="seat">SEAT<br/><span>45A</span></span>
        <span class="boardingtime">BOARDING TIME<br/><span>8:25PM ON AUGUST 2013</span></span>

        <span class="flight flightslip">FLIGHT N&deg;<br/><span>X3-65C3</span></span>
        <span class="seat seatslip">SEAT<br/><span>45A</span></span>
        <span class="name nameslip">PASSENGER NAME<br/><span>Rex, Anonasaurus</span></span>
      </div>
    </div>
    <div class="barcode"></div>
    <div class="barcode slip"></div>
  </div>
</div>
  
  
  
  </>
  )
}

export default Tickit