import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import "./Usflight.css";
import AdSlider from "../Hotel/AdSlider";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // th
import { faPlane, faHotel } from "@fortawesome/free-solid-svg-icons";
import { faPerson } from "@fortawesome/free-solid-svg-icons"
import { faCalendar } from "@fortawesome/free-regular-svg-icons"
import FAdSlider from "../Hotel/FAdSlider";
import LOcationArt from "../Hotel/ImageSlider";
import ImageSlider from "../Hotel/ImageSlider";
import "../components/Navbar.css";
const Usflight = () => {


  const images = [
    "https://picsum.photos/id/1/500/300",
    "https://picsum.photos/id/2/500/300",
    "https://picsum.photos/id/3/500/300"
  ];




  const [fcity, setfcity] = useState();
  const [tocity, settocity] = useState();
  const [dates, setdate] = useState();
  const [fclass, setfclass] = useState();
  console.log(fclass)

  const today = new Date()
  const d = today.getDate() + "-" + today.getMonth() + 1 + "-" + today.getFullYear();
  console.log(d)

  const [openDate, setOpenDate] = useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  console.log(date);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    INFANTS: 1,
  });
  console.log("Aa", options.adult)
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  return (<>  
    <div className="Box60">

      <div className="ButtonBg01">

        <nav className="Nav03">
          <div className="Buto">
            <div className="Butto04">
            <Link to="/ushotel"> <button className="button-57" role="button"><span className="text"><FontAwesomeIcon icon={faHotel} className="Hotellogo" /></span><span className="Handelr">Hotel</span></button></Link>
            </div>
            <div className="Butto05">
              <Link to="/usflight">    <button className="button-57" role="button"><span className="text"><FontAwesomeIcon icon={faPlane} className="Planelogo" /></span><span className="Handelr">Flight</span></button> </Link>
            </div>
          </div>
        </nav>

      </div>
      <div className="Box59">
        <div className="CityInput">
          <div className="Whercity">
            <input type="text" onChange={(e) => setfcity(e.target.value)} />
          </div>
          <div>
            <h1 className="TO-text">To</h1>
          </div>
          <div className="Whercity">
            <input type="text" onChange={(e) => settocity(e.target.value)} />
          </div>
        </div>
        <div className="YUOIPLOIKO">
          <div className="Lovwer_flexingBox01">
            <div className="OIPUOP_90">
              <label class="rad-label">
                <input type="radio" value="Economy" className="rad-input" name="rad" onClick={(e) => setfclass(e.target.value)} />
                <div class="rad-design"></div>
                <div class="rad-text">Economy</div>
              </label>
              <label class="rad-label">
                <input type="radio" value="Premium" className="rad-input" name="rad" onClick={(e) => setfclass(e.target.value)} />
                <div class="rad-design"></div>
                <div class="rad-text">Premium</div>
              </label>
              <label class="rad-label">
                <input type="radio" value="Business" className="rad-input" name="rad" onClick={(e) => setfclass(e.target.value)} />
                <div class="rad-design"></div>
                <div class="rad-text">Business</div>
              </label>
            </div>

            <div className="ClanderHint">
              <div className="Mojuo">
                <span>{setOpenDate}</span>
                <div className="CalanderIOcns"> <span className="Calnderpostion"><FontAwesomeIcon className="Calandericon" icon={faCalendar} /></span></div>
                <h2 onMouseEnter={() => setOpenDate(!openDate)} className="Handelserchtext">{`${format(date[0].startDate, "dd/MM /yyyy")}`}</h2>
                {/* <input type="date" id="birthday" name="birthday" onChange={(e) => setdate(e.target.value)} min={d} ></input> */}
                {openDate && (<DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="date01"
                  minDate={new Date()}
                  format="DD-MM-YYYY"
                />
                )}
              </div>
            </div>
            <div className="Adut-childBox">
              <div className="Mojuo01">
                <span className="Text09">Select Person,Rooms</span>
                <div className="POstionperson">
                  <span className="Calnderpostion">
                    <FontAwesomeIcon className="Calandericon" icon={faPerson} />
                  </span>
                  <h3 onMouseEnter={() => setOpenOptions(!openOptions)} className="Handelserchtext">{`${options.adult} ADULTS - ${options.children} CHILDREN - ${options.INFANTS} INFANTS`} </h3>
                </div>
                {openOptions && <div className="options08">
                  <div className="optionsItem">

                    <div className="SpaceBut"><span className="Handelserchtext">ADULTS (12y +)</span></div>
                    <div className="optioncounter">
                      <button disabled={options.adult <= 1} className="OptioncounterButton" onClick={() => handleOption("adult", "d")}>-</button>
                      <span className="OptioncounterNumber">{options.adult}</span>
                      <button className="OptioncounterButton" onClick={() => handleOption("adult", "i")}>+</button>
                    </div>
                  </div>

                  <div className="optionsItem">
                    <div className="SpaceBut"><span className="Handelserchtext">CHILDREN (2y-12y)</span></div>

                    <div className="optioncounter">
                      <button disabled={options.children <= 0} className="OptioncounterButton" onClick={() => handleOption("children", "d")}>-</button>
                      <span className="OptioncounterNumber">{options.children}</span>
                      <button className="OptioncounterButton" onClick={() => handleOption("children", "i")}>+</button>
                    </div>
                  </div>
                  <div className="optionsItem">
                    <div className="SpaceBut"> <span className="Handelserchtext">INFANTS (below 2y)</span></div>
                    <div className="optioncounter">
                      <button disabled={options.INFANTS <= 0} className="OptioncounterButton" onClick={() => handleOption("INFANTS", "d")}>-</button>
                      <span className="OptioncounterNumber">{options.INFANTS}</span>
                      <button className="OptioncounterButton" onClick={() => handleOption("INFANTS", "i")}>+</button>
                    </div>
                  </div>


                </div>}
              </div>
            </div>
            <div className="Buttpostionsfor">
              <Link to={`/flights/${fcity}/${tocity}/${fclass}`}><button className="CLockButton">Search</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="Adpostion">
      <AdSlider />
    </div>

    {/*  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++== */}

    <div className="Contaioner09">
      <div className="box11">
        <div className="o1">
          <img className="Picturepost" src="https://promos.makemytrip.com/store/GoaDT.JPG" />
          <div className="po1">
            <h4>Goa</h4>
            <p>Hotels, Budget Hotels, Resorts, Best Hotels, North Goa, Villas</p>
          </div>
        </div>
        <div className="o1">
          <img className="Picturepost" src="https://promos.makemytrip.com/store/DelhiDT.JPG" />
          <div className="po1">
            <h4>Delhi</h4>
            <p>Hotels, Budget Hotels, Resorts, Best Hotels, Near IGI Airport</p>
          </div>
        </div>
        <div className="o1">
          <img className="Picturepost" src="https://promos.makemytrip.com/store/BangaloreDT.JPG" />
          <div className="po1">
            <h4>Bangalore</h4>
            <p>Hotels, Budget Hotels, Resorts,Near Airport, Guhantara Resort</p>
          </div>
        </div>
        <div className="o1">
          <img className="Picturepost" src="https://promos.makemytrip.com/images/50x50-Ooty-23052019.png" />
          <div className="po1">
            <h4>Ooty</h4>
            <p>Hotels, Resorts, Cottges, Budget Hotels, Homestay</p>
          </div>
        </div>
        <div className="o1">
          <img className="Picturepost" src="https://promos.makemytrip.com/store/MumbaiDT.JPG" />
          <div className="po1">
            <h4>Mumbai</h4>
            <p>Hotels, Budget Hotels, Resorts, Couple Hotels, Near Mumbai Airport</p>
          </div>
        </div>
        <div className="o1">
          <img className="Picturepost" src="https://promos.makemytrip.com/images/50x50-Shimla-23052019.png" />
          <div className="po1">
            <h4>Shimla</h4>
            <p>Hotels, Budget Hotels, Best Hotels, Resorts, Near Mall Road</p>
          </div>
        </div>
        <div className="o1">
          <img className="Picturepost" src="https://promos.makemytrip.com/store/JaipurDT.JPG" />
          <div className="po1">
            <h4>Jaipur</h4>
            <p>Hotels, Resorts, Budget Hotels, Best Hotels, Near Railway Station</p>
          </div>
        </div>
        <div className="o1">
          <img className="Picturepost" src="https://promos.makemytrip.com/images/50x50-Manali-23052019.png" />
          <div className="po1">
            <h4>Manali</h4>
            <p>Hotels, Resorts, Budget Hotels, Best Hotels, Near Mall Road</p>
          </div>
        </div>
        <div className="o1">
          <img className="Picturepost" src="https://promos.makemytrip.com/images/50x50-Other-23052019.png" />
          <div className="po1">
            <h4>Others</h4>
            <p>Hotels in Mahabaleshwar Book from Best Mahabaleshwar Hotels</p>
          </div>
        </div>
      </div>
    </div>

    <div className="Peragraph">
      <div className="Box8">
        <div className="Containor02">
          <span className="Questons">
            PRODUCT OFFERING
          </span>
          <p>Flights, International Flights, Charter Flights, Hotels, International Hotels,
            Homestays and Villas, Activities, Holidays In India, International Holidays,
            Book Hotels From UAE, myBiz for Corporate Travel, Book Online Cabs, Book Bus Tickets,
            Book Train Tickets, Cheap Tickets to India, Book Flights From US, Book Flights From UAE,
            Trip Planner, Gift Cards, Trip Money,
            Trip Ideas, Travel Blog, PNR Status, MakeMyTrip Advertising Solutions, One Way Cab</p>
        </div>
        <div className="Containor02">
          <span className="Questons">
            MAKEMYTRIP
          </span>
          <p>About Us, Investor Relations, Careers, MMT Foundation, CSR Policy,
            myPartner - Travel Agent Portal, Foreign Exchange, List your hotel,
            Partners- Redbus, Partners- Goibibo, Advertise with Us</p>
        </div>
        <div className="Containor02">
          <span className="Questons">
            ABOUT THE SITE
          </span>
          <p>Customer Support, Payment Security, Privacy Policy, User
            Agreement, Terms of Service, More Offices, Make A Payment, Work From Home</p>
        </div>
        <div className="Containor02">
          <span className="Questons">
            TOP CITIES
          </span>
          <p>Hotels in Thailand, Hotels In Goa, Hotels In Mumbai,
            Hotels In Mahabaleshwar, Hotels In Matheran, Hotels In Lonavala,
            Hotels In Delhi, Hotels In Shimla, Hotels In Lansdowne, Hotels In Digha,
            Hotels In Puri, Hotels In Nainital, Hotels In Shirdi, Hotels In Bangalore,
            Hotels In Mussoorie, Hotels In Manali, Hotels Near Me, Cheap Hotels, Hotels In Jaipur,
            Hotels In Udaipur, Hotels In Pune, Hotels In Pondicherry, Hotels In Ooty, Hotels In Kodaikanal,
            Hotels In Darjeeling, Hotels In Chandigarh, Hotels In Mount abu, Hotels In Ahmedabad,
            Hotels In Kolkata, Hotels In Ranthambore, Jaisalmer Hotels, Mysore Hotels</p>
        </div>
        <div className="Containor02">
          <span className="Questons">
            TOP PROPERTIES
          </span>
          <p>W Goa, The Leela Goa, The Tamara Coorg, Evolve Back Coorg, Grand Hyatt Goa,
            Taj Lake Palace Udaipur, The Leela Palace Udaipur, Grand Hyatt Mumbai,
            Jw Marriott Chandigarh, Alila Diwa Goa, Evolve Back Hampi, Evolve Back Kabini,
            Hyatt Regency Mumbai, Le Meridien Delhi, Itc Grand Chola Chennai, Rambagh Palace Jaipur,
            Le Meridien Goa, Taj Lands End Mumbai, Jai Mahal Palace Jaipur, Vythiri Resort Wayanad,
            Red Earth Kabini, Taj Mahal Tower Mumbai, The Serai Bandipur, Wildflower Hall Shimla,
            Azaya Beach Resort Goa, Four Seasons Hotel Mumbai, Taj Fort Aguada Resort & Spa Goa,
            Itc Maratha Mumbai, Park Hyatt Chennai, Sea Shell Havelock, Spice Tree Munnar</p>
        </div>
        <div className="Containor02">
          <span className="Questons">
            TRENDING RESORT CITIES
          </span>
          <p>Mahabaleshwar Resorts,
            Resorts In Agra, Resorts In Bhimtal,
            Resorts In Bordi, GraResorts In Br Hills,
            Resorts In Chikmagalur, Resorts In Cochin,
            Resorts In Darjeeling, Resorts In Dehradun,
            Resorts In Dharamshala, Resorts In Gorai, Resorts In Jaipur, Resorts In Jaisalmer,
            Resorts In Jodhpur, Resorts In Kanakapura, Resorts In Kollam, Resorts In Kotagiri,
            Resorts In Lucknow, Resorts In Madikeri, Resorts In Mahabaleshwar, Resorts In Masinagudi,
            Resorts In Matheran, Resorts In Mount Abu, Resorts In Mumbai, Resorts In Munnar, Resorts In Mussoorie,
            Resorts In Mysore, Resorts In Nainital, Resorts In Neemrana, Resorts In Kodaikanal</p>
        </div>
        <div className="Containor02">
          <span className="Questons">
            TOP HOMESTAY CITIES
          </span>
          <p>Homestays In Chikmagalur, Homestays In Coorg, Homestays In Sakleshpur, Homestays In Goa,
            Homestays In Ooty, Homestays In Darjeeling, Homestays In Manali, Homestays In Munnar,
            Homestays In Wayanad, Homestays In Bengaluru, Homestays In Kasauli, Homestays In Kodaikanal,
            Homestays In Shimla, Homestays In Mysore, Homestays In Dandeli, Homestays In Dehradun,
            Homestays In Gokarna, Homestays In Mussoorie, Homestays In Nainital, Homestays In Rishikesh,
            Homestays In Vagamon, Homestays In Alibaug, Homestays In Kalimpong, Homestays In Mangalore,
            Homestays In Pondicherry, Homestays In Yercaud, Homestays In Coonoor, Homestays In Kabini,
            Homestays In Kasol, Homestays In Kurseong, Homestays In Mukteshwar</p>
        </div>
        <div className="Containor02">
          <span className="Questons">
            CORPORATE TRAVEL
          </span>
          <p>Corporate Travel, Corporate Hotel Booking, Corporate Flight Booking, Business Travel for SME,
            GST Invoice for International flights, Business Travel Solutions, GST Invoice for Bus, Corporate Bus booking,
            myBiz - Best Business Travel Platform, GST Invoice for Flights, GST Invoice for Corporate Travel, GST Invoice for Hotels, myBiz for Small Business, Free cancellation on International Flights</p>
        </div>

      </div>


    </div>
    <div className="Questions">
      <div className="Firstquestions">


        <div className="post">
          <div className="Queston01">
            <h2>Q - How do I make a flight booking on MakeMyTrip?</h2>
            <div className="Anwser">
              <p>
                A: You can book a flight on MakeMyTrip in five easy steps: Head over to the MakeMyTrip
                flight booking page, Enter your departure and arrival destinations, Select your air travel dates,
                Choose from our wide range of flights based on your airfare preferences, Click on ‘Book Now’ and your air
                flight booking is done. Alternatively, you can also use the MakeMyTrip app for your flight ticket booking.
                Download the MakeMyTrip app, Put in the details i.e. date of journey, departure and arrival destinations,
                travel class of your choice, Select on your best comfortable option and click on 'Book Now'.
              </p>
            </div>
          </div>

          <div className="Queston01">
            <h2>Q - How do I make a flight booking on MakeMyTrip?</h2>
            <div className="Anwser">
              <p>
                A: You can book a flight on MakeMyTrip in five easy steps: Head over to the MakeMyTrip
                flight booking page, Enter your departure and arrival destinations, Select your air travel dates,
                Choose from our wide range of flights based on your airfare preferences, Click on ‘Book Now’ and your air
                flight booking is done. Alternatively, you can also use the MakeMyTrip app for your flight ticket booking.
                Download the MakeMyTrip app, Put in the details i.e. date of journey, departure and arrival destinations,
                travel class of your choice, Select on your best comfortable option and click on 'Book Now'.
              </p>
            </div>
          </div>
        </div>

        <div className="hrruler">
          <hr />
        </div>
        <div className="post2">
          <div className="Queston01">
            <h2>Q - How do I make a flight booking on MakeMyTrip?</h2>
            <div className="Anwser">
              <p>
                A: You can book a flight on MakeMyTrip in five easy steps: Head over to the MakeMyTrip
                flight booking page, Enter your departure and arrival destinations, Select your air travel dates,
                Choose from our wide range of flights based on your airfare preferences, Click on ‘Book Now’ and your air
                flight booking is done. Alternatively, you can also use the MakeMyTrip app for your flight ticket booking.
                Download the MakeMyTrip app, Put in the details i.e. date of journey, departure and arrival destinations,
                travel class of your choice, Select on your best comfortable option and click on 'Book Now'.
              </p>
            </div>
          </div>
          <div className="Queston01">
            <h2>Q - How do I make a flight booking on E-Trip?</h2>
            <div className="Anwser">
              <p>
                A: You can book a flight on MakeMyTrip in five easy steps: Head over to the MakeMyTrip
                flight booking page, Enter your departure and arrival destinations, Select your air travel dates,
                Choose from our wide range of flights based on your airfare preferences, Click on ‘Book Now’ and your air
                flight booking is done. Alternatively, you can also use the MakeMyTrip app for your flight ticket booking.
                Download the MakeMyTrip app, Put in the details i.e. date of journey, departure and arrival destinations,
                travel class of your choice, Select on your best comfortable option and click on 'Book Now'.
              </p>
            </div>
          </div>
        </div>


      </div>

    </div>
  </>);
}
export default Usflight;