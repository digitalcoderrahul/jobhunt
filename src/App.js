import React from 'react';
import Header from './Mylayout/Header';
import Hero from './Mylayout/Hero';
import Cards from './Mylayout/Cards';
import Footer from './Mylayout/Footer';
import {Routes, Route } from "react-router-dom";
import Home from './Mylayout/Home'
import Mostcards from './Mylayout/Mostcard';
import Trend from './Mylayout/Trend';
import Signup from './Mylayout/Signup';
import Signin from './Mylayout/Signin';
import Contact from './Mylayout/Contact';
import Terms from './Mylayout/Terms';
import Privacy from './Mylayout/Privacy';
import About from './Mylayout/About';
import Multicards from './Mylayout/Multicards';
import Error from './Mylayout/Error';
import ServiceDetails from './Mylayout/ServiceDetails';


const App = () => {
  return (
    <>
    <Header/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Hero" element={<Hero />}  />
    <Route path="/Cards" element={<Cards/>}/>
    <Route path="/Mostcard" element={<Mostcards/>}/>
    <Route path="/Trend" element={<Trend/>}/>
    <Route path="/Signup" element={<Signup/>}/>
    <Route path="/Signin" element={<Signin/>}/>
    <Route path="/Contact" element={<Contact/>}/>
    <Route path="/Terms" element={<Terms />} />
    <Route path="/Privacy" element={<Privacy/>}/>
    <Route path="/About" element={<About />}/>
    <Route path="/Multicards" element={< Multicards/>}/>
    <Route path="/Error" element={<Error/>}/>
    <Route path="/service-details" element={<ServiceDetails/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App