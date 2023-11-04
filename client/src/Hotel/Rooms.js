import React from "react";
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import "./Rooms.css"
import GoogleMapReact from 'google-map-react';
import Iframe from 'react-iframe'
import { AiOutlineLeft } from "@react-icons/all-files/ai/AiOutlineLeft"
import { AiOutlineRight } from "@react-icons/all-files/ai/AiOutlineRight"
import { BsStarFill } from "@react-icons/all-files/bs/BsStarFill"
// import{MdOutlineBusinessCenter} from "@react-icons/all-files/md/MdOutlineBusinessCenter"
const Rooms = () => {
  //  const users = JSON.parse(localStorage.getItem("currentuser")).isAdmin;
  //console.log(users)
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState();
  const [Hfeedback, setHfeedback] = useState();
  const params = useParams()
  useEffect(() => {
    console.log(params.roomid)
  }, [params])

  const nroom = params.nroom;
  const nadult = params.nadult;
  const nchild = params.nchild;
  const tdate = params.tdate;
  const fdate = params.fdate;
  console.log(nroom, nadult, nchild);

  const [rooms, setrooms] = useState();

  useEffect(async () => {
    try {
      setloading(true);
      let result = await fetch(`/photels/${params.roomid}`, {
        method: "POST"
      });
      result = await result.json();
      setrooms(result);
      console.log(result);
      setloading(false);

    } catch (eroor) {
      seterror(true);
      seterror(false);
    }
  }, []);





  useEffect(async () => {
    try {
      setloading(true);
      let result = await fetch(`/Hfeedback/${params.roomid}`, {
        method: "GET"
      });
      result = await result.json();
      setHfeedback(result);
      console.log(result);
      setloading(false);

    } catch (eroor) {
      seterror(true);
      seterror(false);
    }

  }, [])

  const afd = () => {

  }


  const Thumbnail = ({ arr, image, index }) => {
    return (<div className="tumbnail">
      {
        arr.map((imgsrc, i) => (
          <img
            key={i}
            height="50"
            src={imgsrc}
            onClick={() => image(i)}
            className={index === i ? 'active' : ''}
          />
        ))
      }
    </div>)
  }

  function myFunction() {
    var navbar = document.getElementById("nav");
    var sticky = navbar.offsetTop;
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }

  const Slideshow = ({ imgs }) => {
    const [index, setIndex] = useState(0)

    useEffect(() => {
      setIndex(0)
    }, [])

    const next = () => {
      if (index === imgs.length - 1) {
        setIndex(0)
      } else {
        setIndex(index + 1)
      }
    }
    const prev = () => {
      if (index === 0) {
        setIndex(imgs.length - 1)
      } else {
        setIndex(index - 1)
      }
    }

    // feedback

    return (
      <div className="slideshow">
        <div className="imagecontainer">
          <img className="mainImg" src={imgs[index]} />

          <div className="actions">
            <button onClick={prev}><AiOutlineLeft className="Arrow" /></button>
            <button onClick={next}><AiOutlineRight className="Arrow" /></button>
          </div>
        </div>
        <div className="imagecontainer02">
          <Thumbnail arr={imgs} image={setIndex} index={index} />
        </div>
      </div>
    )
  }


  return (<>

    {loading ? (<h1>loading</h1>) : error ? (<h2>eroor</h2>) : (<>
      <div className="Imagesliders">
        <Slideshow imgs={[
          rooms.Hurl1,
          rooms.Hurl2,
          rooms.Hurl3,
          rooms.Hurl4,
          rooms.Hurl5,

        ]} />


        <div className="box99">
          <div className="box98">
            <h1 className="Postio text01">{rooms.Hname}</h1>
            <div className="Address">
              <span className="postio1 text"><span className="Extraword">City</span>{rooms.City}</span>
              <div className="clre"><span className="postio1 text"><span className="Extraword">Address</span>{rooms.Hadress}</span></div>
              <div className="Rate">
                <div className="Pernet">
                  <div className="Backg">
                    <div className="po09"><BsStarFill className="StarIcons" /></div><div className="po08">{rooms.Hrat}</div></div> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container03">
        <div className="fath">
           <div className="comp01" >
            <div className="Imagespost" >
            <div className="boxer">
            <img  src={rooms.Hurl2} className="Poster"></img>
             <div className="BoredrImages"> <img src={rooms.Hurl2} className ="imageurl"></img> </div></div>
            </div>
           </div>
           <div className="comp02"></div>
           <div className="comp03"></div>
           <div className="comp04"></div>
        </div>
      </div> */}

      {/* <div className="NavB">
            <div className="NavA">
              <div className="bt">
                <h3 className="Navtext">OVERVIEW</h3>
              </div>
              <div className="bt">
              <h3 className="Navtext">ROOMS</h3>
              </div>
              <div className="bt">
              <h3 className="Navtext">LOCATION</h3>
              </div>
              <div className="bt">
              <h3 className="Navtext">AMENITIES</h3>
              </div>
              <div className="bt">
              <h3 className="Navtext">PROPERTY RULES</h3>
              </div>
              <div className="bt">
              <h3 className="Navtext">USER REVIEWS</h3>
              </div>
            </div>
       </div> */}
      <div className="Grand">
        <nav id="navbar" class="section-nav" onScroll={myFunction}>
          <ol className="flter">
            <li className="Lipo"><a href="#introduction">OverView</a></li>
            <li className="Lipo"><a href="#Rooms">Rooms</a></li>
            <li className="Lipo"><a href="#authentication">Location</a></li>
            <li className="Lipo"><a href="#links">Reviews</a></li>
            {/* <li className="Lipo"><a href="#expanders"></a></li>
            <li className="Lipo"><a href="#filters">Filters</a></li> */}
          </ol>
        </nav>

        <section id="introduction">
          <div className="OverViewbox">
            <div className="box89">
              <h2 className="OverviewText">About {rooms.Hname}</h2>

              <p className="Try">
                This lavish property makes for a relaxing stay option with
                its stylish rooms, multiple dining venues, a
                full-service spa and easy connectivity to popular areas of the city.
              </p>


              <div className="Tryo">
                <ul className="Extrawork">
                  <li className="FOrbiden">Treat yourself to luxury treatments and
                    wellness therapies at the on-site spa, Saatviki.</li>
                  <li className="FOrbiden">Enjoy a refreshing swim in the azure swimming pool.</li>
                  <li className="FOrbiden">Savour the authentic taste of delicious Indian and international cuisines at the on-site restaurant,
                    Café Treat.</li>
                </ul>
              </div>


              <div className="Og">
                <ul className="uop">
                  <li className="ImgeOfListul">
                    <img src="https://promos.makemytrip.com/hoteldescription/Restaurantsdesktop.png"></img>
                    <span className="Textalise"> Food and Dining</span>
                  </li>
                  <li className="ImgeOfListul">
                    <img src="https://promos.makemytrip.com/hoteldescription/Locationdesktop.png"></img>
                    <span className="Textalise">Location & Surroundings</span>
                  </li>
                  <li className="ImgeOfListul">
                    <img src="https://promos.makemytrip.com/hoteldescription/Propertydesktop.png"></img>
                    <span className="Textalise">Property Highlights</span>
                  </li>
                  <li className="ImgeOfListul">
                    <img src="https://promos.makemytrip.com/hoteldescription/Accomodationdesktop.png"></img>
                    <span className="Textalise">Room Details & Amenities</span>
                  </li>
                  <li className="ImgeOfListul">
                    <img src="https://promos.makemytrip.com/hoteldescription/Activitiesdesktop.png"></img>
                    <span className="Textalise">Activities & Nearby Attractions</span>
                  </li>
                  <li className="ImgeOfListul">
                    <img src="https://promos.makemytrip.com/hoteldescription/Reachdesktop.png"></img>
                    <span className="Textalise">How to Reach the Property</span>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="Rooms">

          <div className="manage">
            <div className="box97">

              <div className="Holder">


                <div className="Firsttabelbox">
                  <div className="RoomUsesr">
                    <h4 className="Rc_inform">6 x Deluxe King Room</h4>
                  </div>


                  <div className="RoomsInages">
                    <div className="Imagesater">
                      <img src={rooms.SRoomurl} alt="" height="200px" />
                    </div>
                    <div className="RoomsInfoe">
                      <ul className="list_08">
                        <li className="li_01">
                          <span className="Imgesqure"><img src="https://promos.makemytrip.com/Hotels_product/Hotel_SR/Android/drawable-hdpi/size.png" alt="" /></span>
                          <div className="Bop">
                            <span className="textr">258 sq.ft</span>
                          </div>
                        </li>
                        <li className="li_01">
                          <span className="Imgesqure"><img src="https://promos.makemytrip.com/Hotels_product/Hotel_SR/Android/drawable-hdpi/view.png" alt="" /></span>
                          <div className="Bop">
                            <span className="textr">City View</span>
                          </div>
                        </li>
                        <li className="li_01">
                          <span className="Imgesqure"><img src="https://promos.makemytrip.com/Hotels_product/Hotel_SR/Android/drawable-hdpi/bed.png" alt="" /></span>
                          <div className="Bop">
                            <span className="textr">King Bed</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                </div>
                <div className="Opi">
                  <div className="ofeers">
                    <div className="Roomsonly">
                      <h4>Room Only</h4>
                    </div>
                    <div className="cOOper">
                      <ul>
                        <li>None-refundabel</li>
                        <li>Meal-include</li>
                      </ul>

                    </div>
                  </div>
                </div>
                <div className="RoomsPrice">
                  <div className="Priceline">
                    <span className="NightPerDay">
                      Per Room/Night
                    </span>
                    <span className="Underlineprice">
                      ₹{rooms.SRoomprice - 300 + 1400}
                    </span>
                    ₹{rooms.SRoomprice}
                  </div>
                  <div className="butt08">
                    <Link to={`/Sconf/${rooms._id}/${nroom}/${nadult}/${nchild}/${fdate}/${tdate}`}>
                      <button className="Op45butoon">book now</button>
                    </Link>
                  </div>
                </div>
              </div>



              <div className="Holder">
                <div className="Firsttabelbox">
                  <div className="RoomUsesr">
                    <h4 className="Rc_inform">6 x Deluxe King Room</h4>
                  </div>
                  <div className="RoomsInages">
                    <div className="Imagesater">
                      <img src={rooms.DRoomurl} alt="" height="200px" />
                    </div>
                    <div className="RoomsInfoe">
                      <ul className="list_08">
                        <li className="li_01">
                          <span className="Imgesqure"><img src="https://promos.makemytrip.com/Hotels_product/Hotel_SR/Android/drawable-hdpi/size.png" alt="" /></span>
                          <div className="Bop">
                            <span className="textr">258 sq.ft</span>
                          </div>
                        </li>
                        <li className="li_01">
                          <span className="Imgesqure"><img src="https://promos.makemytrip.com/Hotels_product/Hotel_SR/Android/drawable-hdpi/view.png" alt="" /></span>
                          <div className="Bop">
                            <span className="textr">City View</span>
                          </div>
                        </li>
                        <li className="li_01">
                          <span className="Imgesqure"><img src="https://promos.makemytrip.com/Hotels_product/Hotel_SR/Android/drawable-hdpi/bed.png" alt="" /></span>
                          <div className="Bop">
                            <span className="textr">King Bed</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="Opi">
                  <div className="ofeers">
                    <div className="Roomsonly">
                      <h4>Room Only</h4>
                    </div>
                    <div className="cOOper">
                      <ul>
                        <li>None-refundabel</li>
                        <li>Meal-include</li>
                      </ul>

                    </div>
                  </div>
                </div>
                <div className="RoomsPrice">
                  <div className="Priceline">
                    <span className="NightPerDay">
                      Per Room/Night
                    </span>
                    <span className="Underlineprice">
                      ₹{rooms.DRoomprice + 1100}
                    </span>
                    ₹{rooms.DRoomprice}
                  </div>
                  <div className="butt08">
                    <Link to={`/Dconf/${rooms._id}/${nroom}/${nadult}/${nchild}/${fdate}/${tdate}`}>
                      <button className="Op45butoon">book now</button>
                    </Link>
                  </div>
                </div>
              </div>


              <div className="Holder">
                <div className="Firsttabelbox">
                  <div className="RoomUsesr">
                    <h4 className="Rc_inform">6 x Deluxe King Room</h4>
                  </div>
                  <div className="RoomsInages">
                    <div className="Imagesater">

                      <img src={rooms.SuRoomurl} alt="" height="200px" />
                    </div>
                    <div className="RoomsInfoe">
                      <ul className="list_08">
                        <li className="li_01">
                          <span className="Imgesqure"><img src="https://promos.makemytrip.com/Hotels_product/Hotel_SR/Android/drawable-hdpi/size.png" alt="" /></span>
                          <div className="Bop">
                            <span className="textr">258 sq.ft</span>
                          </div>
                        </li>
                        <li className="li_01">
                          <span className="Imgesqure"><img src="https://promos.makemytrip.com/Hotels_product/Hotel_SR/Android/drawable-hdpi/view.png" alt="" /></span>
                          <div className="Bop">
                            <span className="textr">City View</span>
                          </div>

                        </li>
                        <li className="li_01">
                          <span className="Imgesqure"><img src="https://promos.makemytrip.com/Hotels_product/Hotel_SR/Android/drawable-hdpi/bed.png" alt="" /></span>

                          <div className="Bop">
                            <span className="textr">King Bed</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="Opi">
                  <div className="ofeers">
                    <div className="Roomsonly">
                      <h4>Room Only</h4>
                    </div>
                    <div className="cOOper">
                      <ul>

                        <li>None-refundabel</li>
                        <li>Meal-include</li>
                      </ul>

                    </div>
                  </div>
                </div>

                <div className="RoomsPrice">
                  <div className="Priceline">
                    <span className="NightPerDay">
                      Per Room/Night
                    </span>
                    <span className="Underlineprice">
                      ₹{rooms.SuRoomprice + 1100}
                    </span>

                    ₹{rooms.SuRoomprice}
                  </div>
                  <div className="butt08">
                    <Link to={`/Suconf/${rooms._id}/${nroom}/${nadult}/${nchild}/${fdate}/${tdate}`}>
                      <button className="Op45butoon">book now</button>

                    </Link>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </section>
        <section id="authentication">
          <div className="mapinglocation">
            <iframe className="Mapposture" src="https://www.google.com/maps/d/embed?mid=1ZpiWAKUAq5OTFI3D7KBW-8QkbxuxAz4&ehbc=2E312F" width="640" height="480"></iframe>
          </div>
        </section>

        <section id="links">
          <div className="Feedbacker">
              <h4>Featured Reviews</h4>
            {Hfeedback && (Hfeedback.map(Hfeedback => {
              return <div className="FeedbackerHolder">
                <div className="Haedrtextc">
                  <h3 className="Hederpricip">{Hfeedback.Hr}</h3>
                </div>
                <div className="feedbackratedname">
                  <span className="Ratedtext"> Rated </span><span className="Feddrelogo">{Hfeedback.Rat}</span>
                  <span className="Ratedtext"> by</span><p className="NameFeddr">{Hfeedback.Uname}</p>
                  <p className="NameFeddr09">{Hfeedback.Rdate}</p>
                </div>
                <p className="FeedbackPopLictu">{Hfeedback.Review}</p>



                {/* {users == true ? <><input type="text"/><button onClick={afd}>submit</button></> :   <><h1>.</h1></>}</div> */}</div>
            }))}
          </div>
        </section>
        <section id="expanders">


        </section>
        {/* <section id="filters">
          <h2>Filters</h2>
          <p>…</p>
        </section> */}
      </div>










    </>)


    }
  </>)
}
export default Rooms;