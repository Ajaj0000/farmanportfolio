import React from "react";
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HOme } from "./Home/home";
import { About } from "./About/about";
import { Contact } from "./Contact/contact";

function Portfolio(){
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HOme/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export{Portfolio}