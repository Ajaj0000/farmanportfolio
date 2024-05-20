import React, { useState } from "react";
import { IoMailSharp } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { MdOutlineContactPage } from "react-icons/md";
import { IoLockClosedSharp } from "react-icons/io5";
import { WiDaySunny } from "react-icons/wi";
import { GiNightSleep } from "react-icons/gi";
import { FaLockOpen } from "react-icons/fa";

function Contact() {
    const [day, setday] = useState(false)
    const dayy = () => {
        setday(true)
    }
    const nightt = () => {
        setday(false)
    }
    const [toggle, settoggle] = useState(false)
    const first = () => {
        settoggle(true)
    }
    const second = () => {
        settoggle(false)
    }
    const home = useNavigate()
    const about = useNavigate()
    const contact = useNavigate()
    const Click1 = () => {
        home("/")
    }
    const Click2 = () => {
        about("/about")
    }
    const Click4 = () => {
        contact("/contact")
    }
    return (
        <>
            <button onClick={dayy} className={`${(day === true) ? "don1" : "doff1"}`}><GiNightSleep /></button>
            <button onClick={nightt} className={`${(day === false) ? "don2" : "doff2"}`}><WiDaySunny /></button>
            <div className={`${(day === true) ? "day" : "night"}`}>
                <button onClick={first} className={`${(toggle === true) ? "on1" : "off1"}`}><FaLockOpen /></button>
                <button onClick={second} className={`${(toggle === false) ? "on2" : "off2"}`}><IoLockClosedSharp /></button>
                <div className={`${(toggle === true) ? "open" : "close"}`}>
                    <div className="button">
                        <div className="bu">
                            <button onClick={Click1}><IoIosHome /></button>
                            <span>Home</span>
                        </div>
                        <div className="bu">
                            <button onClick={Click2}><IoPerson /></button>
                            <span>About</span>
                        </div>
                        <div className="bu">
                            <button onClick={Click4}><MdOutlineContactPage /></button>
                            <span>Contact</span>
                        </div>
                    </div>
                </div>
                <div id="contacts">
                    <h1>Get InTouch</h1>
                    <div className="contact">
                        <div className="firstc">
                            <h1> Don't be Shy !</h1>
                            <p>Feel free to get in touch with me. I am always open to discussing new projects, Creative ideas or opportunities to be a part of your visions.</p>
                            <div className="mail">
                                <li><IoMailSharp /></li>
                                <div className="id">
                                    <h4>Mail Me</h4>
                                    <p>fkhan12345609@gmail.com</p>
                                </div>
                            </div>
                            <div className="mail">
                                <li><IoCallOutline /></li>
                                <div className="id">
                                    <h4>Call Me</h4>
                                    <p>+91 9982236403</p>
                                </div>
                            </div>
                            <div className="icon">
                                <li><FaFacebookF /></li>
                                <li><FaTwitter /></li>
                                <li><FaYoutube /></li>
                                <li><FaLinkedin /></li>
                            </div>
                        </div>
                        <div className="second">
                            <input type="text" placeholder="Your Name" />
                            <input type="text" placeholder="Your Email" />
                            <input type="text" placeholder="Your Subject" />
                            <br />
                            <input className="bin" type="text" placeholder="Your Message" />
                            <br />
                            <button>Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export { Contact }