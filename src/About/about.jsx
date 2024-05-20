import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { MdOutlineContactPage } from "react-icons/md";
import { FaLockOpen } from "react-icons/fa";
import { RiGraduationCapFill } from "react-icons/ri";
import { WiDaySunny } from "react-icons/wi";
import { IoLockClosedSharp } from "react-icons/io5";
import { GiNightSleep } from "react-icons/gi";

function About() {

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
    const cv = useNavigate()
    const resume = () => {
        cv("file:///C:/Users/hp/Downloads/final%20my%20resume....pdf")
    }
    const skill = [
        {
            id: 1,
            name: "HTML",
            progress: 80
        },
        {
            id: 2,
            name: "CSS",
            progress: 70
        },
        {
            id: 3,
            name: "JAVASCRIPT",
            progress: 40
        },
        {
            id: 4,
            name: "REACTJS",
            progress: 70
        },
        {
            id: 5,
            name: "NODEJS",
            progress: 30
        },
        {
            id: 6,
            name: "MONGODB",
            progress: 50
        }
    ]
    const getcolor = (progress) => {
        if (progress >= 80) {
            return 'green'
        }
        else if (progress >= 50) {
            return 'yellow'
        }
        else {
            return 'red'
        }
    }

    const edu = [
        {
            id: 1,
            year: "2023-2024",
            name: "Bachelor of Computer Applications,",
            uni: "Shekhawati University",
            detail: "Pandit Deendayal Upadhyaya Shekhawati University, Sikar"
        },
        {
            id: 2,
            year: "2022",
            name: "12th - ",
            uni: "New Rajasthan SR SEC School, Fatehpur",
            detail: "Board - RBSE , Percentage - 68.80%"
        },
        {
            id: 3,
            year: "2020",
            name: "10th - ",
            uni: "Saint Thoms Academy School, Fatehpur",
            detail: "Board - RBSE , Percentage - 69.50%"
        }
    ]

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
                <div className="about">
                    <h1 style={{ textAlign: "center", color: "black", fontWeight: "700" }}>About <span style={{ color: "red" }}>Me</span></h1>
                    <div className="info">
                        <div className="personal">
                            <h3>Personal Infos</h3>
                            <ul>
                                <li>
                                    <span>First Name : </span>
                                    <span>Farman</span>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <span>Last Name : </span>
                                    <span>khan</span>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <span>Age : </span>
                                    <span>21</span>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <span>Nationalty : </span>
                                    <span>Indian</span>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <span>Address : </span>
                                    <span>Jaipur,Raj</span>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <span>Phone : </span>
                                    <span>+91 9982236403</span>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <span>Email : </span>
                                    <span>fkhan12345609@gmail.com</span>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <span>Language : </span>
                                    <span>Hindi,(Basic)English</span>
                                </li>
                            </ul>
                            <button onClick={resume}>Download CV</button>
                        </div>
                        <div className="tion">
                            <div className="box">
                                <h1>2+</h1>
                                <p>Completed Projects</p>
                            </div>
                            <div className="box">
                                <h1>0+</h1>
                                <p>Happy Customer</p>
                            </div>
                            <div className="box">
                                <h1>0+</h1>
                                <p>Award On</p>
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <h1 style={{ textAlign: "center", color: "black", fontWeight: "700", margin: "2rem 0" }}> <span style={{ color: "red" }}>My</span> Skill</h1>
                        <div className="pro-circle">
                            {
                                skill.map((datas) => {
                                    return (
                                        <>
                                            <div key={datas.id} style={{ backgroundColor: getcolor(datas.progress) }} className="circle">
                                                <h4>{datas.progress}%</h4>
                                                <p>{datas.name}</p>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="experience">
                        <h1 style={{ textAlign: "center", color: "red", fontWeight: "700", margin: "2rem 0" }}>Experience & Education</h1>
                        <div className="experienes">
                            <div className="expe">
                                <h4>Fresher</h4>
                            </div>
                            <div className="edu">
                                {
                                    edu.map((data) => {
                                        return (
                                            <>
                                                <div className="edus">
                                                    <div className="first">
                                                        <span><RiGraduationCapFill /></span>
                                                        <div className="hline"></div>
                                                    </div>
                                                    <div key={data.id} className="second">
                                                        <p>{data.year}</p>
                                                        <h3>{data.name}<span>{data.uni}</span></h3>
                                                        <h4>{data.detail}</h4>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export { About }