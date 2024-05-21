import React, { useState } from "react";
import myimg from "../Image/PHOTO-2024-05-20-10-08-16.jpg"
import { IoIosHome } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { MdOutlineContactPage } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FaLockOpen } from "react-icons/fa";
import { IoLockClosedSharp } from "react-icons/io5";
import { WiDaySunny } from "react-icons/wi";
import { GiNightSleep } from "react-icons/gi";

function HOme() {
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
                <div className="home">
                    <div className="img">
                        <img src={myimg} alt="" />
                    </div>
                    <div className="detail">
                        <h1>I,m Farman Khan.<br /> Web  Developer</h1>
                        <p>To work with an organization where can learn new skills and increase my abilities for the organizational goals as well as myself.</p>
                        <button onClick={Click2}>More About Me</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export { HOme }