import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Home from "./components/Banner";
import Nav from "./components/Nav";
import Services from "./components/Services";
import About from "./components/About";
import Prices from "./components/Prices";
import Contact from "./components/Contact";


export default function App() {
  return (
  <Router>

<Grid container direction='column'>
        <div  >
        <Nav/>
        </div>

        <div >
        <Routes>
        <Route exact path='/home'   element={<Home/>} />
        <Route path='/about'  element={<About/>} />
        <Route path='/contact'  element={<Contact/>} />
        <Route path='/prices'  element={<Prices/>} />
        {/* <Route path='signup'  element={<Signup/>} />
        <Route path='logout'  element={<Logout/>} /> */}
        <Route path='/services'  element={<Services/>} />
        <Route  component={Error} />
      </Routes>
     
        </div>
        </Grid>
 
  
 
    </Router>
  )
}
