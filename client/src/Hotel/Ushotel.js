import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import moment, { min } from "moment";
import { DatePicker, Space } from 'antd';
import { Dayjs } from 'dayjs';
import "../components/Navbar.css"
import "react-datepicker/dist/react-datepicker.css"
import Datepicker from "react-datepicker";
import { DateRange } from "react-date-range";
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { format } from "date-fns";
import Operation from "antd/es/transfer/operation";
import '@fontsource/roboto/500.css';
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons"
    import { faPlane, faHotel, faPerson, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Footer } from "../components/Footer.js";
import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar"
//import "./Footer.css"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import AdSlider from "./AdSlider";







const { RangePicker } = DatePicker;
//hotel list


const Ushotels = () => {


    // const admin = 1;

    //  if(!JSON.parse(localStorage.getItem("currentuser")).isAdmin){
    //     admin=0;
    //   }

    const [hotels, sethotels] = useState([]);
    useEffect(() => {
        gethotels();
    }, []);
    const gethotels = async () => {
        let result = await fetch("/hotels");
        result = await result.json();
        sethotels(result);
    }
    console.log(hotels);
    //serch hotel
    const shotel = async (event) => {

        let key = event.target.value;
        if (key) {
            let result = await fetch(`/serch/${key}`);
            result = await result.json();
            if (result) {
                sethotels(result);

            } console.log(result);
        } else {
            gethotels();
        }
    }


    const today = new Date()
    const d = today.getFullYear() + "-" + today.getMonth() + "-" + today.getDate();
    console.log(d)

    const disdate = () => {
        min(d)

    }

    const [formdate, setformdate] = useState()
    const [todate, settormdate] = useState()
    //console.log("--",formdate)
    const fdate = (dates) => {
        setformdate(dates[0].format("MM-DD-YYYY"))
        settormdate(dates[1].format("MM-DD-YYYY"))

        console.log(dates[0].format("MM-DD-YYYY"))

    }
    // drop down
    const [dselect, setdselect] = useState();
    const [daselect, setdaselect] = useState();
    const [dcselect, setdcselect] = useState();

    console.log(formdate);
    console.log(todate);


    function getNumberOfDays(start, end) {
        const date1 = new Date(start);
        const date2 = new Date(end);

        // One day in milliseconds
        const oneDay = 1000 * 60 * 60 * 24;

        // Calculating the time difference between two dates
        const diffInTime = date2.getTime() - date1.getTime();

        // Calculating the no. of days between two dates
        const diffInDays = Math.round(diffInTime / oneDay);

        return diffInDays;
    }
    /************************************************************************************************************************** */
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const mo = date[0].endDate.getMonth() + 1;
    const dd = date[0].endDate.getDate();
    const yy = date[0].endDate.getFullYear();
    const tdate = mo + "-" + dd + "-" + yy;

    const tmo = date[0].startDate.getMonth() + 1;
    const tdd = date[0].startDate.getDate();
    const tyy = date[0].startDate.getFullYear();
    const fodate = tmo + "-" + tdd + "-" + tyy;

    console.log("ee", fodate)
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
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
    const [openfilter, setOpenFilter] = useState(false);




    const [value, setValue] = React.useState(10);

    const handleChange = (event, newValue) => {
        if (typeof newValue === 'number') {
            setValue(newValue);
        }
    };

    /************************************************************************************************************************** */

    console.log(getNumberOfDays(formdate, todate));
    return (
        <>

            <div className="Layout">
                <div className="ButtonBg">

                    <nav className="Nav02">
                        <div className="But">
                            <div className="Butto01">
                                <button className="button-57" role="button"><span className="text"><FontAwesomeIcon icon={faHotel} className="Hotellogo" /></span><span className="Handelr">Hotel</span></button>
                            </div>
                            <div className="Butto02">
                                <Link to="/usflight">    <button className="button-57" role="button"><span className="text"><FontAwesomeIcon icon={faPlane} className="Planelogo" /></span><span className="Handelr">Flight</span></button> </Link>
                            </div>
                        </div>
                    </nav>

                </div>


                <div className='Box1'>
                    <div className="Box2">
                        <div className="Box5">
                            <div className="bord">
                                <div className="InputBox">
                                    <span className="Text">City,Area</span>
                                    <div className="postionglass">
                                        <span className="glasspostion"><FontAwesomeIcon className="glassicon" icon={faMagnifyingGlass} /></span>
                                        <input className="texrbox-10" type="text" placeholder='Enter city' onChange={shotel} />
                                    </div>
                                    <span className="Tetx">Pik Your Place</span>
                                </div>

                                <div className="Box3">
                                    <div className="headerserchItme">

                                        <span className="Text">Selact Your Date</span>
                                        <div className="POsitonyui">
                                            <span>{setOpenDate}</span>
                                            <span className="Calnderpostion"><FontAwesomeIcon className="Calandericon" icon={faCalendar} /></span>
                                            <h2 onMouseEnter={() => setOpenDate(!openDate)} className="Handelserchtext">{`${format(date[0].startDate, "dd/MM /yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</h2>
                                            {openDate && (<DateRange
                                                editableDateInputs={true}
                                                onChange={(item) => setDate([item.selection])}
                                                moveRangeOnFirstSelection={false}
                                                ranges={date}
                                                className="date"
                                                minDate={new Date()}
                                                format="DD-MM-YYYY"
                                            />
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="Box4">
                                    <span className="Text">Select Person,Rooms</span>
                                    <div className="POstionperson">
                                        <span className="Calnderpostion">
                                            <FontAwesomeIcon className="Calandericon" icon={faPerson} />
                                        </span>
                                        <h3 onMouseEnter={() => setOpenOptions(!openOptions)} className="Handelserchtext">{`${options.adult} adult - ${options.children} childeren - ${options.room} room`} </h3>
                                    </div>
                                    {openOptions && <div className="options">
                                        <div className="optionsItem">

                                            <div className="SpaceBut"><span className="Handelserchtext">Adult</span></div>
                                            <div className="optioncounter">
                                                <button disabled={options.adult <= 1} className="OptioncounterButton" onClick={() => handleOption("adult", "d")}>-</button>
                                                <span className="OptioncounterNumber">{options.adult}</span>
                                                <button className="OptioncounterButton" onClick={() => handleOption("adult", "i")}>+</button>
                                            </div>
                                        </div>

                                        <div className="optionsItem">
                                            <div className="SpaceBut"><span className="Handelserchtext">Childern</span></div>
                                            <div className="optioncounter">
                                                <button disabled={options.children <= 0} className="OptioncounterButton" onClick={() => handleOption("children", "d")}>-</button>
                                                <span className="OptioncounterNumber">{options.children}</span>
                                                <button className="OptioncounterButton" onClick={() => handleOption("children", "i")}>+</button>
                                            </div>
                                        </div>
                                        <div className="optionsItem">
                                            <div className="SpaceBut"> <span className="Handelserchtext">Rooms</span></div>
                                            <div className="optioncounter">
                                                <button disabled={options.room <= 1} className="OptioncounterButton" onClick={() => handleOption("room", "d")}>-</button>
                                                <span className="OptioncounterNumber">{options.room}</span>
                                                <button className="OptioncounterButton" onClick={() => handleOption("room", "i")}>+</button>
                                            </div>
                                        </div>


                                    </div>}
                                </div>
                                <div className="Filter01">
                                    <div className="filteroptions">

                                        <span onMouseEnter={!openfilter}>Price Per Night</span>
                                        <Box sx={{ width: 180 }} className="boxingfilter">
                                            <Typography id="non-linear-slider" gutterBottom>
                                                price:{value}
                                            </Typography>
                                            <Slider
                                                value={value}
                                                min={1000}
                                                step={500}
                                                max={90000}

                                                onChange={handleChange}
                                                valueLabelDisplay="auto"
                                                aria-labelledby="non-linear-slider"
                                            />
                                        </Box>
                                        {/* {openfilter && <div className="Hero">
                                               sss
                                        </div>} */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
            <div className="Box6">
                <div className="Inside">
                    {hotels.map((item, index) =>
                        <ul key={item._id}>
                            <div className="card">
                                <Link to={`/rooms/${item._id}/${options.room}/${options.adult}/${options.children}/${fodate}/${tdate}`}>
                                    <a>
                                        <div className="Image">
                                            <li><img className="ImagePostions" src={item.Hurl1} /></li>
                                        </div>
                                        <div className="FontInfo">
                                            <div className="ratingdiv"> <li className="Heading">{item.Hname}</li>
                                                <div className="ratingBox"> <span className="Starpost"><AiFillStar className="Star" /></span><a className="Toki" > {item.Hrat}</a></div></div>
                                            <li> <span className="extrawords">City</span><span className="space">|</span><span>{item.City}</span></li>
                                            <li className="jp"><span className="extrawords">Loction</span><span className="space">|</span><div className="dis"><span>{item.Hadress}</span></div></li>

                                            <div className="Price"><h1>₹{item.SRoomprice}</h1></div>
                                        </div>



                                    </a>
                                </Link>
                            </div>
                        </ul>
                    )

                    }
                </div>
            </div>
            {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
                <div className="IOP">
                   <AdSlider id='AdPOpsit'/>
                </div>
            <div />


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
export default Ushotels;