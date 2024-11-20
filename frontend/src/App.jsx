import React from "react";
import "./App.css"
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./components/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Donate from "./components/Donate";
import NotFound from "./components/NotFound";
import Contact from "./components/Contact";
import About from "./components/About";
const App=()=>{
  return(
    <div>
      <Router>
        <Navbar/>
        <Routes>
         < Route path='/' element={<Home/>}/>
         < Route path='/about' element={<About/>}/>
         < Route path='/contact' element={<Contact/>}/>
         < Route path='/donate' element={<Donate/>}/>
         < Route path='/*' element={<NotFound/>}/>
        </Routes>
        <Footer />
        <ToastContainer position="top-center"/>
      </Router>
    </div>
  )
}
export default App;