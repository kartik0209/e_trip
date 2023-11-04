import React, { Component } from 'react'
import "./Footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fabrandfasquarefacebook } from "@fortawesome/free-regular-svg-icons"
import { } from "@fortawesome/free-solid-svg-icons";
import{AiFillFacebook} from "@react-icons/all-files/ai/AiFillFacebook"
import{AiFillTwitterSquare } from "@react-icons/all-files/ai/AiFillTwitterSquare"
import{AiFillLinkedin} from "@react-icons/all-files/ai/AiFillLinkedin"
import{FaGithubSquare} from "@react-icons/all-files/fa/FaGithubSquare"
import{AiOutlineWhatsApp} from "@react-icons/all-files/ai/AiOutlineWhatsApp"
import ReactWhatsapp from 'react-whatsapp';

import "@react-icons/all-files"


export class Footer extends Component {
    render() {
        return (
            <div>


                <footer className="footer-distributed">

                    <div className="footer-right">

                        <a href="#"><AiFillFacebook class="fa"/></a>
                        <a href="#"><AiFillTwitterSquare class="fa"/></a>
                        <a href="#"><AiFillLinkedin class="fa"/></a>
                        <a href="#"><FaGithubSquare class="fa"/></a>
                       <a><AiOutlineWhatsApp/><ReactWhatsapp number="91 9484426334" message="Helo!!!" className='fa' /></a>
                    </div>

                    <div className="footer-left">

                        <p className="footer-links">
                            <a class="link-1" href="#">Home</a>

                            <a href="#">Blog</a>

                            <a href="#">Pricing</a>

                            <a href="#">About</a>

                          

                            <a href="#">Contact</a>
                        </p>

                        <p>Company Name &copy; 2015</p>
                    </div>

                </footer>
            </div>
        )
    }
}

export default Footer